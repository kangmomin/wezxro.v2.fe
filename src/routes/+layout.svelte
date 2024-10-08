<script>
    import { page } from "$app/stores";
    import SeomyAbout from "$lib/rendingPage/theme/seomy/SeomyAbout.svelte";
    import Contact from "$lib/rendingPage/theme/seomy/Contact.svelte";
    import FAQ from "$lib/rendingPage/theme/seomy/FAQ.svelte";
    import JoinPartner from "$lib/rendingPage/theme/seomy/JoinPartner.svelte";
    import PortfolioList from "$lib/rendingPage/theme/seomy/PortfolioList.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import Services from "$lib/rendingPage/theme/seomy/Services.svelte";
    import Login from "$lib/rendingPage/theme/seomy/Login.svelte";
    import Join from "$lib/rendingPage/theme/basic/Join.svelte";
    import { api } from "$lib/util/ApiProvider.js";

    export const fallback = '200.html';
    export let data;
    let currentPage = null;

    $: {
        switch ($page.url.pathname) {
            case '/about':
                currentPage = SeomyAbout;
                break;
            case '/contact':
                currentPage = Contact;
                break;
            case '/FAQ':
                currentPage = FAQ;
                break;
            case '/join-partner':
                currentPage = JoinPartner;
                break;
            case '/portfolios':
                currentPage = PortfolioList;
                break;
            case '/services':
                currentPage = Services;
                break;
            case '/login':
                currentPage = Login;
                break;
            case '/join':
                currentPage = Join;
                break;
            case '/logout':
                onMount(async () => {
                    localStorage.clear();
                    await goto("/login");
                });
                break;
            case '/demo-login':
                onMount(async () => {
                    let res = await api.post("/u/login/demo", {
                        key: data.props.CLIENT_KEY
                    });
                    if (res === null) await goto("/login");
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    alert("로그인 완료됐습니다.");
                    await goto("/");
                });
                break;
            default:
                currentPage = null;
                break;
        }
    }
</script>

{#if currentPage === null}
    <slot /> <!-- 자동 라우팅된 페이지를 여기에서 렌더링 -->
{:else}
    <svelte:component this={currentPage} {data} />
{/if}