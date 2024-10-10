<script>
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";

    export let data
    const EN_NAME = data.props.EN_NAME,
        KR_NAME = data.props.KR_NAME
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{EN_NAME} - FAQ</title>
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

<!--<Loader />-->
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
    <section class="breadcrumb-area breadcrumb-2-bg pb-130 pt-195"
             data-background="assets/img/breadcrumb/breadcrumb-bg-3.jpg">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content breadcrumb__content-2 text-center p-relative z-index-1">
                        <h3 class="breadcrumb__title">FAQ</h3>
                        <div class="breadcrumb__list">
                            <span><a href="/">Home</a></span>
                            <span class="dvdr"></span>
                            <span>FAQ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!-- faq-area-start -->
    <section class="faq-area pt-115 pb-15">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-faq-wrapper mb-80">
                        <div class="tpsection-wrapper mb-25">
                            <h2 class="tpsection-title-two mb-40">Frequently<br> Asked
                                <span>
                              Questions
                              <svg width="306" height="31" viewBox="0 0 306 31" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.89242 18.9903C2.89242 18.9903 192.778 -5.15589 299.226 12.3064"
                                       stroke="#FFCE5A" stroke-width="5" stroke-linecap="round"></path>
                                 <path d="M3.2201 14.9796C3.2201 14.9796 196.633 -0.186388 302.688 21.9968"
                                       stroke="#FFCE5A" stroke-width="5" stroke-linecap="round"></path>
                              </svg>
                           </span>
                            </h2>
                            <p>Can’t find what you are looking for?</p>
                            <b>We would like to chat with you.</b>
                        </div>
                        <div class="tp-faq-img p-relative">
                        <span>
                           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M29.6447 26.693L30.3466 32.3807C30.5266 33.8746 28.9247 34.9186 27.6467 34.1446L20.105 29.6628C19.2771 29.6628 18.4671 29.6088 17.6752 29.5008C19.0071 27.9349 19.7991 25.9549 19.7991 23.813C19.7991 18.7012 15.3712 14.5615 9.89945 14.5615C7.81153 14.5615 5.88562 15.1554 4.28368 16.1994C4.22968 15.7494 4.21167 15.2994 4.21167 14.8314C4.21167 6.64172 11.3214 0 20.105 0C28.8887 0 35.9984 6.64172 35.9984 14.8314C35.9984 19.6912 33.4965 23.9931 29.6447 26.693Z" fill="white"/>
                              <path d="M19.7992 23.8126C19.7992 25.9545 19.0073 27.9345 17.6753 29.5004C15.8934 31.6603 13.0675 33.0462 9.89961 33.0462L5.20179 35.8361C4.40982 36.3221 3.40186 35.6561 3.50985 34.7382L3.95984 31.1924C1.54793 29.5184 0 26.8365 0 23.8126C0 20.6447 1.69194 17.8549 4.28384 16.1989C5.88577 15.155 7.81169 14.561 9.89961 14.561C15.3714 14.561 19.7992 18.7008 19.7992 23.8126Z" fill="white"/>
                           </svg>
                        </span>
                            <!-- <img src="assets/img/shape/faq-shape-1.png" alt=""> -->
                            <div class="tp-faq-shape">
                                <img src="assets/img/shape/faq-shape-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-accordion tp-green-accordion">
                        <div class="accordion mb-35" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Why Is SEO Important?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                     data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking
                                        through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why Is SEO Important For Small Business?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                     data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking
                                        through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        How do I choose the best SEO Agency?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show"
                                     aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking
                                        through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do SEO Agencies work?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                     data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Choosing the best SEO Agency means research, research and more research. Checking
                                        through reviews, team credentials, and getting proposals and audits.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tp-accordion-btn">
                            <a href="#">Load More Questions <i class="fa-light fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faq-area-end -->

    <!-- social-area-start -->
    <div class="social-area pt-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tpsocial tpsocial-facebook mb-30">
                        <div class="tpsocial-bg"></div>
                        <div class="tpsocial-text">
                            <a href="#"><i class="fa-brands fa-facebook"></i> Follow us on Facebook for Small Busoness
                                Updates</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpsocial tpsocial-insta mb-30">
                        <div class="tpsocial-bg"></div>
                        <div class="tpsocial-text">
                            <a href="#"><i class="fa-brands fa-instagram"></i> Follow us on Instagram for Small Business
                                Inspiration</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpsocial tpsocial-pin mb-30">
                        <div class="tpsocial-bg"></div>
                        <div class="tpsocial-text">
                            <a href="#"><i class="fa-brands fa-pinterest"></i> Get our Newsletter for Small Business Tips &
                                News</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tpsocial tpsocial-twitt mb-30">
                        <div class="tpsocial-bg"></div>
                        <div class="tpsocial-text">
                            <a href="#"><i class="fa-brands fa-twitter"></i> Follow us on Twitter for Small Busoness
                                Updates</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- social-area-end -->

    <!-- cta-area-start -->
    <section class="cta-area pt-105">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tpsection-wrapper text-center mb-50">
                        <p>No time to wait ? Call us ☕️ 🍞</p>
                        <h2 class="tpsection-title-two">Let’s Collaboration With <br>
                            <span class="big-shape2">
                           Our SEO Expert
                           <svg width="305" height="31" viewBox="0 0 305 31" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.6805 18.9903C2.6805 18.9903 192.566 -5.15589 299.014 12.3064" stroke="#FFCE5A"
                                    stroke-width="5" stroke-linecap="round" />
                              <path d="M3.00818 14.9796C3.00818 14.9796 196.421 -0.186388 302.477 21.9968"
                                    stroke="#FFCE5A" stroke-width="5" stroke-linecap="round" />
                           </svg>
                        </span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="tpcta-wrapper text-center">
                        <a class="tpcta-btn mr-5" href="#">+44 123 654 7890</a>
                        <a class="green-btn" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- cta-area-end -->

    <!-- brand-area-start -->
    <div class="brand-area pb-30 pt-85">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-10 col-xl-8 col-lg-10">
                    <div class="tpbrand tpbrand-active">
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-1.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-2.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-3.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-4.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-5.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-6.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-4.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-5.png" alt="">
                        </div>
                        <div class="tpbrand-item">
                            <img src="assets/img/brand/brand-6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- brand-area-end -->

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