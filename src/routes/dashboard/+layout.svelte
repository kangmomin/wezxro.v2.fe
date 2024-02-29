<script>
    import Footer from "$lib/component/Footer.svelte"
    import Header from "$lib/component/Header.svelte"

    export let data
</script>

<header>

</header>

<main class="antialiased vertical-menu menu-expanded container-fluid">
    <Header data={data}>
        <slot></slot>
    </Header>
    <Footer />
</main>