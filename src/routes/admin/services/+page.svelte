<script lang="ts">
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider";
    import StoreService from "./StoreService.svelte";
    import type {CategoryListDto} from "$lib/types/category/CategoryListDto";
    import type {ServiceListDto} from "$lib/types/service/ServiceListDto";
    import type {UpdateServiceDto} from "$lib/types/service/UpdateServiceDto";

    let categoryId: number = Number($page.url.searchParams.get("categoryId") || "0");
    let category: CategoryListDto[] = []
    let services: ServiceListDto[] = []
    let allServices: ServiceListDto[] = []

    //** 검색을 위한 필드 */
    let query = "",
        field = "all"

    let updateServiceData: UpdateServiceDto|null = {
        categoryId: 0,
        originalRate: 0,
        apiServiceId: 0,
        description: "",
        max: 0,
        min: 0,
        name: "",
        providerId: 0,
        rate: 0,
        serviceId: 0,
        status: 0,
        type: ""
    }
    let isUpdate = false

    $: modalOpen = false

    onMount(() => syncData())

    const syncData = () => {
        api.get(`/admin/c/list`).then(c => category = c)

        api.get(`/admin/s/list?category=${categoryId}`).then(s => {
            services = s
            allServices = s
        })
    }

    const toggleModal = (isDone: boolean = false) => {
        isUpdate = false
        updateServiceData = {
            apiServiceId: 0,
            categoryId: 0,
            description: "",
            max: 0,
            min: 0,
            name: "",
            originalRate: 0,
            providerId: 0,
            rate: 0,
            serviceId: 0,
            status: 0,
            type: ""
        }
        modalOpen = !modalOpen
        if (isDone) syncData()

    }

    const deleteService = async (serviceId: number) => {
        if (confirm("정말 삭제하시겠습니까?") && !confirm("복구 할 수 없습니다. 정말 하시겠습니까?")) return

        let res = await api.delete(`/admin/s/delete/${serviceId}`);
        if (res === null) return;
        alert("서비스를 삭제하였습니다.")
        syncData()
    }

    const updateService = (service: ServiceListDto) => {
        updateServiceData = {
            serviceId: service.serviceId,
            apiServiceId: service.apiServiceId,
            categoryId: service.categoryId,
            originalRate: service.originalRate,
            description: service.description,
            max: service.max,
            min: service.min,
            name: service.name,
            providerId: service.providerId,
            rate: service.rate,
            status: service.status,
            type: service.type
        }
        isUpdate = true
        modalOpen = !modalOpen
    }

    const updateStatus = async (serviceId: number) => {
        let res = await api.patch(`/admin/s/status/${serviceId}`);

        if (res === null) {
            let e = document.getElementById(`statusSwitch${serviceId}`);
            // @ts-ignore
            e.checked = !e.checked
            return
        }

        alert(res.message)
    }

    const deleteAllCustomRates = async (serviceId: number) => {
        const res = await api.delete(`/admin/s/custom-rate/${serviceId}`);

        if (res === null) return

        alert(res.message)
    }

    const search = () => {
        services = allServices.filter(s => {
            if (!query) return true
            if (field === "all") return s.name === query || s.serviceId === Number(query) || s.apiServiceId === Number(query)
            if (field === "id") return s.serviceId === Number(query)
            if (field === "apiOrderId") return s.apiServiceId === Number(query)
            if (field === "name") return s.name.includes(query)
            return true
        })
    }
</script>

<div class="page-title m-b-20">
    <div class="row justify-content-between">
        <div class="col-md-2">
            <h1 class="page-title">
                서비스 관리
            </h1>
        </div>
        <div class="col-md-4 search-area">
            <div class="form-group">
                <div class="input-group">
                    <input class="form-control" name="query" placeholder="검색" type="text" bind:value={query}>
                    <select class="form-control" id="" name="field" bind:value={field}>
                        <option value="all">전체</option>
                        <option value="id">서비스 번호</option>
                        <option value="name">이름</option>
                        <option value="apiServiceId">도매처 서비스 아이디</option>
                    </select>
                    <button class="btn btn-primary btn-square" on:click={() => search()} type="button">
                        <span class="fe fe-search"></span>
                    </button>
                    <button class="btn btn-outline-danger btn-square btn-clear d-none" data-original-title="Clear"
                            data-placement="bottom" data-toggle="tooltip" title="" type="button">
                        <span class="fe fe-x"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-between">
                <div class="col-md-6">
                    <div aria-label="Basic example" class="btn-group" role="group">
                        <button class="btn btn-outline-primary" on:click={() => toggleModal()}>
                            <span class="fe fe-plus"></span>
                            서비스 추가
                        </button>
                        <a class="btn btn-outline-primary" href="/admin/provider/services">
                            <span class="fe fe-folder-plus"></span>
                            도매처 서비스 복사
                        </a>
                    </div>
                </div>
                <div class="col-md-4 d-flex">
                    <select class="form-select order_by ajaxListServicesSortByCateogry m-t-4 m-r-10" data-url="./services"
                            name="status">
                        <option value="0">All</option>
                        {#each category as e}
                            <option value="{e.categoryId}" selected={categoryId === e.categoryId}>
                                {e.name}
                            </option>
                        {/each}
                    </select>
                    <div class="item-action dropdown action-options">
                        <button class="btn btn-outline-primary dropdown-toggle"
                                data-toggle="dropdown" type="button">Actions <span
                                class="fe fe-chevrons-down"></span></button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item ajaxActionOptions" data-type="active" href="./services/bulk_action/active">
                                <i class="dropdown-icon fe fe-check-square"></i>
                                Active
                            </a>
                            <a class="dropdown-item ajaxActionOptions" data-type="deactive"
                                href="./services/bulk_action/deactive">
                                <i class="dropdown-icon fe fe-x-square"></i>
                                Deactive All
                            </a>
                            <a class="dropdown-item ajaxActionOptions" data-type="delete_custom_rates"
                              href="./services/bulk_action/delete_custom_rates">
                                <i class="dropdown-icon fe fe-trash"></i>
                                Delete custom rates
                            </a>
                            <a class="dropdown-item ajaxActionOptions" data-type="delete" href="./services/bulk_action/delete">
                            <i class="dropdown-icon fe fe-trash-2"></i> Delete</a>
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
                <h4 class="card-title">
                    { category.find(c => c.categoryId === categoryId)?.name || "ALL" }
                </h4>
                <div class="card-options">
                    <a class="card-options-collapse" data-toggle="card-collapse" href="#"><i
                            class="fe fe-chevron-up"></i></a>
                    <a class="card-options-remove" data-toggle="card-remove" href="#"><i class="fe fe-x"></i></a>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    <thead>
                    <tr>
                        <th class="text-center w-1">
                            <div class="custom-controls-stacked">
                                <label class="form-check"><input class="form-check-input check-items check-all"
                                                                 data-name="check_80"
                                                                 type="checkbox"><span
                                        class="custom-control-label"></span>
                                </label>
                            </div>
                        </th>
                        <th class="text-center">ID</th>
                        <th class="">Name</th>
                        <th class="text-center">provider</th>
                        <th class="text-center">type</th>
                        <th class="text-center">Rate per 1k</th>
                        <th class="text-center">Min/Max</th>
                        <th class="text-center">description</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each services as e}
                        <tr class="tr_<%=e.serviceId%>">
                            <th class="text-center w-1">
                                <div class="custom-controls-stacked">
                                    <label class="form-check"><input type="checkbox"
                                                                     class="form-check-input check-item check_80"
                                                                     name="ids[]" value="{e.serviceId}">
                                        <span class="custom-control-label"></span>
                                    </label>
                                </div>
                            </th>
                            <td class="text-center w-5p text-muted">
                                {e.serviceId}
                            </td>
                            <td>
                                <div class="title">
                                    {e.name}
                                </div>
                            </td>
                            <td class="text-center w-10p  text-muted">
                                {e.providerId}
                                <div class="text-muted small">
                                    {e.apiServiceId} </div>
                            </td>
                            <td class="text-center w-10p">
                                {e.type}
                            </td>
                            <td class="text-center w-5p">
                                <div>
                                    {e.rate}
                                </div>
                                <small class="text-muted">
                                    {Number(e.rate / 1000)}
                                </small>
                            </td>
                            <td class="text-center w-10p text-muted">
                                {e.min} / {e.max}
                            </td>
                            <td class="text-center w-20p">
                                {e.description.length > 10 ? e.description.slice(0, 10) + "..." : e.description}
                            </td>
                            <td class="text-center w-5p">
                                <label class="custom-switch">
                                    <input type="checkbox" on:click={() => updateStatus(e.serviceId)}
                                           id="statusSwitch{e.serviceId}"
                                           class="custom-switch-input" checked={e.status === 1}>
                                    <span class="custom-switch-indicator"></span>
                                </label>
                            </td>
                            <td class="text-center w-5p">
                                <div class="item-action dropdown">
                                    <span data-toggle="dropdown" class="icon cursor-pointer">
                                        <i class="fe fe-more-vertical"></i>
                                    </span>
                                    <div class="dropdown-menu">
                                        <button class="dropdown-item" on:click={() => updateService(e)}>
                                            <i class="dropdown-icon fe fe-edit"></i>
                                            수정
                                        </button>
                                        <button class="dropdown-item" on:click={() => deleteAllCustomRates(e.serviceId)}>
                                            <i class="dropdown-icon fe fe-trash"></i>
                                            개별 감가액 전체 삭제
                                        </button>
                                        <button on:click={() => deleteService(e.serviceId)} class="dropdown-item">
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

<div class="row" id="result_notification">
    {#if modalOpen }
        <StoreService isUpdate="{isUpdate}" updateServiceData={updateServiceData} category={category} className="modal show" styleName="display: block; overflow: auto" toggleModal={toggleModal}></StoreService>
        <div class="modal-backdrop fade show"></div>
    {/if}
</div>