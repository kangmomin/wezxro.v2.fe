<script>
	import seomySetting from "$lib/rendingPage/theme/seomy/SeomySetting";
	import { SetThemeStyle } from "$lib/util/SetThemeStyle";
	import {onMount} from "svelte";

	export let data

	const {EN_NAME} = data.props
	let isLogin = false
	const config = seomySetting[EN_NAME]?.header ?? seomySetting["WEZXRO"].header
    const theme = seomySetting[EN_NAME]?.theme ?? seomySetting["WEZXRO"].theme


	onMount(() => {
		let token = localStorage.getItem("accessToken");
		if (token) isLogin = true
		
		SetThemeStyle(theme)
	})
</script>

<header>
	<div class="tptransparent__header header-spaces" id="header-sticky"
		 style="background-color: {config.defaultColor};"
	>
		<div class="container">
			<div class="tp-mega-menu-wrapper">
				<div class="row align-items-center">
					<div class="col-xl-2 col-lg-6 col-sm-4 col-6">
						<div class="tplogo__area">
							<a rel="external" href="/">
								<img alt="logo" src="/public/assets/logo/{EN_NAME.toLowerCase()}/logo.png">
							</a>
						</div>
					</div>
					<div class="col-xl-7 col-lg-5  d-none d-xl-block">
						<div class="tpmenu__area main-mega-menu inner-header tpmenu__hover">
							<nav class="tp-main-menu-content">
								<ul>
									{#if EN_NAME === "WEZXRO" }
									<li class="has-dropdown">
										<a rel="external" href="/">{EN_NAME}</a>
										<ul class="tp-submenu submenu">
											<li><a rel="external" href="/">{EN_NAME}</a></li>
											<li><a rel="external" href="/about">ABOUT</a></li>
											<li><a rel="external" href="/FAQ">FAQ</a></li>
										</ul>
									</li>
									<li>
										<a rel="external" href="/services">SERVICES</a>
									</li>
									<li class="has-dropdown">
										<a rel="external" href="/">PARTNER</a>
										<ul class="tp-submenu submenu">
											<li><a rel="external" href="/join-partner">파트너 신청하기</a></li>
											<li><a rel="external" href="/portfolios">파트너 포트폴리오</a></li>
										</ul>
									</li>
									{:else}
										<li><a rel="external" href="/FAQ">FAQ</a></li>
										<li><a rel="external" href="/services">SERVICES</a></li>
									{/if}
									<li>
										<a rel="external" href="/contact">고객센터</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="col-xl-3 col-lg-6 col-sm-8 col-6">
						<div class="tpheader__right  d-flex align-items-center justify-content-end">
							<div class="d-flex align-items-center">
								<div class="tpheader__sign d-none d-md-block">
									<a rel="external" href="/login">로그인</a>
								</div>
								<div class="tpheader__sign ml-25 d-none d-md-block" style="    background-color: var(--tp-theme-blue);; padding: 8px 10px; border-radius: 6px">
									<a class="text-white p-10" rel="external" href="/join">회원가입</a>
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
	</div>
</header>