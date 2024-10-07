<script>
    import Header from "$lib/component/seomy/Header.svelte";
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Loader from "$lib/component/seomy/Loader.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";
</script>

<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <title>Digital Marketing & SEO Agency HTML Template</title>
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
</head>

<body>
<Loader/>
<BackToTop/>
<Header data="{data}"/>
<div id="scroll-indicator"></div>

<!-- pre loader area start -->
<div id="loading">
    <div id="loading-center">
        <div id="loading-center-absolute">
            <!-- loading content here -->
            <div class="tp-preloader-content">
                <div class="tp-preloader-logo">
                    <div class="tp-preloader-circle">
                        <svg fill="none" height="190" viewBox="0 0 380 380" width="190"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="190" cy="190" r="180" stroke="#D9D9D9" stroke-linecap="round"
                                    stroke-width="6"></circle>
                            <circle cx="190" cy="190" r="180" stroke="red" stroke-linecap="round"
                                    stroke-width="6"></circle>
                        </svg>
                    </div>
                    <img alt="" src="assets/img/logo/preloader/preloader-icon.svg">
                </div>
                <p class="tp-preloader-subtitle">Loading</p>
            </div>
        </div>
    </div>
</div>
<!-- pre loader area end -->


<!-- back to top start -->
<div class="back-to-top-wrapper">
    <button class="back-to-top-btn" id="back_to_top" type="button">
        <svg fill="none" height="7" viewBox="0 0 12 7" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="1.5"/>
        </svg>
    </button>
</div>
<!-- back to top end -->

<!-- header-area-start -->
<header>
    <div class="tptransparent__header header-1" id="header-sticky">
        <div class="tp-header-top">
            <div class="container">
                <div class="tp-mega-menu-wrapper">
                    <div class="row align-items-center">
                        <div class="col-xxl-2 col-xl-2 col-lg-6 col-6">
                            <div class="tplogo__area">
                                <a href="index.html">
                                    <img alt="logo" src="assets/img/logo/logo.svg">
                                </a>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-7 col-lg-7 d-none d-xl-block">
                            <div class="tpmenu__area main-mega-menu text-center">
                                <nav class="tp-main-menu-content">
                                    <ul>
                                        <li class="has-dropdown has-mega-menu">
                                            <a href="index.html">Home</a>
                                            <div class="tp-submenu submenu has-homemenu tp-mega-menu">
                                                <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                    <div class="col homemenu active">
                                                        <div class="homemenu-thumb">
                                                            <img alt="" src="assets/img/menu/home-1.jpg">
                                                        </div>
                                                        <div class="homemenu-btn">
                                                            <a class="menu-btn mb-5" href="index.html">Multi Page</a>
                                                            <a class="menu-btn" href="index-one-page.html">One Page</a>
                                                        </div>
                                                        <div class="demo-name">
                                                            <span>SEO Marketing</span>
                                                        </div>
                                                    </div>
                                                    <div class="col homemenu">
                                                        <div class="homemenu-thumb">
                                                            <img alt="" src="assets/img/menu/home-2.jpg">
                                                        </div>
                                                        <div class="homemenu-btn">
                                                            <a class="menu-btn mb-5" href="index-2.html">Multi Page</a>
                                                            <a class="menu-btn" href="index-2-one-page.html">One
                                                                Page</a>
                                                        </div>
                                                        <div class="demo-name">
                                                            <span>SEO Analysis</span>
                                                        </div>
                                                    </div>
                                                    <div class="col homemenu">
                                                        <div class="homemenu-thumb">
                                                            <img alt="" src="assets/img/menu/home-3.jpg">
                                                        </div>
                                                        <div class="homemenu-btn">
                                                            <a class="menu-btn mb-5" href="index-3.html">Multi Page</a>
                                                            <a class="menu-btn" href="index-3-one-page.html">One
                                                                Page</a>
                                                        </div>
                                                        <div class="demo-name">
                                                            <span>Business SEO</span>
                                                        </div>
                                                    </div>
                                                    <div class="col homemenu">
                                                        <div class="homemenu-thumb">
                                                            <img alt="" src="assets/img/menu/home-4.jpg">
                                                        </div>
                                                        <div class="homemenu-btn">
                                                            <a class="menu-btn mb-5" href="index-4.html">Multi Page</a>
                                                            <a class="menu-btn" href="index-4-one-page.html">One
                                                                Page</a>
                                                        </div>
                                                        <div class="demo-name">
                                                            <span>SEO Agency</span>
                                                        </div>
                                                    </div>
                                                    <div class="col homemenu">
                                                        <div class="homemenu-thumb">
                                                            <img alt="" src="assets/img/menu/home-5.jpg">
                                                        </div>
                                                        <div class="homemenu-btn">
                                                            <a class="menu-btn mb-5" href="index-5.html">Multi Page</a>
                                                            <a class="menu-btn" href="index-5-one-page.html">One
                                                                Page</a>
                                                        </div>
                                                        <div class="demo-name">
                                                            <span>SEO Campaign</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li class="header-services has-dropdown has-mega-menu">
                                            <a href="services.html">Services</a>
                                            <div class="tp-mega-menu tp-submenu submenu">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <div class="tp-menu-banner">
                                                            <h5 class="tp-menu-banner-title">Services Overview</h5>
                                                            <ul>
                                                                <li>
                                                                    <a href="keyword-search.html">
                                                                        <span> <img
                                                                                alt=""
                                                                                src="assets/img/header-icon/keyword.png"> </span>
                                                                        Keyword Research
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="seo-audit.html">
                                                                        <span> <img
                                                                                alt=""
                                                                                src="assets/img/header-icon/audit.png"> </span>
                                                                        SEO Audit Services
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="building-social-services.html">
                                                                        <span> <img
                                                                                alt=""
                                                                                src="assets/img/header-icon/building.png"> </span>
                                                                        Link Building Services
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="social-media-markiting.html">
                                                                        <span> <img
                                                                                alt=""
                                                                                src="assets/img/header-icon/media.png"> </span>
                                                                        Social Media Marketing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <span> <img
                                                                                alt=""
                                                                                src="assets/img/header-icon/analysis.png"> </span>
                                                                        SEO analysis.
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="tp-menu-banner-wrap">
                                                            <div class="tp-menu-banner-content">
                                                                <span>SEO Agency</span>
                                                                <h5 class="tp-menu-banner-title-2">The #1 SEO <br>
                                                                    agency for fast growing <br> companies.</h5>
                                                                <div class="tp-menu-banner-btn">
                                                                    <a href="services.html">
                                                                        Learn more
                                                                        <span>
                                                            <svg fill="none" height="10" viewBox="0 0 9 10" width="9"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                               <path d="M1 1.5L8 8.5" stroke="currentColor"
                                                                     stroke-linecap="round" stroke-linejoin="round"
                                                                     stroke-width="1.5"/>
                                                               <path d="M8 1.5V8.5H1" stroke="currentColor"
                                                                     stroke-linecap="round" stroke-linejoin="round"
                                                                     stroke-width="1.5"/>
                                                            </svg>
                                                         </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="tp-menu-banner-thumb">
                                                                <img alt=""
                                                                     src="assets/img/header-icon/header-banner/header-banner-1.png">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="has-dropdown has-megamenu">
                                            <a href="about.html">Pages</a>
                                            <ul class="tp-submenu submenu mega-menu mega-menu-container">
                                                <li>
                                                    <ul>
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="services.html">Services</a></li>
                                                        <li><a href="team.html">Team Member</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="sign-in.html">Sign In</a></li>
                                                        <li><a href="sign-out.html">Sign Up</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="portfolio.html">Case Studies 2 Columns</a></li>
                                                        <li><a href="portfolio-2.html">Case Studies 3 Columns</a></li>
                                                        <li><a href="portfolio-details.html">Case Studies Details</a>
                                                        </li>
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="blog-list.html">Blog List</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                        <li><a href="blog-details-2.html">Blog Details Full Width</a>
                                                        </li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="/contact">Contact</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="blog.html">Blog</a>
                                            <ul class="tp-submenu submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                                <li><a href="blog-list.html">Blog List</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="blog-details-2.html">Blog Details Full Width</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-3 col-lg-6 col-6">
                            <div class="tpheader__right d-flex align-items-center justify-content-end">
                                <div class="search-btn-wrap">
                                    <button class="button-search-toggle">
                                        <i class="header_search-button far fa-search d-none"></i>
                                        <i class="header_search-button">
                                            <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                      stroke="#271D3A" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="1.5"/>
                                                <path d="M19.0001 19L17.2001 17.2" stroke="#271D3A" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="1.5"/>
                                            </svg>
                                        </i>
                                        <i class="header_search-close far fa-times"></i>
                                    </button>
                                </div>
                                <div class="tpheader__btn ml-25 d-none d-sm-block">
                                    <a class="tp-header-btn" href="/contact">Get a Quote</a>
                                </div>
                                <div class="offcanvas-btn d-xl-none ml-20">
                                    <button class="offcanvas-open-btn"><i class="fa-solid fa-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-search-area p-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="tp-search-form p-relative">
                            <form action="#">
                                <input placeholder='Try "freelance" or "typography"..."' type="text">
                                <button class="search-submit-icon" type="submit">
                                    <i>
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                            <path d="M19.0001 19L17.2001 17.2" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="1.5"/>
                                        </svg>
                                    </i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- header-area-end -->

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

    <!-- banner-area-start -->
    <section class="banner__area tpbanner-space scene tpbanner-shape-wrapper fix"
             data-background="assets/img/banner/banner-1.png">
        <div class="tpbanner-shape-wrappers">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="tpbanner__content text-center">
                            <div class="tpbanner__sub-title mb-15">
                                <span>Welcome To</span>
                                <i>
                                    <svg fill="none" height="35" viewBox="0 0 110 35" width="110"
                                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect fill="url(#pattern)" fill-opacity="0.08" height="34.1" width="110"/>
                                        <defs>
                                            <pattern height="1" id="pattern" patternContentUnits="objectBoundingBox"
                                                     width="1">
                                                <use transform="translate(-0.06) scale(0.00611111 0.0197133)"
                                                     xlink:href="#image0_831_2448"/>
                                            </pattern>
                                            <image height="50" id="image0_831_2448" width="180"
                                                   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                        </defs>
                                    </svg>
                                </i>
                            </div>
                            <h1 class="tpbanner__title mb-25 pb-10">SEO Marketing & Agency.</h1>
                            <p>Ensuring the best return on investment for your bespoke SEO <br> Campaign requirement.
                            </p>
                            <div class="tpbanner__search">
                                <form action="#">
                                    <div class="tpbanner__form d-flex align-items-center">
                                        <div class="tpbanner__input">
                                            <input placeholder="https:// yoursite.com" type="text">
                                            <span>
                                       <svg fill="none" height="17" viewBox="0 0 17 17" width="17"
                                            xmlns="http://www.w3.org/2000/svg">
                                          <path
                                                  d="M9.36754 7.63202C11.286 9.55045 11.286 12.654 9.36754 14.5639C7.44912 16.4738 4.34553 16.4824 2.43562 14.5639C0.525724 12.6455 0.517198 9.54192 2.43562 7.63202"
                                                  stroke="#6F7276" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                          <path
                                                  d="M7.26078 9.73795C5.26561 7.74279 5.26561 4.50277 7.26078 2.49908C9.25594 0.495393 12.496 0.50392 14.4996 2.49908C16.5033 4.49425 16.4948 7.73426 14.4996 9.73795"
                                                  stroke="#6F7276" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                       </svg>
                                    </span>
                                        </div>
                                        <div class="tpbanner__input">
                                            <input placeholder="youremail@domain.com" type="email">
                                            <span>
                                       <svg fill="none" height="16" viewBox="0 0 18 16" width="18"
                                            xmlns="http://www.w3.org/2000/svg">
                                          <path
                                                  d="M13 14.3333H5C2.6 14.3333 1 13.1569 1 10.4118V4.92157C1 2.17647 2.6 1 5 1H13C15.4 1 17 2.17647 17 4.92157V10.4118C17 13.1569 15.4 14.3333 13 14.3333Z"
                                                  stroke="#6F7276" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-miterlimit="10" stroke-width="1.5"/>
                                          <path
                                                  d="M13 5.3139L10.496 7.27469C9.672 7.91783 8.32 7.91783 7.496 7.27469L5 5.3139"
                                                  stroke="#6F7276" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-miterlimit="10" stroke-width="1.5"/>
                                       </svg>
                                    </span>
                                        </div>
                                        <div class="tpbanner__search-btn">
                                            <button class="banner-search-btn">Analyze Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tpbanner-shape  d-none d-lg-block">
                <div class="tpbanner-shape-one">
                    <img alt="" class="layer" data-depth="0.3" src="assets/img/shape/banner-plus.png">
                </div>
                <div class="tpbanner-shape-three">
                    <img alt="" class="layer" data-depth="0.4" src="assets/img/shape/banner-dots.png">
                </div>
                <div class="tpbanner-shape-four">
                    <img alt="" src="assets/img/shape/banner-archer.png">
                </div>
                <div class="tpbanner-shape-five">
                    <img alt="" class="layer" data-depth="0.2" src="assets/img/shape/banner-pose.png">
                </div>
                <div class="tpbanner-shape-six">
                    <img alt="" class="layer" data-depth="0.3" src="assets/img/shape/banner-tree.png">
                </div>
            </div>
        </div>
        <div class="tpbanner-shape-wrappers tpbanner-shape-y scene-y">
            <div class="tpbanner-shape  d-none d-lg-block">
                <div class="tpbanner-shape-two">
                    <img alt="" class="layer" data-depth="0.6" src="assets/img/shape/banner-megaphone.png">
                </div>
            </div>
        </div>
    </section>
    <!-- banner-area-end -->

    <!-- process-area-start -->
    <section class="process__area pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpsection__wrapper text-center mb-70">
                        <div class="tpbanner__sub-title mb-15">
                            <span>How we do it</span>
                            <i>
                                <svg fill="none" height="38" viewBox="0 0 124 38" width="124"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern1)" fill-opacity="0.08" height="38" width="124"/>
                                    <defs>
                                        <pattern height="1" id="pattern1" patternContentUnits="objectBoundingBox"
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
                    <div class="col-lg-3 col-sm-6">
                        <div class="tpprocess__item p-relative mb-40">
                            <div class="tpprocess__wrapper">
                                <span class="tpprocess__count mb-25">1</span>
                                <h4 class="tpprocess__title">Brainstorming and Creative <br> ideas & Research</h4>
                            </div>
                            <div class="tpprocess-shape-one d-none d-md-block">
                                <svg fill="none" height="15" viewBox="0 0 112 15" width="112"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="line-dash-path"
                                          d="M1 8.56464C18.4695 1.84561 64.9267 -6.52437 111 13.7479" stroke="#A6A8B0"
                                          stroke-dasharray="4 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="tpprocess__item p-relative ml-30 mb-40">
                            <div class="tpprocess__wrapper tpprocess__two">
                                <span class="tpprocess__count mb-25">2</span>
                                <h4 class="tpprocess__title">Fully-Automated Keyword <br> Grouping</h4>
                            </div>
                            <div class="tpprocess-shape-two d-none d-lg-block">
                                <svg fill="none" height="15" viewBox="0 0 112 15" width="112"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="line-dash-path"
                                          d="M1 6.43536C18.4695 13.1544 64.9267 21.5244 111 1.25212" stroke="#A6A8B0"
                                          stroke-dasharray="4 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
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
                    <div class="col-lg-3 col-sm-6">
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

    <!-- analysis-area-start -->
    <section class="analysis__area pb-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpsection__content text-center mb-70">
                        <div class="tpbanner__sub-title mb-15">
                            <span>SEO Agency of the Year</span>
                            <i>
                                <svg fill="none" height="43" viewBox="0 0 200 43" width="200"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern2)" fill-opacity="0.06" height="42.2222" width="200"/>
                                    <defs>
                                        <pattern height="1" id="pattern2" patternContentUnits="objectBoundingBox"
                                                 width="1">
                                            <use transform="translate(-0.0596774) scale(0.00612903 0.02)"
                                                 xlink:href="#image0_929_1201"/>
                                        </pattern>
                                        <image height="50" id="image0_929_1201" width="180"
                                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <h2 class="tpsection__title mb-25"><span>Expect great things</span> <br> from your SEO Agency
                        </h2>
                        <p>Believe it because you've seen it. Here are real numbers from just one <br> successful
                            Victorious partner.</p>
                    </div>
                </div>
            </div>
            <div class="tpanalysis-chart p-relatives pb-60">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="tpanalysis-different">
                            <label class="analisis-toggler  analisis-toggler--is-active" id="filt-monthly-seo">
                                BEFORE SEO
                            </label>
                            <div class="analisis-toggle">
                                <input class="analisis-check" id="switcher-seo" type="checkbox">
                                <b class="analisis-switch"></b>
                            </div>
                            <label class="analisis-toggler" id="filt-yearly-seo">
                                AFTER SEO
                            </label>
                        </div>
                    </div>
                </div>
                <div class="tpanalysis-shape d-none d-lg-block">
                    <div class="tpanalysis-shape-one">
                        <img alt="" src="assets/img/shape/analysis-chart-1.png">
                    </div>
                    <div class="tpanalysis-shape-two">
                        <img alt="" src="assets/img/shape/analysis-chart-2.png">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="tpseo-analisis">
                        <div class="wrapper-full" id="monthly-seo">
                            <div class="tpanalysis__wrapper">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory ml-20 mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="10265">10,265</span></h3>
                                                <p>Annual Organic Traffic</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory text-center mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="8426">8,426</span></h3>
                                                <p>Ranking Keywords</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory d-flex justify-content-end mr-25 mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="726">726</span>%</h3>
                                                <p>Return on Investment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper-full analisis-hide" id="hourly-seo">
                            <div class="tpanalysis__wrapper">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory ml-20 mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="726">10,265</span></h3>
                                                <p>Annual Organic Traffic</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory text-center mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="1026">8,426</span></h3>
                                                <p>Ranking Keywords</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="tpanalysis__catagory d-flex justify-content-end mr-25 mb-40">
                                            <div class="tpanalysis__item">
                                                <h3 class="tpanalysis__count mb-10">
                                                    <span class="purecounter" data-purecounter-duration="1"
                                                          data-purecounter-end="488">726</span>%</h3>
                                                <p>Return on Investment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- analysis-area-end -->

    <!-- case-area-start -->
    <section class="case-area pb-140 fix">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8">
                    <div class="tpsection__wrapper mb-45">
                        <div class="tpbanner__sub-title mb-15">
                            <span>Featured Projects</span>
                            <i>
                                <svg fill="none" height="40" viewBox="0 0 150 40" width="150"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern3)" fill-opacity="0.1" height="40" width="150"/>
                                    <defs>
                                        <pattern height="1" id="pattern3" patternContentUnits="objectBoundingBox"
                                                 width="1">
                                            <use transform="translate(-0.0584971) scale(0.00611611 0.0203396)"
                                                 xlink:href="#image0_859_3410"/>
                                        </pattern>
                                        <image height="50" id="image0_859_3410" width="180"
                                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <h2 class="tpsection__title">Our Case Studies</h2>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4">
                    <div class="tpcase-arrow text-end">
                        <div class="tpcase-nav p-relative">
                            <button class="prev-slide prev-slide-case">
                           <span>
                              <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                   xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                       fill="#9f9fa9"
                                       fill-rule="evenodd"></path>
                              </svg>
                           </span>
                            </button>
                            <button class="next-slide next-slide-case">
                           <span>
                              <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                   xmlns="http://www.w3.org/2000/svg">
                                 <path d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                       fill="#9f9fa9"
                                       fill-rule="evenodd"></path>
                              </svg>
                           </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row tpcase-active">
                <div class="col-lg-6">
                    <div class="tpcase">
                        <div class="tpcase-thumb w-img">
                            <img alt="" src="assets/img/services/case-1.jpg">
                        </div>
                        <div class="tpcase-content">
                            <div class="tpcase-tag mb-15">
                                <span>SEO Analysis</span>
                                <span>Marketing</span>
                            </div>
                            <h3 class="tpcase-title"><a href="portfolio-details.html">Online Media Management</a></h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpcase">
                        <div class="tpcase-thumb w-img">
                            <img alt="" src="assets/img/services/case-2.jpg">
                        </div>
                        <div class="tpcase-content">
                            <div class="tpcase-tag mb-15">
                                <span>SEO Analysis</span>
                                <span>Marketing</span>
                            </div>
                            <h3 class="tpcase-title"><a href="portfolio-details.html">Twice Profit Than Before</a></h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpcase">
                        <div class="tpcase-thumb w-img">
                            <img alt="" src="assets/img/services/case-3.jpg">
                        </div>
                        <div class="tpcase-content">
                            <div class="tpcase-tag mb-15">
                                <span>SEO Analysis</span>
                                <span>Marketing</span>
                            </div>
                            <h3 class="tpcase-title"><a href="portfolio-details.html">Social Engagement</a></h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpcase">
                        <div class="tpcase-thumb w-img">
                            <img alt="" src="assets/img/services/case-4.jpg">
                        </div>
                        <div class="tpcase-content">
                            <div class="tpcase-tag mb-15">
                                <span>SEO Analysis</span>
                                <span>Marketing</span>
                            </div>
                            <h3 class="tpcase-title"><a href="portfolio-details.html">Media Management</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- case-area-end -->

    <!-- services-area-start -->
    <section class="services-area pb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpsection__content text-center mb-70">
                        <div class="tpbanner__sub-title mb-15">
                            <span>Our Services</span>
                            <i>
                                <svg fill="none" height="37" viewBox="0 0 126 37" width="126"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern4)" fill-opacity="0.08" height="37" width="126"/>
                                    <defs>
                                        <pattern height="1" id="pattern4" patternContentUnits="objectBoundingBox"
                                                 width="1">
                                            <use transform="translate(-0.0507936) scale(0.00603175 0.0205405)"
                                                 xlink:href="#image0_859_2751"/>
                                        </pattern>
                                        <image height="50" id="image0_859_2751" width="180"
                                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <h2 class="tpsection__title mb-15">From your SEO Agency</h2>
                        <p>Our strategy includes consistently evolving, to ensure we’re producing <br>
                            exceptional SEO for business.</p>
                    </div>
                    <div class="tpservices">
                        <div class="tpservices-list">
                            <ul>
                                <li>
                                    <div class="tpservices-wrapper">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-1.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>Social Marketing</span>
                                            <h4 class="tpservices-title"><a href="seo-audit.html">Instant account
                                                activation <br> if instant
                                                access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpservices-wrapper tpservices-item2">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-2.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>SEO Optimization</span>
                                            <h4 class="tpservices-title"><a href="seo-audit.html">Services activation
                                                <br> if need
                                                access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpservices-wrapper tpservices-item3">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-3.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>One Page SEO</span>
                                            <h4 class="tpservices-title"><a href="/">Account
                                                activation <br> if instant
                                                access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpservices-wrapper tpservices-item4">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-4.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>Content Marketing</span>
                                            <h4 class="tpservices-title"><a href="services-social-media.html">SEO
                                                account activation <br> if instant
                                                access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpservices-wrapper tpservices-item5">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-5.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>Email Marketing</span>
                                            <h4 class="tpservices-title"><a href="social-media-markiting.html">Email
                                                Marketing activation <br> if instant
                                                access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tpservices-wrapper tpservices-item6">
                                        <div class="tpservices-img mb-35">
                                            <img alt="" src="assets/img/services/services-1-icon-6.png">
                                        </div>
                                        <div class="tpservices-content">
                                            <span>Keyword Research</span>
                                            <h4 class="tpservices-title"><a href="keyword-search.html">Keyword Research
                                                activation <br> if instant access.</a></h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- services-area-end -->

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
                                            <rect fill="url(#pattern5)" fill-opacity="0.1" height="36" width="150"
                                                  x="0.00012207"/>
                                            <defs>
                                                <pattern height="1" id="pattern5" patternContentUnits="objectBoundingBox"
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

    <!-- choose-area-start -->
    <section class="choose-area tpchoose-bottom pb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-5">
                    <div class="tpchoose-thumb mt-30 p-relative mb-50">
                        <img alt="" class="tpchoose-border-anim" src="assets/img/banner/choose-2.png">
                        <div class="tpchoose-shape">
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
                <div class="col-xl-6 col-lg-7">
                    <div class="tpchoose-wrapper mb-30">
                        <div class="tpsection__content mb-50">
                            <div class="tpbanner__sub-title mb-15">
                                <span>Why Choose us</span>
                                <i>
                                    <svg fill="none" height="42" viewBox="0 0 130 42" width="130"
                                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect fill="url(#pattern6)" fill-opacity="0.08" height="40.9551" width="130"
                                              y="0.941895"/>
                                        <defs>
                                            <pattern height="1" id="pattern6" patternContentUnits="objectBoundingBox"
                                                     width="1">
                                                <use transform="translate(-0.0587762 0.0123052) scale(0.00611916 0.0198269)"
                                                     xlink:href="#image0_868_3547"/>
                                            </pattern>
                                            <image height="50" id="image0_868_3547" width="180"
                                                   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                        </defs>
                                    </svg>
                                </i>
                            </div>
                            <h2 class="tpsection__title mb-15">What makes Us <br> Different from Others</h2>
                            <p>Migrating your rank tracking tool is like migrating from Google Analytics to another
                                solution.
                            </p>
                        </div>
                        <div class="row gx-6">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <a class="tpchoose mb-30" href="about.html">
                                    <div class="tpchoose-icon mb-25">
                                        <span><img alt="" src="assets/img/icon/choose-icon-1.png"></span>
                                    </div>
                                    <div class="tpchoose-text">
                                        <span class="tpchoose-title">Experts Consulting</span>
                                        <div class="tparrow-right">
                                            <i>
                                                <svg fill="none" height="12" viewBox="0 0 7 12" width="7"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.930176 1L5.93018 6L0.930176 11" stroke="currentColor"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-miterlimit="10"
                                                          stroke-width="1.5"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <a class="tpchoose mb-30" href="about.html">
                                    <div class="tpchoose-icon mb-25">
                                        <span><img alt="" src="assets/img/icon/choose-icon-2.png"></span>
                                    </div>
                                    <div class="tpchoose-text">
                                        <span class="tpchoose-title">Competitor Analysis</span>
                                        <div class="tparrow-right">
                                            <i>
                                                <svg fill="none" height="12" viewBox="0 0 7 12" width="7"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.930176 1L5.93018 6L0.930176 11" stroke="currentColor"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-miterlimit="10"
                                                          stroke-width="1.5"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <a class="tpchoose mb-30" href="about.html">
                                    <div class="tpchoose-icon mb-25">
                                        <span><img alt="" src="assets/img/icon/choose-icon-3.png"></span>
                                    </div>
                                    <div class="tpchoose-text">
                                        <span class="tpchoose-title">Responsive Support</span>
                                        <div class="tparrow-right">
                                            <i>
                                                <svg fill="none" height="12" viewBox="0 0 7 12" width="7"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.930176 1L5.93018 6L0.930176 11" stroke="currentColor"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-miterlimit="10"
                                                          stroke-width="1.5"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- choose-area-end -->

    <!-- pricing-area-start -->
    <section class="pricing-area tp-price-parent pricing-shape-relative p-relative pt-40 pb-90">
        <div class="tpprice-shape-one d-none d-xl-block">
            <img alt="triangle" src="assets/img/shape/hand-shape.png">
        </div>
        <div class="container">
            <div class="tppricing-wrapper">
                <div class="tppricing-shape">
                    <div class="tppricing-shape-one d-none d-md-block">
                        <img alt="" src="assets/img/shape/pricing-1-shape-1.png">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="tpprice-switch p-relative mb-40">
                            <div class="tpsection__content pt-65 mb-20">
                                <div class="tpbanner__sub-title mb-15">
                                    <span>Our Pricing</span>
                                    <i>
                                        <svg fill="none" height="37" viewBox="0 0 114 37" width="114"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <rect fill="url(#pattern7)" fill-opacity="0.08" height="37" width="114"
                                                  y="-0.000488281"/>
                                            <defs>
                                                <pattern height="1" id="pattern7" patternContentUnits="objectBoundingBox"
                                                         width="1">
                                                    <use transform="translate(-0.0507936) scale(0.00603175 0.0205405)"
                                                         xlink:href="#image0_936_1479"/>
                                                </pattern>
                                                <image height="50" id="image0_936_1479" width="180"
                                                       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                            </defs>
                                        </svg>
                                    </i>
                                </div>
                                <h2 class="tpsection__title mb-25">Choose Your Product.</h2>
                            </div>
                            <div class="tpprice-switch-wrapper">
                                <label class="toggler toggler--is-active" id="filt-monthly">Pay Monthly</label>
                                <div class="toggle">
                                    <input class="tp-check" id="switcher" type="checkbox">
                                    <b class="switch"></b>
                                </div>
                                <label class="toggler" id="filt-yearly">Pay Yearly</label>
                            </div>
                            <div class="tpprice-shape">
                                <div class="tpprice-shape-two d-none d-lg-block">
                                    <img alt="triangle" src="assets/img/shape/save.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tp-price-toggle">
                            <div class="wrapper-full" id="monthly">
                                <div class="tpprice pl-40">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tppricing mb-30">
                                                <div class="tppricing-head">
                                                    <div class="tppricing-icon mb-30">
                                                        <i><img alt="" src="assets/img/icon/pricing-icon-1.png"></i>
                                                    </div>
                                                    <h3 class="tppricing-title mb-50">Diamond Pack</h3>
                                                </div>
                                                <div class="tppricing-content">
                                                    <div class="tppricing-feature mb-45">
                                                        <ul>
                                                            <li><i class="fa-light fa-check"></i> 999 Email</li>
                                                            <li><i class="fa-light fa-check"></i> 3gb Hosting</li>
                                                            <li><i class="fa-light fa-check"></i> Email & Live chat.
                                                            </li>
                                                            <li class="tppricing-inactive"><i
                                                                    class="fa-light fa-check"></i> 1
                                                                Domain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="tppricing-price mb-40">
                                                        <h4 class="tppricing-price-title">$19.99</h4>
                                                        <span>up to 10 user + 1.99 per user</span>
                                                    </div>
                                                    <div class="tppricing-btn-two">
                                                        <a class="tp-btn-blue" href="/contact">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tppricing mb-30">
                                                <div class="tppricing-head">
                                                    <div class="tppricing-icon mb-30">
                                                        <i><img alt="" src="assets/img/icon/pricing-icon-2.png"></i>
                                                    </div>
                                                    <h3 class="tppricing-title mb-50">Gold Plan</h3>
                                                </div>
                                                <div class="tppricing-content">
                                                    <div class="tppricing-feature mb-45">
                                                        <ul>
                                                            <li><i class="fa-light fa-check"></i> Unlimited Email</li>
                                                            <li><i class="fa-light fa-check"></i> 5gb Hosting</li>
                                                            <li><i class="fa-light fa-check"></i> Email & Live chat.
                                                            </li>
                                                            <li class="tppricing-inactive"><i
                                                                    class="fa-light fa-check"></i> 3
                                                                Domain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="tppricing-price mb-40">
                                                        <h4 class="tppricing-price-title">$120.99</h4>
                                                        <span>up to 10 user + 1.99 per user</span>
                                                    </div>
                                                    <div class="tppricing-btn">
                                                        <a class="tp-btn-blue" href="/contact">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tpprice-shape d-none d-lg-block">
                                        <div class="tpprice-shape-two">
                                            <img alt="triangle" src="assets/img/shape/triangle.png">
                                        </div>
                                        <div class="tpprice-shape-three">
                                            <img alt="triangle" src="assets/img/shape/smill.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper-full hide" id="hourly">
                                <div class="tpprice pl-40">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tppricing mb-30">
                                                <div class="tppricing-head">
                                                    <div class="tppricing-icon mb-30">
                                                        <i><img alt="" src="assets/img/icon/pricing-icon-1.png"></i>
                                                    </div>
                                                    <h3 class="tppricing-title mb-50">Diamond Pack</h3>
                                                </div>
                                                <div class="tppricing-content">
                                                    <div class="tppricing-feature mb-45">
                                                        <ul>
                                                            <li><i class="fa-light fa-check"></i> 999 Email</li>
                                                            <li><i class="fa-light fa-check"></i> 3gb Hosting</li>
                                                            <li><i class="fa-light fa-check"></i> Email & Live chat.
                                                            </li>
                                                            <li class="tppricing-inactive"><i
                                                                    class="fa-light fa-check"></i> 1 Domain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="tppricing-price mb-40">
                                                        <h4 class="tppricing-price-title">$209.99</h4>
                                                        <span>up to 10 user + 1.99 per user</span>
                                                    </div>
                                                    <div class="tppricing-btn-two">
                                                        <a class="tp-btn-blue" href="#">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tppricing mb-30">
                                                <div class="tppricing-head">
                                                    <div class="tppricing-icon mb-30">
                                                        <i><img alt="" src="assets/img/icon/pricing-icon-2.png"></i>
                                                    </div>
                                                    <h3 class="tppricing-title mb-50">Gold Plan</h3>
                                                </div>
                                                <div class="tppricing-content">
                                                    <div class="tppricing-feature mb-45">
                                                        <ul>
                                                            <li><i class="fa-light fa-check"></i> 499 Email</li>
                                                            <li><i class="fa-light fa-check"></i> 2gb Hosting</li>
                                                            <li><i class="fa-light fa-check"></i> Email & Live chat.
                                                            </li>
                                                            <li class="tppricing-inactive"><i
                                                                    class="fa-light fa-check"></i> 1 Domain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="tppricing-price mb-40">
                                                        <h4 class="tppricing-price-title">$320.99</h4>
                                                        <span>up to 10 user + 1.99 per user</span>
                                                    </div>
                                                    <div class="tppricing-btn">
                                                        <a class="tp-btn-blue" href="#">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tpprice-shape d-none d-lg-block">
                                        <div class="tpprice-shape-two">
                                            <img alt="triangle" src="assets/img/shape/triangle.png">
                                        </div>
                                        <div class="tpprice-shape-three">
                                            <img alt="triangle" src="assets/img/shape/smill.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- pricing-area-end -->

    <!-- testimonial-area-start -->
    <section class="textimonial-area pb-120 fix">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpsection__content text-center mb-60">
                        <div class="tptestimonial-avatar-bg mb-15">
                            <img alt="" src="assets/img/team/test-avatar-bg-1.png">
                        </div>
                        <h2 class="tpsection__title">Client love us & we love them</h2>
                        <p>Trusted by over 4,000 clients worldwide</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="tptestimonial-wrap p-relative">
                <div class="tptestimonial-wrapper tptestimonial-active">
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-1.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Nathalie Grossman</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-2.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Robert Fox</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-1.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Leslie Alexander</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-2.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Annette Black</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-1.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Kathryn Murphy</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                    <div class="tptestimonial p-relative d-flex align-items-center">
                        <div class="tptestimonial-thumb mr-40">
                            <img alt="" src="assets/img/team/testimonial-2.png">
                        </div>
                        <div class="tptestimonial-content">
                            <div class="tptestimonial-shape mb-20">
                                <i>
                                    <svg fill="none" height="30" viewBox="0 0 40 30" width="40"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M24.2289 29.0379C24.7654 29.0379 25.8383 28.0753 27.4476 26.1502C29.0569 24.332 30.559 22.2465 31.9537 19.8935C33.2412 17.5406 33.8849 15.455 33.8849 13.6368C33.8849 13.1021 33.7776 12.5139 33.563 11.8721C33.3485 12.6208 32.8657 13.2625 32.1147 13.7973C31.2563 14.439 30.0762 14.7598 28.5741 14.7598C26.3211 14.7598 24.6581 14.1181 23.5852 12.8347C22.405 11.6582 21.8149 10.1609 21.8149 8.34273C21.8149 6.20369 22.6732 4.27856 24.3899 2.56734C25.9992 0.856103 28.1986 0.000488217 30.9881 0.000488217C33.4558 0.000488217 35.4942 0.695676 37.1036 2.08605C38.6056 3.47643 39.5176 5.13418 39.8394 7.05931C39.9467 7.59407 40.0004 8.44969 40.0004 9.62616C40.0004 13.6903 38.6593 17.5406 35.977 21.177C33.2948 24.9203 29.7007 27.8614 25.1945 30.0005L24.2289 29.0379ZM2.98579 29.0379C3.52223 29.0379 4.59512 28.0753 6.20445 26.1502C7.81377 24.332 9.31581 22.2465 10.7106 19.8935C11.998 17.5406 12.6418 15.455 12.6418 13.6368C12.6418 13.1021 12.5345 12.5139 12.3199 11.8721C12.1053 12.6208 11.6225 13.2625 10.8715 13.7973C10.0132 14.439 8.83301 14.7598 7.33097 14.7598C5.07791 14.7598 3.41494 14.1181 2.34205 12.8347C1.16188 11.6582 0.571791 10.1609 0.571791 8.34273C0.571791 6.20369 1.4301 4.27856 3.14672 2.56734C4.75605 0.856103 6.95546 0.000488217 9.74497 0.000488217C12.2126 0.000488217 14.2511 0.695676 15.8604 2.08605C17.3625 3.47643 18.2744 5.13418 18.5963 7.05931C18.7036 7.59407 18.7572 8.44969 18.7572 9.62616C18.7572 13.6903 17.4161 17.5406 14.7339 21.177C12.0517 24.9203 8.4575 27.8614 3.95138 30.0005L2.98579 29.0379Z"
                                                fill="white" fill-opacity="0.2" stroke="currentColor"/>
                                    </svg>
                                </i>
                            </div>
                            <p>We help our clients succeed by creating brand identities, digital experiences, material
                                that
                                communicate clearly, achieve marketing goals!</p>
                            <div class="tptestimonial-avatar-info">
                                <h5 class="tptestimonial-avatar-title">Guy Hawkins</h5>
                                <span>CEO of Advisor Fuel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-fixed-bg fix"></div>
                <div class="tptestimonial-arrow">
                    <div class="testimonial-arrows p-relative">
                        <button class="prev-testimonial">
                        <span>
                           <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                xmlns="http://www.w3.org/2000/svg">
                               <path d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                     fill="#9f9fa9"
                                     fill-rule="evenodd">
                              </path>
                           </svg>
                        </span>
                        </button>
                        <button class="next-testimonial">
                        <span>
                           <svg fill="none" height="14" viewBox="0 0 8 14" width="8"
                                xmlns="http://www.w3.org/2000/svg">
                              <path d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                    fill="#9f9fa9"
                                    fill-rule="evenodd">
                              </path>
                           </svg>
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial-area-end -->

    <!-- blog-area-start -->
    <section class="blog-area pb-75">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-6 col-md-8">
                    <div class="tpsection__wrapper mb-45">
                        <div class="tpbanner__sub-title mb-15">
                            <span>From our blog</span>
                            <i>
                                <svg fill="none" height="40" viewBox="0 0 130 40" width="130"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect fill="url(#pattern8)" fill-opacity="0.08" height="40" width="130"/>
                                    <defs>
                                        <pattern height="1" id="pattern8" patternContentUnits="objectBoundingBox"
                                                 width="1">
                                            <use transform="translate(-0.0507936) scale(0.00603175 0.0205405)"
                                                 xlink:href="#image0_965_197"/>
                                        </pattern>
                                        <image height="50" id="image0_965_197" width="180"
                                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <h2 class="tpsection__title">Latest blog & news</h2>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4">
                    <div class="tpblog-all mb-60">
                        <a href="blog-grid.html">See all our Blog
                            <i>
                                <svg fill="none" height="12" viewBox="0 0 23 12" width="23"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7095 1L21.7095 6L16.7095 11" stroke="white" stroke-linecap="round"
                                          stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
                                    <path d="M1 6H21" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-miterlimit="10" stroke-width="1.5"/>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="tpblog mb-30">
                        <div class="tpblog-thumb mb-25 fix">
                            <a href="blog-details.html"><img alt="" src="assets/img/blog/blog-1-bg-1.jpg"></a>
                        </div>
                        <div class="tpblog-content">
                            <div class="tpblog-tag">
                                <a href="blog-details.html">SEO Analysis</a>
                                <a href="blog-details.html">Marketing</a>
                            </div>
                            <h3 class="tpblog-title"><a href="blog-details.html">Simple ways to Optimize your Website
                                For SEO</a></h3>
                            <div class="tpblog-avatar d-flex align-items-center">
                                <div class="tpblog-avatar-thub mr-10">
                                    <img alt="" src="assets/img/blog/comments/blog-avatar-1.png">
                                </div>
                                <div class="tpblog-avatar-info">
                                    <h5 class="tpblog-avatar-title">Nathalie Grossman</h5>
                                    <span>August 3, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="tpblog mb-30">
                        <div class="tpblog-thumb mb-25 fix">
                            <a href="blog-details.html"><img alt="" src="assets/img/blog/blog-1-bg-2.jpg"></a>
                        </div>
                        <div class="tpblog-content">
                            <div class="tpblog-tag">
                                <a href="blog-details.html">SEO Analysis</a>
                                <a href="blog-details.html">Marketing</a>
                            </div>
                            <h3 class="tpblog-title"><a href="blog-details.html">The Trend of Marketing With <br>
                                Tiktok, Should or not?</a></h3>
                            <div class="tpblog-avatar d-flex align-items-center">
                                <div class="tpblog-avatar-thub mr-10">
                                    <img alt="" src="assets/img/blog/comments/blog-avatar-2.png">
                                </div>
                                <div class="tpblog-avatar-info">
                                    <h5 class="tpblog-avatar-title">Jason Responsen</h5>
                                    <span>March 16, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="tpblog mb-30">
                        <div class="tpblog-thumb mb-25 fix">
                            <a href="blog-details.html"><img alt="" src="assets/img/blog/blog-1-bg-3.jpg"></a>
                        </div>
                        <div class="tpblog-content">
                            <div class="tpblog-tag">
                                <a href="blog-details.html">SEO Analysis</a>
                                <a href="blog-details.html">Marketing</a>
                            </div>
                            <h3 class="tpblog-title"><a href="blog-details.html">How to Increase Your ROI Through
                                scientific SEM?</a></h3>
                            <div class="tpblog-avatar d-flex align-items-center">
                                <div class="tpblog-avatar-thub mr-10">
                                    <img alt="" src="assets/img/blog/comments/blog-avatar-3.png">
                                </div>
                                <div class="tpblog-avatar-info">
                                    <h5 class="tpblog-avatar-title">Eleanor Fant</h5>
                                    <span>November 24, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog-area-end -->

    <!-- contact-area-start -->
    <section class="contact-area theme-bg-3 pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="tpcontact-box pr-70 mb-30">
                        <div class="tpsection__content">
                            <div class="tpsection-sub-title tpsection-sub-title-white mb-30">
                                <span>Contact Us</span>
                            </div>
                            <h2 class="tpsection-title tpsection-title-white mb-50">Ready to get started? <br> Let’s
                                chat.</h2>
                        </div>
                        <div class="tpcontact-info">
                            <div class="tpcontact-info-links">
                                <a href="mailto:info@gmail.com">
                                    <i>
                                        <svg fill="none" height="18" viewBox="0 0 20 18" width="20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M14.5 16.3H5.5C2.8 16.3 1 14.95 1 11.8V5.5C1 2.35 2.8 1 5.5 1H14.5C17.2 1 19 2.35 19 5.5V11.8C19 14.95 17.2 16.3 14.5 16.3Z"
                                                    stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="1.5"/>
                                            <path d="M14.5 5.94922L11.683 8.19922C10.756 8.93722 9.235 8.93722 8.308 8.19922L5.5 5.94922"
                                                  opacity="0.4"
                                                  stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-miterlimit="10"
                                                  stroke-width="1.5"/>
                                        </svg>
                                    </i>
                                    info@gmail.com
                                </a>
                                <a href="#">
                                    <i>
                                        <svg fill="none" height="21" viewBox="0 0 18 21" width="18"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99996 11.6048C10.5986 11.6048 11.8946 10.3088 11.8946 8.7101C11.8946 7.11142 10.5986 5.81543 8.99996 5.81543C7.40127 5.81543 6.10529 7.11142 6.10529 8.7101C6.10529 10.3088 7.40127 11.6048 8.99996 11.6048Z"
                                                  opacity="0.4"
                                                  stroke="white" stroke-width="1.5"/>
                                            <path
                                                    d="M1.22522 7.02129C3.05295 -1.01328 14.9564 -1.004 16.7748 7.03057C17.8418 11.7437 14.91 15.7331 12.34 18.201C10.4752 20.0009 7.52485 20.0009 5.65073 18.201C3.09006 15.7331 0.158278 11.7344 1.22522 7.02129Z"
                                                    stroke="white" stroke-width="1.5"/>
                                        </svg>
                                    </i>
                                    3rd Street, London, UK
                                </a>
                                <a href="tell:0123456789">
                                    <i>
                                        <svg fill="none" height="18" viewBox="0 0 18 18" width="18"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M16.976 14.064C16.976 14.352 16.912 14.648 16.776 14.936C16.64 15.224 16.464 15.496 16.232 15.752C15.84 16.184 15.408 16.496 14.92 16.696C14.44 16.896 13.92 17 13.36 17C12.544 17 11.672 16.808 10.752 16.416C9.832 16.024 8.912 15.496 8 14.832C7.08 14.16 6.208 13.416 5.376 12.592C4.552 11.76 3.808 10.888 3.144 9.976C2.488 9.064 1.96 8.152 1.576 7.248C1.192 6.336 1 5.464 1 4.632C1 4.088 1.096 3.568 1.288 3.088C1.48 2.6 1.784 2.152 2.208 1.752C2.72 1.248 3.28 1 3.872 1C4.096 1 4.32 1.048 4.52 1.144C4.728 1.24 4.912 1.384 5.056 1.592L6.912 4.208C7.056 4.408 7.16 4.592 7.232 4.768C7.304 4.936 7.344 5.104 7.344 5.256C7.344 5.448 7.288 5.64 7.176 5.824C7.072 6.008 6.92 6.2 6.728 6.392L6.12 7.024C6.032 7.112 5.992 7.216 5.992 7.344C5.992 7.408 6 7.464 6.016 7.528C6.04 7.592 6.064 7.64 6.08 7.688C6.224 7.952 6.472 8.296 6.824 8.712C7.184 9.128 7.568 9.552 7.984 9.976C8.416 10.4 8.832 10.792 9.256 11.152C9.672 11.504 10.016 11.744 10.288 11.888C10.328 11.904 10.376 11.928 10.432 11.952C10.496 11.976 10.56 11.984 10.632 11.984C10.768 11.984 10.872 11.936 10.96 11.848L11.568 11.248C11.768 11.048 11.96 10.896 12.144 10.8C12.328 10.688 12.512 10.632 12.712 10.632C12.864 10.632 13.024 10.664 13.2 10.736C13.376 10.808 13.56 10.912 13.76 11.048L16.408 12.928C16.616 13.072 16.76 13.24 16.848 13.44C16.928 13.64 16.976 13.84 16.976 14.064Z"
                                                    stroke="white" stroke-miterlimit="10" stroke-width="1.5"/>
                                            <path d="M14.2 6.5998C14.2 6.1198 13.824 5.3838 13.264 4.7838C12.752 4.2318 12.072 3.7998 11.4 3.7998"
                                                  opacity="0.4"
                                                  stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5"/>
                                            <path d="M17 6.6C17 3.504 14.496 1 11.4 1" opacity="0.4" stroke="white"
                                                  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        </svg>
                                    </i>
                                    +44 123 654 7890
                                </a>
                            </div>
                            <div class="tpcontact-info-social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="p-relative">
                        <div class="tpcontact-form p-relative ml-30">
                            <h4 class="tpcontact-form-title mb-35">Send a message</h4>
                            <form action="#">
                                <div class="tpcontact-from-wrapper">
                                    <div class="row gx-6">
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="Full Name" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="Email Address" type="email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="Phone Number" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="tpcontact-form-input mb-20">
                                                <input placeholder="Website" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="tpcontact-form-textarea tpcontact-form-input mb-25">
                                                <textarea name="Message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tpcontact-form-submit">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tpcontact-shape d-none d-md-block">
                            <div class="tpcontact-shape-one" data-parallax='{"y": -100, "smoothness": 20}'>
                                <img alt="" src="assets/img/shape/form-shape-1.png">
                            </div>
                            <div class="tpcontact-shape-two" data-parallax='{"y": -100, "smoothness": 20}'>
                                <img alt="" src="assets/img/shape/form-shape-2.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-area-end -->
    <Footer/>
</main>

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
<script src="assets/js/purecounter.js"></script>
<script src="assets/js/imagesloaded-pkgd.js"></script>
<script src="assets/js/parallax-scroll.js"></script>
<script src="assets/js/ajax-form.js"></script>
<script src="assets/js/main.js"></script>
</body>