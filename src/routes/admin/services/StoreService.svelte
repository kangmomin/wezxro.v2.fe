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


    const isUpdate = false

    /**@type {Provider[]}*/
    let providers = []

    /** @type {String[]} */
    let providerCategory = []

    /**@type {ApiService}*/
    let s

    onMount(() => {
        api.get(`/admin/p/list`).then(p => providers = p)
    })
</script>

<div class="crud-service-form {className}" style="{styleName}" id="main-modal-content">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i
                        class="fa fa-edit"></i> { isUpdate ? `Edit Service[${s.serviceId}]` : "Add new"}</h4>
                <button aria-label="Close" class="close" data-dismiss="modal" on:click={() => toggleModal()} type="button"></button>
            </div>
            <form action="/admin/services/store/" class="form actionForm" data-redirect="/admin/services" method="POST">
                <input name="id" type="hidden" value="{isUpdate ? s.serviceId : ''}"/>
                <input name="api_service_id" type="hidden" value="{isUpdate ? s.apiServiceId : ''}"/>
                <input name="api_service_type" type="hidden" value="{ isUpdate ? s.type : '' }"/>
                <input name="api_service_dripfeed" type="hidden" value="{isUpdate ? s.dripfeed : ''}"/>
                <input name="api_service_refill" type="hidden" value="{isUpdate ? s.refill : ''}"/>
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12 emoji-picker-container">
                            <div class="form-group">
                                <label>Service name</label>
                                <input class="form-control" data-emojiable="true" name="name"
                                       type="text" value="{ isUpdate ? s.name : '' }"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Category</label>
                                <select class="form-control" name="category">
                                    {#each category as e}
                                        <option value="{e.categoryId}"
                                                selected={isUpdate ? (s.categoryId === e.categoryId) : false}>
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
                                        <select class="ajaxGetCategoryFromAPI form-control" name="api_provider_id">
                                            <option value="0">Choose Provider</option>
                                            {#each providers as e}
                                                <option value="{ e.providerId }"
                                                        selected={isUpdate ? (s.providerId === e.providerId) : false }>
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
                                            <select class="form-control ajaxGetServicesFromCategory"
                                                    name="api_category_id">
                                                {#if isUpdate }
                                                    <option value="0">Choose category</option>
                                                    {#each providerCategory as c }
                                                        <option value="{ c }">{c}</option>
                                                    {/each}
                                                {:else}
                                                    <option value="0">Choose category</option>
                                                {/if}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group service-id">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label>Service id</label>
                                            <input class="form-control ajaxGetServicesFromServiceIdVal" name="serviceId"
                                                   type="text">
                                            <br/>
                                            <input class="form-control ajaxGetServicesFromServiceId" type="button"
                                                   value="검색하기">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group provider-services-list">
                                    <div class="dimmer">
                                        <div class="loader"></div>
                                        <div class="dimmer-content">
                                            <label>Service</label>
                                            <select class="form-control ajaxGetServiceDetail" name="api_service_id">
                                                <option value="0">Choose Service</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="form-group">
                                        <label>Original Rate per 1000</label>
                                        <input class="form-control" name="original_price" readonly={true} type="text"
                                               value=""/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-fieldset manual-mode d-none">
                                <div class="">
                                    <div class="form-group">
                                        <label>Service Type</label>
                                        <select class="form-control" name="service_type">
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
                                <input class="form-control" name="min" type="number" value=""/>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Max order</label>
                                <input class="form-control" name="max" type="number" value=""/>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Rate per 1000</label>
                                <input class="form-control" name="price" type="text" value="0"/>

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
                                <textarea class="form-control text-emoji" cols="40" name="desc" rows="10">{ isUpdate ? s.description : "" }</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" type="submit">Save</button>
                    <button class="btn btn-dark" data-dismiss="modal" type="button" on:click={() => toggleModal()}>Close</button>
                </div>
            </form>
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

    <script>
        var pathGetProviderServicesURL = './services/provider_services/';
        var pathGetProviderCategoryURL = './services/provider_category/';
        // Check post type
        $(document).on("change", "select[name=add_type]", function () {
            var element = $(this),
                mode = element.val();
            if (mode == 'api') {
                $('.api-mode').removeClass('d-none');
                $('.manual-mode').addClass('d-none');
            } else {
                $('.manual-mode').removeClass('d-none');
                $('.api-mode').addClass('d-none');
            }
        });
        /*----------  Get Services list from API  ----------*/
        $(document).on("change", ".ajaxGetCategoryFromAPI", function () {
            event.preventDefault();
            $('.provider-category-list').removeClass('d-none');
            $('.provider-category-list .dimmer').addClass('active');
            var element = $(this),
                id = element.val();
            if (id == "" || id == 0) return;
            var data = $.param({provider_id: id});
            $.post(pathGetProviderCategoryURL, data, function (_result) {
                setTimeout(function () {
                    $(".crud-service-form input[name=original_price]").val('');
                    $(".crud-service-form input[name=api_service_type]").val('');
                    $(".crud-service-form input[name=api_service_dripfeed]").val('');
                    $(".crud-service-form input[name=api_service_refill]").val('');
                    $(".crud-service-form input[name=api_service_id]").val('');

                    $('.provider-category-list .dimmer').removeClass('active');
                    $(".provider-category-list select").html(_result);
                }, 100);
            });
        })

        $(document).on("change", ".ajaxGetServicesFromCategory", function () {
            $('.provider-services-list').removeClass('d-none');
            $('.provider-services-list .dimmer').addClass('active');

            var providerId = $('select[name=api_provider_id]').val();
            let serviceId = $("input[name=api_service_id]").val()
            if (providerId == "" || providerId == 0) return;

            var categoryId = $(this).val();

            var data = $.param({provider_id: providerId, category_id: categoryId, service_id: serviceId});

            $.post(pathGetProviderServicesURL, data, function (_result) {
                setTimeout(function () {
                    $(".crud-service-form input[name=original_price]").val('');
                    $(".crud-service-form input[name=api_service_type]").val('');
                    $(".crud-service-form input[name=api_service_dripfeed]").val('');
                    $(".crud-service-form input[name=api_service_refill]").val('');
                    $(".crud-service-form input[name=api_service_id]").val('');

                    $('.provider-services-list .dimmer').removeClass('active');
                    $(".provider-services-list select").html(_result);

                    // Trigger change event to load service details for the first service by default
                    $(".ajaxGetServiceDetail").change();
                }, 100);
            });
        })

        $(document).on("click", ".ajaxGetServicesFromServiceId", function (e) {
            $('.provider-services-list').removeClass('d-none');
            $('.provider-services-list .dimmer').addClass('active');
            $('.serviceId').removeClass('d-none');
            $('.serviceId .dimmer').addClass('active');

            var providerId = $('select[name=api_provider_id]').val();
            if (providerId == "" || providerId == 0) return;

            var serviceId = $(".ajaxGetServicesFromServiceIdVal").val();

            var data = $.param({provider_id: providerId, service_id: serviceId});

            $.post(pathGetProviderServicesURL, data, function (_result) {
                setTimeout(function () {
                    $(".crud-service-form input[name=original_price]").val('');
                    $(".crud-service-form input[name=api_service_type]").val('');
                    $(".crud-service-form input[name=api_service_dripfeed]").val('');
                    $(".crud-service-form input[name=api_service_refill]").val('');
                    $(".crud-service-form input[name=api_service_id]").val('');

                    $('.provider-services-list .dimmer').removeClass('active');
                    $(".provider-services-list select").html(_result);
                    $('.serviceId').removeClass('active');
                    $('.serviceId .dimmer').addClass('d-none');

                    // Trigger change event to load service details for the first service by default
                    $(".ajaxGetServiceDetail").change();
                }, 100);
            });
        })

        /*----------  Load default service with API  ----------*/
        // $(document).ready(function () {
        //   if ($('select[name=add_type]').val() == "api") {
        //     console.log('sss');
        //     $('.provider-services-list').removeClass('d-none');
        //     $('.provider-services-list .dimmer').addClass('active');

        //     var id = $('select[name=api_provider_id]').val();
        //     if (id == "" || id == 0) return;

        //     var _api_service_id = $('input[name=api_service_id]').val();
        //     var data = $.param({ provider_id: id, provider_service_id: _api_service_id });
        //     $.post(pathGetProviderServicesURL, data, function (_result) {
        //       setTimeout(function () {
        //         $('.provider-services-list .dimmer').removeClass('active');
        //         $(".provider-services-list select").html(_result);
        //         var _that = $(".ajaxGetServiceDetail option:selected"),
        //           _rate = _that.attr("data-rate");
        //         console.log(_rate);
        //         $(".crud-service-form input[name=original_price]").val(_rate);
        //       }, 100);
        //     });
        //     return false;
        //   }
        // });

        $(document).ready(function () {
            if ("<%= isUpdate %>" == true) return
            var id = $('select[name=api_provider_id]').val();
            if (id == "" || id == 0) return;

            var data = $.param({provider_id: id});

            // Get categories for the given provider
            $.post(pathGetProviderCategoryURL, data, function (_result) {
                // Assume _result is a string of <option> elements for each category
                $(".provider-category-list select").html(_result);

                // Trigger change event to load services for the first category by default
                $(".ajaxGetServicesFromCategory").change();
            });
        });

        $(document).on("change", ".ajaxGetServiceDetail", function () {
            $(".crud-service-form input[name=original_price]").val('');
            $(".crud-service-form input[name=min]").val('');
            $(".crud-service-form input[name=max]").val('');
            var element = $('option:selected', this),
                _name = element.attr('data-name'),
                _min = element.attr('data-min'),
                _max = element.attr("data-max"),
                _rate = element.attr("data-rate"),
                _type = element.attr("data-type"),
                _dripfeed = element.attr("data-dripfeed"),
                _refill = element.attr("data-refill");
            $(".crud-service-form input[name=original_price]").val(_rate);
            $(".crud-service-form input[name=api_service_type]").val(_type);
            $(".crud-service-form input[name=api_service_dripfeed]").val(_dripfeed);
            $(".crud-service-form input[name=api_service_refill]").val(_refill);

            $(".crud-service-form input[name=min]").val(_min);
            $(".crud-service-form input[name=max]").val(_max);
            $(".crud-service-form input[name=price]").val(_rate);
        })
    </script>
</div>
