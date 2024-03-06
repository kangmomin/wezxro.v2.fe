<script>
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";

    /**
     * @typedef CategoryList
     * @property {Number} categoryId
     * @property {String} name
     */
    /**
     * @typedef ServiceList
     * @property {Number} serviceId
     * @property {String} name
     */

    /** @type {CategoryList[]} */
    let category = [],
    /** @type {ServiceList[]} */
        service = []
    export let data;

    const {
        props
    } = data

    let expiry = ""

    const loadCategory = async () => {
        let categoryList = await api.get("/c/list");
        if (categoryList === null) {
            alert("카테고리를 가져오는 중 서버 에러가 발생했습니다.")
            // location.href = "/dashboard/statistic"
        }

        return categoryList
    }

    const loadService = async () => {``
        let serviceList = await api.get("/s/list");
        if (serviceList === null) {
            alert("카테고리를 가져오는 중 서버 에러가 발생했습니다.")
            location.href = "/dashboard/statistic"
        }

        return serviceList
    }

    onMount(() => {
        loadCategory().then(categories => {
            category = categories
        })
    })

</script>


<div class="layout-main d-flex flex-column flex-fill max-w-full">
    <main class="app-content">
        <div class="row justify-content-md-center justify-content-xl-center m-t-30" id="result_ajaxSearch">
            <div class="col-md-10 col-xl-10 ">
                <div class="card">
                    <div class="card-header d-flex align-items-center" style="display: none;">
                        <div class="tabs-list" style="display: none;">
                            <ul class="nav nav-tabs">
                                <li class="">
                                    <a class="active show" data-toggle="tab" href="#new_order"><i class="fa fa-clone"></i> Single
                                        Order</a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#mass_order"><i class="fa fa-sitemap"></i> Mass Order</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div id="new_order" class="tab-pane fade in active show">
                                <form class="form actionForm" action="./order/ajax_add_order" data-redirect="./add-order" method="POST"
                                      id="form-field">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="content-header-title">
                                                <h4 style="margin-bottom: 12px;">새로운 주문</h4>
                                            </div>
                                            <div class="form-group">
                                                <label style="margin-bottom: 8px;">카테고리를 먼저 선택해주세요.</label>
                                                <select name="category_id" class="form-control square ajaxChangeCategory"
                                                        data-url="/c/list" on:change={() => loadService().then(s => service = s)} id="select">
                                                    <option> 카테고리를 먼저 선택해주세요.</option>
                                                    { #each category as e }
                                                        <option value='{e.categoryId}'>
                                                            { e.name }
                                                        </option>
                                                    {/each}
                                                </select>
                                            </div>
                                            <div class="form-group" id="result_onChange">
                                                <label style="margin-bottom: 8px;">서비스를 선택해주세요.</label>
                                                <select name="service_id" class="form-control square ajaxChangeService"
                                                        data-url="./add-order/get_service/" id="services">
                                                    <option> 서비스를 선택해주세요.</option>
                                                    {#each service as s}
                                                        <option value='{s.serviceId}'>
                                                            { s.name }
                                                        </option>
                                                    {/each}
                                                </select>
                                            </div>

                                            <!-- Min/max on responsive d-md-none-->
                                            <div class="row d-none">
                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label>Minimum Amount</label>
                                                        <input class="form-control square" name="service_min" type="text" value="" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label>Maximum Amount</label>
                                                        <input class="form-control square" name="service_max" type="text" value="" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label>Price per 1000</label>
                                                        <input class="form-control square" name="service_price" type="text" value="" readonly>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group order-default-link">
                                                <label style="margin-bottom: 8px;">서비스 링크를 입력해주세요.</label>
                                                <input class="form-control square" type="text" name="link" placeholder="https://" id="">
                                            </div>

                                            <div class="form-group order-default-quantity">
                                                <label style="margin-bottom: 8px;">서비스 수량을 입력해주세요.</label>
                                                <input class="form-control square ajaxQuantity" name="quantity" type="number">
                                            </div>

                                            <div class="form-group order-comments d-none">
                                                <label style="margin-bottom: 8px;">댓글 내용을 입력해주세요(한 줄에 한 글).</label>
                                                <textarea rows="10" name="comments" class="form-control square ajax_custom_comments"></textarea>
                                            </div>

                                            <div class="form-group order-comments-custom-package d-none">
                                                <label for="" style="margin-bottom: 8px;">댓글 내용을 입력해주세요(한 줄에 한 글).</label>
                                                <textarea rows="10" name="comments_custom_package" class="form-control square"></textarea>
                                            </div>

                                            <div class="form-group order-usernames d-none">
                                                <label for="" style="margin-bottom: 8px;">인스타그램 아이디를 입력해주세요.</label>
                                                <input type="text" class="form-control input-tags" name="usernames"
                                                       value="usenameA,usenameB,usenameC,usenameD">
                                            </div>

                                            <div class="form-group order-usernames-custom d-none">
                                                <label for="" style="margin-bottom: 8px;">인스타그램 아이디를 입력해주세요.</label>
                                                <textarea rows="10" name="usernames_custom"
                                                          class="form-control square ajax_custom_lists"></textarea>
                                            </div>

                                            <div class="form-group order-hashtags d-none">
                                                <label for="">Hashtags (Format: #hashtag)</label>
                                                <input type="text" class="form-control input-tags" name="hashtags"
                                                       value="#goodphoto,#love,#nice,#sunny">
                                            </div>

                                            <div class="form-group order-hashtag d-none">
                                                <label for="">Hashtag </label>
                                                <input class="form-control square" type="text" name="hashtag">
                                            </div>

                                            <div class="form-group order-username d-none">
                                                <label for="">Username</label>
                                                <input class="form-control square" name="username" type="text">
                                            </div>

                                            <!-- Mentions Media Likers -->
                                            <div class="form-group order-media d-none">
                                                <label for="">Media Url</label>
                                                <input class="form-control square" name="media_url" type="link">
                                            </div>

                                            <!-- Subscriptions  -->
                                            <div class="row order-subscriptions d-none">

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">인스타그램 아이디</label>
                                                        <input class="form-control square" type="text" name="sub_username">
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">적용 게시물 수</label>
                                                        <input class="form-control square" type="number" placeholder="최소 1개 이상" name="sub_posts">
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">수량</label>
                                                        <input class="form-control square" type="number" name="sub_min" placeholder="최소 수량">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">&nbsp;</label>
                                                        <input class="form-control square" type="number" name="sub_max" placeholder="최대 수량">
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">지연 (분)</label>
                                                        <select name="sub_delay" class="form-control square">
                                                            <option value="0">딜레이 없음</option>
                                                            <option value="5">5</option>
                                                            <option value="10">10</option>
                                                            <option value="15">15</option>
                                                            <option value="30">30</option>
                                                            <option value="60">60</option>
                                                            <option value="90">90</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">만료일자</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control datepicker"
                                                                   on:keydown={() => {return false}} name="expiry" placeholder="" id="expiry" value={expiry}>
                                                            <span class="input-group-append">
                                <button class="btn btn-info" type="button"
                                        on:click={() => {expiry = ''}}><i
                                        class="fe fe-trash-2"></i></button>
                              </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group" id="result_total_charge">
                                                <input type="hidden" name="total_charge" value="0.00">
                                                <input type="hidden" name="currency_symbol" value="₩">
                                                <p class="btn btn-info total_charge">총 비용 <span class="charge_number">₩0</span></p>

                                                <div class="alert alert-icon alert-danger d-none" role="alert">
                                                    <i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>Order amount exceeds available
                                                    funds!
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="custom-control custom-checkbox">
                          <span class="custom-control-label text-uppercase"><input type="checkbox"
                                                                                   class="custom-control-input" name="agree"> 이용약관 및 개인정보처리방침에 동의합니다.</span>
                                                </label>
                                            </div>

                                            <div class="form-actions left">
                                                <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1" id="submit">
                                                    주문하기
                                                </button>

                                            </div>
                                        </div>

                                        <div class="col-md-6 order_resume" id="order_resume">
                                            <div class="content-header-title">
                                                <h4 style="margin-bottom: 12px;">선택한 서비스 정보</h4>
                                            </div>
                                            <div class="row" id="result_onChangeService">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">서비스 이름을 확인해주세요.</label>
                                                        <input type="hidden" name="service_id" id="service_id" value="">
                                                        <input class="form-control square" name="service_name" type="text" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">최소 주문 수량</label>
                                                        <input class="form-control square" name="service_min" type="text" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">최대 주문 수량</label>
                                                        <input class="form-control square" name="service_max" type="text" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-4  col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label style="margin-bottom: 8px;">1천개 당 가격</label>
                                                            <input class="form-control square" name="service_price" type="text" readonly />
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label for="userinput8" style="margin-bottom: 8px;">서비스 설명을 확인해주세요.</label>
                                                        <textarea rows="10" name="service_desc" class="form-control square" readonly>
                        </textarea>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="mass_order" class="tab-pane fade">
                                <form class="form actionForm" action="./order/ajax_mass_order" data-redirect="./order/log"
                                      method="POST">
                                    <div class="x_content row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="content-header-title">
                                                <h6> One order per line in format</h6>
                                            </div>
                                            <div class="form-group">
                        <textarea id="editor" rows="14" name="mass_order" class="form-control square"
                                  placeholder="service_id|quantity|link"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="agree">
                                                    <span class="custom-control-label text-uppercase">Yes, i have confirmed the order!</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="mass_order_error" id="result_notification">
                                                <div class="content-header-title">
                                                    <h6><i class="fa fa-info-circle"></i> Note:</h6>
                                                </div>
                                                <div class="form-group">
                                                    Here you can place your orders easy! Please make sure you check all the prices and
                                                    delivery times before you place a order! After a order submited it cannot be canceled.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-actions left">
                                        <button type="submit" class="btn round btn-primary btn-min-width mr-1 mb-1">
                                            Place order </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .page-title h1 {
                margin-bottom: 5px;
            }

            .page-title .border-line {
                height: 5px;
                width: 250px;
                background: #eca28d;
                background: -webkit-linear-gradient(45deg, #eca28d, #f98c6b) !important;
                background: -o-linear-gradient(45deg, #eca28d, #f98c6b) !important;
                background: linear-gradient(45deg, #eca28d, #f98c6b) !important;
                position: relative;
                border-radius: 30px;
            }

            .page-title .border-line::before {
                content: '';
                position: absolute;
                left: 0;
                top: -2.7px;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: #fa6d7e;
                -webkit-animation-duration: 6s;
                animation-duration: 6s;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-name: moveIcon;
                animation-name: moveIcon;
            }

            @-webkit-keyframes moveIcon {
                from {
                    -webkit-transform: translateX(0);
                }

                to {
                    -webkit-transform: translateX(250px);
                }
            }
        </style>



        <script>
            $(function () {
                $('.datepicker').datepicker({
                    format: "dd/mm/yyyy",
                    autoclose: true,
                    startDate: truncateDate(new Date())
                });
                $(".datepicker").datepicker().datepicker("setDate", new Date());

                function truncateDate(date) {
                    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
                }

                $('.input-tags').selectize({
                    delimiter: ',',
                    persist: false,
                    create: function (input) {
                        return {
                            value: input,
                            text: input
                        }
                    }
                });
            });
        </script>
    </main>
</div>