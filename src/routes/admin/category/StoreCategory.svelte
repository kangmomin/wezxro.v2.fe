<script lang="ts">
    import {api} from "$lib/util/ApiProvider.js";
    import type {CategoryListDto} from "$lib/types/category/CategoryListDto";
    import {onMount} from "svelte";

    export let toggleModal: Function
    export let categoryInfo: CategoryListDto

    let category = {
        name: "",
        sort: 0,
        status: "ACTIVE"
    }

    let isUpdate = false

    onMount(() => {
        if (categoryInfo.categoryId !== 0) {
            category = {
                name: categoryInfo.name,
                sort: categoryInfo.sort,
                status: categoryInfo.status ? "ACTIVE" : "DEACTIVE"
            }

            isUpdate = true
        }
    })

    const saveData = () => {
        api.post("/admin/c/add", category).then(res => {
            if (res === null) return;
            alert("카테고리를 저장하였습니다.")
            toggleModal(true)

            category = {
                name: "",
                sort: 0,
                status: "ACTIVE"
            }
            categoryInfo = {categoryId: 0, name: "", sort: 0, status: 0}
        })
    }
    const updateData = () => {
        api.patch(`/admin/c/update/${categoryInfo.categoryId}`, category).then(res => {
            if (res === null) return;
            alert("카테고리를 수정하였습니다.")
            toggleModal(true)

            category = {
                name: "",
                sort: 0,
                status: "ACTIVE"
            }
            categoryInfo = {categoryId: 0, name: "", sort: 0, status: 0}
        })
    }
</script>

<div id="main-modal-content" class="modal show" style="display: block; overflow: auto">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i>{isUpdate ? "카테고리 수정" : "카테고리 생성"}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal()}></button>
            </div>
            <div class="form" id="category_form">
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="name">이름</label>
                                <input id="name" type="text" name="name" bind:value={category.name} class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="sort">정렬 번호</label>
                                <input id="sort" type="number" name="sort" bind:value={category.sort} class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="status">활성화/비활성화</label>
                                <select id="status" class="form-control" bind:value={category.status}>
                                    <option value="ACTIVE">활성화</option>
                                    <option value="DEACTIVE">비활성화</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1"
                            on:click={() => isUpdate ? updateData() : saveData()}>
                        저장
                    </button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal(true)}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>