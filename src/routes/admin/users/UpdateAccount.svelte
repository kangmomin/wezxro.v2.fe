<script lang="ts">
    import type {UserListDto} from "$lib/types/Account/UserListDto";
    import {api} from "$lib/util/ApiProvider";

    export let user: UserListDto
    export let toggleModal: Function
    let newUserInfo = {...user}

    const updateUserInfo = async () => {
        const res = await api.patch("/admin/u/update", {
            userId: newUserInfo.userId,
            email: newUserInfo.email,
            name: newUserInfo.name,
            status: newUserInfo.status
        });

        if (res === null) return

        alert(res.message)
        toggleModal(null, true)
    }

</script>

<div id="main-modal-content" class="modal show" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fa fa-edit"></i> 수정 ({newUserInfo.email})</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => toggleModal()}></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="name">이름</label>
                                <input type="text" id="name" bind:value="{newUserInfo.name}" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label for="email">이메일</label>
                                <input type="email" id="email" bind:value="{newUserInfo.email}" class="form-control" />

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="status">활성화 / 비활성화</label>
                                <select id="status" class="form-control" bind:value={newUserInfo.status}>
                                    <option value="ACTIVE">활성화</option>
                                    <option value="DEACTIVE">비활성화</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-min-width mr-1 mb-1" on:click={() => updateUserInfo()}>저장</button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal()}>닫기</button>
                </div>
            </div>
        </div>
    </div>
</div>