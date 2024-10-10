<script>
    import Somey from "$lib/rendingPage/theme/seomy/Seomy.svelte";

    export let data
</script>

<svelte:head>
	<link rel="icon" href={data.favicon} />
</svelte:head>

<Somey {data} />