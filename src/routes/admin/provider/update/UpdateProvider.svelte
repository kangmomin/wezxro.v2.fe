<script>
    import {api} from "$lib/util/ApiProvider.js";
    import {onMount} from "svelte";

    /** @type {number} */
    export let providerId
    /**@type {string}*/
    export let className
    /**@type {string}*/
    export let styleName
    /** @type {Function} */
    export let toggleModal

    /** @type {Provider} */
    let provider = providerId === 0 ? {
        providerId: 0,
        status: 0,
        name: "",
        apiKey: "",
        apiUrl: "",
        balance: 0
    } : {
        providerId: 0,
        name: "대기중",
        apiKey: "대기중",
        apiUrl: "대기중",
        status: 0,
        balance: 0
    }

    onMount(async () => {
        if (providerId === 0) return
        api.get(`/p/detail/${providerId}`).then(p => {
            if (p === undefined) return
            provider = p
        })
    })

    let isActiveStatus = provider.status === 1;
</script>

<div id="main-modal-content" class={className} style={styleName}>
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i>Edit ({ provider.name })</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal(0)}></button>
            </div>
            <form action="/admin/p/add" class="form actionForm"
                  data-redirect="/admin/provider" method="POST">
                <input type="hidden" name="id" value="{provider.providerId}" />
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <small class="text-danger">Note: This script supports most of all API Providers (API v2)
                                    like: vinasmm.com, hqsmartpanel.com etc. So it doesn't support another API provider
                                    which have different API Parameters</small>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value="{provider.name}" class="form-control" />

                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>API URL</label>
                                <input type="text" name="url" value="{provider.apiUrl}"
                                       class="form-control" />

                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>API Key</label>
                                <input type="text" name="key" value="{provider.apiKey}"
                                       class="form-control" />

                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Status</label>
                                <select name="status" class="form-control">
                                    <option value="1" selected={isActiveStatus}>Active</option>
                                    <option value="0" selected={!isActiveStatus}>Deactive</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <textarea name="description" cols="40" rows="3" class="form-control"></textarea>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1">Save</button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal(0)}>Close</button>
                </div>
            </form>
        </div>
    </div>
</div>