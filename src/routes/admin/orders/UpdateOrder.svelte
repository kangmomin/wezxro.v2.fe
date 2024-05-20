<script lang="ts">
    import type AdminOrderListDto from "$lib/types/order/AdminOrderListDto";
    import OrderStatus from "$lib/types/order/constant/OrderStatus";
    import {onMount} from "svelte";

    export let toggleModal: Function
    export let orderInfo: AdminOrderListDto

    onMount(() => {
    })

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
                                <input class="form-control" id="start_counter" type="number" value="{orderInfo.startCount}"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="remains">남은 주문 수량</label>
                                <input class="form-control" id="remains" type="number" value="{orderInfo.remain}"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">주문 상태</label>
                                <select class="form-control" id="status">
                                    <option value="COMPLETED" selected={orderInfo.status === OrderStatus.COMPLETED}>완료됨</option>
                                    <option value="PROCESSING" selected={orderInfo.status === OrderStatus.PROCESSING}>처리중</option>
                                    <option value="INPROGRESS" selected={orderInfo.status === OrderStatus.INPROGRESS}>대기중</option>
                                    <option value="PENDING" selected={orderInfo.status === OrderStatus.PENDING}>접수중</option>
                                    <option value="PARTIALS" selected={orderInfo.status === OrderStatus.PARTIALS}>부분완료됨</option>
                                    <option value="CANCELED" selected={orderInfo.status === OrderStatus.CANCELED}>취소됨</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="link">링크</label>
                                <input class="form-control" id="link" type="text" value="{orderInfo.link}"/>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" type="submit">Save</button>
                    <button class="btn btn-dark" data-dismiss="modal" type="button" on:click={() => toggleModal()}>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
