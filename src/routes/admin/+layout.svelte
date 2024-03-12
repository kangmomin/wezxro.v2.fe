<script>
    import AdminHeader from "$lib/component/AdminHeader.svelte";
    import AdminFooter from "$lib/component/AdminFooter.svelte";

    export let data
</script>

<header>

</header>

<main class="antialiased vertical-menu menu-expanded container-fluid">
    <AdminHeader data={data}>
        <slot></slot>
    </AdminHeader>
    <AdminFooter />
</main>