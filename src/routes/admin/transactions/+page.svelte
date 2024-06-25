<script lang="ts">
    import type {AdminDepositListDto} from "$lib/types/deposit/AdminDepositListDto";
    import {api} from "$lib/util/ApiProvider";
    import {onMount} from "svelte";
    import {dateFormat} from "$lib/util/DateFormatter";
    import UpdateDeposit from "./UpdateDeposit.svelte";
    import type AdminOrderListDto from "$lib/types/order/AdminOrderListDto";

    let deposits: AdminDepositListDto[] = []
    let allDeposit: AdminDepositListDto[] = []
    let updateDepositInfo: AdminDepositListDto = {
        amount: 0,
        depositId: "",
        email: "",
        name: "",
        note: "",
        status: "",
        updatedAt: new Date()
    }
    let cancel = 0
    let pending = 0
    let done = 0
    let modalStatus = false;
    // for search
    /** 검색 타입 */
    let field: string = "id"
    /** 검색 내용 */
    let query: string = ""

    const syncData = async (status: string | null = null) => {
        let endPoint = "/admin/d/list";
        if (status !== null) endPoint += `?status=${status}`
        const res = await api.get(endPoint);

        if (res === null) return

        deposits = res

        pending = 0
        done = 0
        cancel = 0
        deposits.map(d => {
            switch (d.status) {
                case "PENDING":
                    pending++
                    break;
                case "DONE":
                    done++
                    break;
                case "CANCEL":
                    cancel++
                    break;
            }
        })

        allDeposit = [...deposits]
    }

    onMount(() => {
        syncData()
    })

    const initUpdateDepositInfo = () => {
        updateDepositInfo = {
            amount: 0,
            depositId: "",
            email: "",
            name: "",
            note: "",
            status: "",
            updatedAt: new Date()
        }
    }

    const toggleModal = (depositInfo: AdminDepositListDto|null, isDone = false) => {
        if (isDone) {
            syncData()
            initUpdateDepositInfo()
        }

        if (depositInfo === null) return modalStatus = false

        updateDepositInfo = depositInfo
        modalStatus = !modalStatus

        setTimeout(() => initUpdateDepositInfo(), 100)
    }

    const deleteDeposit = async (depositId: string) => {
        if (isNaN(Number(depositId))) return alert("충전이 완료된 기록만 수정 가능합니다.")

        if (confirm("충전 기록을 삭제하시겠습니까?") &&
            !confirm("삭제 이후엔 되돌릴 수 없습니다.\n정말 삭제하시겠습니까?")) return

        const res = await api.delete(`/admin/d/delete/${depositId}`);

        if (res === null) return

        alert(res.message)

        syncData()
    }

    const statusFilter = (status: string) => {
        deposits = status === "ALL" ? [...allDeposit] : allDeposit.filter(d => d.status === status)
    }

    const search = () => {
        deposits = deposits.filter(d => {
            if (field === "email") return d.email === query
            if (field === "note") return d.note.includes(query)
            if (field === "id") return String(d.depositId) === query
        })
    }
</script>

{#if modalStatus}
    <UpdateDeposit depositInfo={updateDepositInfo} toggleModal="{toggleModal}"></UpdateDeposit>
    <div class="modal-backdrop fade show"></div>
{/if}
<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                <span class="fa fa-file-text-o"></span> 충전 관리
            </h1>
        </div>
        <div class="col-md-3">

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
                            <button class="btn" on:click={() => statusFilter("ALL")}>
                                전체
                                <span class="badge badge-pill bg-azure">{cancel + pending + done}</span>
                            </button>
                            <button class="btn" on:click={() => statusFilter("DONE")}>
                                결제완료
                                <span class="badge badge-pill bg-indigo">{done}</span>
                            </button>
                            <button class="btn" on:click={() => statusFilter("PENDING")}>
                                대기중
                                <span class="badge badge-pill bg-indigo">{pending}</span>
                            </button>
                            <button class="btn" on:click={() => statusFilter("CANCELED")}>
                                취소
                                <span class="badge badge-pill bg-indigo">{cancel}</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 search-area">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" name="query" class="form-control" placeholder="검색" bind:value={query}>
                                <select name="field" class="form-control" id="" bind:value={field}>
                                    <option value="id">고유번호</option>
                                    <option value="email">이메일</option>
                                    <option value="note">메모</option>
                                </select>
                                <button class="btn btn-primary btn-square" on:click={() => search()} type="button">
                                    <span class="fe fe-search"></span>
                                </button>
                                <button class="btn btn-outline-danger btn-square btn-clear d-none">
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
                충전 관리
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    <thead>
                    <tr>
                        <th class="text-center w-1">순번</th>
                        <th class="">유저</th>
                        <th class="text-center">고유 번호</th>
                        <th class="text-center">충전 방식</th>
                        <th class="text-center">충전액</th>
                        <th class="text-center">메모</th>
                        <th class="text-center">충전일</th>
                        <th class="text-center">상태</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each deposits as d, idx}
                        <tr class="tr_depoist{d.depositId}">
                            <td class="text-center text-muted">{idx}</td>
                            <td>{d.name}</td>
                            <td class="text-center w-10p">{d.depositId}</td>
                            <td class="text-center w-10p">무통장 입금</td>
                            <td class="text-center w-10p">{d.amount}</td>
                            <td class="text-center w-10p">{d.note}</td>
                            <td class="text-center w-10p text-muted">{dateFormat(d.updatedAt)}</td>
                            <td class="text-center w-5p">
                                {#if (d.status === 'DONE')}
                                    <span class="badge bg-green-lt">결제완료</span>
                                {:else if (d.status === 'PENDING')}
                                    <span class="badge bg-indigo-lt">대기중</span>
                                {:else if (d.status === 'CANCEL')}
                                    <span class="badge bg-gray-lt">취소됨</span>
                                {/if}
                            </td>
                            <td class="text-center w-5p">
                                <div class="item-action dropdown">
                                    <span data-toggle="dropdown" class="icon cursor-pointer">
                                        <i class="fe fe-more-vertical"></i>
                                    </span>
                                    <div class="dropdown-menu">
                                        <button class="dropdown-item" on:click={() => toggleModal(d)}>
                                            <i class="dropdown-icon fe fe-edit"></i> 수정
                                        </button>
                                        <button class="dropdown-item" on:click={() => deleteDeposit(d.depositId)}>
                                            <i class="dropdown-icon fe fe-trash-2"></i> 삭제
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