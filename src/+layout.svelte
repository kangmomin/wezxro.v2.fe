<script>
    export let data
    console.log(data)
</script>

<svelte:head>
    <link rel="icon" href={data.favicon} />
</svelte:head>

<slot {data}/>