<script>
	import Wezxro from "$lib/rendingPage/Wezxro.svelte";
	export let data

</script>

{#if data.props.DOMAIN === "wezxro.com"}
	<Wezxro data="{data}"></Wezxro>
{/if}