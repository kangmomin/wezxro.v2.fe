<script lang="ts">
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import type ApiService from "$lib/types/provider/ApiService";
    import type ProviderListDto from "$lib/types/provider/ProviderListDto";
    import type {CategoryListDto} from "$lib/types/category/CategoryListDto";
    import type {UpdateServiceDto} from "$lib/types/service/UpdateServiceDto";
    import type {SaveServiceDto} from "$lib/types/service/SaveServiceDto.js";

    export let className: string
    export let styleName: string
    export let toggleModal: Function
    export let category: CategoryListDto[]

    export let updateServiceData: UpdateServiceDto|null

    // 업데이트 용으로 사용시엔 true로 변경해야함
    export let isUpdate = false
    let providers: ProviderListDto[] = []
    let providerCategory: string[] = []
    let apiMax: number = 0,
        apiMin: number = 0

    /** 도매처 서비스 들의 정보 */
    let apiServices: ApiService[] = []

    let type = "",
        providerId = 0,
        searchServiceId = 0,
        searchCategory = "",
        /** 서비스 소개 부분을 위한 변수 */
        intro = ""

    /** 서비스 저장을 위한 객체 */
    let saveServiceData: SaveServiceDto = {
        apiServiceId: 0,
        cancel: false,
        categoryId: 0,
        description: '',
        dripfeed: false,
        max: 0,
        min: 0,
        name: '',
        originalRate: 0,
        providerId: 0,
        rate: 0,
        refill: false,
        serviceId: null,
        status: "ACTIVE",
        type: ''
    }

    onMount(async () => {
        if (updateServiceData !== null && updateServiceData.apiServiceId !== 0) {
            searchServiceId = updateServiceData.apiServiceId
            providerId = updateServiceData.providerId

            await searchServiceById()
            categoriesByProvider()


            saveServiceData = {
                apiServiceId: updateServiceData.apiServiceId,
                description: updateServiceData.description,
                categoryId: updateServiceData.categoryId,
                max: updateServiceData.max,
                min: updateServiceData.min,
                rate: updateServiceData.rate,
                status: updateServiceData.status === 1 ? "ACTIVE" : "DEACTIVE",
                type: updateServiceData.type.toLowerCase(),
                originalRate: updateServiceData.originalRate,
                name: updateServiceData.name,
                providerId: updateServiceData.providerId,
                serviceId: updateServiceData.serviceId,
                refill: false,
                cancel: false,
                dripfeed: false
            }

            isUpdate = true

            syncService()
        }

        api.get(`/admin/p/list`).then(p => providers = p)
    })

    const categoriesByProvider = () => {
        api.get(`/admin/p/category/${providerId}`).then((c) => {
            providerCategory = c
        })
    }

    const searchServiceById = async () => {
        if (providerId === 0) alert("도매처를 먼저 선택하여주십시오.")

        const s:ApiService|null = (await api.get(`/admin/p/service?serviceId=${searchServiceId}&providerId=${providerId}`))
        if (s === null) return

        apiMax = s.max
        apiMin = s.min
        saveServiceData.originalRate = s.rate
        saveServiceData.apiServiceId = s.service!!

        return
    }

    const servicesByCategory = () => {
        if (providerId === 0) alert("도매처를 먼저 선택하여주십시오.")

        setTimeout(() => {
            api.get(`/admin/p/services/${providerId}?category=${searchCategory}`).then(s => {
                    if (s === null) return;

                    apiServices = s;
                })
        }, 100)
    }

    const syncService = () => {
        searchServiceId = saveServiceData.apiServiceId
        searchServiceById()
    }

    const updateService = () => {
        if (apiMin > saveServiceData.min) return alert("최소 주문 수량이 도매처보다 적습니다.")
        if (apiMax < saveServiceData.max) return alert("최대 주문 수량이 도매처보다 많습니다.")
        if (saveServiceData.min > saveServiceData.max) return alert("최소 주문 수량이 최대 주문 수량보다 많습니다.")

        api.patch(`/admin/s/update/${saveServiceData.serviceId}`, {
            "providerId": providerId,
            "categoryId": saveServiceData.categoryId,
            "apiServiceId": Number(saveServiceData.apiServiceId),
            "name": saveServiceData.name,
            "type": saveServiceData.type.toUpperCase().replaceAll(" ", "_"),
            "rate": Number(saveServiceData.rate),
            "status": saveServiceData.status,
            "min": Number(saveServiceData.min),
            "max": Number(saveServiceData.max),
            "description": saveServiceData.description,
            "originalRate": Number(saveServiceData.originalRate)
        }).then(res => {
            if (res === null) return
            alert("서비스를 저장하였습니다.")
            toggleModal(true)
        })
    }

    const saveService = () => {
        if (apiMin > saveServiceData.min) return alert("최소 주문 수량이 도매처보다 적습니다.")
        if (apiMax < saveServiceData.max) return alert("최대 주문 수량이 도매처보다 많습니다.")

        api.post("/admin/s/add", {
            "providerId": providerId,
            "categoryId": saveServiceData.categoryId,
            "apiServiceId": Number(saveServiceData.apiServiceId),
            "name": saveServiceData.name,
            "type": saveServiceData.type.toUpperCase().replaceAll(" ", "_"),
            "rate": Number(saveServiceData.rate),
            "status": saveServiceData.status,
            "min": Number(saveServiceData.min),
            "max": Number(saveServiceData.max),
            "description": saveServiceData.description,
            "originalRate": Number(saveServiceData.originalRate)
        }).then(res => {
            if (res === null) return
            alert("서비스를 저장하였습니다.")
            toggleModal(true)
        })
    }
</script>

<div class="crud-service-form {className}" style="{styleName}" id="main-modal-content">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i
                        class="fa fa-edit"></i> { isUpdate ? `서비스 수정[${saveServiceData.serviceId}]` : "서비스 추가"}</h4>
                <button aria-label="Close" class="close" data-dismiss="modal" on:click={() => toggleModal()} type="button"></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12 emoji-picker-container">
                            <div class="form-group">
                                <label for="name">서비스 이름</label>
                                <input class="form-control" data-emojiable={!isUpdate} id="name"
                                       type="text" bind:value={saveServiceData.name}/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="category">카테고리</label>
                                <select class="form-control" id="category" bind:value={saveServiceData.categoryId}>
                                    {#each category as e}
                                        <option value="{e.categoryId}"
                                                selected={isUpdate ? (saveServiceData.categoryId === e.categoryId) : false}>
                                            {e.name}
                                        </option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <fieldset class="form-fieldset api-mode">
                                <div class="">
                                    <div class="form-group">
                                        <label for="api_provider_id">도매처</label>
                                        <select class="form-control" id="api_provider_id" bind:value={providerId} on:change={() => categoriesByProvider()}>
                                            {#each providers as e}
                                                <option value="{ e.providerId }"
                                                        selected={isUpdate ? (saveServiceData.providerId === e.providerId) : false }>
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
                                            <label for="categoryName">도매처 카테고리</label>
                                            <select class="form-control" id="categoryName" on:change={() => servicesByCategory()} bind:value={searchCategory}>
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
                                            <label for="serviceId">도매처 서비스 아이디</label>
                                            <input class="form-control" id="serviceId" type="text" bind:value={searchServiceId} >
                                            <br/>
                                            <input class="form-control" type="button" value="검색하기" on:click={() => searchServiceById()}>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group provider-services-list">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label for="services">도매처 서비스</label>
                                            <select class="form-control" id="services" bind:value={saveServiceData.apiServiceId}
                                                    on:change={() => syncService()} name="api_service_id">
                                                {#each apiServices as s}
                                                    {intro = `ID${s.service} - (${s.rate}) - ${s.name}`}
                                                    {Number(searchServiceId) === Number(s.service)}
                                                    <option value={s.service} selected="{Number(searchServiceId) === Number(s.service)}">
                                                        {intro.length > 72 ? intro.slice(0, 72) + "..." : intro}
                                                    </option>
                                                {/each}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-md-center">
                                    <div class="col-md-4 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label for="min">도매처 최소 주문 수량</label>
                                            <input class="form-control" id="min" type="number" readonly max="{apiMin}" bind:value={apiMin}/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label for="max">도매처 최대 주문 수량</label>
                                            <input class="form-control" id="max" type="number" readonly max="{apiMax}" bind:value={apiMax}/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label for="rate">도매처 1000개 당 금액($)</label>
                                            <input class="form-control" id="rate" type="text" readonly bind:value={saveServiceData.originalRate}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-fieldset manual-mode d-none">
                                <div class="">
                                    <div class="form-group">
                                        <label for="service_type">서비스 타입</label>
                                        <select class="form-control" id="service_type" bind:value={type}>
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
                                <div>
                                    <div class="form-group">
                                        <label for="dripfeed">Dripdfeed</label>
                                        <select class="form-control" id="dripfeed">
                                            <option value="DEACTIVE">비활성화</option>
                                            <option value="ACTIVE">활성화</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="min">최소 주문 수량</label>
                                <input class="form-control" id="min" type="number" min="{apiMin}" max="{apiMax}" bind:value={saveServiceData.min}/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="max">최대 주문 수량</label>
                                <input class="form-control" id="max" type="number" min={apiMin} max="{apiMax}" bind:value={saveServiceData.max}/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="rate">1000개 당 금액 설정(₩)</label>
                                <input class="form-control" id="rate" type="text" bind:value={saveServiceData.rate}/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">활성화/비활성화</label>
                                <select class="form-control" id="status">
                                    <option value="ACTIVE">활성화</option>
                                    <option value="DEACTIVE">비활성화</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="description">소개글</label>
                                <textarea id="description" class="form-control" cols="40" name="desc" rows="10" bind:value={saveServiceData.description}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" type="submit" on:click={() => isUpdate ? updateService() : saveService()}>Save</button>
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
