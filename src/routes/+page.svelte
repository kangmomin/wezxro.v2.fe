<script>
	import Wezxro from "$lib/rendingPage/Wezxro.svelte";
	import Lotoal from "$lib/rendingPage/Lotoal.svelte";
	import Adiviy from "$lib/rendingPage/Adiviy.svelte";
	export let data

</script>

<svelte:head>
	<link rel="icon" href={data.favicon} />
</svelte:head>

{#if data.props.DOMAIN === "wezxro.com"}
	<Wezxro data="{data}"></Wezxro>
{/if}
{#if data.props.DOMAIN === "lotoal.com"}
	<Lotoal data="{data}"></Lotoal>
{/if}
{#if data.props.DOMAIN === "adiviy.com"}
	<Adiviy data="{data}"></Adiviy>
{/if}

