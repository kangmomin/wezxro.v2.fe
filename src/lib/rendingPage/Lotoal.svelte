<script>
    import {onMount} from "svelte";

    export let data
    let isLogin = false
    const EN_NAME = data.props.KR_NAME,
        KR_NAME = data.props.KR_NAME

    onMount(() => {
        let token = localStorage.getItem("accessToken");
        if (token) isLogin = true
    })
</script>

<svelte:head>
    <head>
        <!-- Start Meta -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="Metier  - Portfolio HTML5 Template"/>
        <meta name="keywords" content="Creative, Digital, multipage, landing, freelancer template"/>
        <meta name="author" content="ThemeOri">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Title of Site -->
        <title>{ EN_NAME } | 더 효율적인 셀프 마케팅 플랫폼</title>
        <!-- Favicons -->
        <link rel="icon" type="image/png" href="/public/assets\logo\logo_white.png">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="/public/assets/css/bootstrap.min.css">
        <!-- font awesome -->
        <link rel="stylesheet" href="/public/assets/css/all.css">
        <!-- Animate CSS -->
        <link rel="stylesheet" href="/public/assets/css/animate.css">
        <!-- Nice Select CSS -->
        <link rel="stylesheet" href="/public/assets/css/nice-select.css">
        <!-- Swiper -->
        <link rel="stylesheet" href="/public/assets/css/swiper-bundle.min.css">
        <!-- Magnific -->
        <link rel="stylesheet" href="/public/assets/css/magnific-popup.css">
        <!-- Mean menu -->
        <link rel="stylesheet" href="/public/assets/css/meanmenu.min.css">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="/public/assets/sass/style.css">
    </head>
</svelte:head>

<body>
<!-- Preloader end -->
<!-- Header Area Start -->
<div class="header__area" >
    <div class="container custom-container">
        <div class="header__area-box">
            <div class="header__area-box-logo">
                <a href="/"> <img src="public/assets/logo/{EN_NAME.toLowerCase()}/logo_fit.png" alt=""> </a>
                <div class="responsive-menu"></div>
            </div>
            <div class="header_gp" style="display: flex; align-items: center;">
                <div class="header__area-box-main-menu one meanmenu-responsive">
                    <ul id="mobilemenu">
                        {#if isLogin }
                            <li><a href="/dashboard/statistic">대시보드</a> </li>
                        { :else }
                            <li><a href="/login">로그인</a> </li>
                            <li><a href="/join">회원가입</a> </li>
                            <li><a href="/demo-login">둘러보기</a> </li>
                        {/if}
                    </ul>
                </div>
                <div class="header__area-box-sidebar" style="margin-left: 50px;">
                    <div class="header__area-box-sidebar-popup-icon"> <a href=""><i class="fal fa-bars"></i></a> </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Header Area End -->
<!-- Banner Area Start -->
<div class="banner__area" data-background="/public/assets/images/rendingImg/banner.png" style="padding-bottom: 20px;">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="banner__area-content" style="padding-top: 40px;">
                    <h1><span>더</span> 효율적인<br>셀프 <span>마케팅 플랫폼</span><br>{ KR_NAME }<span>입니다.</span></h1>
                    <a class="theme-btn" href="/demo-login" style="background-color: black; border: 1px solid white; margin-left: 10px; font-size: 22px; font-weight: 400; padding-bottom: 4px;">회원가입 없이&nbsp;<span style="font-weight: 600;">둘러보기</span> <i class="fal fa-long-arrow-right"></i></a> </div>
            </div>
        </div>
    </div>
</div>
<!-- Banner Area End -->
<!-- Features Area Start -->
<div class="features__area">
    <div class="container-fluid px-0">
        <div class="row gx-0">
            <div class="col-xl-12">
                <div class="swiper features-slider">
                    <div class="swiper-wrapper">
                        <div class="features__area-item swiper-slide"> <img src="/public/assets/images/rendingImg/instagram.png" alt="">
                            <div class="features__area-item-content">
                                <div class="features__area-item-content-icon"> <a href="/login?demo=yes"><i class="fal fa-plus"></i></a> </div>
                                <h3><a href="/login?demo=yes">인스타그램 서비스</a></h3>
                                <p>팔로워│좋아요│댓글│공유│조회│인기게시물</p>
                            </div>
                        </div>
                        <div class="features__area-item features__area-item-hover swiper-slide"> <img src="/public/assets/images/rendingImg/facebook.png" alt="">
                            <div class="features__area-item-content">
                                <div class="features__area-item-content-icon"> <a href="/login?demo=yes"><i class="fal fa-plus"></i></a> </div>
                                <h3><a href="/login?demo=yes">페이스북 서비스</a></h3>
                                <p>팔로워│좋아요│댓글│공유│조회│저장</p>
                            </div>
                        </div>
                        <div class="features__area-item swiper-slide"> <img src="/public/assets/images/rendingImg/youtube.png" alt="">
                            <div class="features__area-item-content">
                                <div class="features__area-item-content-icon"> <a href="/login?demo=yes"><i class="fal fa-plus"></i></a> </div>
                                <h3><a href="/login?demo=yes">유튜브 서비스</a></h3>
                                <p>구독자│좋아요│댓글│공유│조회│라이브</p>
                            </div>
                        </div>
                        <div class="features__area-item swiper-slide"> <img src="/public/assets/images/rendingImg/tiktok.png" alt="">
                            <div class="features__area-item-content">
                                <div class="features__area-item-content-icon"> <a href="/login?demo=yes"><i class="fal fa-plus"></i></a> </div>
                                <h3><a href="/login?demo=yes">틱톡 서비스</a></h3>
                                <p>팔로워│좋아요│댓글│공유│조회│라이브</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Features Area End -->
<!-- Services Area Start -->
<div class="services__area section-padding" data-background="/public/assets/images/rendingImg/services.png">
    <div class="container">
        <div class="row mb-60">
            <div class="col-xl-12">
                <div class="services__area-title lg-t-center">
                    <span class="subtitle one">완벽한 퀄리티와 신속한 처리 속도</span>
                    <h2>지속적인 <span style="font-weight: 900;">정기 점검</span>으로 항상 안정적입니다.</h2> </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                <div class="services__area-item">
                    <span>01</span>
                    <div class="services__area-item-icon">
                        <img src="/public/assets/images/rendingImg/icon/services-11.png" alt="">
                        <div class="services__area-item-icon-one">
                            <img src="/public/assets/images/rendingImg/icon/services-1.png" alt="">
                        </div>
                    </div>
                    <div class="services__area-item-content">
                        <h4 style="margin-bottom: 6px;"><a href="/login?demo=yes">정기적인 서비스 전수 점검</a></h4>
                        <p>{ KR_NAME }의 모든 서비스는 <strong>최소 1개월 이상 검증된 서비스</strong>로 구성하여 <strong>매주 서비스 점검</strong>을 진행합니다.</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 md-mb-30">
                <div class="services__area-item">
                    <span>02</span>
                    <div class="services__area-item-icon">
                        <img src="/public/assets/images/rendingImg/icon/services-22.png" alt="">
                        <div class="services__area-item-icon-one">
                            <img src="/public/assets/images/rendingImg/icon/services-2.png" alt="">
                        </div>
                    </div>
                    <div class="services__area-item-content">
                        <h4 style="margin-bottom: 6px;"><a href="/login?demo=yes">지속적인 웹사이트 유지보수</a></h4>
                        <p>서비스의 점검과 더불어 모든 웹사이트의 코드에 대해 개선을 포함해 지속적인 유지보수를 실시하고 있습니다.</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 md-mb-30">
                <div class="services__area-item">
                    <span>03</span>
                    <div class="services__area-item-icon">
                        <img src="/public/assets/images/rendingImg/icon/services-33.png" alt="">
                        <div class="services__area-item-icon-one">
                            <img src="/public/assets/images/rendingImg/icon/services-3.png" alt="">
                        </div>
                    </div>
                    <div class="services__area-item-content">
                        <h4 style="margin-bottom: 6px;"><a href="/login?demo=yes">24시간 관리자 상주 시스템</a></h4>
                        <p>관리자가 지속적으로 교대 및 상주하여 언제나 예기치 않은 오류 등의 발생에 대응하고 있습니다.</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="services__area-item">
                    <span>04</span>
                    <div class="services__area-item-icon">
                        <img src="/public/assets/images/rendingImg/icon/services-44.png" alt="">
                        <div class="services__area-item-icon-one">
                            <img src="/public/assets/images/rendingImg/icon/services-4.png" alt="">
                        </div>
                    </div>
                    <div class="services__area-item-content">
                        <h4 style="margin-bottom: 6px;"><a href="/login?demo=yes">전문 서버 전문가 상주</a></h4>
                        <p>디도스 등으로 인한 서비스 종료를 방지하기 위하여 전문 서버 전문가가 지속적으로 상주 및 관리하고 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Services Area End -->
<!-- Work Area Start -->
<div class="work__area section-padding">
    <div class="container">
        <div class="row mb-60">
            <div class="col-xl-12">
                <div class="work__area-title lg-t-center">
                    <span class="subtitle one">편리하고 간단한 사용 방법</span>
                    <h2>단 <span style="font-weight: 900;">세 가지의 절차</span>로 마케팅이 끝납니다.</h2> </div>
            </div>
        </div>
        <div class="row mb-110">
            <div class="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                <div class="work__area-item"> <span>01</span>
                    <div class="work__area-item-icon"> <img src="/public/assets/images/rendingImg/icon/work-1.png" alt=""> </div>
                    <div class="work__area-item-content">
                        <h4 style="margin-bottom: 6px;">서비스 선택</h4>
                        <p>사용하고자 하는 서비스를 선택 후 포인트를 충전해주세요.</p>
                    </div>
                    <div class="work__area-item-shape"> <img src="/public/assets/images/rendingImg/icon/shape-1.png" alt=""> </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                <div class="work__area-item"> <span>02</span>
                    <div class="work__area-item-icon"> <img src="/public/assets/images/rendingImg/icon/work-2.png" alt=""> </div>
                    <div class="work__area-item-content">
                        <h4 style="margin-bottom: 6px;">링크 및 수량 입력</h4>
                        <p>해당 게시물 또는 프로필이나 영상의 링크와 수량을 입력해주세요.</p>
                    </div>
                    <div class="work__area-item-shape"> <img src="/public/assets/images/rendingImg/icon/shape-2.png" alt=""> </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 pl-110">
                <div class="work__area-item"> <span>03</span>
                    <div class="work__area-item-icon"> <img src="/public/assets/images/rendingImg/icon/work-3.png" alt=""> </div>
                    <div class="work__area-item-content">
                        <h4 style="margin-bottom: 6px;">결과 확인</h4>
                        <p>모든 절차가 종료되었습니다. 결과는 실시간으로 갱신됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="faq">
                    <div class="faq-item">
                        <div class="faq-item-card">
                            <div class="faq-item-card-header">
                                <h5>{ KR_NAME }는 <span style="font-weight: 800;">합법적인 </span>플랫폼인가요?</h5> <i class="fal fa-angle-up"></i> </div>
                            <div class="faq-item-card-header-content active">
                                <p>{ KR_NAME }는 합법 플랫폼입니다. 변호사에게 법률자문을 구하여 합법적인 사업임을 확인하였습니다, 그러므로 고객님들과 파트너분들 모두 걱정 안하셔도 됩니다!</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-item-card">
                            <div class="faq-item-card-header">
                                <h5>{ KR_NAME }의 모든 서비스는 <span style="font-weight: 800;">안전한가요?</span></h5> <i class="fal fa-angle-down"></i> </div>
                            <div class="faq-item-card-header-content display-none">
                                <p>
                                    물론입니다. { KR_NAME }의 모든 서비스는 로직 전문가와 마케팅 전문가의 합작으로 제작되었습니다, 고객님들의 계정에 피해가 전혀없는 서비스들입니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-item-card">
                            <div class="faq-item-card-header">
                                <h5>서비스 <span style="font-weight: 800;">진행 속도가</span> 어떻게 되나요?</h5> <i class="fal fa-angle-down"></i> </div>
                            <div class="faq-item-card-header-content display-none">
                                <p>
                                    패널 내부의 주문하기 페이지 우측하단에 서비스 설명에 서비스 별로 평균적인 진행 속도를 기재해놨습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-item-card">
                            <div class="faq-item-card-header">
                                <h5><span style="font-weight: 800;">무통장 입금</span> 또는 <span style="font-weight: 800;">카드결제</span> 그리고 <span style="font-weight: 800;">세금계산서</span>도 가능한가요?</h5> <i class="fal fa-angle-down"></i> </div>
                            <div class="faq-item-card-header-content display-none">
                                <p>
                                    물론입니다. { KR_NAME }는 납세의 의무를 지키는 플랫폼이며, 무통장 입금 및 카드결제 또한 가능하십니다!</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-item m-0">
                        <div class="faq-item-card">
                            <div class="faq-item-card-header">
                                <h5>{ KR_NAME } 파트너 패널을 <span style="font-weight: 800;">분양</span> 받고 싶습니다, 또한 <span style="font-weight: 800;">제휴 문의</span> 는 어디로 드려야하나요?</h5> <i class="fal fa-angle-down"></i> </div>
                            <div class="faq-item-card-header-content display-none">
                                <p>
                                    파트너 패널 분양과 제휴 문의는 패널 외부 하단에 있는 고객센터 또는 이메일 그리고 인스타그램 @{ EN_NAME }official 로 DM 주시면 됩니다!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Work Area End -->
<!-- Footer Area Start -->
<div class="footer__area section-padding" style="padding: 40px 0px;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 text-center">
                <div class="footer__area-widget">
                    <div class="footer__area-widget-about lg-t-center text-center text-muted" style="font-weight: 300; letter-spacing: 1.25px; line-height: 2;">
                        상호명 <strong>화라온 (Hwalaon)</strong>  │ 사업자등록번호 <strong>198-27-01211</strong> │ 대표자명 <strong>정화랑</strong> │ 통신판매업신고번호 <strong>신고처리중</strong>
                        <br>사업장 주소 <strong>48064 부산광역시 해운대구 해운대로469번가길 91, 상가</strong>
                        <br>개인정보관리책임자 <strong>정화랑</strong> │ 고객센터 <strong>010-2442-5538</strong> │ 이메일 <strong style="text-transform: lowercase;">hwalaon@naver.com</strong> │ 인스타그램 <strong>@{ EN_NAME }</strong>
                        │ 탤레그램 <strong>@{ EN_NAME }</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer Area End -->
<!-- Copyright Area Start -->
<div class="copyright__area copyright__area-one">
    <div class="container">
        <div class="row align-items-center copyright__area-border">
            <div class="col-xl-12">
                <div class="copyright__area-left copyright__area-one-left">
                    <p>© 2022 <strong>{ EN_NAME }</strong> ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Copyright Area End -->
<!-- Scroll Btn Start -->
<div class="scroll-up scroll-one">
    <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
</div>
<!-- Scroll Btn End -->
<!-- Main JS -->
<script src="/public/assets/js/jquery-3.6.0.min.js"></script>
<!-- Bootstrap JS -->
<script src="/public/assets/js/bootstrap.min.js"></script>
<!-- Counter up -->
<script src="/public/assets/js/jquery.counterup.min.js"></script>
<!-- Popper JS -->
<script src="/public/assets/js/popper.min.js"></script>
<!-- Progressbar JS -->
<script src="/public/assets/js/progressbar.min.js"></script>
<!-- Magnific JS -->
<script src="/public/assets/js/jquery.magnific-popup.min.js"></script>
<!-- Nice Select JS -->
<script src="/public/assets/js/jquery.nice-select.min.js"></script>
<!-- Swiper JS -->
<script src="/public/assets/js/swiper-bundle.min.js"></script>
<!-- Waypoints JS -->
<script src="/public/assets/js/jquery.waypoints.min.js"></script>
<!-- Isotope JS -->
<script src="/public/assets/js/isotope.pkgd.min.js"></script>
<!-- Mean menu -->
<script src="/public/assets/js/jquery.meanmenu.min.js"></script>
<!-- Custom JS -->
<script src="/public/assets/js/custom.js"></script>
</body>