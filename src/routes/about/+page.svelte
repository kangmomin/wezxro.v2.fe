<script>
    import SeomyAbout from "$lib/rendingPage/theme/seomy/SeomyAbout.svelte";

    export let data
</script>

{#if data.props.EN_NAME === "WEZXRO"}
    <SeomyAbout {data} />
{:else}
    <h1>접근 권한이 없는 페이지 입니다.</h1>
{/if}