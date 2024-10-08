<script>
    export let data
</script>

<svelte:head>
    <link rel="icon" href={data.favicon} />
</svelte:head>

<slot />