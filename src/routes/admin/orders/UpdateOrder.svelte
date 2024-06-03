<script lang="ts">
    import type AdminOrderListDto from "$lib/types/order/AdminOrderListDto";
    import {onMount} from "svelte";
    import OrderStatus from "$lib/types/order/constant/OrderStatus";
    import {api} from "$lib/util/ApiProvider";

    export let toggleModal: Function
    export let orderInfo: AdminOrderListDto

    // 포인터 객체 방지
    let newOrderInfo = {...orderInfo}

    onMount(() => {

    })

    const updateOrder = async () => {
        if (newOrderInfo.status !== orderInfo.status &&
            newOrderInfo.status === OrderStatus.CANCELED) {
            let cancelRes = await cancelOrder(orderInfo.orderId);

            if (cancelRes !== null) return
        }

        const res = await api.patch("/admin/o/update", {
            orderId: newOrderInfo.orderId,
            startCnt: newOrderInfo.startCount,
            remains: newOrderInfo.remain,
            status: newOrderInfo.status,
            link: newOrderInfo.link
        })

        if (res === null) return
        alert(res.message)

        toggleModal(null, true)
    }

    const cancelOrder = async (orderId: number) => {
        let res = await api.patch(`/admin/o/cancel/${orderId}`);

        if (res === null) return "error";
        return null
    }

</script>
<div class="modal show" id="main-modal-content" style="display: block; overflow: auto">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i> 주문 정보 수정 ({orderInfo.orderId})</h4>
                <button aria-label="Close" class="close" data-dismiss="modal" type="button"></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="quantity">주문 수량</label>
                                <input class="form-control" id="quantity" readonly type="text"
                                       value="{orderInfo.count}"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="charge">금액</label>
                                <input class="form-control" id="charge" readonly type="text"
                                       value="{orderInfo.charge}"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="start_counter">진행된 주문 수량</label>
                                <input class="form-control" id="start_counter" type="number" bind:value="{newOrderInfo.startCount}"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="remains">남은 주문 수량</label>
                                <input class="form-control" id="remains" type="number" bind:value="{newOrderInfo.remain}"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">주문 상태</label>
                                <select class="form-control" id="status" bind:value={newOrderInfo.status}>
                                    <option value="COMPLETED">완료됨</option>
                                    <option value="PROCESSING">처리중</option>
                                    <option value="INPROGRESS">대기중</option>
                                    <option value="PENDING">접수중</option>
                                    <option value="PARTIALS">부분완료됨</option>
                                    <option value="CANCELED">취소됨</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="link">링크</label>
                                <input class="form-control" id="link" type="text" bind:value="{newOrderInfo.link}"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" type="submit" on:click={() => updateOrder()}>저장</button>
                    <button class="btn btn-dark" data-dismiss="modal" type="button" on:click={() => toggleModal()}>닫기</button>
                </div>
            </div>
        </div>
    </div>
</div>
