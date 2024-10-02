/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
****************************************************/

(function ($) {
	"use strict";


	// 01. nav-tabs
	function tabtable_active() {

		var e = document.getElementById("filt-monthly"),
			d = document.getElementById("filt-yearly"),
			t = document.getElementById("switcher"),
			m = document.getElementById("monthly"),
			y = document.getElementById("hourly");

		e.addEventListener("click", function () {
			t.checked = false;
			e.classList.add("toggler--is-active");
			d.classList.remove("toggler--is-active");
			m.classList.remove("hide");
			y.classList.add("hide");
		});

		d.addEventListener("click", function () {
			t.checked = true;
			d.classList.add("toggler--is-active");
			e.classList.remove("toggler--is-active");
			m.classList.add("hide");
			y.classList.remove("hide");
		});

		t.addEventListener("click", function () {
			d.classList.toggle("toggler--is-active");
			e.classList.toggle("toggler--is-active");
			m.classList.toggle("hide");
			y.classList.toggle("hide");
		})
	}
	if ($('#filt-monthly').length > 0) { 
		tabtable_active();
	}
	

	// 02. nav-tabs-2
	function tabtable_active_1() {
		
		var e = document.getElementById("filt-monthly-seo"),
			d = document.getElementById("filt-yearly-seo"),
			t = document.getElementById("switcher-seo"),
			m = document.getElementById("monthly-seo"),
			y = document.getElementById("hourly-seo");

		e.addEventListener("click", function () {
			t.checked = false;
			e.classList.add("analisis-toggler--is-active");
			d.classList.remove("analisis-toggler--is-active");
			m.classList.remove("analisis-hide");
			y.classList.add("analisis-hide");
		});

		d.addEventListener("click", function () {
			t.checked = true;
			d.classList.add("analisis-toggler--is-active");
			e.classList.remove("analisis-toggler--is-active");
			m.classList.add("analisis-hide");
			y.classList.remove("analisis-hide");
		});

		t.addEventListener("click", function () {
			d.classList.toggle("analisis-toggler--is-active");
			e.classList.toggle("analisis-toggler--is-active");
			m.classList.toggle("analisis-hide");
			y.classList.toggle("analisis-hide");
		})
	}
	
	if ($('#filt-monthly-seo').length > 0) { 
		tabtable_active_1();
	}
	

	// 03. nav-tabs-3
	function tabtable_active_2() {
		
		var e = document.getElementById("filt-monthly-price"),
			d = document.getElementById("filt-yearly-price"),
			t = document.getElementById("switcher-price"),
			m = document.getElementById("monthly-price"),
			y = document.getElementById("hourly-price");

		e.addEventListener("click", function () {
			t.checked = false;
			e.classList.add("toggler-price-active");
			d.classList.remove("toggler-price-active");
			m.classList.remove("price-is-hide");
			y.classList.add("price-is-hide");
		});

		d.addEventListener("click", function () {
			t.checked = true;
			d.classList.add("toggler-price-active");
			e.classList.remove("toggler-price-active");
			m.classList.add("price-is-hide");
			y.classList.remove("price-is-hide");
			document.getElementById("switcher").checked = true;
		});

		t.addEventListener("click", function () {
			d.classList.toggle("toggler-price-active");
			e.classList.toggle("toggler-price-active");
			m.classList.toggle("price-is-hide");
			y.classList.toggle("price-is-hide");
		})
	}
	
	if ($('#filt-monthly-price').length > 0) { 
		tabtable_active_2();
	}


	$('.col-custom').on("click", function () {
		// $('#features-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	var windowOn = $(window);


	////////////////////////////////////////////////////
	// 04. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
	// 05. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 06. Mobile Menu Js
	$('#mobile-menu-2').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	////////////////////////////////////////////////////
	// 07. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 08. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});



	////////////////////////////////////////////////////
	// 09.  Mobile Menu Js
	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
				return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".tp-submenu").slideToggle();
			});
			});
	}


	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});


	// settings append in body
	function tp_settings_append($x) {
		var settings = $('body');
		let dark;
		$x == true ? dark = 'd-block' : dark = 'd-none';
		var settings_html = `<div class="tp-theme-settings-area transition-3">
		<div class="tp-theme-wrapper">
		   <div class="tp-theme-header text-center">
			  <h4 class="tp-theme-header-title">Harry Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="tp-theme-toggle mb-20 ${dark}">
			  <label class="tp-theme-toggle-main" for="tp-theme-toggler">
				 <span class="tp-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="tp-theme-toggler">
					<i class="tp-theme-toggle-slide"></i>
				 <span class="tp-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="tp-theme-dir mb-20">
			  <label class="tp-theme-dir-main" for="tp-dir-toggler">
				 <span class="tp-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="tp-dir-toggler">
					<i class="tp-theme-dir-slide"></i>
				 <span class="tp-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="tp-theme-settings">
			  <div class="tp-theme-settings-wrapper">
				 <div class="tp-theme-settings-open">
					<button class="tp-theme-settings-open-btn">
					   <span class="tp-theme-settings-gear">
						  <i class="fa-light fa-gear"></i>
					   </span>
					   <span class="tp-theme-settings-close">
						  <i class="fa-regular fa-xmark"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#F50963" type="button" data-color="#F50963"></button>
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#F50963"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#008080"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#AB6C56"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#3661FC"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#2CAE76"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF5A1B"></button>
					   </div>
					</div>
					<div class="col">
                        <div class="tp-theme-color-item tp-color-active">
                           <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#03041C"></button>
                        </div>
                     </div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#ED212C"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="tp-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="tp-color-setings-input" value="#F50963">
				 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
		settings.append(settings_html);
	}
	// tp_settings_append(true); // if want to enable dark light mode then send "true";

	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});

	// rtl settings
	function tp_rtl_settings() {

		$('#tp-dir-toggler').on("change", function () {
			toggle_rtl();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_dir) {
			localStorage.setItem('tp_dir', tp_dir);
			document.documentElement.setAttribute("dir", tp_dir);

			if (tp_dir === 'rtl') {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			} else {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}

		// toogle theme scheme
		function toggle_rtl() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('ltr');
				var list = $("[href='assets/css/bootstrap-rtl.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			} else {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			}
		}

		// set the first theme scheme
		function tp_init_dir() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
				document.getElementById('tp-dir-toggler').checked = true;
			} else {
				tp_set_scheme('ltr');
				document.getElementById('tp-dir-toggler').checked = false;
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}
		tp_init_dir();
	}
	if ($("#tp-dir-toggler").length > 0) {
		tp_rtl_settings();
	}

	// dark light mode toggler
	function tp_theme_toggler() {

		$('#tp-theme-toggler').on("change", function () {
			toggleTheme();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_theme) {
			localStorage.setItem('tp_theme_scheme', tp_theme);
			document.documentElement.setAttribute("tp-theme", tp_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-light');
			} else {
				tp_set_scheme('tp-theme-dark');
			}
		}

		// set the first theme scheme
		function tp_init_theme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-dark');
				document.getElementById('tp-theme-toggler').checked = true;
			} else {
				tp_set_scheme('tp-theme-light');
				document.getElementById('tp-theme-toggler').checked = false;
			}
		}
		tp_init_theme();
	}
	if ($("#tp-theme-toggler").length > 0) {
		tp_theme_toggler();
	}


	// color settings
	function tp_color_settings() {

		// set color scheme
		function tp_set_color(tp_color_scheme) {
			localStorage.setItem('tp_color_scheme', tp_color_scheme);
			document.querySelector(':root').style.setProperty('--tp-theme-1', tp_color_scheme);
			document.getElementById("tp-color-setings-input").value = tp_color_scheme;
			document.getElementById("tp-theme-color-label").style.backgroundColor = tp_color_scheme;
		}

		// set color
		function tp_set_input() {
			var color = localStorage.getItem('tp_color_scheme');
			document.getElementById("tp-color-setings-input").value = color;
			document.getElementById("tp-theme-color-label").style.backgroundColor = color;


		}
		tp_set_input();

		function tp_init_color() {
			var defaultColor = $(".tp-color-settings-btn").attr('data-color-default');
			var setColor = localStorage.getItem('tp_color_scheme');

			if (setColor != null) {

			} else {
				setColor = defaultColor;
			}

			if (defaultColor !== setColor) {
				document.querySelector(':root').style.setProperty('--tp-theme-1', setColor);
				document.getElementById("tp-color-setings-input").value = setColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = setColor;
				tp_set_color(setColor);
			} else {
				document.querySelector(':root').style.setProperty('--tp-theme-1', defaultColor);
				document.getElementById("tp-color-setings-input").value = defaultColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = defaultColor;
				tp_set_color(defaultColor);
			}
		}
		tp_init_color();


		let themeButtons = document.querySelectorAll('.tp-color-settings-btn');

		themeButtons.forEach(color => {
			color.addEventListener('click', () => {
				let datacolor = color.getAttribute('data-color');
				document.querySelector(':root').style.setProperty('--tp-theme-1', datacolor);
				document.getElementById("tp-theme-color-label").style.backgroundColor = datacolor;
				tp_set_color(datacolor);
			});
		});



		const colorInput = document.querySelector('#tp-color-setings-input');
		const colorVariable = '--tp-theme-1';


		colorInput.addEventListener('change', function (e) {
			var clr = e.target.value;
			document.documentElement.style.setProperty(colorVariable, clr);
			tp_set_color(clr);
			tp_set_check(clr);
		});


		function tp_set_check(clr) {
			const arr = Array.from(document.querySelectorAll('[data-color]'));

			var a = localStorage.getItem('tp_color_scheme');

			let test = arr.map(color => {
				let datacolor = color.getAttribute('data-color');

				return datacolor;
			}).filter(color => color == a);

			var arrLength = test.length;

			if (arrLength == 0) {
				$('.tp-color-active').removeClass('active');
			} else {
				$('.tp-color-active').addClass('active');
			}
		}

		function tp_check_color() {
			var a = localStorage.getItem('tp_color_scheme');

			var list = $(`[data-color="${a}"]`);

			list.parent().addClass('active').parent().siblings().find('.tp-color-active').removeClass('active')
		}
		tp_check_color();

		$('.tp-color-active').on('click', function () {
			$(this).addClass('active').parent().siblings().find('.tp-color-active').removeClass('active');
		});

	}
	if (($(".tp-color-settings-btn").length > 0) && ($("#tp-color-setings-input").length > 0) && ($("#tp-theme-color-label").length > 0)) {
		tp_color_settings();
	}


	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.active-class-select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;

	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 4000,
			dots: false,
			fade: true,
			rtl: rtl_setting,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	$('.tp-slick-test').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		fade: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-chevron-right"></i></button>',
		appendArrows: $('.the-arrow'),
		infinite: true,
		speed: 300,
		rtl: rtl_setting,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	////////////////////////////////////////////////////
	// 14. slider__active Slider Js
	if ($(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			rtl: rtl_setting,
			effect: 'fade',

			autoplay: {
				delay: 5000000,
			},

			// If we need pagination
			pagination: {
				el: ".main-slider-dot",
				dynamicBullets: false,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}


	// 15. Postbox-slider
	var postboxSlider = new Swiper('.tp-postbox-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-postbox-slider-button-next",
			prevEl: ".tp-postbox-slider-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// 16. jarallax
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768
		});
	};


	var slider = new Swiper('.active-class', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		pagination: {
			el: ".testimonial-pagination-6",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var postboxSlider = new Swiper('.postbox__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 17. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 18. Wow Js
	new WOW().init();

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		////////////////////////////////////////////////////
		// 19. Show Login Toggle Js
		$('#showlogin').on('click', function () {
			$('#checkout-login').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 20. Show Coupon Toggle Js
		$('#showcoupon').on('click', function () {
			$('#checkout_coupon').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 21. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 22. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();



	////////////////////////////////////////////////////
	// 23. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 24. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};
	if ($('.scene-y').length > 0) {
		$('.scene-y').parallax({
			scalarY: 5.0,
			scalarX: 0,
		});
	};


	////////////////////////////////////////////////////
	// 25. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	if ($('#nft-slider').length > 0) {
		var stepsSlider = document.getElementById('nft-slider');
		var input0 = document.getElementById('input-with-keypress-0');
		var input1 = document.getElementById('input-with-keypress-1');
		var inputs = [input0, input1];

		noUiSlider.create(stepsSlider, {
			start: [0, 4],
			connect: true,
			range: {
				'min': [0],
				'max': 10
			}
		});

		stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
		});
	}

	if ($('.tp-tilt-effect').length > 0) {
		VanillaTilt.init(document.querySelector(".tp-tilt-effect"), {
			reverse: false,  // reverse the tilt direction
			max: 20,     // max tilt rotation (degrees)
			startX: 0,      // the starting tilt on the X axis, in degrees.
			startY: 0,      // the starting tilt on the Y axis, in degrees.
			perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
			scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
			speed: 300,    // Speed of the enter/exit transition
			transition: true,   // Set a transition on enter/exit.
			axis: null,   // What axis should be disabled. Can be X or Y.
			reset: true,   // If the tilt effect has to be reset on exit.
			easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
			glare: false,  // if it should have a "glare" effect
			"max-glare": 1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
			"glare-prerender": false,
			"mouse-event-element": null,   // css-selector or link to HTML-element what will be listen mouse events
			gyroscope: true,   // Boolean to enable/disable device orientation detection,
			gyroscopeMinAngleX: -10,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
			gyroscopeMaxAngleX: 10,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
			gyroscopeMinAngleY: -10,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
			gyroscopeMaxAngleY: 10,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
		});
	}



	// this-project


	var navArrows = ["\n    <span>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"14\" fill=\"none\" viewBox=\"0 0 8 14\">\n            <path fill-rule=\"evenodd\" d=\"M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z\" fill=\"#9f9fa9\"/>\n        </svg>\n    </span>"]; // owl carousel

	// case-area
	$('.tpcase-active').slick({
		fade: false,
		autoplay: false,
		slidesToShow: 2,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: $('.prev-slide-case'),
		nextArrow: $('.next-slide-case'),
		appendArrows: ".tpcase-nav",
	});


	// 26. testimonial
	$('.tptestimonial-active').slick({
		fade: false,
		autoplay: false,
		centerMode: true,
		centerPadding: '509px',
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 1,
					centerPadding: '400px',
				}
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 1,
					centerPadding: '150px',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					centerPadding: '120px',
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: '50px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '10px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: '5px',
				}
			}
		],
		prevArrow: $('.prev-testimonial'),
		nextArrow: $('.next-testimonial'),
		appendArrows: ".testimonial-arrows",
	});


	// 27. testimonial
	$('.tptestimonial-active-two').slick({
		autoplay: false,
		vertical: true,
		dots: true,
		fade: false,
		arrows: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
		prevArrow: '<button type="button" class="slick-prev"><span><i class="fa-regular fa-angle-up"></i></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span><i class="fa-regular fa-angle-down"></i></span></button>',
		appendArrows: ".tptestimonial-two-nav",
	});

	
	// 28. Testimonial-3
	$('.tptestimonial-3-active').slick({
		fade: false,
		autoplay: true,
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: $('.prv-testi-case'),
		nextArrow: $('.next-testi-case'),
		appendArrows: ".tptestimonal-4-nav",
	});

	
	// 29. Testimonial-4
	$('.tptestimonial-4-active').slick({
		fade: false,
		autoplay: false,
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: $('.prv-testi-case'),
		nextArrow: $('.next-testi-case'),
		appendArrows: ".tptestimonal-4-nav",
	});


	// 30. testimonial
	$('.testi-5-active').slick({
		autoplay: false,
		dots: true,
		fade: false,
		arrows: false,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});


	// 31. Portfolio-4
	$('.portfolio-4-active').slick({
		fade: false,
		autoplay: false,
		slidesToShow: 2,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: '<div class="prv-testi-case"><span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"viewBox="0 0 8 14"><path fill-rule="evenodd"d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"fill="#9f9fa9"></path></svg></span></div>',
		nextArrow: '<div class="next-testi-case"><span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none" viewBox="0 0 8 14"><path fill-rule="evenodd"d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z" fill="#9f9fa9"></path></svg></span></div>',
	});

	$('.portfolio-4-active').slick('refresh');


	// 32. Portfolio-4
	$('.portfolio-4-active-2').slick({
		fade: false,
		autoplay: false,
		slidesToShow: 2,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: $('.prev-slide-case'),
		nextArrow: $('.next-slide-case'),
		appendArrows: ".tpcase-nav",
	});
	

	// 33. Brand-1
	$('.tpbrand-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});


	// 34. Brand-2
	$('.tpbrand-active-2').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});


	//  35. Brand-3
	$('.tpbrand-active-4').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});
	

	// 36. Brand-4
	$('.tpbrand-active-5').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});


	//  37. Brand-5
	$('.tpbrand-inner-active').slick({
		dots: false,
		infinite: false,
		speed: 1000,
		autoplay: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});


	//  38. About-5
	$('.tpabout-inner-active').slick({
		dots: false,
		infinite: true,
		autoplaySpeed:1300,
		autoplay: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});


	// 39. accordion active
	$('.tp-accordion-seo .tp-accordion-item').on("click", function(){
		$(this).addClass('tp-accordion-active').siblings().removeClass('tp-accordion-active');
		$('.tp-accordion-seo .tp-accordion-item.tp-accordion-active').siblings().find('.tp-accordion-content').slideUp();
		$('.tp-accordion-seo .tp-accordion-item.tp-accordion-active .tp-accordion-content').slideDown();
	});  

	$('.tp-accordion-seo .tp-accordion-item.tp-accordion-active .tp-accordion-content').slideDown();

	
	// header-search
	$(".button-search-toggle").on("click", function () {
		$(".tp-search-area").slideToggle();
		$(this).toggleClass("tp-search-icon-active");
	});

	$("body > *:not(header)").on("click", function () {
		$(".tp-search-area").slideUp();
		$(".button-search-toggle").removeClass("tp-search-icon-active");
	});


	$("#filt-yearly").on("click", function () {
		$(".tp-price-toogle").removeClass("price-open");
	});
	$(".toggler-yearly.toggler--is-active").on("click", function () {
		$(".tp-price-toogle").removeClass("price-open");
	});
	$("#filt-monthly").on("click", function () {
		$(".tp-price-toogle").addClass("price-open");
	});


	/* Scroll Indicator Progress Bar */


	if ($('#scroll-indicator').length > 0) {
		const handleScrollIndicator = () => {
			const scrollIndicator = document.querySelector("#scroll-indicator");
			const maxHeight = document.body.scrollHeight - window.innerHeight;
	
			const widthPercentage = (window.scrollY / maxHeight) * 100;
			scrollIndicator.style.width = `${widthPercentage}%`;
		};
	
		window.addEventListener("scroll", handleScrollIndicator);
	};


	function seawave () {

		$.fn.wavify = function(options) {
			if ("function" !== typeof wavify) {
			  console.error(
				"wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'."
			  );
			  throw "Error: wavify is not a function";
			}
	
			return wavify(this, options);
		};
	
		$('#feel-the-wave').wavify({
			height: 150,
			bones: 7,
			amplitude: 70,
			color: 'rgba(255, 255, 255, 1)',
			speed: .21
		});
	
		$('#wave-two').wavify({
		height: 150,
		bones: 8,
		amplitude: 45,
		color: '#F7EFFD',
		speed: .24
		});
	}
	if ($('.wave-bg').length > 0) { 
		seawave();
	}

	// 40. language
	if ($("#header-bottom__lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('header-bottom__lang-toggle').contains(e.target)){
				$(".header-bottom__lang-submenu").toggleClass("open");
			}
			else{
				$(".header-bottom__lang-submenu").removeClass("open");
			}
		});
	}


	// 41. blog-grid-slider
	var blogGridSlider = new Swiper('.tpblog-grid-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".blog-grid-active-button-next",
			prevEl: ".blog-grid-active-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// 42. blog-list-slider
	var blogListSlider = new Swiper('.tpblog-list-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: false,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".blog-list-active-button-next",
			prevEl: ".blog-list-active-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// 43. articale-slider
	var blogListSlider = new Swiper('.articale-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".articale-button-next",
			prevEl: ".articale-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// 44. portfolio
	$('.blog-masonry-active').isotope({
		itemSelector: '.blog-masonry-item-active',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.blog-masonry-item-active'
		}
	});



   /*hero slider one*/
   var hero_slider__two = new Swiper('.hero_slider__two', {
    spaceBetween: 10,
    centeredSlides : true,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 40000
    },
    loop: true,
    loopedSlides: 4
  });

  var hero_thumbs__two = new Swiper('.hero_thumbs__two', {
    direction: 'horizontal',
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      480:{
        slidesPerView: 1
      },
      575:{
        slidesPerView: 2,
      },
      992:{    
        slidesPerView: 4,
        direction: 'vertical',
        centeredSlides: true
      }
    }
  });
  hero_slider__two.controller.control = hero_thumbs__two;
  hero_thumbs__two.controller.control = hero_slider__two;



	// 45. Trusted Brand
	var testimonialSlider = new Swiper('.trusted-brand-active', {
		slidesPerView: 5,
		loop: true,
		// effect: 'fade',
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		autoplay: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 05. One Page Scroll Js
	if ($('.tp-onepage-menu li a').length > 0) { 
		function scrollNav() {
			$('.tp-onepage-menu li a').click(function () {
				$(".tp-onepage-menu li a.active").removeClass("active");
				$(this).addClass("active");
	
				$('html, body').stop().animate({
					scrollTop: $($(this).attr('href')).offset().top - 40
				}, 300);
				return false;
			});
		}
		scrollNav();
	}



})(jQuery);