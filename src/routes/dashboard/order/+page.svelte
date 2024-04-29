<script lang="ts">
    import type OrderListDto from '$lib/types/order/OrderListDto';
    import { onMount } from 'svelte';
    import { api } from '$lib/util/ApiProvider';

    let orders: OrderListDto[]|null = []

    onMount(async () => {
        orders = await api.get("/o/list");
        if (orders === null) return;
    })
</script>


<div class="page-title m-b-20">
    <style>
        .order_btn_group .list-inline-item {
            margin-right: 0 !important;
        }

        .order_btn_group .list-inline-item a.btn {
            font-size: 0.9rem;
            font-weight: 400;
        }
    </style>
    <div class="row justify-content-between">
        <div class="col-md-12">
            <h1 class="page-title">
                주문 처리 현황
            </h1>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-between">
                <div class="col-md-10">
                    <ul class="list-inline mb-0 order_btn_group">
                        <li class="list-inline-item"><a class="nav-link btn btn-info" href="/order">전체</a></li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/order?status=processing">처리중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/order?status=inprogress">대기중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/order?status=pending">대기중 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/order?status=completed">완료됨 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/order?status=partial">부분완료됨 </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link btn " href="/orderstatus=canceled">취소됨 </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <div class="d-flex search-area">
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="query" placeholder="검색" type="text" value="">

                                <button class="btn btn-primary btn-square btn-search" type="button"><span
                                        class="fe fe-search"></span></button>
                                <button class="btn btn-outline-danger btn-square btn-clear d-none"
                                        data-original-title="Clear"
                                        data-placement="bottom" data-toggle="tooltip" title=""
                                        type="button"><span
                                        class="fe fe-x"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row" id="result_ajaxSearch">
    <div class="col-md-12 data-empty text-center">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">주문 처리 현황</h3>
                <div class="card-options">
                    <a class="card-options-collapse" data-toggle="card-collapse" href="#"><i
                            class="fe fe-chevron-up"></i></a>
                    <a class="card-options-remove" data-toggle="card-remove" href="#"><i
                            class="fe fe-x"></i></a>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    {#if (orders.length < 1) }
                        <div class="content">
                            데이터가 없습니다.
                        </div>
                    {:else}
                        <thead>
                            <tr>
                                <th class="">주문 번호</th>
                                <th class="text-center">주문 상세 정보</th>
                                <th class="text-center">등록일자</th>
                                <th class="text-center">상태</th>
                            </tr>
                        </thead>
                        <tbody>
                        { #each orders as e }
                            <tr class="tr_ca79f3b9c3c38e10780317cb65493974">
                                <td class="text-center">
                                    { e.orderId }
                                </td>
                                <td style="text-align: left;">
                                    <div class="title">
                                        <div class="title">
                                            <h6>
                                                { e.serviceId } - { e.serviceName }
                                            </h6>
                                        </div>
                                        <div>
                                            주문 링크 | <a href="https://anon.ws/?{ e.link }" target="_blank">
                                            { e.link }
                                        </a><br>주문 수량 | { e.count }<br>
                                            주문 금액 | { e.charge }원<br>
                                            시작 수량 | { e.startCount } <br>
                                            남은 수량 | { e.remain }<br>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center w-10p">
                                    { e.createdAt }
                                </td>
                                <td class="text-center w-10p"><span class="badge bg-green">
                            { e.status }
                            </span></td>
                            </tr>
                        {/each}
                        </tbody>
                    {/if}
                </table>
            </div>
        </div>
    </div>
</div>
