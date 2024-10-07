<script>
    import Services from "$lib/rendingPage/theme/seomy/Services.svelte";

    export let data

    import "../../app.css";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
</script>

{#if data.props.THEME === "SEOMY"}
    <Services data={data} />
{/if}