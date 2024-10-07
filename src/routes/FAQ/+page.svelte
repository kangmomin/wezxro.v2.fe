<script>
    export let data

    import "../../app.css";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
</script>

{#if data.props.THEME === "SEOMY"}
    <FAQ data={data} />
{/if}