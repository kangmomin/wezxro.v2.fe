<script>
    import PortfolioList from "$lib/rendingPage/theme/seomy/PortfolioList.svelte";
    export let data
</script>

{#if data.props.THEME === "SEOMY"}
    <PortfolioList {data} />
{/if}