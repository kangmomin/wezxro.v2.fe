<script lang="ts">
    import {api} from "$lib/util/ApiProvider.js";
    import {goto} from "$app/navigation";

    export let toggleModal: Function

    let category = {
        name: "",
        sort: 0,
        status: 1
    }

    const saveData = () => {
        api.post("/admin/c/add", category).then(res => {
            if (res === null) return;
            alert("데이터를 저장하였습니다.")
            category = {
                name: "",
                sort: 0,
                status: 1
            }
            goto(window.location.pathname)
        })
    }
</script>

<div id="main-modal-content" class="modal show" style="display: block; overflow: auto">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i>Add New</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal()}></button>
            </div>
            <div class="form" id="category_form">
                <div class="modal-body">
                    <div class="row justify-content-md-center">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" bind:value={category.name} class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Sort</label>
                                <input type="number" name="sort" bind:value={category.sort} class="form-control"/>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label>Status</label>
                                <select name="status" class="form-control" bind:value={category.status}>
                                    <option value="1">Active</option>
                                    <option value="0">Deactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1" on:click={() => saveData()}>
                        Save
                    </button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>