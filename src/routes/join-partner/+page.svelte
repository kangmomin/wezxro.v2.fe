<script>
    import JoinPartner from "$lib/rendingPage/theme/seomy/JoinPartner.svelte";

    export let data
</script>


{#if data.props.EN_NAME === "WEZXRO"}
    <JoinPartner {data} />
{:else}
    <h1>접근 권한이 없는 페이지 입니다.</h1>
{/if}