<script lang="ts">
    import {api} from "$lib/util/ApiProvider.js";
    import type UpdateUserInfo from "$lib/types/Account/UpdateUserInfo.ts";

    export let updateUserInfo: UpdateUserInfo
    export let toggleModal: Function
    export let updateStaticRate: Function

    const saveStaticRate = () => {
        api.patch(`/admin/u/static-rate/update/${updateUserInfo.userId}`, {
            "static_rate": updateUserInfo.staticRate
        }).then(res => {
            if (res === null) return
            updateStaticRate(updateUserInfo.userId, updateUserInfo.staticRate)
            toggleModal(0, "", 0)
        })
    }
</script>

<div id="main-modal-content" class="modal show" style="display: block">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Custom rate ({updateUserInfo.email})</h4>
                <button type="button" class="close" data-dismiss="modal"></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="o-auto" style="height: 10rem; overflow: auto;">
                        <ul class="list-unstyled list-separated services-group-items">
                            <h3>기존 금액 그대로 적용시 1. 반만 적용하려할 시 0.5</h3>
                            <div class="s-items">
                                <input type="number" class="form-control" name="staticRate" bind:value="{updateUserInfo.staticRate}">
                            </div>
                        </ul>
                    </div>
                </div>

                <div class="card-footer text-right">
                    <div class="d-flex">
                        <button type="submit" class="btn btn-primary ml-auto mr-2" on:click={() => saveStaticRate()}>Save</button>
                        <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal(0, "", 0)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>