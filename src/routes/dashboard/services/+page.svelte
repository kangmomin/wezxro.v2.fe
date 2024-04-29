<script lang="ts">

    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import type { ServiceListDto } from '$lib/types/service/ServiceListDto';
    import type { CategoryListDto } from '$lib/types/category/CategoryListDto';

    let category: CategoryListDto[] = []
    let services: ServiceListDto[] = []

    let selectedCategory = 0

    onMount(async () => {
        api.get("/c/list").then(res => {
            if (res === null) return

            category = res
        })

    })

    onMount(() => {
        loadService()
    })

    const loadService = () => {
        let url = `/s/list?category=${selectedCategory}`

        if (selectedCategory === 0) {
            url = `/s/list`
        }
        api.get(url).then(res => {
            if (res === null) return

            services = res
        })
    }
</script>

<section class="page-title">
    <div class="row justify-content-between">
        <div class="col-md-9">
            <h1 class="page-title">
                서비스 목록
            </h1>
        </div>
        <div class="col-md-3">
            <div class="form-group ">
                <select class="form-control order_by" name="status" bind:value={selectedCategory}>
                    <option value="0" selected={selectedCategory === 0}>전체 카테고리</option>
                    { #each category as c }
                        <option value="{ c.categoryId }">{ c.name }</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
</section>
<div class="row m-t-5" id="result_ajaxSearch">
    <div class="col-md-12 col-xl-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">테스트</h3>
                <div class="card-options">
                    <div class="card-options-collapse" data-toggle="card-collapse">
                        <i class="fe fe-chevron-up"></i>
                    </div>
                    <div class="card-options-remove" data-toggle="card-remove">
                        <i class="fe fe-x"></i>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">이름</th>
                        <th class="text-center">가격(₩)</th>
                        <th class="">최소 및 최대 주문 수량</th>
                        <th class="text-center">설명</th>
                    </tr>
                    </thead>
                    <tbody>
                    { #each services as s }
                        <tr class="tr_163">
                            <td class="text-center w-10p text-muted">{ s.serviceId }</td>
                            <td>
                                <div class="title">{ s.name }</div>
                            </td>
                            <td class="text-center w-5p">
                                <div>{ s.rate }</div>
                            </td>
                            <td class="text-center w-10p text-muted">{ s.min } / { s.max }</td>
                            <td class="text-center w-5p">{ s.description }</td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>