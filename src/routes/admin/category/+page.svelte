<script lang="ts">
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import StoreCategory from "./StoreCategory.svelte";
    import type {CategoryListDto} from '$lib/types/category/CategoryListDto';

    let activeCnt = 0, deactiveCnt = 0, totalCnt = 0
    let category: CategoryListDto[] = []
    let allCategory: CategoryListDto[] = []
    let modalOpen = false
    let updateSortVal: {[key: number]: any} = {}
    let updateCategoryDto: CategoryListDto = {categoryId: 0, name: "", sort: 0, status: 0}
    // for search
    /** 검색 내용 */
    let query: string = ""

    const toggleModal = (isDone: boolean = false) => {
        modalOpen = !modalOpen
        if (isDone) syncCategory()
        if (!modalOpen)
            updateCategoryDto = {categoryId: 0, name: "", sort: 0, status: 0}
    }

    const syncCategory = () => {
        api.get("/admin/c/list").then(c => {
            category = c
            allCategory = c

            category.forEach(val => {
                updateSortVal[val.categoryId] = val.sort
            })

            activeCnt = category.filter(c => {
                return c.status === 1
            }).length

            deactiveCnt = category.length - activeCnt
            totalCnt = category.length
        })
    }

    onMount(() => syncCategory())

    const updateStatus = (categoryId: number) => {
        api.patch(`/admin/c/status/${categoryId}`).then(res => {
            if (res === null) return

            setTimeout(() => {
                alert(res.message)
            }, 200)
        })
    }

    const updateSort = (categoryId: number) => {
        let sort = updateSortVal[categoryId];

        api.patch(`/admin/c/sort/${categoryId}`, { sort })
            .then(res => {
                if (res === null) return

                alert(res.message)
            })
    }

    const updateCategory = (e: CategoryListDto) => {
        updateCategoryDto = {categoryId: 0, name: "", sort: 0, status: 0}
        updateCategoryDto = e
        toggleModal()
    }

    const statusFilter = (status: number | null) => {
        category = status === null ? [...allCategory] : allCategory.filter(c => c.status === status)
    }

    const search = () => {
        category = category.filter(c => {
            return c.name.includes(query)
        })
    }
</script>

<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                <span class="fa fa-th-large"></span> 카테고리 관리
            </h1>
        </div>
        <div class="col-md-3">
            <div class="d-flex">
                <button class="ml-auto btn btn-outline-primary" on:click={() => toggleModal()}>
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
                        <div class="btn-group w-30 m-b-10">
                            <button class="btn " on:click={() => statusFilter(null)}>전체 <span
                                class="badge badge-pill bg-azure">
                                  { totalCnt }
                                </span>
                            </button>
                            <button class="btn " on:click={() => statusFilter(1)}>활성화 <span
                                class="badge badge-pill bg-indigo">
                                  { activeCnt }
                                </span>
                            </button>
                            <button class="btn " on:click={() => statusFilter(0)}>비활성화 <span
                                class="badge badge-pill bg-indigo">
                                  { deactiveCnt }
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 search-area">
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="query" placeholder="검색" type="text" bind:value={query}>
                                <select class="form-control" id="" name="field">
                                    <option value="name">이름</option>
                                </select>
                                <button class="btn btn-primary btn-square" type="button" on:click={() => search()}>
                                    <span class="fe fe-search"></span>
                                </button>
                                <button class="btn btn-outline-danger btn-square btn-clear d-none" data-original-title="Clear"
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
                        <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item ajaxActionOptions"
                                                                          data-type="active"
                                                                          href="/admin/category/bulk_action/active"><i
                                class="dropdown-icon fe fe-check-square"></i> Active</a><a
                                class="dropdown-item ajaxActionOptions"
                                data-type="deactive" href="/admin/category/bulk_action/deactive"><i
                                class="dropdown-icon fe fe-x-square"></i> Deactive
                            All</a><a class="dropdown-item ajaxActionOptions" data-type="delete"
                                      href="/admin/category/bulk_action/delete"><i
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
                        <th class="text-center">Sorting</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each category as e}
                        <tr class="tr_">
                            <th class="text-center w-1">
                                <div class="custom-controls-stacked">
                                    <label class="form-check">
                                        <input type="checkbox" class="form-check-input check-item check_1"
                                               value="{e.categoryId}">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                            </th>
                            <td class="text-center text-muted">
                                {e.categoryId}
                            </td>
                            <td>
                                <div class="title">
                                    {e.name}
                                </div>
                            </td>
                            <td class="text-center w-10p">
                                <input type="number" class="form-control text-center" min="1" style="width:65px;"
                                       id="sort" bind:value="{updateSortVal[e.categoryId]}" on:change={() => updateSort(e.categoryId)}>
                            </td>
                            <td class="text-center w-10p">
                                <label for={`status_${e.categoryId}`} class="custom-switch">
                                <input id={`status_${e.categoryId}`} type="checkbox" class="custom-switch-input" checked={e.status === 1}
                                    on:change={() => updateStatus(e.categoryId)}>
                                <span class="custom-switch-indicator"></span>
                            </label></td>
                            <td class="text-center w-10p">
                                <div class="item-action dropdown">
                                    <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i
                                            class="fe fe-more-vertical"></i></a>
                                    <div class="dropdown-menu">
                                        <button on:click={() => {updateCategory(e)}} class="dropdown-item">
                                            <i class="dropdown-icon fe fe-edit"></i> 수정
                                        </button>
                                        <a href="/admin/category/delete/{e.categoryId}"
                                           class="dropdown-item ajaxDeleteItem"
                                           data-confirm_ms="카테고리를 정말로 삭제하시겠습니까?"
                                           data-redirect="/admin/category">
                                            <i class="dropdown-icon fe fe-trash-2"></i> Delete</a></div>
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
        <StoreCategory categoryInfo="{updateCategoryDto}" toggleModal={toggleModal}></StoreCategory>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>