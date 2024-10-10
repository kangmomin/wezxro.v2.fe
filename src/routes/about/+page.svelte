<script>
    import Wezxro from "$lib/rendingPage/Wezxro.svelte";
    import Lotoal from "$lib/rendingPage/Lotoal.svelte";
    import Adiviy from "$lib/rendingPage/Adiviy.svelte";
    import Follous from "$lib/rendingPage/Follous.svelte";
    import Prvad from "$lib/rendingPage/Prvad.svelte";
    import Parkinad from "$lib/rendingPage/Parkinad.svelte";
    import Somey from "$lib/rendingPage/theme/seomy/Seomy.svelte";
    import SeomyAbout from "$lib/rendingPage/theme/seomy/SeomyAbout.svelte";
    import PortfolioList from "$lib/rendingPage/theme/seomy/PortfolioList.svelte";
    export let data
</script>

{#if data.props.EN_NAME === "WEZXRO"}
    <SeomyAbout {data} />
{:else}
    <h1>접근 권한이 없는 페이지 입니다.</h1>
{/if}