<script lang="ts">
    import {api} from "$lib/util/ApiProvider.js";
    import {onMount} from "svelte";
    import StaticRate from "./StaticRate.svelte";
    import type {UserListDto} from "$lib/types/Account/UserListDto";
    import type UpdateUserInfo from '$lib/types/Account/UpdateUserInfo';
    import AddFund from "./AddFund.svelte";
    import type UpdateMoneyDto from "$lib/types/Account/UpdateMoneyDto";
    import SetBalance from "./SetBalance.svelte";
    import SetPassword from "./SetPassword.svelte";
    import BasicStatus from "$lib/types/common/BasicStatus";
    import SendMail from "./SendMail.svelte";

    let userList: UserListDto[] = []
    let activeCnt = 0
    let deactiveCnt = 0
    let userMail = ""
    let updateFundUserInfo: UpdateMoneyDto = {
        email: "", balance: 0, password: "", userId: 0
    }
    let updateUserInfo: UpdateUserInfo = {
        email: '', staticRate: 0, userId: 0
    }

    let modalStatus = {
        staticRate: false,
        addFund: false,
        setFund: false,
        setPassword: false,
        sendMail: false
    }


    const toggleModal = {
        staticRate: (userId: number, userEmail: string, staticRate: number) => {
            modalStatus.staticRate = !modalStatus.staticRate
            updateUserInfo.email = userEmail
            updateUserInfo.userId = userId
            updateUserInfo.staticRate = staticRate
        },
        addFund: (userId: number, userEmail: string, isDone = false) => {
            updateFundUserInfo.userId = userId
            updateFundUserInfo.email = userEmail
            modalStatus.addFund = !modalStatus.addFund

            if (isDone) syncUserList()
        },
        setBalance: (userId: number, userEmail: string, userBalance: number, isDone = false) => {
            updateFundUserInfo.userId = userId
            updateFundUserInfo.email = userEmail
            updateFundUserInfo.balance = userBalance
            modalStatus.setFund = !modalStatus.setFund

            if (isDone) syncUserList()
        },
        setPassword: (userId: number, userEmail: string) => {
            updateUserInfo.userId = userId
            updateUserInfo.email = userEmail
            modalStatus.setPassword = !modalStatus.setPassword
        },
        sendMail: (userEmail: string) => {
            userMail = userEmail
            modalStatus.sendMail = !modalStatus.sendMail
        }
    }

    const updateStaticRate = (userId: number, staticRate: number) => {
            userList = userList.map(u => {
                if (u.userId === userId) u.staticRate = staticRate
                return u
            })
    }

    const deleteAccount = (userId: number) => {
        if (!confirm("정말 삭제하시겠습니까?")) return;

        api.patch("/admin/u/status/update", {
            userId, status: BasicStatus.DELETED
        }).then(res => {
            if (res === null) return;

            alert("유저를 삭제하였습니다.")
            syncUserList()
        })
    }

    const syncUserList = () => api.get("/admin/u/list").then(res => {
        userList = res.accountList
        activeCnt = res.activateCnt
        deactiveCnt = res.deactivateCnt
    })

    const updateStatus = (userId: number, status: string) => {
        let newStatus

        if (status === BasicStatus.ACTIVE) newStatus = BasicStatus.DEACTIVE
        if (status === BasicStatus.DEACTIVE) newStatus = BasicStatus.ACTIVE

        api.patch("/admin/u/status/update", {
            status: newStatus, userId
        }).then(res => {
            if (res === null) return;

            syncUserList()
        })
    }

    onMount(() => syncUserList())

</script>

<div class="row" id="result_notification">
    {#if modalStatus.staticRate }
        <StaticRate updateUserInfo={updateUserInfo} toggleModal={toggleModal.staticRate} updateStaticRate={updateStaticRate}></StaticRate>
        <div class="modal-backdrop fade show"></div>
    {/if}
    {#if modalStatus.addFund }
        <AddFund updateMoneyUserInfo={updateFundUserInfo} toggleModal={toggleModal.addFund}></AddFund>
        <div class="modal-backdrop fade show"></div>
    {/if}
    {#if modalStatus.setFund }
        <SetBalance updateMoneyUserInfo={updateFundUserInfo} toggleModal={toggleModal.setBalance}></SetBalance>
        <div class="modal-backdrop fade show"></div>
    {/if}
    {#if modalStatus.setPassword }
        <SetPassword user={updateUserInfo} toggleModal={toggleModal.setPassword}></SetPassword>
        <div class="modal-backdrop fade show"></div>
    {/if}
    {#if modalStatus.sendMail}
        <SendMail userEmail="{userMail}" toggleModal="{toggleModal.sendMail}"></SendMail>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>

<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                <span class="fe fe-users"></span> 회원 관리
            </h1>
        </div>
        <div class="col-md-3">
            <div class="d-flex">
                <button class="ml-auto btn btn-outline-primary">
                    <span class="fe fe-plus"></span>
                    추가
                </button>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">필터</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <div class="btn-group w-30 m-b-10">
                            <a class="btn " href="./users?status=3">All <span
                                    class="badge badge-pill bg-azure">{userList.length}</span></a>
                            <a class="btn " href="./users?status=1">Active <span
                                    class="badge badge-pill bg-indigo">{activeCnt}</span></a>
                            <a class="btn " href="./users?status=0">
                                Deactive
                                <span class="badge badge-pill bg-indigo">
                                    {deactiveCnt}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 search-area">
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="query" placeholder="검색" type="text" value="">
                                <select class="form-control" id="" name="field">
                                    <option value="email">이메일</option>
                                    <option value="name">Name</option>
                                    <option value="history_ip">History ip</option>
                                </select>
                                <button class="btn btn-primary btn-square btn-search" type="button">
                                    <span class="fe fe-search"></span>
                                </button>
                                <button class="btn btn-outline-danger btn-square btn-clear d-none"
                                        data-original-title="Clear"
                                        data-placement="bottom" data-toggle="tooltip" title="" type="button">
                                    <span class="fe fe-x"></span>
                                </button>
                            </div>
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
                <h3 class="card-title">회원 목록</h3>
                <div class="card-options">
                    <div class="item-action dropdown action-options">
                        <button class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" type="button">
                            Actions <span class="fe fe-chevrons-down"></span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item ajaxActionOptions" data-type="active"
                               href="./users/bulk_action/active">
                                <i class="dropdown-icon fe fe-check-square"></i>
                                Active
                            </a>
                            <a class="dropdown-item ajaxActionOptions" data-type="deactive"
                               href="./users/bulk_action/deactive">
                                <i class="dropdown-icon fe fe-x-square"></i>
                                Deactive All
                            </a>
                            <a class="dropdown-item " data-type="csv" href="./users/export/csv">
                                <i class="dropdown-icon fe fe-download"></i>
                                Export CSV
                            </a>
                            <a class="dropdown-item " data-type="excel" href="./users/export/excel">
                                <i class="dropdown-icon fe fe-download"></i> Export excel</a>
                            <a class="dropdown-item ajaxActionOptions" data-type="delete"
                               href="./users/bulk_action/delete">
                                <i class="dropdown-icon fe fe-trash-2"></i> Delete
                            </a>
                        </div>
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
                                    <input class="form-check-input check-items check-all" data-name="check_1"
                                           type="checkbox">
                                    <span class="custom-control-label"></span>
                                </label>
                            </div>
                        </th>
                        <th class="text-center w-1">#</th>
                        <th class="">User Profile</th>
                        <th class="text-center">Balance</th>
                        <th class="text-center">Static rate</th>
                        <th class="text-center">Custom rate</th>
                        <th class="text-center">Role</th>
                        <th class="text-center">Created</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each userList as a}
                        <tr class="tr_{a.userId}">
                            <th class="text-center w-1">
                                <div class="custom-controls-stacked">
                                    <label class="form-check">
                                        <input type="checkbox" class="form-check-input check-item check_1" name="ids[]"
                                               value="{a.userId}">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                            </th>
                            <td class="text-center text-muted">{ a.userId }</td>
                            <td>
                                <div class="title">
                                    <h6>{a.name}</h6>
                                </div>
                                <div class="sub text-muted">{ a.email }</div>
                            </td>
                            <td class="text-center w-10p">{ a.money }</td>
                            <td class="text-center w-10p">
                                <button type="button" class="btn btn-square btn-outline-info btn-sm" on:click={() => toggleModal.staticRate(a.userId, a.email, a.staticRate)}>
                                    <i class="fe fe-plus mr-2"></i>Static Rate
                                </button>
                            </td>
                            <td class="text-center w-10p">
                                <button type="button" class="btn btn-square btn-outline-info btn-sm">
                                    <i class="fe fe-plus mr-2"></i>Custom Rate
                                </button>
                            </td>
                            <td class="text-center text-muted w-5p">{a.role}</td>
                            <td class="text-center w-15p">{a.createdAt}</td>
                            <td class="text-center w-5p">
                                <label class="custom-switch">
                                    <input type="checkbox" name="item_status" class="custom-switch-input"
                                           checked={ a.status === BasicStatus.ACTIVE } on:change={() => updateStatus(a.userId, a.status)}>
                                    <span class="custom-switch-indicator"></span>
                                </label>
                            </td>
                            <td class="text-center w-5p">
                                <div style="cursor: pointer" class="item-action dropdown">
                                    <i data-toggle="dropdown" class="icon">
                                        <i class="fe fe-more-vertical"></i>
                                    </i>
                                    <div class="dropdown-menu">
                                        <a href="./users/update/<%= a.userId %>"
                                           class="dropdown-item ajaxModal" data-confirm_ms="">
                                            <i class="dropdown-icon fe fe-edit"></i>
                                            Edit
                                        </a>
                                        <a href="./users/view_user/<%= a.userId %>"
                                           class="dropdown-item ajaxViewUser" data-confirm_ms="">
                                            <i class="dropdown-icon fe fe-eye"></i>
                                            View User
                                        </a>
                                        <button style="cursor: pointer" class="dropdown-item"
                                                on:click={() => toggleModal.addFund(a.userId, a.email)}>
                                            <i class="dropdown-icon fe fe-dollar-sign"></i>
                                            잔액 추가
                                        </button>
                                        <button style="cursor: pointer" class="dropdown-item"
                                                on:click={() => toggleModal.setBalance(a.userId, a.email, a.money)}>
                                            <i class="dropdown-icon fe fe-credit-card"></i>
                                            잔액 설정
                                        </button>
                                        <button style="cursor: pointer" class="dropdown-item"
                                                on:click={() => toggleModal.setPassword(a.userId, a.email)}>
                                            <i class="dropdown-icon fe fe-lock"></i>
                                            비밀번호 설정
                                        </button>
                                        <button style="cursor: pointer" class="dropdown-item"
                                                on:click={() => toggleModal.sendMail(a.email)}>
                                            <i class="dropdown-icon fe fe-mail"></i>
                                            메일 보내기
                                        </button>
                                        <a href="./users/info/<%= a.userId %>" class="dropdown-item ajaxModal"
                                           data-confirm_ms="">
                                            <i class="dropdown-icon fe fe-help-circle"></i>
                                            More detail
                                        </a>
                                        <button class="dropdown-item" on:click={() => deleteAccount(a.userId)}>
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