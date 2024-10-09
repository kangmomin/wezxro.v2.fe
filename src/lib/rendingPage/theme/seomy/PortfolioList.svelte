<script>
    import VersionNotice from "$lib/component/seomy/VersionNotice.svelte";
    import BackToTop from "$lib/component/seomy/BackToTop.svelte";
    import Header from "$lib/component/seomy/Header.svelte";
    import Footer from "$lib/component/seomy/Footer.svelte";
    import {goto} from "$app/navigation";
    import PortfolioCard from "$lib/component/seomy/PortfolioCard.svelte";

    export let data
    const {EN_NAME, KR_NAME} = data.props
    if (EN_NAME !== "WEZXRO") goto("/error")
</script>

<svelte:head>
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
</svelte:head>

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
                    <a rel="external" href="/">
                        <img alt="logo" src="assets/img/logo/logo.svg">
                    </a>
                </div>
            </div>
            <div class="tp-main-menu-mobile mb-35"></div>
            <div class="offcanvas__btn">
                <a class="tp-btn w-100" href="/contact">Getting Started</a>
            </div>
            <div class="offcanvas__contact mb-40">
                <p class="offcanvas__contact-call"><a rel="external" href="tel:+964-742-44-763">+964 742 44 763</a></p>
                <p class="offcanvas__contact-mail"><a rel="external" href="mailto:info@harry.com">info@seomy.com</a></p>
            </div>
            <div class="offcanvas__social">
                <a rel="external" href="#"><i class="fab fa-facebook-f"></i></a>
                <a rel="external" href="#"><i class="fab fa-twitter"></i></a>
                <a rel="external" href="#"><i class="fab fa-youtube"></i></a>
                <a rel="external" href="#"><i class="fab fa-linkedin"></i></a>
                <a rel="external" href="#"><i class="fab fa-instagram"></i></a>
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
                        <p>
                            We have an experienced team of production and inspection <br> personnel to ensure quality.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row grid">
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
                <PortfolioCard href="#블라블라" image="assets/img/portfolio/portfolio-2/portfolio-2.jpg"
                               title="블라블라" description="블라블라" />
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