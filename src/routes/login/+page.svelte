<script>
    import {api} from "$lib/util/ApiProvider.js";

    export let data

    const EN_NAME = data.props.EN_NAME
    import {goto} from "$app/navigation";
    import BasicLogin from "./BasicLogin.svelte";
    import Login from "$lib/rendingPage/theme/seomy/Login.svelte";
</script>

{#if data.props.THEME}
    <Login data={data} />
{:else}
    <BasicLogin data="{data}" />
{/if}