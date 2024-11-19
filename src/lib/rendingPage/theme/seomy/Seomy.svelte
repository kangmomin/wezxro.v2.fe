<script>
    import {seomySetting} from "$lib/rendingPage/theme/seomy/SeomySetting.js";
    import {onMount} from "svelte";
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";

    export let data

    let isLogin = false

    const EN_NAME = data.props.EN_NAME,
        KR_NAME = data.props.KR_NAME
    let slideIdx = 0
    let currentTabIdx = 0
    let targetValue = 0, currentValue = 0

    $: if (slideIdx * 508 !== targetValue) {
        targetValue = (slideIdx % seomySetting[EN_NAME].nineSection.options[currentTabIdx].contents.length) * 508;
        animateValueChange();
    }

    /** 메인 페이지 공통 설정 */
    const config = seomySetting[EN_NAME]?.main ?? seomySetting["WEZXRO"].main
    const theme = seomySetting[EN_NAME]?.theme ?? seomySetting["WEZXRO"].theme

    onMount(() => {
        let token = localStorage.getItem("accessToken");
        if (token) isLogin = true

        // --------- theme 설정 ---------
        const root = document.documentElement;

        if (seomySetting[EN_NAME] !== null) {
            Object.entries(seomySetting[EN_NAME].theme).forEach(([key, value]) => {
                root.style.setProperty(`--tp-${key}`, value);
            });
        }
        // --------- theme 설정 ---------
    })

    const animateValueChange = () => {
        const speed = 30
        // 목표값에 도달할 때까지 1씩 증가
        const updateValue = () => {
            if (currentValue < targetValue) {
                currentValue += 10;
                if (currentValue > targetValue) currentValue = targetValue
                requestAnimationFrame(updateValue);
            } else if (currentValue > targetValue) {
                currentValue -= 10;
                if (currentValue < targetValue) currentValue = targetValue
                requestAnimationFrame(updateValue);
            }
        };
        updateValue();
    }
</script>

<svelte:head>
    <head>
        <meta charset="utf-8">
        <meta content="ie=edge" http-equiv="x-ua-compatible">
        <title>{EN_NAME}</title>
        <meta content="" name="description">
        <meta content="width=device-width, initial-scale=1" name="viewport">

        <!-- CSS here -->
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <link href="assets/css/animate.css" rel="stylesheet">
        <link href="assets/css/swiper-bundle.css" rel="stylesheet">
        <link href="assets/css/slick.css" rel="stylesheet">
        <link href="assets/css/nouislider.css" rel="stylesheet">
        <link href="assets/css/magnific-popup.css" rel="stylesheet">
        <link href="assets/css/font-awesome-pro.css" rel="stylesheet">
        <link href="assets/css/modernizr.css" rel="stylesheet">
        <link href="assets/css/spacing.css" rel="stylesheet">
        <link href="assets/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    </head>
</svelte:head>

<body>
<!--<Loader />-->
<BackToTop/>
<Header {data}/>

<style>
    #contact:hover {
        color: var(--tp-theme-blue);
    }
</style>

<!-- offcanvas area start -->
<div class="offcanvas__area">
    <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button class="offcanvas__close-btn offcanvas-close-btn">
                <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5"/>
                    <path d="M1 1L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5"/>
                </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo logo">
                    <a href="/">
                        <img alt="logo" src="assets/img/logo/logo-pink.svg">
                    </a>
                </div>
            </div>
            <div class="tp-main-menu-mobile mb-35"></div>
            <div class="offcanvas__btn">
                <a class="tp-btn w-100" href="{config.firstSection.MainContactBtn.link}">
                    {@html config.firstSection.MainContactBtn.text}
                </a>
            </div>
            <div class="offcanvas__contact mb-40">
                <p class="offcanvas__contact-call">
                    <a href="{config.firstSection.phoneNumber.link}">
                        {config.firstSection.phoneNumber.text}
                    </a>
                </p>
                <p class="offcanvas__contact-mail">
                    <a href="mailto:{config.firstSection.email.text}">{config.firstSection.email.text}</a>
                </p>
            </div>
            <div class="offcanvas__social">
                <a href="{config.firstSection.links.facebook}"><i class="fab fa-facebook-f"></i></a>
                <a href="{config.firstSection.links.twitter}"><i class="fab fa-twitter"></i></a>
                <a href="{config.firstSection.links.youtube}"><i class="fab fa-youtube"></i></a>
                <a href="{config.firstSection.links.linkedin}"><i class="fab fa-linkedin"></i></a>
                <a href="{config.firstSection.links.instagram}"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="body-overlay"></div>
<!-- offcanvas area end -->

<main>

    <!-- banner-area-start -->
    <div class="banner-area banner-4-spaces pt-150 pb-195">
        <div class="container">
            <div class="row">
                <div class="col-xxl-7 col-xl-10 col-lg-7">
                    <div class="banner-4">
                        <div class="banner-4-content">
                            <h4 class="banner-4-title cd-headline clip is-full-width mb-0">
                                {@html config.firstSection.bannerContent.bannerTitle.firstSection}
                                <br/>
                                <span class="cd-words-wrapper p-0">
                                    {#each config.firstSection.bannerContent.bannerTitle.secondSection as text, idx}
                                        {#if idx === 0}
                                            <b class="is-visible p-0" style="{theme.defaultGradientText}">{text}</b>
                                        {:else}
                                            <b class="p-0" style="{theme.defaultGradientText}">{text}</b>
                                        {/if}
                                    {/each}
                               </span>
                                {@html config.firstSection.bannerContent.bannerTitle.thirdSection}
                            </h4>
                            <br style="margin-bottom: 6px"/>
                            <p style="margin-bottom: 25px">{@html config.firstSection.bannerContent.bannerExplain.replaceAll("\n", "<br/>")}</p>
                            <div class="banner-4-btn mb-25">
                                <a class="blue-btn" href="{config.firstSection.MainContactBtn.link}">
                                    {config.firstSection.MainContactBtn.text}
                                </a>
                            </div>
                            <div class="contact-4 d-flex align-items-center">
                                <div class="contact-4-icon">
                                    <i>
                                        <svg fill="none" height="26" viewBox="0 0 26 26" width="26"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.964 20.596C24.964 21.028 24.868 21.472 24.664 21.904C24.46 22.336 24.196 22.744 23.848 23.128C23.26 23.776 22.612 24.244 21.88 24.544C21.16 24.844 20.38 25 19.54 25C18.316 25 17.008 24.712 15.628 24.124C14.248 23.536 12.868 22.744 11.5 21.748C10.12 20.74 8.812 19.624 7.564 18.388C6.328 17.14 5.212 15.832 4.216 14.464C3.232 13.096 2.44 11.728 1.864 10.372C1.288 9.004 1 7.696 1 6.448C1 5.632 1.144 4.852 1.432 4.132C1.72 3.4 2.176 2.728 2.812 2.128C3.58 1.372 4.42 1 5.308 1C5.644 1 5.98 1.072 6.28 1.216C6.592 1.36 6.868 1.576 7.084 1.888L9.868 5.812C10.084 6.112 10.24 6.388 10.348 6.652C10.456 6.904 10.516 7.156 10.516 7.384C10.516 7.672 10.432 7.96 10.264 8.236C10.108 8.512 9.88 8.8 9.592 9.088L8.68 10.036C8.548 10.168 8.488 10.324 8.488 10.516C8.488 10.612 8.5 10.696 8.524 10.792C8.56 10.888 8.596 10.96 8.62 11.032C8.836 11.428 9.208 11.944 9.736 12.568C10.276 13.192 10.852 13.828 11.476 14.464C12.124 15.1 12.748 15.688 13.384 16.228C14.008 16.756 14.524 17.116 14.932 17.332C14.992 17.356 15.064 17.392 15.148 17.428C15.244 17.464 15.34 17.476 15.448 17.476C15.652 17.476 15.808 17.404 15.94 17.272L16.852 16.372C17.152 16.072 17.44 15.844 17.716 15.7C17.992 15.532 18.268 15.448 18.568 15.448C18.796 15.448 19.036 15.496 19.3 15.604C19.564 15.712 19.84 15.868 20.14 16.072L24.112 18.892C24.424 19.108 24.64 19.36 24.772 19.66C24.892 19.96 24.964 20.26 24.964 20.596Z"
                                                  stroke="{theme.main}" stroke-miterlimit="10" stroke-width="1.5"/>
                                            <path d="M20.7996 9.40038C20.7996 8.68038 20.2356 7.57638 19.3956 6.67638C18.6276 5.84838 17.6076 5.20038 16.5996 5.20038"
                                                  opacity="0.4"
                                                  stroke="{theme.main}" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                            <path d="M24.9996 9.4C24.9996 4.756 21.2436 1 16.5996 1" opacity="0.4"
                                                  stroke="{theme.main}" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                        </svg>
                                    </i>
                                </div>
                                <div class="contact-4-text">
                                    <span on:click={() => location.href = "contact"} style="cursor: pointer;">
                                        {config.firstSection.phoneNumber.text}
                                    </span>
                                    <a href="{config.firstSection.phoneNumber.link}">
                                        고객센터
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-4-shape d-none d-lg-block">
                <div class="banner-4-shape-one">
                    <img alt="" src="assets/img/banner/hero-bg-4.png">
                </div>
                <div class="banner-4-shape-two">
                    <img alt="" src="assets/img/shape/banner-4-shape-1.png">
                </div>
                <div class="banner-4-shape-three">
                    <img alt="" src="assets/img/shape/banner-4-shape-2.png">
                </div>
                <div class="banner-4-shape-six">
                    <img alt="" src="assets/img/shape/banner-shape-4-1.png">
                </div>
                <div class="banner-4-shape-seven">
                    <img alt="" src="assets/img/shape/banner-shape-4-2.png">
                </div>
                <div class="banner-4-shape-eight">
                    <img alt="" src="assets/img/shape/banner-shape-4-3.png">
                </div>
                <div class="banner-4-shape-nine">
                    <img alt="" src="assets/img/shape/banner-shape-4-4.png">
                </div>
                <div class="banner-4-shape-ten">
                    <img alt="" src="assets/img/shape/banner-shape-4-5.png">
                </div>
            </div>
        </div>
    </div>
    <!-- banner-area-end -->

    <!-- services-area-start -->
    <section class="services-area pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-wrapper text-center mb-60">
                        <span style="{theme.defaultGradientText}">{config.secondSection.subText}</span>
                        <h5 class="section-title-4">{config.secondSection.mainText}</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                {#each config.secondSection.cards as card, i}
                    <div class="col-lg-4 col-md-6">
                        <div class="services-item-4 text-center mb-55">
                            <div class="services-icon-4 mb-30">
                                <img alt="" src="assets/img/shape/choose-4-shape-{i+1}.png">
                                <i>
                                    <img src="{card.image}" width="75" height="75" alt="">
                                </i>
                            </div>
                            <div class="services-content-4">
                                <h5 class="title mb-20">{@html card.mainText}</h5>
                                <p>{@html card.description}</p>
                                <div class="services-btn-4 p-relative">
                                    <a href="{card.readMore.link}">
                                        <span>{card.readMore.text}</span>
                                        <i>
                                            <svg fill="none" height="14" viewBox="0 0 18 14" width="18"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2871 1L17 6.71285L11.2871 12.4257" stroke="{theme.main}"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-miterlimit="10"
                                                      stroke-width="1.5"/>
                                                <path d="M1 6.71313H16.8397" stroke="{theme.main}"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10"
                                                      stroke-width="1.5"/>
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8 col-md-10">
                    <div class="services-bottom text-center">
                        <div class="servics-details-4 d-flex align-items-center justify-content-center">
                            <img alt="" height="17" src="assets/pictograms/serviceAndOem.png" width="17">
                            <p>
                                서비스 및 대행사, 패널 제작 문의는
                                <a href="/contact">
                                    고객센터
                                    <i class="d-none d-md-block">
                                        <svg fill="none" height="7" viewBox="0 0 60 7" width="60"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.19582 4.26135C22.5561 -1.51199 38.7792 0.327797 59.246 6.22031"
                                                  stroke="{theme.main}" stroke-linecap="round"/>
                                        </svg>
                                    </i>
                                </a>
                                로 연락 부탁드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- services-area-end -->

    <!-- brand-area-start -->
    <section class="brand-area brand-bg-3 mb-120 p-relative">
        <div class="brand-bg-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brand-wrapper text-center">
                            <h5 class="title">{config.thirdSection.mainBanner.text}</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="swiper mySwiper mb-200" style="height: 200px">
                            <div class="swiper-wrapper">
                                {#each Array.from({length: 19}) as _, idx}
                                    <div class="swiper-slide">
                                        <img alt="" src="assets/img/icon/{idx + 1}.png">
                                    </div>
                                {/each}
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- wave-animation -->
        <div class="wave-bg">
            <svg class="wave wave-1" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <title>Wave</title>
                <defs></defs>
                <path d="M 0 213.04064072078822 C 181.64285714285725 174.4674545919669 181.64285714285703 174.4674545919669 363.28571428571405 193.7540476563775 C 544.928571428571 213.04064072078822 544.928571428571 213.04064072078822 726.5714285714281 168.64536205176225 C 908.2142857142852 124.25008338273638 908.2142857142852 124.25008338273638 1089.857142857142 154.41372662253795 C 1271.499999999999 184.57736986233954 1271.499999999999 184.57736986233954 1453.1428571428562 160.52423702728655 C 1634.7857142857133 136.47110419223355 1634.7857142857133 136.47110419223355 1816.4285714285706 182.91294954068331 C 1998.071428571428 229.35479488913307 1998.071428571428 229.35479488913307 2179.714285714284 206.68970577821563 C 2361.357142857141 184.02461666729815 2361.357142857141 184.02461666729815 2542.999999999998 154.84848139145004 L 2543 8531.015625 L 0 8531.015625 Z"
                      fill="rgba(255, 255, 255, 1)"
                      id="feel-the-wave"></path>
            </svg>

            <svg class="wave" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <title>Wave</title>
                <path d="M 0 156.10414462387877 C 158.93750000000054 181.28626242272586 158.93750000000054 181.2862624227259 317.87500000000097 168.69520352330233 C 476.81250000000085 156.1041446238788 476.8125000000011 156.1041446238788 635.7500000000016 184.5316017314728 C 794.6875000000016 212.95905883906687 794.6875000000016 212.95905883906687 953.6250000000016 190.10552459162486 C 1112.5625000000027 167.25199034418304 1112.5624999999973 167.25199034418304 1271.4999999999973 180.66263870570117 C 1430.4374999999973 194.0732870672194 1430.4374999999973 194.0732870672194 1589.3749999999973 164.25734828199154 C 1748.3124999999973 134.44140949676358 1748.3124999999973 134.44140949676358 1907.2499999999973 154.88271029727417 C 2066.1874999999945 175.3240110977847 2066.1874999999945 175.3240110977847 2225.1249999999945 160.53491622812484 C 2384.0624999999945 145.74582135846512 2384.0624999999945 145.74582135846512 2542.9999999999945 180.66263870570117 L 2543 8531.015625 L 0 8531.015625 Z"
                      fill="{theme.common1}"
                      id="wave-two"></path>
            </svg>
        </div>
        <!-- wave-animation-end -->
    </section>
    <!-- brand-area-end -->

    <!-- feature-area-start -->
    <section class="feature-area pt-40 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tpchoose-thumb p-relative mb-50">
                        <img alt="" class="tpchoose-border-anim" src="assets/img/banner/choose-2.png">
                        <div class="tpchoose-shape d-none d-lg-block">
                            <div class="tpchoose-shape-one d-none d-md-block">
                                <img alt="" src="assets/img/shape/choose-shape-1.png">
                            </div>
                            <div class="tpchoose-shape-two">
                                <img alt="" src="assets/img/shape/choose-shape-2.png">
                            </div>
                            <div class="tpchoose-shape-three">
                                <img alt="" src="assets/img/shape/choose-shape-3.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="feature-content-4 pl-70">
                        <div class="section-wrapper mb-40">
                            <span style="{theme.defaultGradientText}">Let us do the work</span>
                            <h5 class="section-title-4 section-title-4-2">{config.fourthSection.title}</h5>
                        </div>
                        <ul class="feature-list-4">
                            {#each config.fourthSection.content as content, idx}
                                <li>
                                    <div class="feature-list-4-item p-relative d-flex">
                                        <div class="feature-list-4-icon ">
                                            <div class="feature-list-bg p-relative">
                                                <i>
                                                    <svg fill="none" height="40" viewBox="0 0 44 40" width="44"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g style="mix-blend-mode:multiply">
                                                            <path class="main-bg" style="color: {content.color}"
                                                                  d="M4.66766 18.8519C-4.37425 32.8161 8.5593 40 19.4834 40C30.2244 40 42.3709 35.9136 42.3709 23.3559C42.3655 -8.96311 20.1854 -5.10428 4.66766 18.8519Z"
                                                                  fill="currentColor"/>
                                                        </g>
                                                        <path d="M0.886829 32.563C0.845942 32.563 0.805948 32.5509 0.771881 32.5281C0.737814 32.5053 0.711194 32.4729 0.695366 32.4349C0.679538 32.3968 0.675208 32.355 0.682925 32.3145C0.690641 32.274 0.710058 32.2367 0.738733 32.2073L8.96478 23.9395C9.00472 23.9178 9.05069 23.9101 9.09546 23.9176C9.14022 23.9251 9.18125 23.9474 9.21208 23.981C9.24291 24.0145 9.2618 24.0575 9.26578 24.1031C9.26975 24.1487 9.25859 24.1943 9.23404 24.2328L1.03493 32.5033C1.01546 32.5227 0.992326 32.538 0.966886 32.5483C0.941447 32.5585 0.914223 32.5635 0.886829 32.563V32.563Z"
                                                              fill="white"/>
                                                        <path d="M33.901 20.2052C33.8744 20.2053 33.8481 20.2001 33.8236 20.1899C33.7991 20.1796 33.7769 20.1645 33.7583 20.1455C33.7201 20.1064 33.6987 20.0537 33.6987 19.9989C33.6987 19.944 33.7201 19.8914 33.7583 19.8522C34.1056 19.4911 42.2751 11.0306 42.9887 10.55C43.0343 10.5237 43.0882 10.5159 43.1393 10.5281C43.1905 10.5403 43.2351 10.5717 43.2642 10.6159C43.2933 10.66 43.3047 10.7137 43.296 10.766C43.2873 10.8183 43.2593 10.8653 43.2175 10.8975C42.6548 11.2749 36.4132 17.6991 34.0625 20.1428C34.0415 20.1642 34.0163 20.1808 33.9884 20.1916C33.9606 20.2023 33.9308 20.207 33.901 20.2052V20.2052Z"
                                                              fill="white"/>
                                                    </svg>
                                                </i>
                                                <b>{idx + 1}</b>
                                                <span class="feature-bg-border-1"></span>
                                                <span class="feature-bg-border-2"></span>
                                                <span class="feature-bg-border-3"></span>
                                                <span class="feature-bg-border-4"></span>
                                            </div>
                                        </div>
                                        <div class="feature-list-4-content">
                                            <h4 class="title">{content.title}</h4>
                                            <p>{@html content.description}</p>
                                            <br/>
                                        </div>
                                        <div class="feature-4-shape-{idx + 1} d-none d-md-block">
                                            {#if idx === 0}
                                                <svg class="line-dash-path" fill="none" height="122"
                                                     viewBox="0 0 38 122"
                                                     width="38" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.279297 1C41.9846 20.0005 55.1988 87.9525 2.74393 121.294"
                                                          stroke="#A7ACB3" stroke-dasharray="4 4"/>
                                                </svg>
                                            {:else if idx === 1}
                                                <svg class="line-dash-path" fill="none" height="122"
                                                     viewBox="0 0 42 122" width="42" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M41.3076 1.22192C-1.33493 18.0137 -18.0874 85.181 32.5507 121.222"
                                                          stroke="#A7ACB3" stroke-dasharray="4 4"></path>
                                                </svg>
                                            {/if}
                                        </div>
                                    </div>
                                </li>
                            {/each}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- feature-area-end -->

    <!-- optimize-area-start -->
    <section class="optimize-area optimize-wrapper pb-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="optimize-wrapperp pt-35">
                        <div class="section-wrapper mb-40">
                            <span>{config.fifthSection.label}</span>
                            <h5 class="section-title-4 section-title-4-2">{@html config.fifthSection.title}</h5>
                            <p>{@html config.fifthSection.content}</p>
                        </div>
                        <div class="tpdrive-progress mb-25 pr-150">
                            {#each config.fifthSection.data as data}
                                <div class="tpdrive-bar-item mb-30">
                                    <h4 class="tpdrive-bar-title mb-15">
                                        {data.title}
                                    </h4>
                                    <div class="tpdrive-bar-progress">
                                        <div class="progress">
                                            <div aria-valuemax="100" aria-valuemin="0"
                                                 aria-valuenow="65" class="progress-bar wow slideInLeft"
                                                 data-width="{data.size}%"
                                                 data-wow-delay="0s" data-wow-duration=".8s" role="progressbar"
                                                 style="width: {data.size}%; visibility: visible; animation-duration: 0.8s; animation-delay: 0s; animation-name: slideInLeft; background-color:{data.color}">
                                                <span>{data.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="optimize-btn">
                            <a class="blue-btn" href="{config.fifthSection.btn.link}">{config.fifthSection.btn.text}</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="optimize-thumb text-end p-relative pt-35">
                        <div class="optimize-thumb-img">
                            <img alt="" src="assets/img/bg/optimize-bg.png">
                        </div>
                        <div class="optimize-shape">
                            <img alt="" class="optimize-shape-1" src="assets/img/bg/optimize-bg-2.png">
                            <img alt="" class="optimize-shape-2 d-none d-md-block"
                                 data-parallax='{`{"y": 50, "smoothness": 20}`}'
                                 src="assets/img/shape/optimize-shape-2.png">
                            <img alt="" class="optimize-shape-3 d-none d-md-block"
                                 data-parallax='{`{"y": 50, "smoothness": 20}`}'
                                 src="assets/img/shape/optimize-shape-1.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- optimize-area-end -->

    <!-- counter-area-start -->
    <section class="counter-area pb-140">
        <div class="container">
            <div class="counter-bg-4 p-relative fix" style="{theme.defaultGradientAreaHtml}">
                <div class="counter-shape-4  d-none d-md-block">
                    <img alt="" class="counter-shape-4-1" src="assets/img/shape/counter-shape-4-1.png">
                    <img alt="" class="counter-shape-4-2" src="assets/img/shape/counter-shape-4-2.png">
                    <img alt="" class="counter-shape-4-3" src="assets/img/shape/counter-shape-4-3.png">
                    <img alt="" class="counter-shape-4-4" src="assets/img/shape/counter-shape-4-4.png">
                    <img alt="" class="counter-shape-4-5" src="assets/img/shape/counter-shape-4-5.png">
                </div>
                <div class="counter-wrapper d-flex align-items-center justify-content-between">
                    {#each config.sixthSection.counter as c}
                        <div class="counter-item-4 d-flex">
                            <div class="counter-item-4-icon">
                                <i>
                                    <svg fill="none" height="28" viewBox="0 0 18 28" width="18"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1967 8.97496L11.1834 8.82992V3.78816H12.2602V7.60474L15.4619 4.19164V0.614587H2.53824V4.19164L5.73933 7.60474V3.78816H6.81615V8.82992L5.80313 8.97496L1.46143 4.34574V0H16.5387V4.34574L12.1967 8.97496Z"
                                              fill="white"/>
                                        <path d="M9 27.708C4.03724 27.708 0 23.7472 0 18.8786C0 14.0101 4.03724 10.0493 9 10.0493C13.9628 10.0493 18 14.0101 18 18.8786C18 23.7472 13.9628 27.708 9 27.708ZM9 11.1259C4.6311 11.1259 1.07681 14.6037 1.07681 18.8786C1.07681 23.1533 4.6311 26.6312 9 26.6312C13.3689 26.6312 16.9232 23.1533 16.9232 18.8786C16.9232 14.6037 13.3689 11.1259 9 11.1259Z"
                                              fill="white"/>
                                        <path d="M5.27975 24.3296L6.70115 20.0441L2.96191 17.3825H7.58359L9.00014 13.1113L10.4164 17.3825H15.0384L11.2991 20.0441L12.7195 24.3296L9.00014 21.6803L5.27975 24.3296ZM9.00014 20.3585L10.6609 21.5414L10.0269 19.6285L11.6688 18.4596H9.63896L9.00014 16.5329L8.36132 18.4596H6.3318L7.97394 19.6285L7.33943 21.5414L9.00014 20.3585Z"
                                              fill="white"/>
                                        <path d="M9.65103 4.31689H8.57422V8.78997H9.65103V4.31689Z" fill="white"/>
                                    </svg>
                                </i>
                            </div>
                            <div class="counter-item-4-content">
                                <h3 class="counter-item-4-count">
                                <span class="purecounter" data-purecounter-duration="1"
                                      data-purecounter-end="{c.number}">{c.number}</span>+
                                </h3>
                                <p>{c.text}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    <!-- counter-area-end -->

    <!-- portfolio-area-start -->
    <section class="portfolio-area portfolio-4-bg pb-140 mb-115 fix p-relative">
        <div class="portfolio-4-main-bg-shape">
            <img alt="" src="assets/img/shape/portfolio-shape-bg-4.png">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="portfolio-4-wrapper">
                        <div class="portfolio-4 mt-20">
                            <div class="section-wrapper mb-20">
                                <span style="{theme.defaultGradientText}">{config.nineSection.subTitle}</span>
                                <h5 class="section-title-4 section-title-4-2">{@html config.nineSection.title}</h5>
                            </div>
                        </div>
                        <div class="portfolio-tab-4 mb-35">
                            <div aria-orientation="vertical" class="nav flex-column nav-pills me-3" id="v-pills-tab"
                                 role="tablist">
                                {#each config.nineSection.options as btn, idx}
                                    <button aria-controls="v-pills-{btn.id}" aria-selected="{idx === 0}"
                                            on:click={() => currentTabIdx = idx}
                                            class="nav-link {idx === 0 ? 'active': ''}"
                                            data-bs-target="#v-pills-{btn.id}" data-bs-toggle="pill"
                                            id="v-pills-{btn.id}-tab"
                                            role="tab" type="button">{btn.title}
                                    </button>
                                {/each}
                                <!--                                <p class="text-gray font-italic" style="font-size: 10px">{@html config.nineSection.noticeText}</p>-->
                            </div>
                        </div>
                        <div class="nav-tab-slider-4">
                            <div class="tpnav-tab-4 p-relative d-none">
                                <button class="prv-nav-tab">
                              <span>
                                 <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                          fill="currentColor"
                                          fill-rule="evenodd"></path>
                                 </svg>
                              </span>
                                </button>
                                <button class="next-nav-tab">
                              <span>
                                 <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                          fill="currentColor"
                                          fill-rule="evenodd"></path>
                                 </svg>
                              </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="tab-content-4">
                        <div class="tab-content" id="v-pills-tabContent">
                            {#each config.nineSection.options as opt, idx}
                                <div aria-labelledby="v-pills-{opt.id}-tab"
                                     class="tab-pane fade {idx === 0 ? 'active show': ''}" id="v-pills-{opt.id}"
                                     role="tabpanel">
                                    <div class="protfolio-wrapper-4 portfolio-4-active slick-initialized slick-slider">
                                        <div class="prv-testi-case slick-arrow" style="" on:click={() => slideIdx++}>
                                        <span>
                                            <svg
                                                    fill="none" height="14" viewBox="0 0 8 14" width="8"
                                                    xmlns="http://www.w3.org/2000/svg"><path
                                                    d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                                    fill="#9f9fa9"
                                                    fill-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        </div>

                                        <div class="slick-list draggable">
                                            <div class="slick-track"
                                                 style="opacity: 1; width: 4064px; transform: translate3d({currentValue}px, 0px, 0px);">
                                                {#each opt.contents as content, c_idx}
                                                    <div class="portfolio-4-item-single slick-slide slick-current slick-active"
                                                         tabindex="{idx}" style="width: 508px;" data-slick-index="{c_idx * -1}"
                                                         aria-hidden="false">
                                                        <div class="portfolio-4-item p-relative">
                                                            <div class="portfolio-4-thumb">
                                                                <img src="{content.image}" alt="">
                                                            </div>
                                                            <div class="portfolio-4-content">
                                                                <div class="portfolio-4-content-top">
                                                                    <span>{content.subTitle}</span>
                                                                    <h4 class="title">{content.title}</h4>
                                                                </div>
                                                                <div class="portfolio-4-content-bottom">
                                                                    <a href="{config.nineSection.linkBtn.link}" tabindex="0">
                                                                        {config.nineSection.linkBtn.text} <i class="fa-light fa-plus"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/each}
                                            </div>
                                        </div>
                                        <div class="next-testi-case slick-arrow" style="" on:click={() => slideIdx--}>
                                            <span>
                                                <svg
                                                        fill="none" height="14" viewBox="0 0 8 14" width="8"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                            d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                                            fill="#9f9fa9"
                                                            fill-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- portfolio-area-end -->

    <!-- pricing-area-start -->
    <section class="pricing-area tp-price-parent tppricing-box-active pb-170 fix">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-wrapper text-center mb-40">
                        <span style="{theme.defaultGradientText}">{config.eighthSection.subTitle}</span>
                        <h5 class="section-title-4 section-title-4-2">{config.eighthSection.title}</h5>
                    </div>
                </div>
            </div>
            <div class="tpprice-4-switch-box  p-relative">
                <div class="tpprice-4-switch p-relative">
                    <div class="tpprice-switch-wrapper tpprice-4-position tppricing-switch-2">
                        <div class="toggle">
                            <input class="tp-check" id="switcher-price" type="checkbox">
                            <b class="switch"></b>
                        </div>
                        <div class="label-text">
                            <label class="toggler toggler-price-active mb-0 mt-5"
                                   id="filt-monthly-price">{config.eighthSection.billedOptions[0]}</label>
                            <label class="toggler mb-0 mt-10"
                                   id="filt-yearly-price">{config.eighthSection.billedOptions[1]}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-scroll">
                <div class="price-scroll-width">
                    <div class="row gx-0">
                        <div class="col-12">
                            <div class="wrapper-full" id="monthly-price">
                                <!-- priceing-top -->
                                <div class="tppriceing-top">
                                    <div class="row gx-0">
                                        <div class="price-custom-col-1">
                                        </div>
                                        <div class="price-custom-col-2">
                                            <div class="row gx-0">
                                                <div class="col-4">
                                                    <div class="tppricing-4-head text-center">
                                                        <span>{config.eighthSection.pricing.firstOption[0].title}</span>
                                                        <h4 class="title">{config.eighthSection.pricing.firstOption[0].pricing}</h4>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-head active text-center p-relative">
                                                        <div class="big-price-shape"></div>
                                                        <div class="sm-price-shape"></div>
                                                        <span>{config.eighthSection.pricing.firstOption[1].title}</span>
                                                        <h4 class="title">{config.eighthSection.pricing.firstOption[1].pricing}</h4>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-head text-center">
                                                        <span>{config.eighthSection.pricing.firstOption[2].title}</span>
                                                        <h4 class="title">{@html config.eighthSection.pricing.firstOption[2].pricing}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- priceing-top-end -->
                                <!-- pricing-box -->
                                <div class="pricing-box-4">
                                    <!-- pricing-item -->
                                    {#each config.eighthSection.planOptions as opt, idx}
                                        <div class="row gx-0">
                                            <div class="price-custom-col-1">
                                                <div class="tppricing-4-title">
                                                    <h4 class="title">{opt}</h4>
                                                </div>
                                            </div>
                                            <div class="price-custom-col-2">
                                                <div class="row gx-0">
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price tppricing-right text-center">
                                                            <p>{config.eighthSection.pricing.firstOption[0].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price active text-center" >
                                                            <p>{config.eighthSection.pricing.firstOption[1].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price tppricing-left text-center">
                                                            <p>{config.eighthSection.pricing.firstOption[2].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/each}
                                    <!-- pricing-item -->
                                    <div class="row gx-0">
                                        <div class="price-custom-col-1">
                                            <div class="tppricing-4-title" style="border-bottom: 0">
                                                <h4 class="title" style="font-size: x-small; color: gray;">
                                                    *부가세 별도, 파트너 계약은 최소 3개월 이상 <br/>
                                                    영구제 문의는 고객센터로 연락 부탁드립니다.
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="price-custom-col-2">
                                            <div class="row gx-0">
                                                <div class="col-4">
                                                    <div class="tppricing-4-price tppricing-right tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.firstOption[0].btn.link}">
                                                                {config.eighthSection.pricing.firstOption[0].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-price active tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.firstOption[1].btn.link}">
                                                                {config.eighthSection.pricing.firstOption[1].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-price tppricing-right tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.firstOption[2].btn.link}">
                                                                {config.eighthSection.pricing.firstOption[2].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- pricing-item-end -->
                                </div>
                                <!-- pricing-box-end -->
                            </div>
                            <div class="wrapper-full price-is-hide" id="hourly-price">
                                <!-- priceing-top -->
                                <div class="tppriceing-top">
                                    <div class="row gx-0">
                                        <div class="price-custom-col-1">
                                        </div>
                                        <div class="price-custom-col-2">
                                            <div class="row gx-0">
                                                <div class="col-4">
                                                    <div class="tppricing-4-head text-center">
                                                        <span>{config.eighthSection.pricing.secondOption[0].title}</span>
                                                        <h4 class="title">{config.eighthSection.pricing.secondOption[0].pricing}</h4>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-head active text-center p-relative">
                                                        <div class="big-price-shape"></div>
                                                        <div class="sm-price-shape"></div>
                                                        <span>{config.eighthSection.pricing.secondOption[1].title}</span>
                                                        <h4 class="title">{config.eighthSection.pricing.secondOption[1].pricing}</h4>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-head text-center">
                                                        <span>{config.eighthSection.pricing.secondOption[2].title}</span>
                                                        <h4 class="title">{@html config.eighthSection.pricing.secondOption[2].pricing}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- priceing-top-end -->
                                <!-- pricing-box -->
                                <div class="pricing-box-4">
                                    <!-- pricing-item -->
                                    {#each config.eighthSection.planOptions as opt, idx}
                                        <div class="row gx-0">
                                            <div class="price-custom-col-1">
                                                <div class="tppricing-4-title">
                                                    <h4 class="title">{opt}</h4>
                                                </div>
                                            </div>
                                            <div class="price-custom-col-2">
                                                <div class="row gx-0">
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price tppricing-right text-center">
                                                            <p>{config.eighthSection.pricing.secondOption[0].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price active text-center">
                                                            <p>{config.eighthSection.pricing.secondOption[1].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="tppricing-4-price tppricing-left text-center">
                                                            <p>{config.eighthSection.pricing.secondOption[2].values[idx]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/each}
                                    <!-- pricing-item -->
                                    <div class="row gx-0">
                                        <div class="price-custom-col-1">
                                            <div class="tppricing-4-title" style="border-bottom: 0">
                                                <h4 class="title" style="font-size: x-small; color: gray;">
                                                    *부가세 별도, 파트너 계약은 최소 3개월 이상 <br/>
                                                    영구제 문의는 고객센터로 연락 부탁드립니다.
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="price-custom-col-2">
                                            <div class="row gx-0">
                                                <div class="col-4">
                                                    <div class="tppricing-4-price tppricing-right tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.secondOption[0].btn.link}">
                                                                {config.eighthSection.pricing.secondOption[0].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-price active tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.secondOption[1].btn.link}">
                                                                {config.eighthSection.pricing.secondOption[1].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="tppricing-4-price tppricing-right tppricing-4-btn">
                                                        <p>
                                                            <a href="{config.eighthSection.pricing.secondOption[2].btn.link}">
                                                                {config.eighthSection.pricing.secondOption[2].btn.text}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- pricing-item-end -->
                                </div>
                                <!-- pricing-box-end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- pricing-area-end -->

    <!-- testimonial-area-start -->
    <section class="testimonial-area pb-60 scene fix">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="testimonial-4-thumb p-relative pb-60">
                        <div class="testimonial-4-main-thumb p-relative">
                            <img alt="" src="assets/img/shape/testimonial-4-shape-1.png">
                            <div class="testimonial-4-main-anim">
                                <div class="tp-tooltip-circle">
                                    <div class="tp-tooltip-effect-1"></div>
                                    <div class="tp-tooltip-effect-2"></div>
                                    <div class="tp-tooltip-effect-3"></div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-4-shape-1">
                            <img alt="" class="layer" data-depth="0.3" src="assets/img/team/testimonial-4-shape-1.png">
                        </div>
                        <div class="testimonial-4-shape-2">
                            <img alt="" class="layer" data-depth="0.2" src="assets/img/team/testimonial-4-shape-2.png">
                        </div>
                        <div class="testimonial-4-shape-3">
                            <img alt="" class="layer" data-depth="0.1" src="assets/img/team/testimonial-4-shape-3.png">
                        </div>
                        <div class="testimonial-4-shape-4 d-sm-block">
                            <img alt="" class="layer" data-depth="0.2" src="assets/img/team/testimonial-4-shape-4.png">
                        </div>
                        <div class="testimonial-4-shape-5 d-sm-block">
                            <img alt="" class="layer" data-depth="0.1" src="assets/img/team/testimonial-4-shape-5.png">
                        </div>
                        <div class="testimonial-4-shape-6">
                            <img alt="" class="layer" data-depth="0.3" src="assets/img/team/testimonial-4-shape-6.png">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-testimonial-4 pb-60">
                        <div class="testimonial-4-wrap mb-40 pl-70">
                            <div class="section-wrapper mb-50">
                                <span>{config.tenSection.subTitle}</span>
                                <h5 class="section-title-4 section-title-4-2">{config.tenSection.title}</h5>
                            </div>
                            <div class="testimonial-4-wrapper tptestimonial-4-active">
                                <div class="tptestimonial-4-item">
                                    <div class="tptestimonial-4-rating d-flex align-items-center mb-25">
                                        <div class="tptestimonial-4-rating-img mr-30">
                                            <img alt="" src="assets/img/shape/testimonial-4-shape-2.png">
                                        </div>
                                        <div class="review-star">
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                        </div>
                                    </div>
                                    <div class="tptestimonial-4-content d-flex">
                                        <div class="tptestimonial-4-icon mr-20">
                                            <img alt="" src="assets/img/shape/quation-4.png">
                                        </div>
                                        <div class="tptestimonial-4-text">
                                            <p>
                                                As a strategy consultancy, we’re constantly multiple
                                                projects which meant we had little resources left our
                                                online marketing. we were also reluctant to partner
                                                with marketing agencies as most package.!
                                            </p>
                                            <div class="tptestimonial-4-author">
                                                <h4 class="title">Nathalie Grossman</h4>
                                                <span>CEO of Advisor Fuel</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tptestimonial-4-item">
                                    <div class="tptestimonial-4-rating d-flex align-items-center mb-25">
                                        <div class="tptestimonial-4-rating-img mr-30">
                                            <img alt="" src="assets/img/shape/testimonial-4-shape-2.png">
                                        </div>
                                        <div class="review-star">
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                        </div>
                                    </div>
                                    <div class="tptestimonial-4-content d-flex">
                                        <div class="tptestimonial-4-icon mr-20">
                                            <img alt="" src="assets/img/shape/quation-4.png">
                                        </div>
                                        <div class="tptestimonial-4-text">
                                            <p>
                                                As a strategy consultancy, we’re constantly multiple
                                                projects which meant we had little resources left our
                                                online marketing. we were also reluctant to partner
                                                with marketing agencies as most package.!
                                            </p>
                                            <div class="tptestimonial-4-author">
                                                <h4 class="title">Nathalie Grossman</h4>
                                                <span>CEO of Advisor Fuel</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-arrow-4 pl-110">
                            <div class="tptestimonal-4-nav p-relative">
                                <button class="prv-testi-case">
                              <span>
                                 <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                          fill="currentColor"
                                          fill-rule="evenodd"></path>
                                 </svg>
                              </span>
                                </button>
                                <button class="next-testi-case">
                              <span>
                                 <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                          fill="currentColor"
                                          fill-rule="evenodd"></path>
                                 </svg>
                              </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial-area-end -->

    <!-- review-area-start -->
    <div class="review-area tpreview-4 pb-105">
        <div class="container">
            <div class="tpreview-4-wrapper pb-30 mb-30 pt-55">
                <div class="row">
                    {#each config.reviewSection as review, idx}
                    <div class="col-lg-4 col-md-6">
                        <div class="tpreview-4 text-center mb-30">
                            <div class="tpreview-4-icon mb-15">
                                <img alt="" src="{review.image}" width="77px">
                            </div>
                            <h4 class="title">{review.title}</h4>
                            <div class="tpreview-4-content">
                                <p>{review.description}</p>
                                <div class="review-star">
                                    {#each Array(review.star) as _, idx}
                                        <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                    {/each}
                                    {#each Array(5 - review.star) as _, idx}
                                        <i class="fa-sharp fa-light fa-star-sharp"></i>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <!-- review-area-end -->

    <!-- contact-area-start -->
    <section class="contact-area p-relative contact-bg-4 pb-65 mb-60">
        <div class="contact-main-shape-bg d-none d-md-block">
            <img alt="" src="assets/img/bg/contact-4-bg.jpg">
        </div>
        <div class="contact-shape d-none d-lg-block">
            <img alt="" class="contact-shape-1" src="assets/img/shape/contact-4-shape-1.png">
            <img alt="" class="contact-shape-2" src="assets/img/shape/contact-4-shape-2.png">
            <img alt="" class="contact-shape-3" src="assets/img/shape/contact-4-shape-3.png">
            <img alt="" class="contact-shape-4" src="assets/img/shape/contact-4-shape-4.png">
            <img alt="" class="contact-shape-5 d-none d-xxl-block" src="assets/img/shape/contact-4-shape-5.png">
            <img alt="" class="contact-shape-6 d-none d-xxl-block" src="assets/img/shape/contact-4-shape-6.png">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tpcontact-4 mt-30 mb-50">
                        <div class="section-wrapper mb-20">
                            <span style="{theme.defaultGradientText}">Get in touch</span>
                            <h5 class="section-title-4 section-title-4-2">{@html config.contactSection.title}</h5>
                        </div>
                        <div class="tpcontact-4-content">
                            <p>{config.contactSection.description}</p>
                            <a class="phone mb-5" href="tel:{config.contactSection.tel}">{config.contactSection.tel}</a>
                            <a class="mail mb-35" href="mailto:{config.contactSection.email}">{config.contactSection.email}</a>
                            <div class="tpcontact-4-content-btn">
                                <a href="tel:{config.contactSection.btn.link}">{config.contactSection.btn.text}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpcontact-4-box mb-60">
                        <div class="tpcontact-4-box-wrapper">
                            <form action="#">
                                <div class="tpcontact-from-wrapper">
                                    <div class="row gx-6">
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="{config.contactSection.inputs[0]}" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="{config.contactSection.inputs[1]}" type="email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="{config.contactSection.inputs[2]}" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="{config.contactSection.inputs[3]}" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="tpcontact-form-textarea mb-25">
                                                <textarea name="message" placeholder="{config.contactSection.inputs[4]}"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tpcontact-form-submit">
                                        <button>{config.contactSection.inputs[5]}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-area-end -->

    <!-- blog-area-start -->
    <section class="blog-area pb-50 p-relative fix">
        <div class="tpblog-4-shape wow bounceIn d-none d-lg-block" data-wow-delay=".6s" data-wow-duration=".6s">
            <img alt="" src="assets/img/shape/blog-4-shape-1.png">
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 ">
                    <div class="section-wrapper mb-50">
                        <span style="{theme.defaultGradientText}">What's Going On</span>
                        <h5 class="section-title-4 section-title-4-2">Company blog & Insights</h5>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-all-btn text-lg-end mb-40">
                        <a class="blue-btn" href="/">More Articles</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="tpblog-4 p-relative mb-60">
                        <div class="tpblog-4-thumb" data-background="assets/img/blog/blog-4-bg-1.jpg"></div>
                        <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7">
                                <div class="tpblog-4-content">
                                    <h5 class="tpblog-4-content-sub-tilte">SEO agency</h5>
                                    <h4 class="tpblog-4-content-title"><a href="/">Wins 2023 good design
                                        london Award</a></h4>
                                    <p>The annual good design Awards <br> is london oldest prestigious.</p>
                                    <div class="tpblog-4-info">
                                        <span>Nev 21,2023</span>
                                        <span><a href="#"><i>By</i> Admin</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpblog-4 mb-60">
                        <div class="tpblog-4-thumb" data-background="assets/img/blog/blog-4-bg-2.jpg"></div>
                        <div class="row justify-content-end">
                            <div class="col-md-7 ">
                                <div class="tpblog-4-content">
                                    <h5 class="tpblog-4-content-sub-tilte">SEO agency</h5>
                                    <h4 class="tpblog-4-content-title"><a href="/">Me in resolution
                                        pianoforte continuing</a></h4>
                                    <p>The annual good design Awards <br> is london oldest prestigious.</p>
                                    <div class="tpblog-4-info">
                                        <span>Nev 21,2023</span>
                                        <span><a href="#"><i>By</i> Admin</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog-area-end -->

    <!-- award-area-start -->
    <section class="award-area pb-80">
        <div class="container">
            <div class="row">
                {#each config.awardSection as award}
                <div class="col-lg-4 col-md-6">
                    <div class="tpaward text-center mb-30">
                        <div class="tpaward-icon mb-15">
                            <img alt="" src="{award.icon}">
                        </div>
                        <div class="tpaward-content">
                            <h4 class="title mb-5">{award.title}</h4>
                            <p>{award.content}</p>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
    <!-- award-area-end -->
</main>

<Footer {data}/>

<!-- JS here -->
<script src="assets/js/vendor/jquery.js"></script>
<script src="assets/js/vendor/waypoints.js"></script>
<script src="assets/js/bootstrap-bundle.js"></script>
<script src="assets/js/meanmenu.js"></script>
<script src="assets/js/swiper-bundle.js"></script>
<script src="assets/js/slick.js"></script>
<script src="assets/js/nouislider.js"></script>
<script src="assets/js/magnific-popup.js"></script>
<script src="assets/js/parallax.js"></script>
<script src="assets/js/nice-select.js"></script>
<script src="assets/js/wow.js"></script>
<script src="assets/js/isotope-pkgd.js"></script>
<script src="assets/js/imagesloaded-pkgd.js"></script>
<script src="assets/js/tilt.jquery.min.js"></script>
<script src="assets/js/purecounter.js"></script>
<script src="assets/js/ajax-form.js"></script>
<script src="assets/js/parallax-scroll.js"></script>
<script src="assets/js/TweenMax.min.js"></script>
<script src="assets/js/wavify.js"></script>
<script src="assets/js/animate-headline.js"></script>
<script src="assets/js/main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
<script>
    setTimeout(() => {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 7,
            spaceBetween: 50,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, 100)
</script>
</body>