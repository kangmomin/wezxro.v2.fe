<script>
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";

    /**@type {string}*/
    export let className
    /**@type {string}*/
    export let styleName
    /**@type {Function}*/
    export let toggleModal
    /** @type {Category[]} */
    export let category

    // 업데이트 용으로 사용시엔 true로 변경해야함
    const isUpdate = false

    /**@type {Provider[]}*/
    let providers = []

    /** @type {String[]} */
    let providerCategory = []

    /**
     * @type {ApiService}
     * 추가될 서비스의 정보
     */
    let apiService

    /** @type {ApiService[]} */
    let services = []

    onMount(() => {
        api.get(`/admin/p/list`).then(p => providers = p)
    })

    let type = "",
        originalRate = 0,
        apiServiceId = 0,
        providerId = 0,
        searchServiceId = 0,
        searchCategory = "",
        description = ""

    /**
     * 서비스 소개 부분을 위한 변수
     */
    let intro = ""

    /**
     * 서비스 저장을 위한 객체
     */
    let saveServiceData = {
        service: 0,
        rate: 0,
        description: "",
        max: 0,
        cancel: false,
        categoryId: 0,
        name: "",
        dripfeed: false,
        min: 0,
        originalRate: 0,
        providerId: 0,
        refill: false,
        status: 0,
        type: "",
    }

    const categoriesByProvider = () => {
        api.get(`/admin/p/category/${providerId}`).then((c) => {
            providerCategory = c
        })
    }

    const searchServiceById = () => {
        if (providerId === 0) alert("도매처를 먼저 선택하여주십시오.")

        api.get(`/admin/p/service?serviceId=${searchServiceId}&providerId=${providerId}`).then(s => {
            if (s === null) return
            const categoryId = saveServiceData.categoryId
            saveServiceData = s
            saveServiceData.status = 1
            saveServiceData.categoryId = categoryId
            saveServiceData.originalRate = saveServiceData.rate
        })
    }

    const servicesByCategory = () => {
        if (providerId === 0) alert("도매처를 먼저 선택하여주십시오.")

        api.get(`/admin/p/services/${providerId}?category=${searchCategory}`).then(
            /**
             * @param {ApiService[]} s
             */ s => {
            if (s === null) return
            services = s;
        })
    }

    const updateService = () => {
        searchServiceId = apiServiceId
        searchServiceById()
    }

    const saveService = () => {
        console.log(description)

        api.post("/admin/s/add", {
            "providerId": providerId,
            "categoryId": saveServiceData.categoryId,
            "apiServiceId": saveServiceData.service,
            "name": saveServiceData.name,
            "type": saveServiceData.type.toUpperCase(),
            "rate": saveServiceData.rate,
            "status": saveServiceData.status,
            "min": saveServiceData.min,
            "max": saveServiceData.max,
            "description": description,
            "originalRate": saveServiceData.originalRate
        }).then(res => {
            if (res === null) return
            alert("서비스를 저장하였습니다.")
            toggleModal()
        })
    }
</script>

<div class="crud-service-form {className}" style="{styleName}" id="main-modal-content">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i
                        class="fa fa-edit"></i> { isUpdate ? `Edit Service[${apiService.serviceId}]` : "Add new"}</h4>
                <button aria-label="Close" class="close" data-dismiss="modal" on:click={() => toggleModal()} type="button"></button>
            </div>
            <div class="form">
                <input name="id" type="hidden" value="{isUpdate ? apiService.serviceId : ''}"/>
                <input name="api_service_id" type="hidden" value="{isUpdate ? apiService.apiServiceId : ''}"/>
                <input name="api_service_type" type="hidden" value="{ isUpdate ? apiService.type : '' }"/>
                <input name="api_service_dripfeed" type="hidden" value="{isUpdate ? apiService.dripfeed : ''}"/>
                <input name="api_service_refill" type="hidden" value="{isUpdate ? apiService.refill : ''}"/>
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12 emoji-picker-container">
                            <div class="form-group">
                                <label>Service name</label>
                                <input class="form-control" data-emojiable="true" name="name"
                                       type="text" value="{ isUpdate ? apiService.name : '' }"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Category</label>
                                <select class="form-control" name="category" bind:value={saveServiceData.categoryId}>
                                    <option value="0" selected={!isUpdate}>Choose Service</option>
                                    {#each category as e}
                                        <option value="{e.categoryId}"
                                                selected={isUpdate ? (apiService.categoryId === e.categoryId) : false}>
                                            {e.name}
                                        </option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Mode</label>
                                <select class="form-control" name="add_type">
                                    <option selected value="api">API</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <fieldset class="form-fieldset api-mode">
                                <div class="">
                                    <div class="form-group">
                                        <label>Provider</label>
                                        <select class="form-control" name="api_provider_id" bind:value={providerId} on:change={() => categoriesByProvider()}>
                                            {#each providers as e}
                                                <option value="{ e.providerId }"
                                                        selected={isUpdate ? (apiService.providerId === e.providerId) : false }>
                                                    {e.name}
                                                </option>
                                            {/each}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group provider-category-list">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label>Category</label>
                                            <select class="form-control" on:change={() => servicesByCategory()} bind:value={searchCategory}>
                                                    <option value="0">Choose category</option>
                                                    {#each providerCategory as c }
                                                        <option value="{encodeURIComponent(c)}">{c}</option>
                                                    {/each}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group service-id">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label>Service id</label>
                                            <input class="form-control" name="serviceId" type="text" bind:value={searchServiceId} >
                                            <br/>
                                            <input class="form-control" type="button" value="검색하기" on:click={() => searchServiceById()}>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group provider-services-list">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label>Service</label>
                                            <select class="form-control" bind:value={apiServiceId} on:change={() => updateService()} name="api_service_id">
                                                <option value="0">Choose Service</option>
                                                {#each services as s}
                                                    {intro = `ID${s.service} - (${s.rate}) - ${s.name}`}
                                                    <option value={s.service}>{intro.length > 72 ? intro.slice(0, 72) + "..." : intro}</option>
                                                {/each}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="form-group">
                                        <label>Original Rate per 1000</label>
                                        <input class="form-control" name="original_price" readonly={true} type="text" bind:value={saveServiceData.originalRate} />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-fieldset manual-mode d-none">
                                <div class="">
                                    <div class="form-group">
                                        <label>Service Type</label>
                                        <select class="form-control" name="service_type" bind:value={type}>
                                            <option value="default">Default</option>
                                            <option value="subscriptions">Subscriptions</option>
                                            <option value="custom_comments">Custom comments</option>
                                            <option value="custom_comments_package">Custom comments package</option>
                                            <option value="mentions_with_hashtags">Mentions with hashtags</option>
                                            <option value="mentions_custom_list">Mentions custom list</option>
                                            <option value="mentions_hashtag">Mentions hashtag</option>
                                            <option value="mentions_user_followers">Mentions user followers</option>
                                            <option value="mentions_media_likers">Mentions media likers</option>
                                            <option value="package">Package</option>
                                            <option value="comment_likes">Comment likes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-group">
                                        <label>Dripdfeed</label>
                                        <select class="form-control" name="dripfeed">
                                            <option value="0">Deactive</option>
                                            <option value="1">Active</option>
                                        </select>

                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Min order</label>
                                <input class="form-control" name="min" type="number" bind:value={saveServiceData.min}/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Max order</label>
                                <input class="form-control" name="max" type="number" bind:value={saveServiceData.max}/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Rate per 1000</label>
                                <input class="form-control" name="price" type="text" bind:value={saveServiceData.rate}/>

                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Status</label>
                                <select class="form-control" name="status">
                                    <option value="1">Active</option>
                                    <option value="0">Deactive</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <textarea class="form-control" cols="40" name="desc" rows="10" bind:value={ description }></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" type="submit" on:click={() => saveService()}>Save</button>
                    <button class="btn btn-dark" data-dismiss="modal" type="button" on:click={() => toggleModal()}>Close</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(function () {
            window.emojiPicker = new EmojiPicker({
                emojiable_selector: '[data-emojiable=true]',
                assetsPath: "../public/assets/plugins/emoji-picker/lib/img/",
                popupButtonClasses: 'fa fa-smile-o'
            });
            window.emojiPicker.discover();
        });

        $(document).ready(function () {
            $(".text-emoji").emojioneArea({
                pickerPosition: "top",
                tonesStyle: "bullet"
            });
        });
    </script>
</div>
