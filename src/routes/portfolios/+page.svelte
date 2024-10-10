<script>
    import PortfolioList from "$lib/rendingPage/theme/seomy/PortfolioList.svelte";
    export let data
</script>

{#if data.props.EN_NAME === "WEZXRO"}
    <PortfolioList {data} />
{:else}
    <h1>접근 권한이 없는 페이지 입니다.</h1>
{/if}