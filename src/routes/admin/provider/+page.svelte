<script lang="ts">
    import UpdateProvider from "./update/UpdateProvider.svelte";
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import type ProviderListDto from '$lib/types/provider/ProviderListDto';

    let providers: ProviderListDto[] = []
    let activeCnt = 0
    let deactiveCnt = 0
    let updateProviderId = 0
    $: modalOpen = false

    const toggleModal = (providerId: number, isDone: boolean = false) => {
        if (isDone) syncData()
        updateProviderId = providerId
        modalOpen = !modalOpen
    }

    const syncProvider = (providerId: number) => {
        api.post(`/admin/p/sync/${providerId}`, {})
            .then((res) => res !== null ? alert("동기화하였습니다.") : null)
    }
    const syncBalance = async (providerId: number) => {
        let res = await api.post(`/admin/p/sync/balance/${providerId}`);
        if (res === null) return

        alert(res.message)
        syncData()
    }

    const syncData = () => {
        api.get("/admin/p/list").then(provider => {
            providers = provider
            providers.forEach((e) => {
                e.status === 1 ? activeCnt++ : deactiveCnt++
            })
        })
    }

    onMount(() => syncData())

    const deleteProvider = async (providerId: number) => {
        if (confirm("정말 삭제하시겠습니까? 하위 서비스까지 전부 삭제됩니다.") &&
            !confirm("추후 데이터를 복구할 수 없습니다. 삭제하시겠습니까?")) return

        const res = await api.delete(`/admin/p/delete/${providerId}`);

        if (res === null) return;
        alert(res.message)

        syncData()
    }
</script>

<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                <span class="fe fe-link"></span> 도매처 관리
            </h1>
        </div>
        <div class="col-md-3">
            <div class="d-flex">
                <button class="ml-auto btn btn-outline-primary" on:click={() => toggleModal(0)}>
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
                <div class="card-options">
                    <a class="card-options-collapse" data-toggle="card-collapse" href="#"><i
                            class="fe fe-chevron-up"></i></a>
                    <a class="card-options-remove" data-toggle="card-remove" href="#"><i class="fe fe-x"></i></a>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <div class="btn-group w-30 m-b-10"><a class="btn " href="./provider?status=3">All <span
                                class="badge badge-pill bg-azure">
                           {providers.length}
                        </span></a>
                            <a class="btn " href="./provider?status=1">
                                Active
                                <span class="badge badge-pill bg-indigo">
                          {activeCnt}
                        </span>
                            </a>
                            <a class="btn " href="./provider?status=0">Deactive <span
                                    class="badge badge-pill bg-indigo">
                          {deactiveCnt}
                        </span></a>

                        </div>
                    </div>
                    <div class="col-md-4 search-area">
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="query" placeholder="검색" type="text" value="">
                                <select class="form-control" id="" name="field">
                                    <option value="name">이름</option>
                                </select>
                                <button class="btn btn-primary btn-square btn-search" type="button"><span
                                        class="fe fe-search"></span></button>
                                <button class="btn btn-outline-danger btn-square btn-clear d-none"
                                        data-original-title="Clear"
                                        data-placement="bottom" data-toggle="tooltip" title="" type="button"><span
                                        class="fe fe-x"></span></button>
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
                <h3 class="card-title">Lists</h3>
                <div class="card-options">
                    <div class="item-action dropdown action-options">
                        <button class="btn btn-outline-primary dropdown-toggle"
                                data-toggle="dropdown" type="button">Actions <span
                                class="fe fe-chevrons-down"></span></button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item ajaxActionOptions" data-type="active"
                               href="./provider/bulk_action/active">
                                <i class="dropdown-icon fe fe-check-square"></i>
                                Active
                            </a>
                            <a class="dropdown-item ajaxActionOptions" data-type="deactive"
                               href="./provider/bulk_action/deactive">
                                <i class="dropdown-icon fe fe-x-square"></i>
                                Deactive
                                All</a><a class="dropdown-item ajaxActionOptions" data-type="delete"
                                          href="./provider/bulk_action/delete"><i
                                class="dropdown-icon fe fe-trash-2"></i> Delete</a>
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
                                <label class="form-check"><input class="form-check-input check-items check-all"
                                                                 data-name="check_1"
                                                                 type="checkbox"><span
                                        class="custom-control-label"></span>
                                </label>
                            </div>
                        </th>
                        <th class="text-center w-1">#</th>
                        <th class="">Name</th>
                        <th class="text-center">Balance</th>
                        <th class="text-center">Description</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>

                    {#each providers as p, i}
                        <tr class="tr_fae232b7c478efc3946f1e002e0304c6">
                            <th class="text-center w-1">
                                <div class="custom-controls-stacked">
                                    <label class="form-check"><input type="checkbox"
                                                                     class="form-check-input check-item check_1"
                                                                     name="ids[]" value={p.providerId}><span
                                            class="custom-control-label"></span>
                                    </label>
                                </div>
                            </th>
                            <td class="text-center text-muted">
                                {i + 1}
                            </td>
                            <td>
                                <a href={ p.apiUrl } target="_blank">
                                    {p.name}
                                </a>
                            </td>
                            <td class="text-center w-10p">
                                {p.balance}
                            </td>
                            <td class="text-center w-15p">
                                {p.description}
                            </td>
                            <td class="text-center w-10p"><label class="custom-switch">
                                <input type="checkbox" name="item_status" data-id="{ p.providerId }"
                                       data-status={p.status} data-action="/admin/p/status/"
                                       class="custom-switch-input ajaxToggleItemStatus" checked={p.status === 1}>
                                <span class="custom-switch-indicator"></span>
                            </label></td>
                            <td class="text-center w-20p">
                                <div class="btn-group">
                                    <button class="btn btn-icon btn-outline-info" on:click={() => toggleModal(p.providerId)}>
                                        <i class="fe fe-edit"></i>
                                    </button>
                                    <button on:click={() => syncBalance(p.providerId)} class="btn btn-icon btn-outline-info">
                                        <i class="fe fe-dollar-sign"></i>
                                    </button>
                                    <button class="btn btn-icon btn-outline-info"
                                       data-toggle="tooltip" on:click={() => syncProvider(p.providerId)}
                                       data-placement="bottom" title="Sync services">
                                        <i class="fe fe-refresh-cw"></i>
                                    </button>
                                    <button class="btn btn-icon btn-outline-info" on:click={() => deleteProvider(p.providerId)}>
                                        <i class="fe fe-trash-2"></i>
                                    </button>
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

<div class="row" id="result_notification">
    {#if modalOpen }
        <UpdateProvider className="modal show" styleName="display: block" providerId={updateProviderId} toggleModal={toggleModal}></UpdateProvider>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>