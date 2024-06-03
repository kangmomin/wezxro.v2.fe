<script lang="ts">

    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider";
    import type AdminOrderListDto from "$lib/types/order/AdminOrderListDto";
    import UpdateOrder from "./UpdateOrder.svelte";
    import {dateFormat} from "$lib/util/DateFormatter";

    let orders: AdminOrderListDto[] = []
    let modalOpen: boolean = false
    const updateOrderDtoInit = (): AdminOrderListDto => {
        return {
            apiOrderId: 0,
            charge: 0,
            count: 0,
            createdAt: new Date(),
            email: "",
            link: "",
            orderId: 0,
            providerName: "",
            remain: 0,
            serviceId: 0,
            serviceName: "",
            startCount: 0,
            status: {
                status: "",
                charge: 0,
                count: 0,
                date: ""
            }
        }
    }
    let updateOrderDto: AdminOrderListDto = updateOrderDtoInit()


    onMount(() => {
        syncOrders()
    })

    const syncOrders = () => {
        api.get("/admin/o/list").then(res => {
            if (res === null) return;

            orders = res
        })
    }

    const toggleModal = (orderInfo: AdminOrderListDto|null, isDone: boolean = false) => {
        updateOrderDto = orderInfo ?? updateOrderDtoInit()
        modalOpen = !modalOpen

        if (isDone) syncOrders()
    }

    const deleteOrder = async (orderId: number) => {
        if (confirm("정말 삭제하시겠습니까?") && !confirm("복구할 수 없습니다.")) return

        const res = await api.delete(`/admin/o/delete/${orderId}`);

        if (res === null) return;

        alert(res.message)
        syncOrders()
    }
</script>

<style>
    .order_btn_group .list-inline-item a.btn {
        font-size: 0.9rem;
        font-weight: 400;
    }
</style>

<div class="row" id="result_notification">
    {#if modalOpen }
        <UpdateOrder orderInfo={updateOrderDto} toggleModal={toggleModal}></UpdateOrder>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>

<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                주문 관리
            </h1>
        </div>

        <div class="col-md-12">
            <div class="row justify-content-between">
                <div class="col-md-8">
                    <ul class="list-inline mb-0 order_btn_group">
                        <li class="list-inline-item">
                            <a class="btn btn-primary" href="/admin/order?status=all">전체 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=processing">처리중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=inprogress">대기중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=pending">접수중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=completed">완료됨 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=partial">부분완료됨 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=canceled">취소됨 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=error">오류 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn " href="/admin/order?status=fail">실패 </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 search-area">
                    <div class="form-group">
                        <div class="input-group">
                            <input class="form-control" name="query" placeholder="검색" type="text" value="">
                            <select class="form-control" id="" name="field">
                                <option value="id">서비스 번호</option>
                                <option value="api_order_id">API Order id</option>
                                <option value="link">Link</option>
                                <option value="email">이메일</option>
                                <option value="service_id">Service id</option>
                            </select>
                            <button class="btn btn-primary btn-square btn-search" type="button"><span
                                    class="fe fe-search"></span></button>
                            <button class="btn btn-outline-danger btn-square btn-clear d-none"
                                    data-original-title="Clear"
                                    data-placement="bottom" data-toggle="tooltip" title="" type="button"><span
                                    class="fe fe-x"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 col-xl-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">주문 목록</h3>
                <div class="card-options">
                    <div class="item-action dropdown action-options">
                        <button class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" type="button">
                            Actions
                            <span class="fe fe-chevrons-down"></span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right"><a
                                class="dropdown-item ajaxActionOptions" data-type="pending"
                                href="/admin/order/bulk_action/pending"><i class="dropdown-icon fe fe-clock"></i>
                            Pending</a><a
                                class="dropdown-item ajaxActionOptions" data-type="inprogress"
                                href="/admin/order/bulk_action/inprogress"><i class="dropdown-icon fe fe-loader"></i> In
                            progress</a><a class="dropdown-item ajaxActionOptions"
                                           data-type="completed" href="/admin/order/bulk_action/completed"><i
                                class="dropdown-icon fe fe-check-square"></i> Completed</a><a
                                class="dropdown-item ajaxActionOptions" data-type="resend"
                                href="/admin/order/bulk_action/resend"><i class="dropdown-icon fe fe-refresh-cw"></i>
                            Resend
                            Order</a><a class="dropdown-item ajaxActionOptions" data-type="cancel"
                                        href="/admin/order/bulk_action/cancel"><i class="dropdown-icon fe fe-x"></i>
                            Cancel and
                            Refund</a></div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    <thead>
                    <tr>
                        <th class="text-center w-1">
                            <div class="custom-controls-stacked">
                                <label class="form-check">
                                    <input class="form-check-input check-items check-all" type="checkbox">
                                    <span class="custom-control-label"></span>
                                </label>
                            </div>
                        </th>
                        <th class="text-center">주문 ID</th>
                        <th class="text-center">주문 고객</th>
                        <th class="text-center">주문 정보</th>
                        <th class="text-center">주문일</th>
                        <th class="text-center">주문 상태</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>

                    {#each orders as order}
                        <tr class="tr_order">
                            <th class="text-center w-1">
                                <div class="custom-controls-stacked">
                                    <label class="form-check">
                                        <input type="checkbox" class="form-check-input check-item check_1"
                                               name="ids[]" value="{order.orderId}">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                            </th>
                            <td class="w-5p text-center">
                                {order.orderId}
                                <div class="text-muted small"></div>
                            </td>
                            <td class="text-muted w-10p text-center">{order.email}</td>
                            <td>
                                <div class="title">
                                    <h6>{order.serviceId} - {order.serviceName}</h6>
                                </div>
                                <div>
                                    <ul style="margin: 0px;">
                                        <li>도매처: {order.providerName} (ID:{order.apiOrderId})</li>
                                        <li>링크: <a href="https://anon.ws/?{order.link}"
                                                     target="_blank">{order.link}</a>
                                        </li>
                                        <li>주문 수량: {Number(order.count).toLocaleString()}</li>
                                        <li>주문 금액: ₩{order.charge}
                                            <!--                                            (0.0098 /<span class="text-info">199.9902</span>)-->
                                        </li>
                                        <li>진행된 주문 수량: {Number(order.startCount).toLocaleString()}</li>
                                        <li>남은 주문 수량: {Number(order.remain).toLocaleString()}</li>
                                    </ul>
                                </div>
                            </td>
                            <td class="text-center w-10p text-muted">
                                {dateFormat(order.createdAt)}
                            </td>
                            <td class="text-center w-10p"><span class="badge bg-green">{order.status}</span></td>
                            <td class="text-center w-5p">
                                <div class="item-action dropdown">
                                    <p data-toggle="dropdown" class="icon cursor-pointer">
                                        <i class="fe fe-more-vertical"></i>
                                    </p>
                                    <div class="dropdown-menu">
                                        <button on:click={() => toggleModal(order)} class="dropdown-item">
                                            <i class="dropdown-icon fe fe-edit"></i>
                                            수정
                                        </button>
                                        <button on:click={() => deleteOrder(order.orderId)} class="dropdown-item">
                                            <i class="dropdown-icon fe fe-trash-2"></i>
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>