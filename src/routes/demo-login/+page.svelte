<script>
    import {onMount} from "svelte";
    import {api} from "$lib/util/ApiProvider.js";
    import {goto} from "$app/navigation";

    onMount(async () => {
        let res = await api.post("/u/login/demo", {
            key: data.props.CLIENT_KEY
        });
        if (res === null) await goto("/login");
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        alert("로그인 완료됐습니다.");
        await goto("/");
    });
</script>