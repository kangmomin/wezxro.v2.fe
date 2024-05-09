<script lang="ts">
    import {api} from "$lib/util/ApiProvider";

    export let userEmail: string
    export let toggleModal: Function

    let description = ""
    let subject = ""

    const sendMail = () => {
        api.post("/admin/u/mail-send", {
            subject,
            description,
            email: userEmail
        }).then(res => {
            if (res === null) return;

            alert(res.message)
            toggleModal("")
        })
    }


</script>

<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-pantone">
                <h4 class="modal-title"><i class="fe fe-mail"></i> 이메일 보내기 ({userEmail})</h4>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="col-md-12 col-sm-12 col-xs-12 emoji-picker-container">
                        <div class="form-group">
                            <label for="email_subject">제목</label>
                            <input id="email_subject" class="form-control" data-emojiable="true" name="name"
                                   type="text" bind:value={subject} />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="main_description">내용</label>
                            <textarea class="form-control" id="main_description" cols="40" name="desc" rows="10" bind:value={ description }></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-min-width mr-1 mb-1" on:click={() => sendMail()}>보내기</button>
                    <button class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal("")}>취소</button>
                </div>
            </div>
        </div>
    </div>
</div>