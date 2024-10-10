<script>
    import Header from "$lib/component/seomy/Header.svelte";
    import {onMount} from "svelte";
    import VersionNotice from "$lib/component/seomy/VersionNotice.svelte";

    export let data
   let isLogin = false

   const EN_NAME = data.props.EN_NAME,
           KR_NAME = data.props.KR_NAME

   onMount(() => {
      let token = localStorage.getItem("accessToken");
      if (token) isLogin = true
   })
</script>

<svelte:head>
   <meta charset="utf-8">
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <title>{EN_NAME}</title>
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
   <VersionNotice />
<!--   <Loader />-->
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
            <div class="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
               <div class="offcanvas__logo logo">
                  <a href="/">
                     <img src="assets/img/logo/logo.svg" alt="logo">
                  </a>
               </div>
            </div>
            <div class="tp-main-menu-mobile mb-35"></div>
            <div class="offcanvas__btn">
               <a href="/contact" class="tp-btn-offcanvas">Getting Started <i
                     class="fa-regular fa-chevron-right"></i></a>
            </div>
            <div class="offcanvas__social">
               <h3 class="offcanvas__social-title">Follow :</h3>
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
               <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="offcanvas__contact">
               <p class="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p>
               <p class="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@SEOMY.com</a></p>
            </div>
         </div>
      </div>
   </div>
   <div class="body-overlay"></div>
   <!-- offcanvas area end -->

   <main>

      <!-- sign-in-area-start -->
      <section class="signin-area fix">
         <div class="container-fluid gx-0">
            <div class="row gx-0">
               <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="signin-wrap p-relative">
                     <div class="signin-content">
                        <h4 class="signin-title">All the Features <br> For 10 days, for FREE</h4>
                        <p>No credit card needed. No strings attached 👍</p>
                     </div>
                     <div class="signin-list">
                        <div class="signin-item d-flex align-items-center mb-45">
                           <div class="signin-item-icon">
                              <img src="assets/img/sign-in/sign-in-search.png" alt="">
                              <div class="signin-item-icon-shape">
                                 <img src="assets/img/sign-in/white-box-dots.png" alt="">
                              </div>
                              <span></span>
                           </div>
                           <div class="signin-item-content ml-30">
                              <h4 class="signin-item-title"> <a href="/">Keyword  <br> Research</a></h4>
                           </div>
                        </div>
                        <div class="signin-item d-flex align-items-center mb-45">
                           <div class="signin-item-icon">
                              <img src="assets/img/sign-in/sign-in-location.png" alt="">
                              <div class="signin-item-icon-shape">
                                 <img src="assets/img/sign-in/white-box-dots.png" alt="">
                              </div>
                              <span></span>
                           </div>
                           <div class="signin-item-content ml-30">
                              <h4 class="signin-item-title"><a href="/services"> Link  <br>Building Services</a></h4>
                           </div>
                        </div>
                        <div class="signin-item d-flex align-items-center mb-45">
                           <div class="signin-item-icon">
                              <img src="assets/img/sign-in/sign-in-key.png" alt="">
                              <div class="signin-item-icon-shape">
                                 <img src="assets/img/sign-in/white-box-dots.png" alt="">
                              </div>
                              <span></span>
                           </div>
                           <div class="signin-item-content ml-30">
                              <h4 class="signin-item-title"><a href="/">Social  <br> Media Marketing</a></h4>
                           </div>
                        </div>
                        <div class="signin-item d-flex align-items-center mb-45">
                           <div class="signin-item-icon">
                              <img src="assets/img/sign-in/sign-in-track.png" alt="">
                              <div class="signin-item-icon-shape">
                                 <img src="assets/img/sign-in/white-box-dots.png" alt="">
                              </div>
                              <span></span>
                           </div>
                           <div class="signin-item-content ml-30">
                              <h4 class="signin-item-title"><a href="/">SEO <br>Audit Services</a></h4>
                           </div>
                        </div>
                     </div>
                     <div class="signin-shape">
                        <img class="signin-shape-1" src="assets/img/sign-in/shape/sign-in-shape-1.png" alt="">
                        <img class="signin-shape-2" src="assets/img/sign-in/shape/sign-in-shape-2.png" alt="">
                        <img class="signin-shape-3" src="assets/img/sign-in/shape/sign-in-shape-3.svg" alt="">
                     </div>
                  </div>
               </div>
               <div class="col-xxl-3 col-xl-4 col-lg-5">
                  <div class="signin-wrapper">
                     <h4 class="signin-wrapper-title">Sign in to SEOMY</h4>
                     <form action="#">
                        <div class="signin-input-wrapper">
                           <div class="signin-input-item mb-20">
                              <input type="email" placeholder="Your email">
                           </div>
                           <div class="signin-input-item mb-30">
                              <input type="password" placeholder="Password">
                           </div>
                           <div class="signin-btn mb-10">
                              <a href="sign-in.html" class="tp-btn">Sign In</a>
                           </div>
                        </div>
                        <div class="signin-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                           <div class="signin-remember">
                              <input id="remeber" type="checkbox">
                              <label for="remeber">Stay Logged In</label>
                           </div>
                           <div class="signin-forgot">
                              <a href="#">Forgot Password?</a>
                           </div>
                        </div>
                     </form>
                     <div class="signin-account text-center">
                        <p>Already have an account? <a href="/join">Sign Up</a></p>
                     </div>
                     <div class="signin-shape">
                        <img class="signin-shape-4" src="assets/img/shape/about-inner-shape-2.png" alt="">
                        <img class="signin-shape-5" src="assets/img/team/details/team-details-shape-2.png" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- sign-in-area-end -->

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
   <script src="assets/js/purecounter.js"></script>
   <script src="assets/js/nice-select.js"></script>
   <script src="assets/js/wow.js"></script>
   <script src="assets/js/isotope-pkgd.js"></script>
   <script src="assets/js/imagesloaded-pkgd.js"></script>
   <script src="assets/js/ajax-form.js"></script>
   <script src="assets/js/main.js"></script>
</body>