<script>
   import Loader from "$lib/component/seomy/Loader.svelte";
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
   <title>{EN_NAME} - SERVICES</title>
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
      <section class="breadcrumb-area breadcrumb-overlay pb-115 pt-195 p-relative jarallax" data-background="assets/img/breadcrumb/breadcrumb-bg-1.jpg">
         <div class="container">
            <div class="row">
               <div class="col-xxl-12">
                  <div class="breadcrumb__content breadcrumb__content-2 text-center p-relative z-index-1">
                     <h3 class="breadcrumb__title">Services</h3>
                     <div class="breadcrumb__list">
                        <span><a href="/">Home</a></span>
                        <span class="dvdr"></span>
                        <span>SEO Services</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="inner-shape-dots">
            <img src="assets/img/shape/inner-dots-shape.png" alt="">
         </div>
      </section>
      <!-- breadcrumb-area-end -->

      <!-- about-area-start -->
      <section class="about-area about-inner-top">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="about-inner-wrap">
                     <div class="about-inner-content-2 d-flex align-items-center mb-45">
                        <span>What</span>
                        <h4 class="about-inner-title-2">Expect great <br> things from your SEO agency.!</h4>
                     </div>
                     <p class="pl-30">Iterative approaches to corporate strategy foster collaborative thinking to further <br> the overall  value. Leverage agile frameworks to provide a robust high level over <br> views. In an ideal world this text wouldn’t exist.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- about-area-end -->

      <!-- services-area-start -->
      <section class="services-area pb-110">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="tpservices">
                     <div class="tpservices-list">
                        <ul>
                           <li>
                              <div class="tpservices-wrapper">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-1.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>Social Marketing</span>
                                    <h4 class="tpservices-title"><a href="/">Instant account activation <br> if instant
                                          access.</a></h4>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="tpservices-wrapper tpservices-item2">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-2.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>SEO Optimization</span>
                                    <h4 class="tpservices-title"><a href="/">Services activation <br> if need
                                          access.</a></h4>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="tpservices-wrapper tpservices-item3">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-3.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>One Page SEO</span>
                                    <h4 class="tpservices-title"><a href="/">Account activation <br> if instant
                                          access.</a></h4>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="tpservices-wrapper tpservices-item4">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-4.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>Content Marketing</span>
                                    <h4 class="tpservices-title"><a href="services-social-media.html">SEO account activation <br> if instant
                                          access.</a></h4>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="tpservices-wrapper tpservices-item5">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-5.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>Email Marketing</span>
                                    <h4 class="tpservices-title"><a href="/">Email Marketing activation <br> if instant
                                          access.</a></h4>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="tpservices-wrapper tpservices-item6">
                                 <div class="tpservices-img mb-35">
                                    <img src="assets/img/services/services-1-icon-6.png" alt="">
                                 </div>
                                 <div class="tpservices-content">
                                    <span>Keyword Research</span>
                                    <h4 class="tpservices-title"><a href="/">Keyword Research activation <br> if instant access.</a></h4>
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

      <!-- about-area-start -->
      <section class="about-area p-relative pt-170 pb-180" data-background="assets/img/banner/about-inner-bg.jpg">
         <div class="fix">
            <div class="container-fluid">
               <div class="row align-items-center">
                  <div class="col-lg-12">
                     <div class="about-inner-slide tpabout-inner-active">
                        <div class="about-inner-item">
                           <img src="assets/img/banner/about-inner-1.png" alt="">
                        </div>
                        <div class="about-inner-item">
                           <img src="assets/img/banner/about-inner-2.png" alt="">
                        </div>
                        <div class="about-inner-item">
                           <img src="assets/img/banner/about-inner-4.png" alt="">
                        </div>
                        <div class="about-inner-item">
                           <img src="assets/img/banner/about-inner-3.png" alt="">
                        </div>
                        <div class="about-inner-item">
                           <img src="assets/img/banner/about-inner-1.png" alt="">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="about-inner-box">
            <div class="about-inner-content-3">
               <span>Best SEO results?</span>
               <h4 class="about-inner-title-3">Time to climb the rankings.</h4>
               <p>Et proin odio elit tortor quis pretium ut. <br> A Perth SEO agency that'll help you ascend <br> to your goals.!
               </p>
               <ul class="about-inner-list">
                  <li><i class="fa-sharp fa-solid fa-circle-check"></i> Mimics Google Search</li>
                  <li><i class="fa-sharp fa-solid fa-circle-check"></i> Purchase Intent Searches</li>
                  <li><i class="fa-sharp fa-solid fa-circle-check"></i> Highest Value Keywords</li>
               </ul>
            </div>
         </div>
      </section>
      <!-- about-area-end -->

      <!-- project-seo-area-start -->
      <section class="project-area project-inner-height pb-120 pt-140">
         <div class="container">
            <div class="row">
               <div class="col-lg-7">
                  <div class="seo-5-thumb p-relative mb-40">
                     <div class="seo-5-main-bg">
                        <img src="assets/img/bg/seo-5-bg-1.png" alt="">
                     </div>
                     <div class="seo-5-shape d-none d-md-block">
                        <div class="seo-5-shape-one">
                           <img src="assets/img/shape/seo-5-shape-1.png" alt="">
                        </div>
                        <div class="seo-5-shape-two">
                           <img src="assets/img/shape/seo-5-shape-2.png" alt="">
                        </div>
                        <div class="seo-5-shape-three">
                           <img src="assets/img/shape/seo-5-shape-3.png" alt="">
                        </div>
                        <div class="seo-5-shape-four">
                           <img src="assets/img/shape/seo-5-shape-4.png" alt="">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-5">
                  <div class="seo-5 mt-30 mb-40">
                     <div class="section-3 mb-40">
                        <span class="section-3-sub-title">Best SEO results?</span>
                        <div class="section-3-title">Optimize your website easier</div>
                     </div>
                     <ul class="seo-5-list mb-50">
                        <li>
                           <div class="seo-5-list-item d-flex">
                              <div class="seo-5-list-icon">
                                 <i class="fa-sharp fa-solid fa-circle-check"></i>
                              </div>
                              <div class="seo-5-list-text">
                                 <h4 class="title">Performance</h4>
                                 <p>Slow pages,too-large CSS or HTML</p>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div class="seo-5-list-item d-flex">
                              <div class="seo-5-list-icon">
                                 <i class="fa-sharp fa-solid fa-circle-check"></i>
                              </div>
                              <div class="seo-5-list-text">
                                 <h4 class="title">Localization</h4>
                                 <p>All issues with hrefiang,language</p>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div class="seo-5-list-item d-flex">
                              <div class="seo-5-list-icon">
                                 <i class="fa-sharp fa-solid fa-circle-check"></i>
                              </div>
                              <div class="seo-5-list-text">
                                 <h4 class="title">Content quality</h4>
                                 <p>Unconsolidated duplicate page</p>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <div class="seo-5-btn">
                        <a href="/services" class="light-blue-btn">Learn More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- project-seo-area-end -->

      <!-- pricing-area-start -->
      <section class="pricing-area tp-price-parent pricing-shape-relative p-relative pt-40 pb-90">
         <div class="tpprice-shape-one d-none d-xl-block">
            <img src="assets/img/shape/hand-shape.png" alt="triangle">
         </div>
         <div class="container">
            <div class="tppricing-wrapper">
               <div class="tppricing-shape">
                  <div class="tppricing-shape-one d-none d-md-block">
                     <img src="assets/img/shape/pricing-1-shape-1.png" alt="">
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-4">
                     <div class="tpprice-switch p-relative mb-40">
                        <div class="tpsection__content pt-65 mb-20">
                           <div class="tpbanner__sub-title mb-15">
                              <span>Our Pricing</span>
                              <i>
                                 <svg width="114" height="37" viewBox="0 0 114 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect y="-0.000488281" width="114" height="37" fill="url(#pattern0)" fill-opacity="0.08"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_936_1479" transform="translate(-0.0507936) scale(0.00603175 0.0205405)"/>
                                    </pattern>
                                    <image id="image0_936_1479" width="180" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzkwQTczMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzkwQTYzMTM3MTFFRDg3NUZBOUZCRDk1MThFMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBQkIwMjIzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBQkIwMjMzMTA2MTFFREEzRkNBQzVFOTRFRTVERTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lgZ3iAAAB2ElEQVR42uzd7U3CUBiA0Wr4DxvQDWQE4gS6gSO6ibhB2aBMoCG5ja83pVRaSSnnJE2/MII+t7386sPz21dxQ1ZpKdNSpPUynItL/nNd6rSc2t6n/Sot+TYTsJhgrJsU6TqLt7zS779EE3ad1vuwvwuDg5kF3QQao92E47fq3ICrQ/RN8LsQPBMPOob7lEV8j5o7z6Yj+Cbwzyx+U5orB32MdCvcwcFv0/ZLx5SmubrHAVCZ0lwW9CrEu07rcsC8k/GmNPk8vg7hx2P13K/4fYP+6LhdcjvR5wMgrmP0h5bXxdecmjadu1N0ffFuOxc/zzKcP65fhwQt5nkOgGJu08NH/1cEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDQIGkGDoEHQIGgQNIIGQYOgQdAgaAQNE7aY+Ptre7JSn6ct9VWe2UfQvx4XFuPbZ+fz1/5HsGPEHh831mw359bhWH6OCQf9Xvw8v67OQmyLcg6GfJ4Yd769Dvviv+yuXQ0N+tXf8aKpUtUz/rJlvWw5Pmf5RfIQ7vJV0fO55wvtTSL+3R+mQasTd4BlyzRpdeWBEKeL+aC+yt1d0PczDSpH/PJbjfi+RvUtwADssXzgKiX3gwAAAABJRU5ErkJggg=="/>
                                    </defs>
                                 </svg>                                    
                              </i>
                           </div>
                           <h2 class="tpsection__title mb-25">Choose Your Product.</h2>
                        </div>
                        <div class="tpprice-switch-wrapper">
                           <label class="toggler toggler--is-active" id="filt-monthly">Pay Monthly</label>
                           <div class="toggle">
                              <input type="checkbox" id="switcher" class="tp-check">
                              <b class="switch"></b>
                           </div>
                           <label class="toggler" id="filt-yearly">Pay Yearly</label>
                        </div>
                        <div class="tpprice-shape">
                           <div class="tpprice-shape-two d-none d-lg-block">
                              <img src="assets/img/shape/save.png" alt="triangle">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-8">
                     <div class="tp-price-toggle">
                        <div id="monthly" class="wrapper-full">
                           <div class="tpprice pl-40">
                              <div class="row">
                                 <div class="col-lg-6 col-md-6">
                                    <div class="tppricing mb-30">
                                       <div class="tppricing-head">
                                          <div class="tppricing-icon mb-30">
                                             <i><img src="assets/img/icon/pricing-icon-1.png" alt=""></i>
                                          </div>
                                          <h3 class="tppricing-title mb-50">Diamond Pack</h3>
                                       </div>
                                       <div class="tppricing-content">
                                          <div class="tppricing-feature mb-45">
                                             <ul>
                                                <li><i class="fa-light fa-check"></i> 999 Email</li>
                                                <li><i class="fa-light fa-check"></i> 3gb Hosting</li>
                                                <li><i class="fa-light fa-check"></i> Email & Live chat.</li>
                                                <li class="tppricing-inactive"><i class="fa-light fa-check"></i> 1
                                                   Domain</li>
                                             </ul>
                                          </div>
                                          <div class="tppricing-price mb-40">
                                             <h4 class="tppricing-price-title">$19.99</h4>
                                             <span>up to 10 user + 1.99 per user</span>
                                          </div>
                                          <div class="tppricing-btn-two">
                                             <a href="#" class="tp-btn-blue">Get Started</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-lg-6 col-md-6">
                                    <div class="tppricing mb-30">
                                       <div class="tppricing-head">
                                          <div class="tppricing-icon mb-30">
                                             <i><img src="assets/img/icon/pricing-icon-2.png" alt=""></i>
                                          </div>
                                          <h3 class="tppricing-title mb-50">Gold Plan</h3>
                                       </div>
                                       <div class="tppricing-content">
                                          <div class="tppricing-feature mb-45">
                                             <ul>
                                                <li><i class="fa-light fa-check"></i> Unlimited Email</li>
                                                <li><i class="fa-light fa-check"></i> 5gb Hosting</li>
                                                <li><i class="fa-light fa-check"></i> Email & Live chat.</li>
                                                <li class="tppricing-inactive"><i class="fa-light fa-check"></i> 3
                                                   Domain</li>
                                             </ul>
                                          </div>
                                          <div class="tppricing-price mb-40">
                                             <h4 class="tppricing-price-title">$120.99</h4>
                                             <span>up to 10 user + 1.99 per user</span>
                                          </div>
                                          <div class="tppricing-btn">
                                             <a href="/contact" class="tp-btn-blue">Get Started</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tpprice-shape d-none d-lg-block">
                                 <div class="tpprice-shape-two">
                                    <img src="assets/img/shape/triangle.png" alt="triangle">
                                 </div>
                                 <div class="tpprice-shape-three">
                                    <img src="assets/img/shape/smill.png" alt="triangle">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="hourly" class="wrapper-full hide">
                           <div class="tpprice pl-40">
                              <div class="row">
                                 <div class="col-lg-6 col-md-6">
                                    <div class="tppricing mb-30">
                                       <div class="tppricing-head">
                                          <div class="tppricing-icon mb-30">
                                             <i><img src="assets/img/icon/pricing-icon-1.png" alt=""></i>
                                          </div>
                                          <h3 class="tppricing-title mb-50">Diamond Pack</h3>
                                       </div>
                                       <div class="tppricing-content">
                                          <div class="tppricing-feature mb-45">
                                             <ul>
                                                <li><i class="fa-light fa-check"></i> 999 Email</li>
                                                <li><i class="fa-light fa-check"></i> 3gb Hosting</li>
                                                <li><i class="fa-light fa-check"></i> Email & Live chat.</li>
                                                <li class="tppricing-inactive"><i class="fa-light fa-check"></i> 1 Domain
                                                </li>
                                             </ul>
                                          </div>
                                          <div class="tppricing-price mb-40">
                                             <h4 class="tppricing-price-title">$209.99</h4>
                                             <span>up to 10 user + 1.99 per user</span>
                                          </div>
                                          <div class="tppricing-btn-two">
                                             <a href="#" class="tp-btn-blue">Get Started</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-lg-6 col-md-6">
                                    <div class="tppricing mb-30">
                                       <div class="tppricing-head">
                                          <div class="tppricing-icon mb-30">
                                             <i><img src="assets/img/icon/pricing-icon-2.png" alt=""></i>
                                          </div>
                                          <h3 class="tppricing-title mb-50">Gold Plan</h3>
                                       </div>
                                       <div class="tppricing-content">
                                          <div class="tppricing-feature mb-45">
                                             <ul>
                                                <li><i class="fa-light fa-check"></i> 499 Email</li>
                                                <li><i class="fa-light fa-check"></i> 2gb Hosting</li>
                                                <li><i class="fa-light fa-check"></i> Email & Live chat.</li>
                                                <li class="tppricing-inactive"><i class="fa-light fa-check"></i> 1 Domain
                                                </li>
                                             </ul>
                                          </div>
                                          <div class="tppricing-price mb-40">
                                             <h4 class="tppricing-price-title">$320.99</h4>
                                             <span>up to 10 user + 1.99 per user</span>
                                          </div>
                                          <div class="tppricing-btn">
                                             <a href="#" class="tp-btn-blue">Get Started</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="tpprice-shape d-none d-lg-block">
                                 <div class="tpprice-shape-two">
                                    <img src="assets/img/shape/triangle.png" alt="triangle">
                                 </div>
                                 <div class="tpprice-shape-three">
                                    <img src="assets/img/shape/smill.png" alt="triangle">
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
      <section class="testimonial-area pt-20 pb-40">
         <div class="container">
            <div class="testimonial-inner-bg">
               <div class="row justify-content-center">
                  <div class="col-xxl-8 col-lg-10 col-md-9">
                     <div class="tptestimonial-area-two p-relative">
                        <div class="tptestimonial-active-two">
                           <div class="tptestimonial-two-item">
                              <div class="tptestimonial-two">
                                 <div class="tptestimonial-two-avatar">
                                    <img src="assets/img//team/testimonial-2-avater-1.png" alt="">
                                 </div>
                                 <div class="tptestimonial-two-content">
                                    <i>
                                       <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z" fill="#C0BBB5"/>
                                       </svg>
                                    </i>
                                    <p>I'm the kind of person who obsesses over and hand- <br> tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!</p>
                                    <div class="tptestimonial-two-avatar-info">
                                       <h5 class="title">Alex Baradi</h5>
                                       <span>Developer advocate at graph expert.</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tptestimonial-two-item">
                              <div class="tptestimonial-two">
                                 <div class="tptestimonial-two-avatar">
                                    <img src="assets/img//team/testimonial-2-avater-1.png" alt="">
                                 </div>
                                 <div class="tptestimonial-two-content">
                                    <i>
                                       <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z" fill="#C0BBB5"/>
                                       </svg>
                                    </i>
                                    <p>I'm the kind of person who obsesses over and hand- <br> tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!</p>
                                    <div class="tptestimonial-two-avatar-info">
                                       <h5 class="title">Alex Baradi</h5>
                                       <span>Developer advocate at graph expert.</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tptestimonial-two-item">
                              <div class="tptestimonial-two">
                                 <div class="tptestimonial-two-avatar">
                                    <img src="assets/img//team/testimonial-2-avater-1.png" alt="">
                                 </div>
                                 <div class="tptestimonial-two-content">
                                    <i>
                                       <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z" fill="#C0BBB5"/>
                                       </svg>
                                    </i>
                                    <p>I'm the kind of person who obsesses over and hand- <br> tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!</p>
                                    <div class="tptestimonial-two-avatar-info">
                                       <h5 class="title">Alex Baradi</h5>
                                       <span>Developer advocate at graph expert.</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tptestimonial-two-item">
                              <div class="tptestimonial-two">
                                 <div class="tptestimonial-two-avatar">
                                    <img src="assets/img//team/testimonial-2-avater-1.png" alt="">
                                 </div>
                                 <div class="tptestimonial-two-content">
                                    <i>
                                       <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z" fill="#C0BBB5"/>
                                       </svg>
                                    </i>
                                    <p>I'm the kind of person who obsesses over and hand- <br> tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!</p>
                                    <div class="tptestimonial-two-avatar-info">
                                       <h5 class="title">Alex Baradi</h5>
                                       <span>Developer advocate at graph expert.</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tptestimonial-two-item">
                              <div class="tptestimonial-two">
                                 <div class="tptestimonial-two-avatar">
                                    <img src="assets/img//team/testimonial-2-avater-1.png" alt="">
                                 </div>
                                 <div class="tptestimonial-two-content">
                                    <i>
                                       <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z" fill="#C0BBB5"/>
                                       </svg>
                                    </i>
                                    <p>I'm the kind of person who obsesses over and hand- <br> tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!</p>
                                    <div class="tptestimonial-two-avatar-info">
                                       <h5 class="title">Alex Baradi</h5>
                                       <span>Developer advocate at graph expert.</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tptestimonial-two-nav"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- testimonial-area-end -->

      <!-- review-area-start -->
      <div class="review-area tpreview-4">
         <div class="container">
            <div class="pb-30 mb-30 pt-55">
               <div class="row">
                  <div class="col-lg-4 col-md-6">
                     <div class="tpreview-4 text-center mb-30">
                        <div class="tpreview-4-icon mb-15">
                           <img src="assets/img/icon/review-4-logo-1.png" alt="">
                        </div>
                        <div class="tpreview-4-content">
                           <p>4.58 out of 5 stars from 1,045 reviews</p>
                           <div class="review-star">
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <div class="tpreview-4 review-side-border text-center mb-30">
                        <div class="tpreview-4-icon mb-15">
                           <img src="assets/img/icon/review-4-logo-2.png" alt="">
                        </div>
                        <div class="tpreview-4-content">
                           <p>4.58 out of 5 stars from 1,045 reviews</p>
                           <div class="review-star">
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <div class="tpreview-4 text-center mb-30">
                        <div class="tpreview-4-icon mb-15">
                           <img src="assets/img/icon/review-4-logo-3.png" alt="">
                        </div>
                        <div class="tpreview-4-content">
                           <p>4.58 out of 5 stars from 1,045 reviews</p>
                           <div class="review-star">
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                              <i class="fa-sharp fa-solid fa-star-sharp"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- review-area-end -->

      <!-- cta-area-start -->
      <section class="cta-area pt-15">
         <div class="container">
            <div class="row">
               <div class="col-lg-5">
                  <div class="cta-content mt-40">
                     <h4 class="cta-title">Grow your business today</h4>
                     <p>Enim cras in eget urna. Ut proin integer tempor, bibendum  <br> quam ullamcorper faucibus</p>
                     <div class="cta-btn">
                        <a class="tp-btn" href="/contact">Get in Touch</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-7 align-self-end">
                  <div class="cta-thumb p-relative">
                     <div class="cta-main-bg d-flex justify-content-end">
                        <img src="assets/img/banner/cta-inner-bg-1.png" alt="">
                     </div>
                     <div class="cta-shape">
                        <div class="cta-shape-1 d-none d-lg-block">
                           <img src="assets/img/shape/cta-shape-1.png" alt="">
                        </div>
                        <div class="cta-shape-2">
                           <img src="assets/img/shape/cta-shape-2.png" alt="">
                        </div>
                        <div class="cta-shape-3">
                           <img src="assets/img/shape/cta-shape-3.png" alt="">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- cta-area-end -->

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
   <script src="assets/js/nice-select.js"></script>
   <script src="assets/js/wow.js"></script>
   <script src="assets/js/isotope-pkgd.js"></script>
   <script src="assets/js/imagesloaded-pkgd.js"></script>
   <script src="assets/js/purecounter.js"></script>
   <script src="assets/js/parallax-scroll.js"></script>
   <script src="assets/js/jarallax.js"></script>
   <script src="assets/js/ajax-form.js"></script>
   <script src="assets/js/main.js"></script>
</body>