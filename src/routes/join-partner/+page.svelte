<script>
    import Services from "$lib/rendingPage/theme/seomy/Services.svelte";

    export let data

    import "../../app.css";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
    import JoinPartner from "$lib/rendingPage/theme/seomy/JoinPartner.svelte";
</script>

{#if data.props.THEME === "SEOMY"}
    <JoinPartner data={data} />
{/if}