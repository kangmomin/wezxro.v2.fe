<script>
    export let data

    import "../../app.css";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
    import PortfolioList from "$lib/rendingPage/theme/seomy/PortfolioList.svelte";
</script>

{#if data.props.THEME === "SEOMY"}
    <PortfolioList data={data} />
{/if}