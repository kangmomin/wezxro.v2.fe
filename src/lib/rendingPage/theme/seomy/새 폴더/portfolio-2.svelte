<script>
    import VersionNotice from "$lib/component/seomy/VersionNotice.svelte";
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";

    export let data
    const {EN_NAME, KR_NAME} = data
</script>

<head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <title>{EN_NAME} - Portfolio</title>
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
<VersionNotice/>
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

    <!-- portfolio-area-start -->
    <section class="portfolio-area pt-190 pb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-inner-2 text-center mb-50">
                        <h4 class="portfolio-inner-2-head">Our Case Studies</h4>
                        <p>We have an experienced team of production and inspection <br> personnel to ensure quality.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-inner-masonary portfolio-inner-masonary-2 text-center masonary-menu mb-60">
                        <button class="active" data-filter="*"><span>All Work</span></button>
                        <button data-filter=".port-details2"><span>Marketing</span></button>
                        <button data-filter=".port-details3"><span>Branding</span></button>
                        <button data-filter=".port-details4"><span>Design</span></button>
                        <button data-filter=".port-details5"><span>Website</span></button>
                        <button data-filter=".port-details6"><span>SEO</span></button>
                    </div>
                </div>
            </div>
            <div class="row grid">
                <div class="col-lg-4 col-md-6 grid-item port-details3  port-details5">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-1.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Ad Campaign</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grid-item port-details4 port-details5 port-details6 port-details2">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-2.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Digital Art</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grid-item port-details2 port-details3  port-details5 port-details4">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-3.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Landing Page</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grid-item port3 port4 port-details5 port-details6 port-details2 port-details4">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-4.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Applications</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grid-item port-details5  port-details3 port-details6">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-5.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Website</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grid-item port-details6 port-details2  port-details3 port-details4">
                    <div class="portfolio-inner-item-2 mb-40">
                        <div class="portfolio-inner-thumb-2">
                            <img alt="" src="assets/img/portfolio/portfolio-2/portfolio-6.jpg">
                        </div>
                        <div class="portfolio-inner-content-2">
                            <div class="portfolio-inner-title-2"><a href="/">Strategic</a></div>
                            <p>They produce really great content that also performs well when it comes to SEO.</p>
                            <div class="portfolio-inner-tag-2">
                                <a href="#">Branding</a>
                                <a href="#">Website</a>
                                <a href="#">Design</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-inner-btn text-center pt-20">
                        <a href="#">
                        <span>
                           <svg fill="none" height="16" viewBox="0 0 20 16" width="20"
                                xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1.78101V6.47666H5.90909" stroke="currentColor" stroke-linecap="round"
                                 stroke-linejoin="round" stroke-width="1.5"/>
                           <path d="M18.9989 14.3023V9.60669H14.0898" stroke="currentColor" stroke-linecap="round"
                                 stroke-linejoin="round" stroke-width="1.5"/>
                           <path d="M16.9464 5.6938C16.5314 4.57216 15.8262 3.56933 14.8964 2.77891C13.9667 1.98849 12.8428 1.43623 11.6296 1.17365C10.4164 0.911084 9.15338 0.946763 7.95848 1.27736C6.76358 1.60796 5.6757 2.22271 4.79636 3.06424L1 6.47641M19 9.60685L15.2036 13.019C14.3243 13.8605 13.2364 14.4753 12.0415 14.8059C10.8466 15.1365 9.58363 15.1722 8.37042 14.9096C7.1572 14.647 6.03329 14.0948 5.10356 13.3043C4.17384 12.5139 3.46859 11.5111 3.05364 10.3895"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5"/>
                           </svg></span>
                            Load More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- portfolio-area-end -->

</main>
<Footer />

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
<script src="assets/js/purecounter.js"></script>
<script src="assets/js/nice-select.js"></script>
<script src="assets/js/wow.js"></script>
<script src="assets/js/isotope-pkgd.js"></script>
<script src="assets/js/imagesloaded-pkgd.js"></script>
<script src="assets/js/ajax-form.js"></script>
<script src="assets/js/main.js"></script>
</body>