<script>
    import Wezxro from "$lib/rendingPage/Wezxro.svelte";
    import Lotoal from "$lib/rendingPage/Lotoal.svelte";
    import Adiviy from "$lib/rendingPage/Adiviy.svelte";
    import Follous from "$lib/rendingPage/Follous.svelte";
    import Prvad from "$lib/rendingPage/Prvad.svelte";
    import Parkinad from "$lib/rendingPage/Parkinad.svelte";
    import Somey from "$lib/rendingPage/theme/seomy/Seomy.svelte";
    import SeomyAbout from "$lib/rendingPage/theme/seomy/SeomyAbout.svelte";
    import Contact from "$lib/rendingPage/theme/seomy/Contact.svelte";
    export let data
</script>

<svelte:head>
    <link rel="icon" href={data.favicon} />
</svelte:head>

{#if data.props.THEME === "SEOMY"}
    <Contact {data} />
{:else if data.props.DOMAIN === "wezxro.com"}
    <Wezxro {data}></Wezxro>
{:else if data.props.DOMAIN === "lotoal.com"}
    <Lotoal {data}></Lotoal>
{:else if data.props.DOMAIN === "adiviy.com"}
    <Adiviy {data}></Adiviy>
{:else if data.props.DOMAIN === "follous.net"}
    <Follous {data}></Follous>
{:else if data.props.DOMAIN === "prvad.com"}
    <Prvad {data}></Prvad>
{:else if data.props.DOMAIN === "parkinad.com"}
    <Parkinad {data}></Parkinad>
{/if}