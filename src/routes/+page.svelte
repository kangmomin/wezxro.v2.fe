<script>
	import Wezxro from "$lib/rendingPage/Wezxro.svelte";
	import Lotoal from "$lib/rendingPage/Lotoal.svelte";
	import Adiviy from "$lib/rendingPage/Adiviy.svelte";
	import Follous from "$lib/rendingPage/Follous.svelte";
	import Prvad from "$lib/rendingPage/Prvad.svelte";
	import Parkinad from "$lib/rendingPage/Parkinad.svelte";
	import Somey from "$lib/rendingPage/theme/seomy/Seomy.svelte";
	export let data
</script>

<svelte:head>
	<link rel="icon" href={data.favicon} />
</svelte:head>

{#if data.props.THEME === "SEOMY"}
	<Somey {data} />
{/if}