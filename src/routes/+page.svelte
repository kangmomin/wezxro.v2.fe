<script>
	import Wezxro from "$lib/rendingPage/Wezxro.svelte";
	import Lotoal from "$lib/rendingPage/Lotoal.svelte";
	import Adiviy from "$lib/rendingPage/Adiviy.svelte";
	import Follous from "$lib/rendingPage/Follous.svelte";
	import Prvad from "$lib/rendingPage/Prvad.svelte";
	import Parkinad from "$lib/rendingPage/Parkinad.svelte";
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
{#if data.props.DOMAIN === "follous.net"}
	<Follous data="{data}"></Follous>
{/if}
{#if data.props.DOMAIN === "prvad.com"}
	<Prvad data="{data}"></Prvad>
{/if}
{#if data.props.DOMAIN === "parkinad.com"}
	<Parkinad data="{data}"></Parkinad>
{/if}

