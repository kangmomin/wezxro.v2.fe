<script>
    import Wezxro from "$lib/rendingPage/Wezxro.svelte";
    import Lotoal from "$lib/rendingPage/Lotoal.svelte";
    import Adiviy from "$lib/rendingPage/Adiviy.svelte";
    import Follous from "$lib/rendingPage/Follous.svelte";
    import Prvad from "$lib/rendingPage/Prvad.svelte";
    import Parkinad from "$lib/rendingPage/Parkinad.svelte";
    import Somey from "$lib/rendingPage/theme/seomy/Seomy.svelte";
    import SeomyAbout from "$lib/rendingPage/theme/seomy/SeomyAbout.svelte";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
    import JoinPartner from "$lib/rendingPage/theme/seomy/JoinPartner.svelte";
    export let data
</script>

{#if data.props.THEME === "SEOMY"}
    <JoinPartner {data} />
{/if}