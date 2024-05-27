<script lang="ts">
    import {api} from "$lib/util/ApiProvider.js";
    import {onMount} from "svelte";
    import BasicStatus from '$lib/types/common/BasicStatus';
    import type ProviderDetailDto from '$lib/types/provider/ProviderDetailDto';

    export let providerId: number
    export let className: string
    export let styleName: string
    export let toggleModal: Function

    let provider: ProviderDetailDto = {
        description: "",
        providerId: 0,
        status: 1,
        name: providerId === 0 ? "" : "대기중",
        apiKey: providerId === 0 ? "" : "대기중",
        apiUrl: providerId === 0 ? "" : "대기중",
        balance: 0
    }

    let providerName = ""

    let isUpdate = false

    onMount(async () => {
        if (providerId === 0) return
        isUpdate = true
        api.get(`/admin/p/detail/${providerId}`).then(p => {
            if (p === undefined) return
            provider = p
            providerName = provider.name
        })

    })

    const saveProvider = async () => {
        let res = await api.post("/admin/p/add", {
            ...provider,
            key: provider.apiKey,
            url: provider.apiUrl
        });

        if (res === null) return
        toggleModal(0, true)
    }
    const updateProvider = async () => {
        let res = await api.patch("/admin/p/update", {
            ...provider,
            key: provider.apiKey,
            url: provider.apiUrl
        });

        if (res === null) return
        alert(res.message)

        toggleModal(0, true)
    }
</script>

<div id="main-modal-content" class={className} style={styleName}>
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i>{isUpdate ? ` 도매처 수정(${providerName})` : " 도매처 추가"}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal(0)}></button>
            </div>
            <div class="form">
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
                                <label for="name">Name</label>
                                <input type="text" id="name" bind:value="{provider.name}" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="url">API URL</label>
                                <input type="text" id="url" bind:value="{provider.apiUrl}"
                                       class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="key">API Key</label>
                                <input type="text" id="key" bind:value="{provider.apiKey}" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select id="status" class="form-control" bind:value={provider.status}>
                                    <option value="ACTIVE" selected={provider.status === 1}>활성화</option>
                                    <option value="DEACTIVE" selected={provider.status === 0}>비활성화</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="description">설명</label>
                                <textarea id="description" bind:value={provider.description} cols="40" rows="3" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-min-width mr-1 mb-1" on:click={() => isUpdate ? updateProvider() : saveProvider()}>저장</button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal(0)}>취소</button>
                </div>
            </div>
        </div>
    </div>
</div>