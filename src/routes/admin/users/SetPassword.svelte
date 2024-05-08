<script lang="ts">

    import type UpdateUserInfo from "$lib/types/Account/UpdateUserInfo";
    import {api} from "$lib/util/ApiProvider";

    export let user: UpdateUserInfo
    export let toggleModal: Function

    let newPassword = ""
    let adminPassword = ""

    const savePassword = () => {
        api.patch("/admin/u/password/update", {
            userId: user.userId,
            newPassword, adminPassword
        }).then(res => {
            if (res === null) return

            alert(res.message)
            toggleModal()
        })
    }
</script>

<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i> 비밀번호 설정 ({user.email})</h4>
                <button aria-label="Close" class="close" data-dismiss="modal" type="button" on:click={() => toggleModal()}></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="new-password">새 비밀번호</label>
                                <input class="form-control" id="new-password"
                                       name="password" type="text" bind:value={newPassword}/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="admin-password">관리자 계정 비밀번호</label>
                                <input class="form-control" id="admin-password" type="text" bind:value={adminPassword}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1"
                        on:click={() => savePassword()}>Save</button>
                    <button class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal()}>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>