<script lang="ts">
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import StoreService from "../services/StoreService.svelte";
    import StoreCategory from "./StoreCategory.svelte";
    import type { CategoryListDto } from '$lib/types/category/CategoryListDto';

    let activeCnt = 0
    let category: CategoryListDto[] = []
    let modalOpen = false

    const toggleModal = () => {
        modalOpen = !modalOpen
    }

    onMount(async () => {
        api.get("/admin/c/list").then(c => category = c)
    })

    function toggleStatus(status: number) {

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
                        <div class="btn-group w-30 m-b-10"><a class="btn " href="/admin/category?status=3">All <span
                                class="badge badge-pill bg-azure">
                  { category.length }
                </span></a><a class="btn " href="/admin/category?status=1">Active <span
                                class="badge badge-pill bg-indigo">
                  { activeCnt }
                </span></a></div>
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
                                    <label class="form-check"><input type="checkbox"
                                                                     class="form-check-input check-item check_1"
                                                                     name="ids[]" value="{e.categoryId}"><span
                                            class="custom-control-label"></span>
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
                            <td class="text-center w-10p"><input type="text"
                                                                 class="form-control text-center ajaxChangeSort"
                                                                 data-url="/admin/c/sort/"
                                                                 data-id="{e.categoryId}" min="1" style="width:65px;"
                                                                 id="sort" value="{e.sort}"></td>
                            <td class="text-center w-10p"><label class="custom-switch">
                                <input type="checkbox" name="item_status" data-id="{e.categoryId}"
                                       data-status="{e.status === 1}"
                                       data-action="/admin/c/status/"
                                       class="custom-switch-input ajaxToggleItemStatus"
                                       checked={e.status === 1}>
                                <span class="custom-switch-indicator"></span>
                            </label></td>
                            <td class="text-center w-10p">
                                <div class="item-action dropdown">
                                    <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i
                                            class="fe fe-more-vertical"></i></a>
                                    <div class="dropdown-menu"><a href="/admin/category/update/{e.categoryId}"
                                                                  class="dropdown-item ajaxModal" data-confirm_ms=""><i
                                            class="dropdown-icon fe fe-edit"></i>
                                        Edit</a>
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
        <StoreCategory toggleModal={toggleModal}></StoreCategory>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>