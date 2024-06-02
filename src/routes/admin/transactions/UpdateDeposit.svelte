<script lang="ts">
    import type {AdminDepositListDto} from "$lib/types/deposit/AdminDepositListDto";
    import {api} from "$lib/util/ApiProvider";

    export let toggleModal: Function
    export let depositInfo: AdminDepositListDto

    let depositUpdateInfo: AdminDepositListDto = {...depositInfo}

    const updateDeposit = async () => {
        const res = await api.patch("/admin/d/update", {
            depositId: depositUpdateInfo.depositId,
            note: depositUpdateInfo.note,
            status: depositUpdateInfo.status
        })

        if (res === null) return

        alert(res.message)
        toggleModal(null, true)
    }
</script>

<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title">
                    <i class="fa fa-edit"></i>
                    충전 기록 수정 ({ depositInfo.depositId })
                </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal()}></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="balance">충전 기록 ID</label>
                                <input type="text" id="balance" value="{depositInfo.depositId}"
                                       readonly class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="amount">충전 금액</label>
                                <input type="text" id="amount" value="{ depositInfo.amount }"
                                       readonly class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="new_balance">충전 방식</label>
                                <input type="text" id="new_balance" value="manual"
                                       readonly class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">상태</label>
                                <select id="status" class="form-control" bind:value={depositUpdateInfo.status}>
                                    <option value="CANCEL">취소</option>
                                    <option value="DONE">결제완료</option>
                                    <option value="PENDING">결제대기</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="note">메모</label>
                                <input type="text" id="note" bind:value="{ depositUpdateInfo.note }" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1" on:click={() => updateDeposit()}>저장</button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal(null)}>닫기</button>
                </div>
            </div>
        </div>
    </div>
</div>