<script lang="ts">

    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider";
    import {goto} from "$app/navigation";

    export let data;

    onMount(async () => {
        let res = await api.post("/u/login/demo", {
            key: data.props.CLIENT_KEY
        });
        if (res === null) await goto("/");
        localStorage.setItem("accessToken", res.accessToken)
        localStorage.setItem("refreshToken", res.refreshToken)
        alert("로그인 완료됐습니다.")
        await goto("/")
    })
</script>