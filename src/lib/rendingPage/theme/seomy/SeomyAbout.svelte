<script>
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import VersionNotice from "$lib/component/seomy/VersionNotice.svelte";
    import {goto} from "$app/navigation";
    import Footer from "$lib/component/seomy/Footer.svelte";
    import seomySetting from "$lib/rendingPage/theme/seomy/SeomySetting.js";

    export let data
    const EN_NAME = data.props.EN_NAME,
        KR_NAME = data.props.KR_NAME
    const config = seomySetting[EN_NAME]?.about ?? seomySetting["WEZXRO"].about

    if (EN_NAME !== "WEZXRO") goto("/error")
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <title>{EN_NAME}</title>
    <meta content="" name="description">
    <meta content="width=device-width, initial-scale=1" name="viewport">

    <!-- Place favicon.ico in the root directory -->
    <link href="assets/img/logo/favicon.png" rel="shortcut icon" type="image/x-icon">

    <!-- CSS here -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/animate.css" rel="stylesheet">
    <link href="assets/css/swiper-bundle.css" rel="stylesheet">
    <link href="assets/css/slick.css" rel="stylesheet">
    <link href="assets/css/nouislider.css" rel="stylesheet">
    <link href="assets/css/magnific-popup.css" rel="stylesheet">
    <link href="assets/css/font-awesome-pro.css" rel="stylesheet">
    <link href="assets/css/spacing.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
</svelte:head>

<body>

<VersionNotice />
<BackToTop />
<Header {data} />

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
                        <img alt="logo" src="assets/img/logo/logo.svg">
                    </a>
                </div>
            </div>
            <div class="tp-main-menu-mobile mb-35"></div>
            <div class="offcanvas__btn">
                <a class="tp-btn w-100" href="/contact">Getting Started</a>
            </div>
            <div class="offcanvas__contact mb-40">
                <p class="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p>
                <p class="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@seomy.com</a></p>
            </div>
            <div class="offcanvas__social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="body-overlay"></div>
<!-- offcanvas area end -->

<main>

    <!-- breadcrumb-about-area-start -->
    <div class="breadcrumb-about-area scene p-relative breadcrumb-bg">
        <div class="about-inner-shape">
            <div class="about-inner-shape-2 d-none d-md-block">
                <img alt="" class="layer" data-depth="0.5" src="assets/img/shape/about-inner-shape-1.png">
            </div>
            <div class="about-inner-shape-3 d-none d-md-block">
                <img alt="" class="layer" data-depth="0.5" src="assets/img/shape/about-inner-shape-2.png">
            </div>
        </div>
        <div class="tpbanner-shape-y scene-y">
            <div class="about-inner-shape-4 d-none d-md-block">
                <img alt="" class="layer" data-depth="0.6" src="assets/img/shape/inner-hand-1.png">
            </div>
        </div>
        <!-- breadcrumb-area-start -->
        <section class="breadcrumb-area pb-115 pt-195">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="breadcrumb__content p-relative z-index-1">
                            <h3 class="breadcrumb__title">{config.breadcrumb.title}</h3>
                            <div class="breadcrumb__list">
                                {#each config.breadcrumb.list as item, idx}
                                    {#if idx !== 0}
                                        <span class="dvdr" style="margin-left: 10px"></span>
                                    {/if}
                                    <span><a href="{item.link}">{item.context}</a></span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb-area-end -->
        <!-- about-area-start -->
        <section class="about-area pb-75 p-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-inner-thumb">
                            <div class="about-inner-shape-1">
                                <img alt="" src="assets/img/about/about-inner-1.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-inner-content">
                            <span>Welcome</span>
                            <h4 style="font-size: 53px" class="about-inner-title">{@html config.about.title}</h4>
                            <p>{@html config.about.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about-area-end -->
    </div>
    <!-- breadcrumb-about-area-end -->

    <!-- brand-area-start -->
    <section class="brand-area pb-120">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-2 offset-lg-5 col-md-4">
                    <div class="brand-wrapper ">
                        <div class="brand-inner-content">
                            <h4 class="brand-inner-title">{@html config.brand.innerTitle}</h4>
                            <a href="#our-misson">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 20 30" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect height="28.5" rx="9.25" stroke="white" stroke-width="1.5" width="18.5" x="0.75"
                                              y="0.75"/>
                                        <rect height="4.5" rx="2.25" stroke="white" stroke-width="1.5" width="4.5" x="7.75"
                                              y="6.75"/>
                                    </svg>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-8">
                    <div class="brand-inner-wrapper tpbrand-inner-active">
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-1.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-2.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-3.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-4.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-5.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-6.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-1.png">
                        </div>
                        <div class="tpbrand-inner-item">
                            <img alt="" src="assets/img/brand/inner-brand-2.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- brand-area-end -->

    <!-- process-area-start -->
    <section class="process__area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpsection__wrapper text-center mb-70">
                        <div class="tpbanner__sub-title mb-15">
                            <span>How we do it</span>
                            <i>
                                <svg fill="none" height="38" viewBox="0 0 124 38" width="124"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern0)" fill-opacity="0.08" height="38" width="124"/>
                                    <defs>
                                        <pattern height="1" id="pattern0" patternContentUnits="objectBoundingBox"
                                                 width="1">
                                            <use transform="translate(-0.0596774) scale(0.00612903 0.02)"
                                                 xlink:href="#image0_933_1323"/>
                                        </pattern>
                                        <image height="50" id="image0_933_1323" width="180"
                                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <h2 class="tpsection__title">Helping others Succeed</h2>
                    </div>
                </div>
            </div>
            <div class="tpprocess__border-bottom p-relative pb-45">
                <div class="tpprocess-shape-four d-none d-md-block">
                    <img alt="" src="assets/img/shape/process-rocket.png">
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="tpprocess__item p-relative mb-40">
                            <div class="tpprocess__wrapper">
                                <span class="tpprocess__count mb-25">1</span>
                                <h4 class="tpprocess__title">Brainstorming and Creative <br> ideas & Research</h4>
                            </div>
                            <div class="tpprocess-shape-one d-none d-md-block">
                                <svg fill="none" height="15" viewBox="0 0 112 15" width="112"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="line-dash-path"
                                          d="M1 8.56464C18.4695 1.84561 64.9267 -6.52437 111 13.7479"
                                          stroke="#A6A8B0" stroke-dasharray="4 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="tpprocess__item p-relative ml-30 mb-40">
                            <div class="tpprocess__wrapper tpprocess__two">
                                <span class="tpprocess__count mb-25">2</span>
                                <h4 class="tpprocess__title">Fully-Automated Keyword <br> Grouping</h4>
                            </div>
                            <div class="tpprocess-shape-two d-none d-lg-block">
                                <svg fill="none" height="15" viewBox="0 0 112 15" width="112"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="line-dash-path"
                                          d="M1 6.43536C18.4695 13.1544 64.9267 21.5244 111 1.25212"
                                          stroke="#A6A8B0" stroke-dasharray="4 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="tpprocess__item p-relative ml-55 mb-40">
                            <div class="tpprocess__wrapper tpprocess__three">
                                <span class="tpprocess__count mb-25">3</span>
                                <h4 class="tpprocess__title">Building the strategy to <br> boost Your Sales</h4>
                            </div>
                            <div class="tpprocess-shape-three d-none d-md-block">
                                <svg fill="none" height="15" viewBox="0 0 112 15" width="112"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="line-dash-path"
                                          d="M1 8.56464C18.4695 1.84561 64.9267 -6.52437 111 13.7479" stroke="#A6A8B0"
                                          stroke-dasharray="4 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="tpprocess__item d-flex justify-content-end mb-40">
                            <div class="tpprocess__wrapper tpprocess__four">
                                <span class="tpprocess__count mb-25">4</span>
                                <h4 class="tpprocess__title">Helping to achieve more <br> People</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- process-area-end -->

    <!-- mission-area-start -->
    <div class="mission-area pb-120 pt-100" id="our-misson">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="mission-content ">
                        <span><img alt="" src="assets/img/shape/about-5-shape-1.svg"></span>
                        <p>e are in business to develop an SEO software that allows anyone to independently optimize and
                            promote a website on the web, regardless of the level of expertise.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mission-shape p-relative d-none d-lg-block">
                        <div class="mission-shape-1">
                            <img alt="triangle" src="assets/img/shape/smill.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mission-two">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="mission-shape p-relative  d-none d-lg-block">
                            <div class="mission-shape-2">
                                <img alt="" src="assets/img/shape/mission-shape-1.png">
                            </div>
                            <div class="mission-shape-3">
                                <img alt="" src="assets/img/shape/mission-shape-2.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="mission-content">
                            <span><img alt="" src="assets/img/shape/about-5-shape-2.svg"></span>
                            <p>We aim to constantly improve the user experience, functionality, and support to provide
                                the
                                best possible options for search engine optimization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mission-area-end -->

    <!-- counter-area-start -->
    <div class="counter-area pb-120">
        <div class="container">
            <div class="counter-border">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="inner-counter">
                            <div class="inner-counter-shape">
                                <img alt="" src="assets/img/shape/counter-shape-1.png">
                            </div>
                            <div class="inner-counter-count d-flex align-items-center ml-45">
                                <div class="inner-counter-list">
                              <span class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="25">25</span>
                                    <i class="fa-regular fa-plus"></i>
                                </div>
                                <div class="inner-counter-info">
                              <span>Years <br>
                                 Of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="inner-counter ml-70">
                            <div class="inner-counter-shape inner-counter-shape-2">
                                <img alt="" src="assets/img/shape/counter-shape-2.png">
                            </div>
                            <div class="inner-counter-count d-flex align-items-center">
                                <div class="inner-counter-list">
                                    <span class="purecounter" data-purecounter-duration="1"
                                          data-purecounter-end="340"></span>
                                    <i class="fa-regular fa-plus"></i>
                                </div>
                                <div class="inner-counter-info">
                                    <span>Project <br> Complite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="inner-counter d-flex justify-content-end">
                            <div class="inner-counter-shape inner-counter-shape-3">
                                <img alt="" src="assets/img/shape/counter-shape-3.png">
                            </div>
                            <div class="inner-counter-count d-flex align-items-center">
                                <div class="inner-counter-list">
                              <span class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="25">25</span>
                                    <i class="fa-regular fa-plus"></i>
                                </div>
                                <div class="inner-counter-info">
                                    <span>Satisfied Clients On <br> 24 Countries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- counter-area-end -->

    <!-- company-area-start -->
    <section class="company-area pb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6 ">
                    <div class="company-wrap">
                        <div class="company-content">
                            <h4 class="company-title">Discovery our culture</h4>
                            <p>More 15,000 Companies & partners <br> trusted & choice SEOMY.</p>
                        </div>
                        <div class="company-thumb">
                            <img alt="" src="assets/img/banner/company-1.jpg">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <div class="company-thumb">
                        <img alt="" src="assets/img/banner/company-2.jpg">
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <div class="company-thumb d-md-flex d-lg-block">
                        <img alt="" class="mb-30 company-thumb-inner-mr" src="assets/img/banner/company-3.jpg">
                        <img alt="" src="assets/img/banner/company-4.jpg">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- company-area-end -->

    <!-- award-area-start -->
    <section class="award-area pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="tpaward text-center mb-30">
                        <div class="tpaward-icon mb-15">
                            <img alt="" src="assets/img/shape/award-shape-1.png">
                        </div>
                        <div class="tpaward-content">
                            <h4 class="title mb-5">Best of the Year</h4>
                            <p>Best Apps - Apple</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="tpaward tpaward-border text-center mb-30">
                        <div class="tpaward-icon mb-15">
                            <img alt="" src="assets/img/shape/award-shape-2.png">
                        </div>
                        <div class="tpaward-content">
                            <h4 class="title mb-5">Best of the Year</h4>
                            <p>Best Apps - Google</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="tpaward text-center mb-30">
                        <div class="tpaward-icon mb-15">
                            <img alt="" src="assets/img/shape/award-shape-3.png">
                        </div>
                        <div class="tpaward-content">
                            <h4 class="title mb-5">Best of the Year</h4>
                            <p>Innovation by Design - Fast Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- award-area-end -->

    <!-- funfact-area-start -->
    <section class="funfact-area pb-80">
        <div class="container">
            <div class="tpfunfact p-relative">
                <div class="tpfunfact-bg theme-bg-2" data-background="assets/img/shape/funfact-1.png">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tpsection__content feature-white-section text-center">
                                <div class="tpbanner__sub-title mb-15">
                                    <span>Selected Projects</span>
                                    <i>
                                        <svg fill="none" height="36" viewBox="0 0 150 36" width="150"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <rect fill="url(#pattern0)" fill-opacity="0.1" height="36" width="150"
                                                  x="0.00012207"/>
                                            <defs>
                                                <pattern height="1" id="pattern1" patternContentUnits="objectBoundingBox"
                                                         width="1">
                                                    <use transform="translate(-0.0507936) scale(0.00603175 0.0205405)"
                                                         xlink:href="#image0_853_2637"/>
                                                </pattern>
                                                <image height="50" id="image0_853_2637" width="180"
                                                       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAAXNSR0IArs4c6QAAA8JJREFUeF7tnVFO41AMRa9TkIoEIqyA7GA6O2ALs9JZynR2UFZAEB9TCYhHfokhlSrkTqdpXd38pG2cxjk+eXnJjwWJlqcnrTFHfQE0CjSWuthacCuKWgU1FDUEtX33U/v4/atzFbSiaC1EBS2Gzxh+V+CxbANWAqzs8xuwuruS8pnLaRCQ00gDcFlnHRaVoNEK90VSoDFpXeBTyXechwluopv8MOE7PHaKlVRo39ZY3t1JuVC4HJ7ApEKbtJeXaLoZFiapAPcqWLi4hz/dIx1hEN1kd+FVsJR3tNfXsjxSVmd52IMIvSGu4BtMXsXilEfZo1a3n+Isywiv+O3TGk5pdq/K3kI//dFmBjwIxd2dfnAPn9IM60eb6/sI//qKFac0nyDDQvuoiwoPNr8F8GAjb3kI43J0AuN5fBEeKOL7XN6mN68ztOf+EBsS+mWtv6BYHL1qTOC/EfA3NeVh1hZ/m9NPe579QB/b7YcOrT3obkvCL5ivErx8R62z7QOgdqhRbW4rb7B8Gd5k2Vd7a3Uzlx9b84gQevmjGoljDAlMReDmSrYOxrERmkJPVSceJ0iAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHAQqdo07MMkiAQgdBMSwHgZxCj/pvO+aNPtx7st/ostT38f7surTnf3P3wxKYTOiNdmHjhvCj5u9+quMm8B+nv0Z7Co0kraGo5TRuReatx/xCGFo716VXo6A++xbPh3V0p3/fT+i1/izNHK1/nZSmjqW3nQlp7Xvt87k3dNyFtjUpxRz1BdBsXAQmvjUtVdR2UfCOsAvVIXbom34zl+/b9g61dfuHw3KXIAHv0GsNKU3wSvu1CG6L8FKaUZ59x97xnb10xVU827qzu/wwcEYGTQodFO8Uwmwa5FMgG/krQWNdVcuI7xdAf+vspz/DtslyH08x+460RUY7/lR3dwo9WbWPeyB/JrAsbCq0TzY+zfT/iIyc+xxvl33/AiWjt0Jf7u62AAAAAElFTkSuQmCC"/>
                                            </defs>
                                        </svg>
                                    </i>
                                </div>
                                <h2 class="tpsection-title tpsection-title-white mb-15">We Believe In Our Success</h2>
                            </div>
                        </div>
                    </div>
                    <div class="tpfunfact-shape d-none d-md-block">
                        <div class="tpfunfact-shape-one"><img alt="" src="assets/img/shape/funfact-2.png"></div>
                        <div class="tpfunfact-shape-two"><img alt="" src="assets/img/shape/funfact-3.png"></div>
                    </div>
                </div>
                <div class="tpfunfact-box">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="tpfunfact-wrapper text-center mb-50">
                                <span class="tpfunfact-title">Keywords</span>
                                <h5 class="tpfunfact-count mb-15">4<span>.628.319.632</span></h5>
                                <div class="tpfunfact-tag">
                                    <span><i><img alt=""
                                                  src="assets/img/shape/funfact-icon-1.png"></i>62 Countries</span>
                                    <span><i><img alt=""
                                                  src="assets/img/shape/funfact-icon-2.png"></i>28 Languages</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="tpfunfact-wrapper text-center mb-50">
                                <span class="tpfunfact-title">Search Volume</span>
                                <h5 class="tpfunfact-count mb-15">106,<span>9 Billion</span></h5>
                                <div class="tpfunfact-tag">
                              <span><i><img alt="" src="assets/img/shape/funfact-icon-3.png"></i>4+ Billion
                                 Keywords</span>
                                    <span><i><img alt="" src="assets/img/shape/funfact-icon-4.png"></i>36TB Data</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- funfact-area-end -->

    <!-- team-area-start -->
    <section class="team-area pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-3 text-center mb-35">
                        <div class="section-3-title mb-10">Meet our team of <br> expert</div>
                        <p>We're a 100% remote team spread all across the world!</p>
                    </div>
                    <div class="team-inner-all  text-center mb-70">
                        <a class="tp-btn" href="team.html">Join Our Team</a>
                    </div>
                </div>
            </div>
            <div class="row gx-9 pb-30">
                <div class="col-lg-3 col-md-6">
                    <div class="team-5-item text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img alt="" src="assets/img/team/team-5-1.png">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Danny Russell</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-2 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img alt="" src="assets/img/team/team-5-2.png">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Byron Conner</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-3 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img alt="" src="assets/img/team/team-5-3.png">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Annette Black</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-4 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img alt="" src="assets/img/team/team-5-4.png">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Kathryn Murphy</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- team-area-end -->

</main>

<Footer {data} />

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
<script src="assets/js/purecounter.js"></script>
<script src="assets/js/parallax-scroll.js"></script>
<script src="assets/js/ajax-form.js"></script>
<script src="assets/js/main.js"></script>
</body>