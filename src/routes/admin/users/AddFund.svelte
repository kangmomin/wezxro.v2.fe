<script lang="ts">

    import type UpdateUserInfo from "$lib/types/Account/UpdateUserInfo";
    import {api} from "$lib/util/ApiProvider";

    export let toggleModal: Function
    export let userInfo: UpdateUserInfo

    let amount: number = 0
    let password: string = ""

    const addFund = () => {
        api.patch("/admin/u/fund", {
            amount, password,
            userId: userInfo.userId
        }).then(res => {
            if (res === null) return
            toggleModal(userInfo.userId, userInfo.email, true)
        })
    }
</script>

<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title">
                    <i class="fa fa-edit"></i>
                    Add funds ({ userInfo.email })
                </h4>
                <button aria-label="Close" class="close" data-dismiss="modal" type="button"></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Payment Method</label>
                                <select class="form-control" name="payment_method">
                                    <option value="bonus" selected>Bonus</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>추가할 금액</label>
                                <input class="form-control" name="amount" type="number" bind:value={amount}/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>비밀번호(계정 비밀번호)</label>
                                <input class="form-control" name="secret_key" type="password" bind:value={password}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1"
                            on:click={() => addFund()}>Save</button>
                    <button class="btn btn-dark" data-dismiss="modal"
                            on:click={toggleModal(userInfo.userId, userInfo.email)}>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>