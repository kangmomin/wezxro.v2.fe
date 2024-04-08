<script>
    import {api} from "$lib/util/ApiProvider.js";
    import {goto} from "$app/navigation";

    export let updateUserInfo

    /** @type {Function} */
    export let toggleModal

    /** @type {Function} */
    export let updateStaticRate

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