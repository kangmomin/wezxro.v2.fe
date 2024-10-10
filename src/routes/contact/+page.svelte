<script>
    import Contact from "$lib/rendingPage/theme/seomy/Contact.svelte";

    export let data
</script>

<svelte:head>
    <link rel="icon" href={data.favicon} />
</svelte:head>

<Contact {data} />