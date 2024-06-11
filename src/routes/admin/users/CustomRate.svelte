<script lang="ts">
    import type {ServiceListDto} from "$lib/types/service/ServiceListDto";
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider";
    import type UpdateUserInfo from "$lib/types/Account/UpdateUserInfo";
    import type {CustomRateList} from "$lib/types/Account/CustomRateList";
    import {goto} from "$app/navigation";

    export let u: UpdateUserInfo
    export let toggleModal: Function

    let crs: CustomRateList[] = []
    let services: ServiceListDto[] = []

    const saveCustomRate = async () => {
        let res = await api.post("/admin/u/custom-rate", {
            userId: u.userId,
            customRates: crs
        });

        if (res === null) return

        alert(res.message)
        toggleModal()
    }

    const userCustomRate = async () => {
        const res = await api.get(`/admin/u/custom-rate/${u.userId}`)

        if (res === null) return

        crs = res
    }

    onMount(async () => {
        await userCustomRate()

        let res = await api.get("/admin/s/list");

        if (res === null) return;
        services = res
    })

    const addCustomRate = (e: Event | null) => {
        const text = e?.target?.value;
        if (text === "0") return
        let serviceInfo = JSON.parse(text);

        let isValid = true
        crs.forEach(cr => {
            if (Number(cr.serviceId) === Number(serviceInfo.serviceId)) return isValid = false
        })
        if (!isValid) return

        crs.push({
            customRate: serviceInfo.customRate,
            id: 0,
            serviceName: serviceInfo.serviceName,
            originalRate: serviceInfo.originalRate,
            serviceId: serviceInfo.serviceId
        })

        crs = [...crs]
    }

    const removeIt = (cr: CustomRateList) => {
        crs = crs.filter(c => {
            return Number(c.serviceId) !== Number(cr.serviceId)
        });
    }

    const deleteAllCustomRate = async () => {
        if (!confirm("해당 유저의 모든 개별 감가액을 삭제하시겠습니까?")) return

        const res = await api.delete(`/admin/u/custom-rate/all/${u.userId}`);

        if (res === null) return

        alert(res.message)

        toggleModal()
    }

</script>
<div class="modal show" id="main-modal-content" style="display: block">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Custom rate 수정 ({u.email})</h4>
                <button type="button" class="close" data-dismiss="modal" on:click={() => toggleModal()}></button>
            </div>
            <div class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <select name="service-id" on:change={addCustomRate}
                                        class="select-service-item form-control custom-select">
                                    <option value='0'>서비스를 선택해주세요</option>
                                    {#each services as s}
                                        <option
                                                value='{`{"serviceId":"${s.serviceId}","rate":${s.rate},"originalRate":${s.originalRate},"serviceName":"${s.name}"}`}'
                                                data-rate="{s.serviceId}">
                                            {s.serviceId} - {s.name} [₩{s.rate}]
                                        </option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="o-auto" style="height: 30rem; overflow: auto;">
                        <ul class="list-unstyled list-separated services-group-items">
                            {#each crs as cr}
                                <li class="list-separated-item s-item" id="item{cr.serviceId}">
                                    <div class="row align-items-center">
                                        <div class="col"><strong>{cr.serviceId}</strong></div>
                                        <div class="col-md-7">{cr.serviceName}</div>
                                        <div class="col-md-1">
                                            <span>{cr.customRate ?? 0}</span>
                                        </div>
                                        <div>
                                            <small class="d-block item-except text-sm text-muted h-1x">{ cr.originalRate }</small>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="text" class="form-control"
                                                   bind:value="{cr.customRate}">
                                        </div>
                                        <div class="col-md-1">
                                            <button class="btn btn-secondary btn-remove-item" type="button" on:click={() => removeIt(cr)}>
                                                <i class="fe fe-trash-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <div class="d-flex">
                        <button class="btn btn-info btn-remove-items" on:click={() => deleteAllCustomRate()}>전체 삭제</button>
                        <button on:click={() => saveCustomRate()} class="btn btn-primary ml-auto mr-2">
                            저장
                        </button>
                        <button type="button" class="btn btn-dark" data-dismiss="modal" on:click={() => toggleModal()}>
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>