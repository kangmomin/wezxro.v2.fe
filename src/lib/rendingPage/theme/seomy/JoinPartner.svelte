<script>
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";
    import {goto} from "$app/navigation";

    export let data
    const {EN_NAME, KR_NAME} = data.props

    if (EN_NAME !== "WEZXRO") goto("/error")
</script>
<svelte:head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{EN_NAME} - Join Partner</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico in the root directory -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo/favicon.png">

    <!-- CSS here -->
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.css">
    <link rel="stylesheet" href="assets/css/slick.css">
    <link rel="stylesheet" href="assets/css/nouislider.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/font-awesome-pro.css">
    <link rel="stylesheet" href="assets/css/spacing.css">
    <link rel="stylesheet" href="assets/css/main.css">
</svelte:head>

<body>
<!--   <Loader />-->
<BackToTop />
<Header {data} />

<!-- offcanvas area start -->
<div class="offcanvas__area">
    <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button class="offcanvas__close-btn offcanvas-close-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                    <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo logo">
                    <a href="/">
                        <img src="assets/img/logo/logo.svg" alt="logo">
                    </a>
                </div>
            </div>
            <div class="tp-main-menu-mobile mb-35"></div>
            <div class="offcanvas__btn">
                <a href="/contact" class="tp-btn w-100">Getting Started</a>
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

    <!-- breadcrumb-area-start -->
    <div class="breadcrumb-services-area pricing-inner-bg scene breadcrumb-bg p-relative">
        <div class="about-inner-shape">
            <div class="about-inner-shape-2">
                <img class="layer" data-depth="0.5" src="assets/img/shape/about-inner-shape-1.png" alt="">
            </div>
            <div class="about-inner-shape-3 d-none d-lg-block">
                <img class="layer" data-depth="0.5" src="assets/img/shape/about-inner-shape-2.png" alt="">
            </div>
        </div>
        <div class="tpbanner-shape-y scene-y">
            <div class="about-inner-shape-4 d-none d-lg-block">
                <img class="layer" data-depth="0.6" src="assets/img/shape/inner-hand-1.png" alt="">
            </div>
        </div>
        <div class="about-inner-shape-5 d-none d-lg-block">
            <img src="assets/img/banner/pricing-banner-shape.png" alt="">
        </div>
    </div>
    <!-- breadcrumb-services-area-end -->

    <!-- pricing-area-start -->
    <section class="pricing-area tp-inner-pricing-switch tp-price-parent mb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pricing-inner-wrapper text-center">
                        <div class="pricing-inner-top">
                            <h4 class="pricing-inner-top-title">Plans & Pricing</h4>
                            <p>Stay cool, we have a 48-hour money back guarantee!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tpprice-switch text-center p-relative mb-55">
                        <div class="tpprice-switch-wrapper d-flex align-items-center justify-content-center">
                            <div class="tppricing-switch-btn-switch">
                                <div class="toggle">
                                    <input type="checkbox" id="switcher" class="check">
                                    <b class="switch"></b>
                                </div>
                            </div>
                            <div class="tppricing-switch-btn-switch-item mt-10">
                                <label class="toggler toggler--is-active" id="filt-monthly">Billed Yearly</label>
                                <label class="toggler" id="filt-yearly">Billed Monthy</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-price-toggle">
                        <div id="monthly" class="wrapper-full">
                            <div class="pricing-inner">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-custom text-center">
                                            <div class="pricing-custom-icon">
                                       <span>
                                          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.02203 25.8846C0.75328 25.8846 0.495181 25.7808 0.298286 25.5866C0.0375251 25.3232 -0.0635846 24.94 0.0401875 24.5835L2.06243 17.503C2.17151 17.1172 2.38172 16.7606 2.66642 16.4732L17.7453 1.39694C18.6448 0.497576 19.8421 0 21.1166 0C22.3912 0 23.5886 0.497576 24.4879 1.39694C25.3874 2.2963 25.8849 3.49369 25.8849 4.76822C25.8849 6.04276 25.3874 7.24015 24.4879 8.1395L9.41165 23.2158C9.12695 23.5006 8.77038 23.7134 8.37924 23.8251L1.30143 25.8448C1.21095 25.8714 1.11517 25.8846 1.02203 25.8846ZM21.1166 2.04352C20.3903 2.04352 19.7038 2.32557 19.1902 2.84178L4.11392 17.9181C4.07135 17.9606 4.04208 18.0085 4.02612 18.0671L2.50943 23.3754L7.81781 21.8588C7.87369 21.8429 7.92425 21.8136 7.96415 21.7736L23.0431 6.69466C23.5594 6.17846 23.8413 5.49463 23.8413 4.76822C23.8413 4.04182 23.5594 3.35798 23.0431 2.84178C22.5296 2.32557 21.8431 2.04352 21.1166 2.04352Z" fill="#4260FF"/>
                                          <path d="M16.6895 4.42767L21.4578 9.19589" stroke="#4260FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M11.2819 6.51388C11.0824 6.71344 10.819 6.81189 10.5582 6.81189C10.2974 6.81189 10.034 6.71344 9.83446 6.51388C9.43533 6.11475 9.43533 5.46818 9.83446 5.06905L10.8988 4.0047L9.61893 2.72484L8.55459 3.78919C8.35769 3.98874 8.09427 4.08719 7.83351 4.08719C7.57274 4.08719 7.30932 3.98874 7.10976 3.78919C6.71063 3.39006 6.71063 2.74348 7.10976 2.34435L8.17409 1.28L7.59137 0.697292C6.69201 -0.202076 5.11946 -0.202076 4.22009 0.697292L0.699796 4.22023C0.247465 4.66992 0 5.2686 0 5.90721C0 6.54314 0.247465 7.14184 0.697134 7.59417L6.54566 13.4427L13.4399 6.54846L12.3437 5.44954L11.2819 6.51388Z" fill="#4260FF"/>
                                          <path d="M24.6049 17.7108L23.5406 18.7752C23.3436 18.9748 23.0802 19.0732 22.8195 19.0732C22.5587 19.0732 22.2953 18.9748 22.0957 18.7752C21.6967 18.3761 21.6967 17.7295 22.0957 17.3304L23.16 16.2661L21.8802 14.9861L20.8159 16.0505C20.6189 16.2501 20.3555 16.3485 20.0948 16.3485C19.834 16.3485 19.5706 16.2501 19.371 16.0505C18.972 15.6514 18.972 15.0048 19.371 14.6057L20.4353 13.5414L19.1155 12.2216L12.2188 19.1158L18.4079 25.3049C18.8734 25.7678 19.4828 26.002 20.0948 26.002C20.7067 26.002 21.3161 25.7678 21.7817 25.3049L25.3046 21.782C26.2333 20.8506 26.2333 19.3392 25.3046 18.4107L24.6049 17.7108Z" fill="#4260FF"/>
                                          </svg>
                                       </span>
                                            </div>
                                            <div class="pricing-custom-content">
                                                <span>Need Custom Us</span>
                                                <div class="pricing-inner-btn">
                                                    <button class="tp-btn">Contact Us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item text-center">
                                            <div class="pricing-inner-head">
                                                <span>Beginner</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Essential</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>469<span>.06</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button class="tp-btn">Get Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item active text-center">
                                            <div class="pricing-inner-head">
                                                <span>For Future</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Business</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>969<span>.06</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button>Get Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item text-center mr-45">
                                            <div class="pricing-inner-head">
                                                <span>Mid size</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Pro</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>869<span>.06</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button class="tp-btn">Get Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hourly" class="wrapper-full hide">
                            <div class="pricing-inner">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-custom text-center">
                                            <div class="pricing-custom-icon">
                                       <span>
                                          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.02203 25.8846C0.75328 25.8846 0.495181 25.7808 0.298286 25.5866C0.0375251 25.3232 -0.0635846 24.94 0.0401875 24.5835L2.06243 17.503C2.17151 17.1172 2.38172 16.7606 2.66642 16.4732L17.7453 1.39694C18.6448 0.497576 19.8421 0 21.1166 0C22.3912 0 23.5886 0.497576 24.4879 1.39694C25.3874 2.2963 25.8849 3.49369 25.8849 4.76822C25.8849 6.04276 25.3874 7.24015 24.4879 8.1395L9.41165 23.2158C9.12695 23.5006 8.77038 23.7134 8.37924 23.8251L1.30143 25.8448C1.21095 25.8714 1.11517 25.8846 1.02203 25.8846ZM21.1166 2.04352C20.3903 2.04352 19.7038 2.32557 19.1902 2.84178L4.11392 17.9181C4.07135 17.9606 4.04208 18.0085 4.02612 18.0671L2.50943 23.3754L7.81781 21.8588C7.87369 21.8429 7.92425 21.8136 7.96415 21.7736L23.0431 6.69466C23.5594 6.17846 23.8413 5.49463 23.8413 4.76822C23.8413 4.04182 23.5594 3.35798 23.0431 2.84178C22.5296 2.32557 21.8431 2.04352 21.1166 2.04352Z" fill="#4260FF"/>
                                          <path d="M16.6895 4.42767L21.4578 9.19589" stroke="#4260FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M11.2819 6.51388C11.0824 6.71344 10.819 6.81189 10.5582 6.81189C10.2974 6.81189 10.034 6.71344 9.83446 6.51388C9.43533 6.11475 9.43533 5.46818 9.83446 5.06905L10.8988 4.0047L9.61893 2.72484L8.55459 3.78919C8.35769 3.98874 8.09427 4.08719 7.83351 4.08719C7.57274 4.08719 7.30932 3.98874 7.10976 3.78919C6.71063 3.39006 6.71063 2.74348 7.10976 2.34435L8.17409 1.28L7.59137 0.697292C6.69201 -0.202076 5.11946 -0.202076 4.22009 0.697292L0.699796 4.22023C0.247465 4.66992 0 5.2686 0 5.90721C0 6.54314 0.247465 7.14184 0.697134 7.59417L6.54566 13.4427L13.4399 6.54846L12.3437 5.44954L11.2819 6.51388Z" fill="#4260FF"/>
                                          <path d="M24.6049 17.7108L23.5406 18.7752C23.3436 18.9748 23.0802 19.0732 22.8195 19.0732C22.5587 19.0732 22.2953 18.9748 22.0957 18.7752C21.6967 18.3761 21.6967 17.7295 22.0957 17.3304L23.16 16.2661L21.8802 14.9861L20.8159 16.0505C20.6189 16.2501 20.3555 16.3485 20.0948 16.3485C19.834 16.3485 19.5706 16.2501 19.371 16.0505C18.972 15.6514 18.972 15.0048 19.371 14.6057L20.4353 13.5414L19.1155 12.2216L12.2188 19.1158L18.4079 25.3049C18.8734 25.7678 19.4828 26.002 20.0948 26.002C20.7067 26.002 21.3161 25.7678 21.7817 25.3049L25.3046 21.782C26.2333 20.8506 26.2333 19.3392 25.3046 18.4107L24.6049 17.7108Z" fill="#4260FF"/>
                                          </svg>
                                       </span>
                                            </div>
                                            <div class="pricing-custom-content">
                                                <span>Need Custom Us</span>
                                                <div class="pricing-inner-btn">
                                                    <button>Contact Us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item text-center">
                                            <div class="pricing-inner-head">
                                                <span>Beginner</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Essential</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>599<span>.09</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button>Get Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item active text-center">
                                            <div class="pricing-inner-head">
                                                <span>For Future</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Business</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>999<span>.09</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button>Get Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="pricing-inner-item text-center mr-45">
                                            <div class="pricing-inner-head">
                                                <span>Mid size</span>
                                            </div>
                                            <div class="pricing-inner-title">
                                                <span>Pro</span>
                                            </div>
                                            <div class="pricing-inner-price">
                                                <h4 class="pricing-inner-price-count"><span>$</span>789<span>.09</span></h4>
                                            </div>
                                            <div class="pricing-inner-btn">
                                                <button>Get Now</button>
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
    <!-- pricing-area-end -->

    <!-- comparison-area-start -->
    <section class="comparison-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pricing-comparison-tag">
                        <h5 class="pricing-comparison-tag-title"><span></span>Account</h5>
                    </div>
                    <div class="pricing-comparison mb-35">
                        <div class="pricing-comparison-scroll">
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Projects</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>100</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>250</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">User Seats</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>10</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>20</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>30</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Competitors per project</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item  pricing-comparison-price-item-1">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Web design</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>15 articles</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>30 articles</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>20 articles</span>
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
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="pricing-comparison-tag">
                        <h5 class="pricing-comparison-tag-title pricing-comparison-tag-title-2"><span></span>Website audit</h5>
                    </div>
                    <div class="pricing-comparison mb-35">
                        <div class="pricing-comparison-scroll">
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 col-5">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Pages per account</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-sm-8 col-7">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>100</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>250</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 col-5">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Pages per project</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-sm-8 col-7">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>10</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>20</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>30</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4 col-5">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Page Changes Monitor (pages)</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-sm-8 col-7">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item  pricing-comparison-price-item-1">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>Limited</span>
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
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="pricing-comparison-tag">
                        <h5 class="pricing-comparison-tag-title pricing-comparison-tag-title-3"><span></span>Rank tracker</h5>
                    </div>
                    <div class="pricing-comparison mb-65">
                        <div class="pricing-comparison-scroll">
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Keywords</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>100</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>250</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Locations per 1 keyword</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                        <span>10</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>20</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>30</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-comparison-item">
                                <div class="row">
                                    <div class="col-lg-4 col-4">
                                        <div class="pricing-comparison-item-text d-flex align-items-center">
                                            <h4 class="pricing-comparison-item-title">Keyword checks in total</h4>
                                            <div class="pricing-feature-info">
                                       <span>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path opacity="0.2" d="M7 0.5C10.5761 0.5 13.5 3.42386 13.5 7C13.5 10.5761 10.5761 13.5 7 13.5C3.42386 13.5 0.5 10.5761 0.5 7C0.5 3.42386 3.42386 0.5 7 0.5Z" stroke="#010F1C" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M7 9.59998V6.59998" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M6.99609 4.59998H7.00148" stroke="#3A3A42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                                <div class="pricing-feature-info-tooltip">
                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8">
                                        <div class="pricing-comparison-price text-center">
                                            <div class="row">
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item  pricing-comparison-price-item-1">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                        <span>Limited</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-4">
                                                    <div class="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                        <span>Limited</span>
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
            </div>
        </div>
    </section>
    <!-- comparison-area-end -->

    <!-- brand-area-start -->
    <section class="brand-area  mb-110">
        <div class="container">
            <div class="trusted-brand-bg pb-65">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="trusted-brand text-center mt-60 mb-30">
                            <h3 class="trusted-brand-title">Trusted by:</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="swiper-container trusted-brand-active">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="trusted-brand-item">
                                        <img src="assets/img/brand/brand-1.png" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="trusted-brand-item">
                                        <img src="assets/img/brand/brand-2.png" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="trusted-brand-item">
                                        <img src="assets/img/brand/brand-3.png" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="trusted-brand-item">
                                        <img src="assets/img/brand/brand-5.png" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="trusted-brand-item">
                                        <img src="assets/img/brand/brand-6.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- brand-area-end -->

    <!-- faq-area-start -->
    <section class="faq-area pb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-faq-wrapper mb-80">
                        <div class="tpsection-wrapper mb-25">
                            <h2 class="tpsection-title-two mb-40">Frequently<br> Asked
                                <span>
                                    Questions
                                 <svg width="306" height="31" viewBox="0 0 306 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.89242 18.9903C2.89242 18.9903 192.778 -5.15589 299.226 12.3064" stroke="#FFCE5A" stroke-width="5" stroke-linecap="round"></path>
                                 <path d="M3.2201 14.9796C3.2201 14.9796 196.633 -0.186388 302.688 21.9968" stroke="#FFCE5A" stroke-width="5" stroke-linecap="round"></path>
                                 </svg>
                           </span>
                            </h2>
                            <p>Can’t find what you are looking for?</p>
                            <b>We would like to chat with you.</b>
                        </div>
                        <div class="tp-faq-img p-relative">
                        <span>
                           <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M30.6303 26.693L31.3322 32.3807C31.5122 33.8746 29.9103 34.9186 28.6323 34.1446L21.0906 29.6628C20.2627 29.6628 19.4527 29.6088 18.6607 29.5008C19.9927 27.9349 20.7847 25.9549 20.7847 23.813C20.7847 18.7012 16.3568 14.5615 10.885 14.5615C8.79713 14.5615 6.87121 15.1554 5.26928 16.1994C5.21528 15.7494 5.19727 15.2994 5.19727 14.8314C5.19727 6.64172 12.307 0 21.0906 0C29.8743 0 36.984 6.64172 36.984 14.8314C36.984 19.6912 34.4821 23.9931 30.6303 26.693Z" fill="white"/>
                              <path d="M20.7855 23.8126C20.7855 25.9545 19.9936 27.9345 18.6616 29.5004C16.8797 31.6603 14.0538 33.0462 10.8859 33.0462L6.18812 35.8361C5.39615 36.3221 4.38819 35.6561 4.49618 34.7382L4.94616 31.1924C2.53426 29.5184 0.986328 26.8365 0.986328 23.8126C0.986328 20.6447 2.67827 17.8549 5.27017 16.1989C6.8721 15.155 8.79802 14.561 10.8859 14.561C16.3577 14.561 20.7855 18.7008 20.7855 23.8126Z" fill="white"/>
                           </svg>
                        </span>
                            <div class="tp-faq-shape">
                                <img src="assets/img/shape/faq-shape-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-accordion">
                        <div class="accordion mb-35" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Why Is SEO Important?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why Is SEO Important For Small Business?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        How do I choose the best SEO Agency?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do SEO Agencies work?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tp-accordion-btn">
                            <a href="faq.html">Load More Questions <i class="fa-light fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faq-area-end -->


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