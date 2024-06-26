<script lang="ts">
    import {onMount} from "svelte";
    import {Chart_template} from "$lib/util/ChartTemplate.js";
    import {api} from "$lib/util/ApiProvider.js";
    import type {OrderStatusCnt} from "$lib/types/OrderStatusCnt";
    import type StringObject from "$lib/types/common/StringObject";

    let totalUsed = 0,
        balance = 0,
        totalOrder = 0,
        orderStatusCnt: OrderStatusCnt[] = []
    const status: StringObject = {
        completed: 0,
        canceled: 0,
        processing: 0,
        inprogress: 0,
        partials: 0,
        pending: 0
    }

    /**
     * @typedef {{[key: string]: any}} DailyCharData
     */
    onMount(async () => {
        const data = await api.get("/dashboard")

        totalUsed = data.totalUsed
        balance = data.balance
        totalOrder = data.totalOrder
        orderStatusCnt = data.orderStatusCnt

        const time = getPastWeekDates()

        let chartData = {
            "time": time,
            "완료됨": [0, 0, 0, 0, 0, 0, 0],
            "처리중": [0, 0, 0, 0, 0, 0, 0],
            "취소됨": [0, 0, 0, 0, 0, 0, 0],
            "대기중": [0, 0, 0, 0, 0, 0, 0],
            "부분완료됨": [0, 0, 0, 0, 0, 0, 0],
            "접수중": [0, 0, 0, 0, 0, 0, 0],
        }

        for (const singleData of orderStatusCnt) {
            const idx = time.indexOf(singleData.date)

            if (singleData.status === "COMPLETED") chartData.완료됨[idx]++
            if (singleData.status === "PROCESSING") chartData.처리중[idx]++
            if (singleData.status === "INPROGRESS") chartData.접수중[idx]++
            if (singleData.status === "PENDING") chartData.대기중[idx]++
            if (singleData.status === "PARTIALS") chartData.부분완료됨[idx]++
            if (singleData.status === "CANCELED") chartData.취소됨[idx]++
        }

        orderStatusCnt.forEach(val => {
            status[val.status.toLowerCase()]++
        })

        console.log(status)

        setTimeout(() => {
            Chart_template.init()
            Chart_template.chart_spline('#orders_chart_spline', chartData);
            Chart_template.chart_pie('#orders_chart_pie', {
                "완료됨": status.completed || 0,
                "처리중": status.processing || 0,
                "취소됨": status.canceled || 0,
                "대기중": status.pending || 0,
                "부분완료됨": status.partials || 0,
                "접수중": status.inprogress || 0
            });
        }, 100)
    });

    function getPastWeekDates() {
        const dates = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);

            const year = date.getFullYear();
            let month = (date.getMonth() + 1).toString();
            let day = date.getDate().toString();

            // 월과 일이 한 자리 수일 경우 앞에 '0'을 붙여 두 자리로 만듭니다.
            month = month.length === 1 ? `0${month}` : month;
            day = day.length === 1 ? `0${day}` : day;

            dates.push(`${year}-${month}-${day}`)
            dates.sort()
        }

        return dates;
    }
</script>

<div class="row justify-content-center row-card statistics">
    <!-- header Statistic -->
    <div class="col-sm-12">
        <div class="row">

            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-success-gradient text-white mr-3">
                                    <i class="fe fe-dollar-sign"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">₩{balance}</h4>
                                <small class="text-muted ">예치금 잔액</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-info-gradient text-white mr-3">
                                    <i class="fe fe-dollar-sign"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">₩{totalUsed}</h4>
                                <small class="text-muted ">총 사용 금액</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-warning-gradient text-white mr-3">
                                    <i class="fe fe-shopping-cart"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{totalOrder}건</h4>
                                <small class="text-muted ">총 주문</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-danger-gradient text-white mr-3">
                                    <i class="fa fa-ticket"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">0</h4>
                                <small class="text-muted ">총 문의</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Chart Area -->
    <div class="col-sm-12 charts">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">최근 주문 현황</h3>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div class="p-4 card">
                        <div id="orders_chart_spline" style="height: 20rem;"></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="p-4 card">
                        <div id="orders_chart_pie" style="height: 20rem;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Orders Logs -->
    <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-list"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{totalOrder}건</h4>
                                <small class="text-muted ">총 주문</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-check"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.completed}</h4>
                                <small class="text-muted ">완료됨</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-trending-up"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.processing}</h4>
                                <small class="text-muted ">처리중</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-loader"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.inprogress}</h4>
                                <small class="text-muted ">접수중</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-pie-chart"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.pending}</h4>
                                <small class="text-muted ">대기중</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fa fa-hourglass-half"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.partials}</h4>
                                <small class="text-muted ">부분완료됨</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 item">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                                <span class="stamp stamp-md text-primary mr-3">
                                    <i class="fe fe-x-square"></i>
                                </span>
                        <div class="d-flex order-lg-2 ml-auto">
                            <div class="ml-2 d-lg-block text-right">
                                <h4 class="m-0 text-right number">{status.canceled}</h4>
                                <small class="text-muted ">취소됨</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>