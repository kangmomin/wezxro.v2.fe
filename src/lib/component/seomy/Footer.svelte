<script>
    export let data
    const {EN_NAME} = data.props
</script>

<footer>
    <div class="footer-area footer-5 footer-inner {(EN_NAME === 'WEZXRO') ? 'pt-100' : 'pt-20'}">
        <div class="container">
            {#if EN_NAME === "WEZXRO"}
                <div class="footer-top">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer-widget footer-4-col-1 mb-30">
                                <div class="footer-widget-logo mb-20">
                                    <a href="/">
                                 <span>
                                     <img alt="logo" src="/public/assets\logo\{EN_NAME.toLowerCase()}\logo_fit_black.png">
                                 </span>
                                    </a>
                                </div>
                                <div class="footer-widget-content">
                                    <p class="footer-widget-text mb-20">This SEO is most reputed firm <br> which provides
                                        various online <br> marketing </p>
                                    <div class="fooer-btn-4">
                                        <a class="blue-btn" href="/login">Grow Traffic</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget  footer-4-col-2 pl-30 mb-40">
                                <h4 class="footer-widget-title mb-15">Information</h4>
                                <div class="footer-widget-link">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/FAQ">FAQ</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/portfolios">Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget  footer-4-col-3 mb-40">
                                <h4 class="footer-widget-title mb-15">파트너</h4>
                                <div class="footer-widget-link">
                                    <ul>
                                        <li><a href="/portfolios">포트폴리오</a></li>
                                        <li><a href="/join-partner">파트너 신청하기</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="footer-widget  footer-4-col-4 mb-40">
                                <h4 class="footer-widget-title mb-20">Subcribe.</h4>
                                <div class="footer-widget-content mb-40">
                                    <p class="footer-widget-text mb-20">Only valuable resource no bullshit</p>
                                    <form action="#">
                                        <div class="p-relative">
                                            <div class="footer-widget-newsletter-input mb-15">
                                                <input type="email" placeholder="Your Email">
                                                <span>
                                          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z" stroke="#565764" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                             <path d="M13 5.39844L10.496 7.39844C9.672 8.05444 8.32 8.05444 7.496 7.39844L5 5.39844" stroke="#565764" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </span>
                                            </div>
                                            <div class="footer-widget-btn">
                                                <button class="footer-widget-newsletter-btn-2">
                                                    <i>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 9L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M1 1H9V9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="footer-widget-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a  href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
            <div class="footer-bottom-4">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-widget-copyright text-center">
                            <span>© 2023 Copyrights by company. All Rights Reserved. Designed by <a target="_blank" href="https://themeforest.net/user/theme_pure/portfolio">Theme_Pure.</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>