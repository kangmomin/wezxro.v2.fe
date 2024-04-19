<script>
    import {writable} from "svelte/store";
    import {api} from "$lib/util/ApiProvider.js";
    import {onMount} from "svelte";

    const result = "default"
    const isDemo = false
    let formType = "none"
    export let data
    const {
        props
    } = data

    /**
     * @typedef Deposit
     * @property {number} amount
     * @property {number} depositId
     * @property {String} updatedAt
     */

    /**
     * @type {Deposit[]}
     */
    let deposit = []

    onMount(() => {
        api.get("/d/list").then(res => {
            if (res == null) return

            deposit = res
        })
    })

    const payform = writable(false);

    function togglePayForm() {
        payform.set(true);
        let elementById = document.getElementById("payForm");
        if (elementById === null) return
        elementById.style.display = "block"
    }

    /** @type {number} */
    let payamount = 0,
        /** @type {string} */
        payname = "",
        /** @type {string} */
        business_name,
        /** @type {string} */
        business_regno,
        /** @type {string} */
        business_owner,
        /** @type {string} */
        business_phone,
        /** @type {string} */
        business_email,
        /** @type {string} */
        personal_phone,
        /** @type {boolean} */
        agree_terms,
        /** @type {boolean} */
        agree_notices;

    async function addDeposit() {
        if (!agree_terms || !agree_notices) return alert("약관에 전체 동의를 해주셔야 합니다.")
        if (payamount === null || payamount < 1000) return alert("충전은 1000원부터 가능합니다")
        if (payname === null || payname === "") return alert("입금자 명이 없을 시 충전이 정상처리되지 않습니다.")

        let data = await api.post("/d/add", {
            payamount,
            payname,
            business_email,
            business_phone,
            business_owner,
            business_name,
            business_regno,
            personal_phone,
        });

        alert(data.message)
        location.href = "/dashboard/transactions"
    }
</script>

<style>
    #payForm {
        display: block;
    }
</style>

{#if $payform }
    <div class="modal1 payform" id="payForm" style="display:'block';" on:submit|preventDefault={addDeposit}>
        <div class="modal_body" style="height: 850px;">
            <a class="main-logo" href="./transactions"><img
                    alt="logo" src="/public/assets/logo/logo_white.png"
                    style="height: 80px;"></a>
            <form action="" class="form" method="POST">
                <h4 style="margin-bottom: 18px;">무통장입금 <span style="font-weight: 400;">충전 신청</span></h4>
                <div class="form-group">
                    {#if !isDemo }
                        <p style="color: black; margin-bottom: 10px; font-size: 16px;">부산은행 112-2007-03-7109 정화랑</p>
                    {:else}
                        <p style="color: black; margin-bottom: 10px; font-size: 16px;">충전 계좌는 회원가입 후 표시됩니다.</p>
                    {/if}
                    <label class="control-label" for="username"
                           style="color: black; margin-bottom: 10px; font-size: 16px;">충전
                        금액을 입력해주세요.</label>
                    <input class="form-control" name="payamount" bind:value={payamount} type="number">
                </div>
                <div class="form-group" style="margin-top: 18px;">
                    <label class="control-label" for="username"
                           style="color: black; margin-bottom: 10px; font-size: 16px;">입금자명을 입력해주세요.</label>
                    <input class="form-control" name="payname" type="text" bind:value={payname}>
                </div>


                <div class="form-group" style="margin-top: 18px;">
                            <span class="control-label"
                                  style="color: black; margin-bottom: 10px; font-size: 16px; margin-right: 10px;">
                                <input checked id="none" name="type" type="radio" value="선택안함"
                                       on:click={() => formType = "none"}> 선택안함
                            </span>
                    <span class="control-label"
                          style="color: black; margin-bottom: 10px; font-size: 16px; margin-right: 10px;">
                                <input id="business" name="type" type="radio" value="세금계산서"
                                       on:click={() => formType = "businessform"}> 세금계산서
                            </span>
                    <span class="control-label"
                          style="color: black; margin-bottom: 10px; font-size: 16px; margin-right: 10px;">
                                <input id="personal" name="type" type="radio" value="현금영수증"
                                       on:click={() => formType = "personalform"}/>
                                현금영수증
                            </span>
                </div>
                {#if formType === "businessform" }
                    <div class="form-group businessform" style="margin-top: 4px;">
                        <div class="row">
                            <div class="col-md-6" style="margin-bottom: 8px;">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">회사명</label>
                                <input class="form-control" id="business_name" name="business_name" type="text">
                            </div>
                            <div class="col-md-6" style="margin-bottom: 8px;">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">사업자번호</label>
                                <input class="form-control" id="business_regno" name="business_regno"
                                       type="text">
                            </div>
                            <div class="col-md-6" style="margin-bottom: 8px;">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">대표자</label>
                                <input class="form-control" id="business_owner" name="business_owner"
                                       type="text">
                            </div>
                            <div class="col-md-6" style="margin-bottom: 8px;">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">연락처</label>
                                <input class="form-control" id="business_phone" name="business_phone"
                                       type="text">
                            </div>
                            <div class="col-md-12">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">이메일</label>
                                <input class="form-control" id="business_email" name="business_email"
                                       type="text">
                            </div>
                        </div>
                    </div>
                {:else if formType === "personalform"}
                    <div class="form-group personalform" style="margin-top: 4px;">
                        <div class="row">
                            <div class="col-md-12">
                                <label class="control-label" for="username"
                                       style="color: black; margin-bottom: 10px; font-size: 16px;">전화번호</label>
                                <input class="form-control" id="personal_phone" name="personal_phone"
                                       type="text">
                            </div>
                        </div>
                    </div>
                {/if}
                <div class="form-group">
                    <label class="custom-control custom-checkbox">
                <span class="custom-control-label text-uppercase"
                      style="font-size: 16px; margin-bottom: 8px; font-weight: 400; line-height: 1.5"><input
                        class="custom-control-input"
                        name="agree" type="checkbox" bind:checked={agree_terms}> 입금을 신청하실 경우 <span
                        style="font-weight: 500;">이용약관</span>에 동의하는 것으로 간주되는 것을 확인하였습니다.</span>
                    </label>
                </div>
                <div class="form-group" style="padding-bottom: 12px;">
                    <label class="custom-control custom-checkbox">
                <span class="custom-control-label text-uppercase"
                      style="font-size: 16px; margin-bottom: 8px; font-weight: 400; line-height: 1.5"><input
                        class="custom-control-input"
                        name="agree" type="checkbox" bind:checked={agree_notices}> <span
                        style="font-weight: 500;">충전 신청 후</span> 입금해주셔야 정상적으로 처리됩니다, <span
                        style="font-weight: 500;">유의사항</span> 확인 부탁드립니다.</span>
                    </label>
                </div>
                <div class="form-actions left text-center">
                    <input name="payment_id" type="hidden" value="">
                    <input name="payment_method" type="hidden" value="">
                    {#if isDemo }
                        <div class="nav-link btn btn-info mb-1">둘러보기는 충전할 수 없습니다.</div>
                    { :else }
                        <button type="submit" class="nav-link btn btn-info mb-1" name=""
                                style="width: 100%;">
                            충전 신청 <span style="font-weight: 400; font-size: 12px;">(1분 이내 자동 처리)</span>
                        </button>
                    {/if}
                    <a href="./transactions"
                       style="font-size: 14px; color: grey; font-weight: 700; text-align: center;"
                       on:click={() => payform.set(false)}>돌아가기</a>
                </div>
            </form>
        </div>
    </div>
{/if}
<div class="modal1 paycompleted" style="display: {result === 'default' ? 'none' : 'block'};">
    <div class="modal_body" style="height: 350px;">
        <a class="main-logo" href="/transactions"><img
                alt="logo" src="/public/assets/logo/logo_white.png"
                style="height: 100px;"></a>
        <h4 style="margin-bottom: 18px;"><span style="font-weight: 400;">충전 신청이 </span>완료<span
                style="font-weight: 400;">되었습니다.</span></h4>
        <h6 style="font-size: 18px; font-weight: 400; margin-top: 14px;">입금 후 1분 이내에 충전됩니다.</h6>
        <a class="nav-link btn btn-info mb-1" href="/transactions" style="margin-top: 22px; ">
            { props.KR_NAME }로 돌아가기
        </a>
    </div>
    <style>
        .modal1 {
            position: fixed;
            top: 0;
            left: 0;
            display: none;
            width: 100%;
            z-index: 1050;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal_body {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400px;
            height: 650px;
            padding: 40px;
            background-color: rgb(255, 255, 255);
            border-radius: 10px;
            box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
            transform: translateX(-50%) translateY(-50%);
        }
    </style>
</div>
<div class="page-title m-b-20 add-funds-form-content">
    <div class="row justify-content-between">
        <div class="col-md-12" style="padding-left: 0px;">
            <h1 class="page-title" style="font-size: 32px; font-weight: 600; margin-bottom: 24px;">
                충전 신청
            </h1>
        </div>
        <div class="col-md-6">
            <div class="row card justify-content-between"
                 style="padding-left: 24px; padding-right: 24px; padding-top: 36px; padding-bottom: 36px;">
                <div class="col-md-12">
                    <h2>충전 신청</h2>
                    <h4 style="margin-bottom: 8px; font-weight: 400;">원하는 결제 수단을 <strong>선택 후</strong>
                        충전해주세요.
                    </h4>

                    <input class="nav-link btn btn-info mb-1" on:click={togglePayForm}
                           style="margin-top: 22px; width: 100%; font-size: 24px;"
                           type="button" value="무통장 입금"/>
                    <div class="row">
                        <div class="col-md-12 data-empty text-center" style="height: auto">
                            {#if deposit.length > 0 }
                                <div class="row">
                                    <div class="col-md-12 col-xl-12" style="margin-top: 24px;">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-bordered table-vcenter card-table">
                                                <thead>
                                                <tr>
                                                    <th class="text-center">결제번호</th>
                                                    <th class="text-center">결제수단</th>
                                                    <th class="text-center">결제금액</th>
                                                    <th class="text-center">결제일자</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { #each deposit as e }
                                                    <tr style="font-size: 14px;">
                                                        <td class="text-center w-5p text-muted">
                                                            { e.depositId }
                                                        </td>
                                                        <td class="text-center w-10p">무통장 입금</td>
                                                        <td class="text-center w-10p">
                                                            {Number(e.amount).toLocaleString()}원
                                                        </td>
                                                        <td class="text-center w-5p text-muted"
                                                            style="line-height: 1.5;">
                                                            {e.updatedAt.replace("T", " ").split(".")[0]}
                                                        </td>
                                                    </tr>
                                                {/each}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            {:else}
                                <div class="content" style="padding-bottom: 150px">
                                    데이터가 없습니다.
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row card justify-content-between"
                 style="padding-left: 24px; padding-right: 24px; padding-top: 36px; padding-bottom: 36px;">
                <div class="col-md-12">
                    <h2>유의사항</h2>
                    <h4 style="margin-bottom: 8px; font-weight: 400;">꼭 <strong>유의사항</strong>을 확인 후
                        충전해주세요.
                    </h4>
                    <h6 style="margin-top: 24px; font-size: 16px; font-weight: 400;">
                        <li style="margin-bottom: 12px;">결제 금액과 입금자 명이 동일해야 합니다.</li>
                        <li style="margin-bottom: 12px;">충전 신청 후 입금해주셔야 정상적으로 처리됩니다.</li>
                        <li style="margin-bottom: 12px;">세금 계산서나 현금영수증은 충전시 같이 신청 부탁드립니다.</li>
                        <li style="margin-bottom: 12px;">충전한 포인트는 환불 및 양도가 불가능 합니다.</li>
                        <li style="margin-bottom: 12px;">오류가 발생하거나 문제가 생기면 고객센터로 연락 부탁드립니다.</li>
                        <li style="margin-bottom: 12px;">충전 신청 후 10분 내로 입금하셔야합니다.</li>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</div>