<script lang="ts">
    import {api} from "$lib/util/ApiProvider";
    import type UpdateMoneyDto from "$lib/types/Account/UpdateMoneyDto";

    export let updateMoneyUserInfo: UpdateMoneyDto
    export let toggleModal: Function

    let balance = 0
    let password = ""

    const setBalance = () => {
        api.patch("/admin/u/money/set", {
            balance, password,
            userId: updateMoneyUserInfo.userId
        }).then(res => {
            if (res === null) return

            toggleModal(updateMoneyUserInfo.userId, updateMoneyUserInfo.email,
                updateMoneyUserInfo.balance, true)
        })
    }

</script>

<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i> 잔액 설정 ({ updateMoneyUserInfo.email })</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="form">
                <input type="hidden" name="ids" value="<%= user.userId %>" />
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>현재 잔액</label>
                                <input type="number" name="balance" value={updateMoneyUserInfo.balance} readonly class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>잔액</label>
                                <input type="number" name="new_balance" bind:value={balance} class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>비밀번호(현재 계정 비밀번호)</label>
                                <input type="password" name="secret_key" bind:value={password} class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1"
                        on:click={() => setBalance()}>Save</button>
                    <button class="btn btn-dark" data-dismiss="modal"
                            on:click={() => toggleModal(updateMoneyUserInfo.userId,
                                                        updateMoneyUserInfo.email,
                                                        updateMoneyUserInfo.balance)}>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>