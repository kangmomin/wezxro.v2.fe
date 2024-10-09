<script>
    import {onMount} from "svelte";
    import jQuery from 'jquery';

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
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="https://gmpg.org/xfn/11">
        <title>{EN_NAME}</title>
        <meta name="robots" content="noindex, nofollow">
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <script type="text/javascript">
            /* <![CDATA[ */
            window._wpemojiSettings = {
                "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
                "ext": ".png",
                "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
                "svgExt": ".svg",
                "source": {"concatemoji": "\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.1"}
            };
            /*! This file is auto-generated */
            !function (i, n) {
                var o, s, e;

                function c(e) {
                    try {
                        var t = {supportTests: e, timestamp: (new Date).valueOf()};
                        sessionStorage.setItem(o, JSON.stringify(t))
                    } catch (e) {
                    }
                }

                function p(e, t, n) {
                    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
                    var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
                        r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
                    return t.every(function (e, t) {
                        return e === r[t]
                    })
                }

                function u(e, t, n) {
                    switch (t) {
                        case"flag":
                            return n(e, "🏳️‍⚧️", "🏳️​⚧️") ? !1 : !n(e, "🇺🇳", "🇺​🇳") && !n(e, "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴​󠁧​󠁢​󠁥​󠁮​󠁧​󠁿");
                        case"emoji":
                            return !n(e, "🐦‍⬛", "🐦​⬛")
                    }
                    return !1
                }

                function f(e, t, n) {
                    var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"),
                        a = r.getContext("2d", {willReadFrequently: !0}),
                        o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
                    return e.forEach(function (e) {
                        o[e] = t(a, e, n)
                    }), o
                }

                function t(e) {
                    var t = i.createElement("script");
                    t.src = e, t.defer = !0, i.head.appendChild(t)
                }

                "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
                    everything: !0,
                    everythingExceptFlag: !0
                }, e = new Promise(function (e) {
                    i.addEventListener("DOMContentLoaded", e, {once: !0})
                }), new Promise(function (t) {
                    var n = function () {
                        try {
                            var e = JSON.parse(sessionStorage.getItem(o));
                            if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
                        } catch (e) {
                        }
                        return null
                    }();
                    if (!n) {
                        if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                            var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));",
                                r = new Blob([e], {type: "text/javascript"}),
                                a = new Worker(URL.createObjectURL(r), {name: "wpTestEmojiSupports"});
                            return void (a.onmessage = function (e) {
                                c(n = e.data), a.terminate(), t(n)
                            })
                        } catch (e) {
                        }
                        c(n = f(s, u, p))
                    }
                    t(n)
                }).then(function (e) {
                    for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
                    n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () {
                        n.DOMReady = !0
                    }
                }).then(function () {
                    return e
                }).then(function () {
                    var e;
                    n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
                }))
            }((window, document), window._wpemojiSettings);
            /* ]]> */
        </script>
        <style id="wp-emoji-styles-inline-css" type="text/css">img.wp-smiley, img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
        </style>
        <style id="classic-theme-styles-inline-css" type="text/css">/*! This file is auto-generated */
        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
        </style>
        <style id="global-styles-inline-css" type="text/css">:root {
            --wp--preset--aspect-ratio--square: 1;
            --wp--preset--aspect-ratio--4-3: 4/3;
            --wp--preset--aspect-ratio--3-4: 3/4;
            --wp--preset--aspect-ratio--3-2: 3/2;
            --wp--preset--aspect-ratio--2-3: 2/3;
            --wp--preset--aspect-ratio--16-9: 16/9;
            --wp--preset--aspect-ratio--9-16: 9/16;
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--font-family--inter: "Inter", sans-serif;
            --wp--preset--font-family--cardo: Cardo;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flex {
            display: flex;
        }

        .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .is-layout-flex > :is(*, div) {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        .is-layout-grid > :is(*, div) {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :root :where(.wp-block-pullquote) {
            font-size: 1.5em;
            line-height: 1.6;
        }
        </style>
        <link rel="stylesheet" id="contact-form-7-css"
              href="/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.9.8" type="text/css" media="all">
        <style id="woocommerce-inline-inline-css" type="text/css">.woocommerce form .form-row .required {
            visibility: visible;
        }
        </style>
        <link rel="stylesheet" id="hint-css"
              href="/wp-content/plugins/woo-smart-compare/assets/libs/hint/hint.min.css?ver=6.6.1" type="text/css"
              media="all">
        <link rel="stylesheet" id="perfect-scrollbar-css"
              href="/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="perfect-scrollbar-wpc-css"
              href="/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="woosc-frontend-css"
              href="/wp-content/plugins/woo-smart-compare/assets/css/frontend.css?ver=6.2.8" type="text/css"
              media="all">
        <link rel="stylesheet" id="slick-css"
              href="/wp-content/plugins/woo-smart-quick-view/assets/libs/slick/slick.css?ver=6.6.1" type="text/css"
              media="all">
        <link rel="stylesheet" id="magnific-popup-css"
              href="/wp-content/plugins/woo-smart-quick-view/assets/libs/magnific-popup/magnific-popup.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="woosq-feather-css"
              href="/wp-content/plugins/woo-smart-quick-view/assets/libs/feather/feather.css?ver=6.6.1" type="text/css"
              media="all">
        <link rel="stylesheet" id="woosq-frontend-css"
              href="/wp-content/plugins/woo-smart-quick-view/assets/css/frontend.css?ver=4.0.6" type="text/css"
              media="all">
        <link rel="stylesheet" id="woosw-icons-css"
              href="/wp-content/plugins/woo-smart-wishlist/assets/css/icons.css?ver=4.8.9" type="text/css" media="all">
        <link rel="stylesheet" id="woosw-frontend-css"
              href="/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css?ver=4.8.9" type="text/css"
              media="all">
        <style id="woosw-frontend-inline-css"
               type="text/css">.woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-notice {
            background-color: #5fbd74;
        }

        .woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-popup-content-bot-inner a:hover {
            color: #5fbd74;
            border-color: #5fbd74;
        }
        </style>
        <link rel="stylesheet" id="seomy-custom-css"
              href="/wp-content/themes/seomy/assets/css/seomy-custom.css?ver=6.6.1" type="text/css" media="all">
        <style id="seomy-custom-inline-css" type="text/css">html:root {
            --tp-theme-primary: #4260FF;
            --tp-theme-secondary: #131683;
            --tp-theme-3: #05003B;
        }
        </style>
        <link rel="stylesheet" id="seomy-fonts-css"
              href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&#038;family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&#038;family=Urbanist:wght@300;400;500;600;700;800&#038;display=swap&#038;ver=1.0.0"
              type="text/css" media="all">
        <link rel="stylesheet" id="bootstrap-css" href="/wp-content/themes/seomy/assets/css/bootstrap.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="animate-css" href="/wp-content/themes/seomy/assets/css/animate.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="swiper-bundle-css"
              href="/wp-content/themes/seomy/assets/css/swiper-bundle.css?ver=6.6.1" type="text/css" media="all">
        <link rel="stylesheet" id="seomy-slick-css" href="/wp-content/themes/seomy/assets/css/slick.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="nouislider-css" href="/wp-content/themes/seomy/assets/css/nouislider.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="font-awesome-pro-tp-css"
              href="/wp-content/themes/seomy/assets/css/font-awesome-pro-tp.css?ver=6.6.1" type="text/css" media="all">
        <link rel="stylesheet" id="spacing-css" href="/wp-content/themes/seomy/assets/css/spacing.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="modernizr-css" href="/wp-content/themes/seomy/assets/css/modernizr.css?ver=6.6.1"
              type="text/css" media="all">
        <link rel="stylesheet" id="seomy-core-css"
              href="/wp-content/themes/seomy/assets/css/seomy-core.css?ver=1723622281" type="text/css" media="all">
        <link rel="stylesheet" id="seomy-unit-css"
              href="/wp-content/themes/seomy/assets/css/seomy-unit.css?ver=1723622281" type="text/css" media="all">
        <link rel="stylesheet" id="seomy-style-css" href="/wp-content/themes/seomy/style.css?ver=6.6.1" type="text/css"
              media="all">
        <link rel="stylesheet" id="elementor-frontend-css"
              href="/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.23.4" type="text/css"
              media="all">
        <link rel="stylesheet" id="swiper-css"
              href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5" type="text/css"
              media="all">
        <link rel="stylesheet" id="elementor-post-7-css"
              href="/wp-content/uploads/elementor/css/post-7.css?ver=1723622281" type="text/css" media="all">
        <link rel="stylesheet" id="elementor-global-css"
              href="/wp-content/uploads/elementor/css/global.css?ver=1723622295" type="text/css" media="all">
        <link rel="stylesheet" id="elementor-post-6904-css"
              href="/wp-content/uploads/elementor/css/post-6904.css?ver=1723622296" type="text/css" media="all">
        <link rel="stylesheet" id="google-fonts-1-css"
              href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPlus+Jakarta+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.6.1"
              type="text/css" media="all">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <script type="text/template" id="tmpl-variation-template"><div class="woocommerce-variation-description"></div>
        <div class="woocommerce-variation-price"></div>
        <div class="woocommerce-variation-availability"></div>
        </script>
        <script type="text/template" id="tmpl-unavailable-variation-template">
            <p>Sorry, this product is unavailable. Please choose a different combination.</p>
        </script>
        <script type="text/javascript" src="/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js">
        </script>
        <script type="text/javascript" src="/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
                id="jquery-migrate-js"></script>
        <script type="text/javascript"
                src="/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.9.1.4"
                id="jquery-blockui-js" data-wp-strategy="defer"></script>
        <script type="text/javascript" id="wc-add-to-cart-js-extra">
            /* <![CDATA[ */
            var wc_add_to_cart_params = {
                "ajax_url": "\/wordpress\/wp-admin\/admin-ajax.php",
                "wc_ajax_url": "\/wordpress\/?wc-ajax=%%endpoint%%",
                "i18n_view_cart": "장바구니 보기",
                "cart_url": "\/cart\/",
                "is_cart": "",
                "cart_redirect_after_add": "no"
            };
            /* ]]> */
        </script>
        <script type="text/javascript"
                src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=9.1.4"
                id="wc-add-to-cart-js" defer data-wp-strategy="defer"></script>
        <script type="text/javascript"
                src="/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.9.1.4"
                id="js-cookie-js" data-wp-strategy="defer"></script>
        <script type="text/javascript" id="woocommerce-js-extra">
            /* <![CDATA[ */
            var woocommerce_params = {
                "ajax_url": "\/wordpress\/wp-admin\/admin-ajax.php",
                "wc_ajax_url": "\/wordpress\/?wc-ajax=%%endpoint%%"
            };
            /* ]]> */
        </script>
        <script type="text/javascript"
                src="/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=9.1.4"
                id="woocommerce-js" defer data-wp-strategy="defer"></script>
        <script type="text/javascript" src="/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
        <script type="text/javascript" id="wp-util-js-extra">
            /* <![CDATA[ */
            var _wpUtilSettings = {"ajax": {"url": "\/wordpress\/wp-admin\/admin-ajax.php"}};
            /* ]]> */
        </script>
        <script type="text/javascript" src="/wp-includes/js/wp-util.min.js?ver=6.6.1" id="wp-util-js"></script>
<!--        <link rel="https://api.w.org/" href="/wp-json/">-->
<!--        <link rel="alternate" title="JSON" type="application/json" href="/wp-json/wp/v2/pages/6904">-->
<!--        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="/xmlrpc.php?rsd">-->
        <meta name="generator" content="WordPress 6.6.1">
        <meta name="generator" content="WooCommerce 9.1.4">
        <link rel="canonical" href="/">
        <link rel="shortlink" href="/">
<!--        <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed"-->
<!--              href="/wp-json/oembed/1.0/embed?url=%2F">-->
<!--        <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed"-->
<!--              href="/wp-json/oembed/1.0/embed?url=%2F#038;format=xml">-->
        <noscript>
            <style>.woocommerce-product-gallery {
                opacity: 1 !important;
            }
            </style>
        </noscript>
        <meta name="generator"
              content="Elementor 3.23.4; features: e_optimized_css_loading, e_font_icon_svg, additional_custom_breakpoints, e_optimized_control_loading, e_lazyload, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap">
        <style>.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
            background-image: none !important;
        }

        @media screen and (max-height: 1024px) {
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }

        @media screen and (max-height: 640px) {
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }
        </style>
        <style id="wp-fonts-local" type="text/css">@font-face {
            font-family: Inter;
            font-style: normal;
            font-weight: 300 900;
            font-display: fallback;
            src: url('/wp-content/plugins/woocommerce/assets/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2');
            font-stretch: normal;
        }

        @font-face {
            font-family: Cardo;
            font-style: normal;
            font-weight: 400;
            font-display: fallback;
            src: url('/wp-content/plugins/woocommerce/assets/fonts/cardo_normal_400.woff2') format('woff2');
        }
        </style>
        <style id="kirki-inline-styles"></style>
    </head>
</svelte:head>


<body class="home page-template page-template-elementor_header_footer page page-id-6904 wp-embed-responsive breadcrumb-blog theme-seomy woocommerce-no-js no-sidebar elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-6904">

<!-- header start -->
<div data-elementor-type="wp-post" data-elementor-id="168" class="elementor elementor-168">
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-68b2d38 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="68b2d38" data-element_type="section">
        <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-237fab3"
                 data-id="237fab3" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-0639aff elementor-widget elementor-widget-tp-header-5"
                         data-id="0639aff" data-element_type="widget" data-widget_type="tp-header-5.default">
                        <div class="elementor-widget-container">

                            <header>
                                <div class="tptransparent__header-4 builder-header-5 tp-el-section">
                                    <div class="header-top d-none d-sm-block">
                                        <div class="container">
                                            <div class="row align-items-center tp-el-topbar">
                                                <div class="col-lg-6 col-sm-8">
                                                    <div class="header-offer d-flex align-items-center">
                                                        <img src="https://wp.themepure.net/seomy/wp-content/themes/seomy/assets/img/shape/header-rocket.png"
                                                             alt="">
                                                        <p>End of Year Sale:<span>Save up to 35%</span> on Tasks</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-sm-4">
                                                    <div class="header-social d-flex align-items-center">
                                                        <div class="header-social-item tp-el-top-social">
                                                            <a href="#">
                                                                <svg aria-hidden="true"
                                                                     class="e-font-icon-svg e-fab-facebook"
                                                                     viewbox="0 0 512 512"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg aria-hidden="true"
                                                                     class="e-font-icon-svg e-fab-twitter"
                                                                     viewbox="0 0 512 512"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg aria-hidden="true"
                                                                     class="e-font-icon-svg e-fab-instagram"
                                                                     viewbox="0 0 448 512"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg aria-hidden="true"
                                                                     class="e-font-icon-svg e-fab-pinterest"
                                                                     viewbox="0 0 496 512"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-header">
                                        <div class="custom-container">
                                            <div id="header-sticky" class="header-bg-4">
                                                <div class="row align-items-center">
                                                    <div class="col-xl-3 col-lg-6 col-sm-5 col-6">
                                                        <div class="tplogo__area">
                                                            <a class="header-logo tp-el-logo" href="/">
                                                                <img src="/wp-content/uploads/2023/09/logo-4.png"
                                                                     alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-7 col-lg-6  d-none d-xl-block">
                                                        <div class="tpmenu__area main-mega-menu">
                                                            <nav class="tp-main-menu-content tp-el-menu">
                                                                <ul id="menu-1-0639aff" class="tp-nav-menu ">
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-7900"
                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7900 has-mega-menu has-dropdown menu-item-7900 nav-item">
                                                                        <a title="Home" href="/" class="nav-links">Home</a>
                                                                        <div class="tp-submenu submenu has-homemenu  ">
                                                                            <style>.elementor-4004 .elementor-element.elementor-element-da99cd7 {
                                                                                z-index: 4;
                                                                            }
                                                                            </style>
                                                                            <div data-elementor-type="container"
                                                                                 data-elementor-id="4004"
                                                                                 class="elementor elementor-4004">
                                                                                <section
                                                                                        class="elementor-section elementor-top-section elementor-element elementor-element-da99cd7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                                        data-id="da99cd7"
                                                                                        data-element_type="section">
                                                                                    <div class="elementor-container elementor-column-gap-no">
                                                                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e7550f"
                                                                                             data-id="9e7550f"
                                                                                             data-element_type="column">
                                                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                                                <div class="elementor-element elementor-element-05accc6 elementor-widget elementor-widget-tp-menu-demo"
                                                                                                     data-id="05accc6"
                                                                                                     data-element_type="widget"
                                                                                                     data-widget_type="tp-menu-demo.default">
                                                                                                    <div class="elementor-widget-container">
                                                                                                        <div class="tp-submenus submenus has-homemenu tp-mega-menu tp-el-section">
                                                                                                            <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                                                                                <div class="col homemenu active">
                                                                                                                    <div class="homemenu-thumb tp-el-rep-icon">
                                                                                                                        <img src="/wp-content/uploads/2023/10/home-1.jpg"
                                                                                                                             alt="">
                                                                                                                    </div>
                                                                                                                    <div class="homemenu-btn">
                                                                                                                        <a class="menu-btn mb-5 tp-el-rep-btn1"
                                                                                                                           href="https://wp.themepure.net/seomy/">Multi
                                                                                                                            Pages</a>
                                                                                                                        <a class="menu-btn tp-el-rep-btn2"
                                                                                                                           href="https://wp.themepure.net/seomy/home-one-page/">One
                                                                                                                            Page</a>
                                                                                                                    </div>
                                                                                                                    <div class="demo-name">
                                                                                                                        <span class="tp-el-rep-title">SEO Marketing</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col homemenu active">
                                                                                                                    <div class="homemenu-thumb tp-el-rep-icon">
                                                                                                                        <img src="/wp-content/uploads/2023/10/home-2.jpg"
                                                                                                                             alt="">
                                                                                                                    </div>
                                                                                                                    <div class="homemenu-btn">
                                                                                                                        <a class="menu-btn mb-5 tp-el-rep-btn1"
                                                                                                                           href="https://wp.themepure.net/seomy/home-2/">Multi
                                                                                                                            Pages</a>
                                                                                                                        <a class="menu-btn tp-el-rep-btn2"
                                                                                                                           href="https://wp.themepure.net/seomy/home-2-one-page/">One
                                                                                                                            Page</a>
                                                                                                                    </div>
                                                                                                                    <div class="demo-name">
                                                                                                                        <span class="tp-el-rep-title">SEO Analysis</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col homemenu active">
                                                                                                                    <div class="homemenu-thumb tp-el-rep-icon">
                                                                                                                        <img src="/wp-content/uploads/2023/10/home-3.jpg"
                                                                                                                             alt="">
                                                                                                                    </div>
                                                                                                                    <div class="homemenu-btn">
                                                                                                                        <a class="menu-btn mb-5 tp-el-rep-btn1"
                                                                                                                           href="https://wp.themepure.net/seomy/home-3">Multi
                                                                                                                            Pages</a>
                                                                                                                        <a class="menu-btn tp-el-rep-btn2"
                                                                                                                           href="https://wp.themepure.net/seomy/home-3-one-page/">One
                                                                                                                            Page</a>
                                                                                                                    </div>
                                                                                                                    <div class="demo-name">
                                                                                                                        <span class="tp-el-rep-title">Business SEO</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col homemenu active">
                                                                                                                    <div class="homemenu-thumb tp-el-rep-icon">
                                                                                                                        <img src="/wp-content/uploads/2023/10/home-4.jpg"
                                                                                                                             alt="">
                                                                                                                    </div>
                                                                                                                    <div class="homemenu-btn">
                                                                                                                        <a class="menu-btn mb-5 tp-el-rep-btn1"
                                                                                                                           href="https://wp.themepure.net/seomy/home-4">Multi
                                                                                                                            Pages</a>
                                                                                                                        <a class="menu-btn tp-el-rep-btn2"
                                                                                                                           href="https://wp.themepure.net/seomy/home-4-one-page/">One
                                                                                                                            Page</a>
                                                                                                                    </div>
                                                                                                                    <div class="demo-name">
                                                                                                                        <span class="tp-el-rep-title">SEO Agency</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col homemenu active">
                                                                                                                    <div class="homemenu-thumb tp-el-rep-icon">
                                                                                                                        <img src="/wp-content/uploads/2023/10/home-5.jpg"
                                                                                                                             alt="">
                                                                                                                    </div>
                                                                                                                    <div class="homemenu-btn">
                                                                                                                        <a class="menu-btn mb-5 tp-el-rep-btn1"
                                                                                                                           href="https://wp.themepure.net/seomy/home-5">Multi
                                                                                                                            Pages</a>
                                                                                                                        <a class="menu-btn tp-el-rep-btn2"
                                                                                                                           href="https://wp.themepure.net/seomy/home-5-one-page/">One
                                                                                                                            Page</a>
                                                                                                                    </div>
                                                                                                                    <div class="demo-name">
                                                                                                                        <span class="tp-el-rep-title">SEO Campaign</span>
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
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-8296"
                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8296 menu-item-8296 nav-item">
                                                                        <a title="About" href="/"
                                                                           class="nav-links">About</a></li>
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-8297"
                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8297 has-mega-menu has-dropdown menu-item-8297 nav-item">
                                                                        <a title="Services" href="/"
                                                                           class="nav-links">Services</a>
                                                                        <div class="tp-submenu submenu has-homemenu  ">
                                                                            <style>.elementor-4024 .elementor-element.elementor-element-e0f097f {
                                                                                margin-top: -10px;
                                                                                margin-bottom: 0px;
                                                                            }

                                                                            .elementor-4024 .elementor-element.elementor-element-2b1867d .ele-content-align {
                                                                                text-align: left;
                                                                            }
                                                                            </style>
                                                                            <div data-elementor-type="container"
                                                                                 data-elementor-id="4024"
                                                                                 class="elementor elementor-4024">
                                                                                <section
                                                                                        class="elementor-section elementor-top-section elementor-element elementor-element-e0f097f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                                        data-id="e0f097f"
                                                                                        data-element_type="section">
                                                                                    <div class="elementor-container elementor-column-gap-no">
                                                                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f5dea94"
                                                                                             data-id="f5dea94"
                                                                                             data-element_type="column">
                                                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                                                <div class="elementor-element elementor-element-2b1867d elementor-widget elementor-widget-tp-menu-links"
                                                                                                     data-id="2b1867d"
                                                                                                     data-element_type="widget"
                                                                                                     data-widget_type="tp-menu-links.default">
                                                                                                    <div class="elementor-widget-container">
                                                                                                        <div class="tp-mega-menu tp-serv-mega-menu tp-el-section">
                                                                                                            <div class="row">
                                                                                                                <div class="col-xl-6">
                                                                                                                    <div class="tp-menu-banner">
                                                                                                                        <h5 class="tp-menu-banner-title tp-el-ser-title">
                                                                                                                            Services
                                                                                                                            Overview</h5>
                                                                                                                        <ul>

                                                                                                                            <li>
                                                                                                                                <a class="tp-el-rep-text"
                                                                                                                                   href="https://wp.themepure.net/seomy//">
                                                                                    <span class="tp-el-rep-icon">
                                <img src="https://wp.themepure.net/seomy/wp-content/uploads/2023/10/keyword.png" alt="">
                            </span>
                                                                                                                                    Keyword
                                                                                                                                    Research
                                                                                                                                </a>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <a class="tp-el-rep-text"
                                                                                                                                   href="https://wp.themepure.net/seomy/seo-audit/">
                                                                                    <span class="tp-el-rep-icon">
                                <img src="https://wp.themepure.net/seomy/wp-content/uploads/2023/10/audit.png" alt="">
                            </span>
                                                                                                                                    SEO
                                                                                                                                    Audit
                                                                                                                                    Services
                                                                                                                                </a>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <a class="tp-el-rep-text"
                                                                                                                                   href="https://wp.themepure.net/seomy/link-building-services/">
                                                                                    <span class="tp-el-rep-icon">
                                <img src="https://wp.themepure.net/seomy/wp-content/uploads/2023/10/building.png"
                                     alt="">
                            </span>
                                                                                                                                    Link
                                                                                                                                    Building
                                                                                                                                    Services
                                                                                                                                </a>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <a class="tp-el-rep-text"
                                                                                                                                   href="https://wp.themepure.net/seomy/social-media-marketing/">
                                                                                    <span class="tp-el-rep-icon">
                                <img src="https://wp.themepure.net/seomy/wp-content/uploads/2023/10/media.png" alt="">
                            </span>
                                                                                                                                    Social
                                                                                                                                    Media
                                                                                                                                    Marketing
                                                                                                                                </a>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <a class="tp-el-rep-text"
                                                                                                                                   href="https://wp.themepure.net/seomy/seo-analysis/">
                                                                                    <span class="tp-el-rep-icon">
                                <img src="https://wp.themepure.net/seomy/wp-content/uploads/2023/10/analysis.png"
                                     alt="">
                            </span>
                                                                                                                                    SEO
                                                                                                                                    analysis.
                                                                                                                                </a>
                                                                                                                            </li>

                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-xl-6">
                                                                                                                    <div class="tp-menu-banner-wrap tp-el-banner">
                                                                                                                        <div class="tp-menu-banner-content">
                                                                                                                            <span class="tp-el-sub-title">SEO AGENCY</span>
                                                                                                                            <h2 class="tp-menu-banner-title-2 tp-el-title">
                                                                                                                                The
                                                                                                                                #1
                                                                                                                                SEO
                                                                                                                                <br>
                                                                                                                                agency
                                                                                                                                for
                                                                                                                                fast
                                                                                                                                growing
                                                                                                                                <br>
                                                                                                                                companies.
                                                                                                                            </h2>
                                                                                                                            <div class="tp-menu-banner-btn">
                                                                                                                                <a target="_self"
                                                                                                                                   rel="nofollow"
                                                                                                                                   class="tp-el-btn">Learn
                                                                                                                                    more
                                                                                                                                    <span class="tp-arrow-link">
                                <svg width="9" height="10" viewbox="0 0 9 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L8 8.5" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M8 1.5V8.5H1" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span></a>
                                                                                                                            </div>

                                                                                                                        </div>
                                                                                                                        <div class="tp-menu-banner-thumb">
                                                                                                                            <img src="/wp-content/uploads/2023/10/header-banner-1.png"
                                                                                                                                 alt="">
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
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-47"
                                                                        class="has-megamenu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-47 menu-item-47 nav-item">
                                                                        <a title="Pages" href="#" class="nav-links">Pages</a>
                                                                        <ul class="tp-submenu submenu"
                                                                            aria-labelledby="4024" role="menu">
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-8298"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-8298 menu-item-8298 nav-item">
                                                                                <a title="About" href="/"
                                                                                   class="dropdown-items">About</a>
                                                                                <ul class="tp-submenu submenu"
                                                                                    aria-labelledby="4024" role="menu">
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-8299"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8299 menu-item-8299 nav-item">
                                                                                        <a title="Services"
                                                                                           href="/"
                                                                                           class="dropdown-items">Services</a>
                                                                                    </li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3140"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3140 menu-item-3140 nav-item">
                                                                                        <a title="Team Members"
                                                                                           href="/"
                                                                                           class="dropdown-items">Team
                                                                                            Members</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3181"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3181 menu-item-3181 nav-item">
                                                                                        <a title="Team Details"
                                                                                           href="/"
                                                                                           class="dropdown-items">Team
                                                                                            Details</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3211"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3211 menu-item-3211 nav-item">
                                                                                        <a title="FAQ" href="/"
                                                                                           class="dropdown-items">FAQ</a>
                                                                                    </li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3999"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3999 menu-item-3999 nav-item">
                                                                                        <a title="Contact"
                                                                                           href="/"
                                                                                           class="dropdown-items">Contact</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-43"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-43 menu-item-43 nav-item">
                                                                                <a title="Pricing" href="/"
                                                                                   class="dropdown-items">Pricing</a>
                                                                                <ul class="tp-submenu submenu"
                                                                                    aria-labelledby="4024" role="menu">
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3541"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3541 menu-item-3541 nav-item">
                                                                                        <a title="Case Studies 2 Columns"
                                                                                           href="/"
                                                                                           class="dropdown-items">Case
                                                                                            Studies 2 Columns</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3540"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3540 menu-item-3540 nav-item">
                                                                                        <a title="Case Studies 3 Columns"
                                                                                           href="/" class="dropdown-items">Case Studies 3 Columns</a>
                                                                                    </li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3658"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-tp-portfolios menu-item-3658 menu-item-3658 nav-item">
                                                                                        <a title="Case Studies Details"
                                                                                           href="/"
                                                                                           class="dropdown-items">Case
                                                                                            Studies Details</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3996"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3996 menu-item-3996 nav-item">
                                                                                        <a title="Blog Grid"
                                                                                           href="/"
                                                                                           class="dropdown-items">Blog
                                                                                            Grid</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3998"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-3998 menu-item-3998 nav-item">
                                                                                <a title="Blog List" href="/"
                                                                                   class="dropdown-items">Blog List</a>
                                                                                <ul class="tp-submenu submenu"
                                                                                    aria-labelledby="4024" role="menu">
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3997"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3997 menu-item-3997 nav-item">
                                                                                        <a title="Blog Masonry"
                                                                                           href="/"
                                                                                           class="dropdown-items">Blog
                                                                                            Masonry</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3971"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3971 menu-item-3971 nav-item">
                                                                                        <a title="Shop" href="/"
                                                                                           class="dropdown-items">Shop</a>
                                                                                    </li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3973"
                                                                                        class="menu-item menu-item-type-post_type menu-item-object-product menu-item-3973 menu-item-3973 nav-item">
                                                                                        <a title="Shop Details"
                                                                                           href="/"
                                                                                           class="dropdown-items">Shop
                                                                                            Details</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3993"
                                                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3993 menu-item-3993 nav-item">
                                                                                        <a title="Sign In"
                                                                                           href="/login"
                                                                                           class="dropdown-items">Sign
                                                                                            In</a></li>
                                                                                    <li itemscope="itemscope"
                                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                        id="menu-item-3994"
                                                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3994 menu-item-3994 nav-item">
                                                                                        <a title="Sign Up"
                                                                                           href="/join"
                                                                                           class="dropdown-items">Sign
                                                                                            Up</a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-36"
                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-36 menu-item-36 nav-item">
                                                                        <a title="Blog" href="/" class="nav-links">Blog</a>
                                                                        <ul class="tp-submenu submenu"
                                                                            aria-labelledby="4024" role="menu">
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3683"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3683 menu-item-3683 nav-item">
                                                                                <a title="Blog Sidebar" href="/"
                                                                                   class="dropdown-items">Blog
                                                                                    Sidebar</a></li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3682"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3682 menu-item-3682 nav-item">
                                                                                <a title="Blog Grid" href="/"
                                                                                   class="dropdown-items">Blog Grid</a>
                                                                            </li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3724"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3724 menu-item-3724 nav-item">
                                                                                <a title="Blog Masonry"
                                                                                   href="/"
                                                                                   class="dropdown-items">Blog
                                                                                    Masonry</a></li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3718"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3718 menu-item-3718 nav-item">
                                                                                <a title="Blog List" href="/"
                                                                                   class="dropdown-items">Blog List</a>
                                                                            </li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3798"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3798 menu-item-3798 nav-item">
                                                                                <a title="Blog Details"
                                                                                   href="/"
                                                                                   class="dropdown-items">Blog
                                                                                    Details</a></li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3802"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3802 menu-item-3802 nav-item">
                                                                                <a title="Blog Details 2"
                                                                                   href="/"
                                                                                   class="dropdown-items">Blog Details
                                                                                    2</a></li>
                                                                            <li itemscope="itemscope"
                                                                                itemtype="https://www.schema.org/SiteNavigationElement"
                                                                                id="menu-item-3801"
                                                                                class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3801 menu-item-3801 nav-item">
                                                                                <a title="Blog Details No Sidebar"
                                                                                   href="/"
                                                                                   class="dropdown-items">Blog Details
                                                                                    No Sidebar</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li itemscope="itemscope"
                                                                        itemtype="https://www.schema.org/SiteNavigationElement"
                                                                        id="menu-item-38"
                                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-38 menu-item-38 nav-item">
                                                                        <a title="Contact" href="/"
                                                                           class="nav-links">Contact</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-6 col-sm-7 col-6">
                                                        <div class="header-btn header-btn-4 text-end">

                                                            <a href="/" target="_self" rel="nofollow"
                                                               class="blue-btn d-none d-xl-block tp-el-btn1">Contact
                                                                Us</a>

                                                            <div class="offcanvas-btn d-xl-none ml-20">
                                                                <button class="offcanvas-open-btn"><i
                                                                        class="fa-solid fa-bars"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>


                            <div class="offcanvas__area">
                                <div class="offcanvas__wrapper">
                                    <div class="offcanvas__close">
                                        <button class="offcanvas__close-btn offcanvas-close-btn">
                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="offcanvas__content">
                                        <div class="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                                            <div class="offcanvas__logo logo">
                                                <a class="tp-el-off-logo" href="/">
                                                    <img src="/wp-content/uploads/2023/09/logo.png" alt="">
                                                </a>
                                            </div>
                                        </div>

                                        <div class="tp-main-menu-mobile mb-35"></div>

                                        <div class="offcanvas__btn">
                                            <a href="/" target="_self" rel="nofollow"
                                               class="tp-btn w-100 tp-el-off-btn">Getting Started</a>
                                        </div>
                                        <div class="offcanvas__contact mb-40">
                                            <p class="offcanvas__contact-call"><a class="tp-el-off-num"
                                                                                  href="tel:964 742 44 763">964 742 44
                                                763</a></p>
                                            <p class="offcanvas__contact-mail"><a class="tp-el-off-mail"
                                                                                  href="mailto:info.seomy@gmail.com">info.seomy@gmail.com</a>
                                            </p>
                                        </div>
                                        <div class="offcanvas__social">
                                            <a class="tp-el-off-social" href="#">
                                                <svg aria-hidden="true" class="e-font-icon-svg e-fab-facebook-f"
                                                     viewbox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                </svg>
                                            </a>
                                            <a class="tp-el-off-social" href="#">
                                                <svg aria-hidden="true" class="e-font-icon-svg e-fab-twitter"
                                                     viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                </svg>
                                            </a>
                                            <a class="tp-el-off-social" href="#">
                                                <svg aria-hidden="true" class="e-font-icon-svg e-fab-linkedin"
                                                     viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                                </svg>
                                            </a>
                                            <a class="tp-el-off-social" href="#">
                                                <svg aria-hidden="true" class="e-font-icon-svg e-fab-instagram"
                                                     viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="body-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- header end -->

<!-- wrapper-box start -->
<div data-elementor-type="wp-page" data-elementor-id="6904" class="elementor elementor-6904">
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-08763ca elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="08763ca" data-element_type="section">
        <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e67a29"
                 data-id="5e67a29" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-9e63039 elementor-widget elementor-widget-hero-banner"
                         data-id="9e63039" data-element_type="widget" data-widget_type="hero-banner.default">
                        <div class="elementor-widget-container">


                            <div class="banner-area banner-4-spaces pt-150 pb-195 ele-section">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-7 col-xl-10 col-lg-7">
                                            <div class="banner-4">
                                                <div class="banner-4-content">

                                                    <h1 class="banner-4-title cd-headline clip is-full-width tp-el-title">
                                                        SEO marketing <br><span class="cd-words-wrapper"><b
                                                            class="is-visible">agency</b><b class=""> analysis</b><b
                                                            class=""> value</b></span>in UK</h1>
                                                    <p class="tp-el-content">All in one SEO for your business to give
                                                        real impact<br> consultancy and analysis.! Get Started Now</p>

                                                    <div class="banner-4-btn mb-30">
                                                        <a href="/login" target="_self" rel="nofollow"
                                                           class="blue-btn tp-el-btn">Get Started Now</a>
                                                    </div>

                                                    <div class="contact-4 d-flex align-items-center">
                                                        <div class="contact-4-icon tp-el-rep-icon">
                                                            <i class="tp-el-rep-icon">
                                                                <svg width="26" height="26" viewbox="0 0 26 26"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24.964 20.596C24.964 21.028 24.868 21.472 24.664 21.904C24.46 22.336 24.196 22.744 23.848 23.128C23.26 23.776 22.612 24.244 21.88 24.544C21.16 24.844 20.38 25 19.54 25C18.316 25 17.008 24.712 15.628 24.124C14.248 23.536 12.868 22.744 11.5 21.748C10.12 20.74 8.812 19.624 7.564 18.388C6.328 17.14 5.212 15.832 4.216 14.464C3.232 13.096 2.44 11.728 1.864 10.372C1.288 9.004 1 7.696 1 6.448C1 5.632 1.144 4.852 1.432 4.132C1.72 3.4 2.176 2.728 2.812 2.128C3.58 1.372 4.42 1 5.308 1C5.644 1 5.98 1.072 6.28 1.216C6.592 1.36 6.868 1.576 7.084 1.888L9.868 5.812C10.084 6.112 10.24 6.388 10.348 6.652C10.456 6.904 10.516 7.156 10.516 7.384C10.516 7.672 10.432 7.96 10.264 8.236C10.108 8.512 9.88 8.8 9.592 9.088L8.68 10.036C8.548 10.168 8.488 10.324 8.488 10.516C8.488 10.612 8.5 10.696 8.524 10.792C8.56 10.888 8.596 10.96 8.62 11.032C8.836 11.428 9.208 11.944 9.736 12.568C10.276 13.192 10.852 13.828 11.476 14.464C12.124 15.1 12.748 15.688 13.384 16.228C14.008 16.756 14.524 17.116 14.932 17.332C14.992 17.356 15.064 17.392 15.148 17.428C15.244 17.464 15.34 17.476 15.448 17.476C15.652 17.476 15.808 17.404 15.94 17.272L16.852 16.372C17.152 16.072 17.44 15.844 17.716 15.7C17.992 15.532 18.268 15.448 18.568 15.448C18.796 15.448 19.036 15.496 19.3 15.604C19.564 15.712 19.84 15.868 20.14 16.072L24.112 18.892C24.424 19.108 24.64 19.36 24.772 19.66C24.892 19.96 24.964 20.26 24.964 20.596Z"
                                                                          stroke="#775AFC" stroke-width="1.5"
                                                                          stroke-miterlimit="10"></path>
                                                                    <path opacity="0.4"
                                                                          d="M20.7996 9.40038C20.7996 8.68038 20.2356 7.57638 19.3956 6.67638C18.6276 5.84838 17.6076 5.20038 16.5996 5.20038"
                                                                          stroke="#775AFC" stroke-width="1.5"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                    <path opacity="0.4"
                                                                          d="M24.9996 9.4C24.9996 4.756 21.2436 1 16.5996 1"
                                                                          stroke="#775AFC" stroke-width="1.5"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </div>

                                                        <div class="contact-4-text">

                                                            <span class="tp-el-rep-subtitle">Got Questions?</span>

                                                            <a class="tp-el-rep-title" href="tel:800%202563%20123">+800
                                                                2563 123</a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="banner-4-shape d-none d-lg-block">
                                        <div class="banner-4-shape-one">
                                            <img decoding="async" src="/wp-content/uploads/2023/09/hero-bg-4.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-two">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-4-shape-1.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-three">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-4-shape-2.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-six">
                                            <img decoding="async" src="/wp-content/uploads/2023/09/banner-shape-4-1.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-seven">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-shape-4-2.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-eight">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-shape-4-3.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-nine">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-shape-4-4.png"
                                                 alt="">
                                        </div>
                                        <div class="banner-4-shape-ten">
                                            <img decoding="async" src="/wp-content/uploads/2023/12/banner-shape-4-5.png"
                                                 alt="">
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
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-3fecc93 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="3fecc93" data-element_type="section">
        <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-49afd11"
                 data-id="49afd11" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                            class="elementor-section elementor-inner-section elementor-element elementor-element-2dbb3eb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="2dbb3eb" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-abdec81"
                                 data-id="abdec81" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-c57d6f8 elementor-widget elementor-widget-tp-heading"
                                         data-id="c57d6f8" data-element_type="widget"
                                         data-widget_type="tp-heading.default">
                                        <div class="elementor-widget-container">


                                            <div class="section-wrapper ele-content-align tp-el-section">
                                                <span class="tp-el-subtitle">Why services Us</span>
                                                <h2 class="section-title-4 section-title-4-2 tp-el-title">Our à
                                                    services</h2></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                            class="elementor-section elementor-inner-section elementor-element elementor-element-5688127 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="5688127" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9b37532"
                                 data-id="9b37532" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-361771a elementor-widget elementor-widget-tp-services-ex"
                                         data-id="361771a" data-element_type="widget"
                                         data-widget_type="tp-services-ex.default">
                                        <div class="elementor-widget-container">


                                            <div class="services-item-4 tp-align">
                                                <div class="services-icon-4 mb-30">
                                                    <img decoding="async"
                                                         src="/wp-content/uploads/2023/09/choose-4-shape-1.png" alt="">
                                                    <i>
                                                        <svg width="65" height="65" viewbox="0 0 65 65" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.3913 18.6022C27.0321 15.9133 35.5256 9.26806 38.3667 3.82084L38.3602 3.81737C38.7873 2.99837 39.7947 2.68738 40.6103 3.12271C40.992 3.32642 41.2641 3.65753 41.4018 4.03612L41.4024 4.03797L48.2132 22.7506L55.0248 41.465C55.3423 42.3375 54.8992 43.2999 54.0351 43.6144C53.5859 43.778 53.1113 43.7341 52.7145 43.5318C47.0056 41.2403 36.35 41.6053 31.8651 41.8837L23.3913 18.6022L23.3913 18.6022ZM30.0155 42.0171L22.2275 44.8517C19.2621 45.931 16.1218 45.688 13.4516 44.427C10.7813 43.166 8.57886 40.8861 7.48899 37.8918L7.28407 37.3287C6.19422 34.3344 6.4159 31.1722 7.65086 28.4898C8.88585 25.8074 11.1352 23.6027 14.1006 22.5234L21.8886 19.6888L30.0154 42.0171L30.0155 42.0171Z"
                                                                  fill="#775AFC"></path>
                                                            <path d="M52.2057 28.8515C53.0344 28.1427 53.6898 27.2648 54.1389 26.2894C54.9452 24.5384 55.0866 22.4731 54.3717 20.5091C53.6569 18.5451 52.2211 17.0539 50.4779 16.2308C49.5069 15.7723 48.4405 15.5211 47.3501 15.5107L52.2057 28.8514L52.2057 28.8515Z"
                                                                  fill="#775AFC"></path>
                                                            <path d="M19.4797 42.2723L25.489 40.0851C26.3531 39.7706 27.3111 40.223 27.6287 41.0956L33.2801 56.6226C33.5976 57.4951 33.1545 58.4575 32.2904 58.772L26.2812 60.9592C25.4171 61.2737 24.459 60.8213 24.1415 59.9487L18.4901 44.4217C18.1725 43.5492 18.6156 42.5868 19.4797 42.2723Z"
                                                                  fill="#775AFC"></path>
                                                        </svg>
                                                    </i>
                                                </div>
                                                <div class="services-content-4">
                                                    <h2 class="title mb-20">Digital Marketing</h2>
                                                    <p>We develop digital strategies, products and services appreciated
                                                        by clients.</p>
                                                    <div class="services-btn-4 p-relative">
                                                        <a href="/" target="_self"
                                                           rel="nofollow">
                                                            <span>Read More</span>
                                                            <i>
                                                                <svg width="18" height="14" viewbox="0 0 18 14"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.2871 1L17 6.71285L11.2871 12.4257"
                                                                          stroke="currentColor" stroke-width="1.5"
                                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                    <path d="M1 6.71313H16.8397" stroke="currentColor"
                                                                          stroke-width="1.5" stroke-miterlimit="10"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4cd1e38"
                                 data-id="4cd1e38" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-b51a579 elementor-widget elementor-widget-tp-services-ex"
                                         data-id="b51a579" data-element_type="widget"
                                         data-widget_type="tp-services-ex.default">
                                        <div class="elementor-widget-container">


                                            <div class="services-item-4 tp-align">
                                                <div class="services-icon-4 mb-30">
                                                    <img decoding="async"
                                                         src="/wp-content/uploads/2023/09/choose-4-shape-2.png" alt="">
                                                    <i>
                                                        <svg width="56" height="57" viewbox="0 0 56 57" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.928711 13.8593C2.72083 7.78287 7.78916 2.71454 13.8656 0.922424C18.4859 -0.421664 21.6781 -0.309656 23.8902 1.34245C26.5504 3.33058 26.8584 6.91481 26.8584 9.46298V16.4354C26.8584 23.3239 23.7222 26.8241 17.5618 26.8241H9.52527C7.00511 26.8241 3.39287 26.5161 1.40474 23.8559C-0.303368 21.6718 -0.443378 18.4796 0.928711 13.8593Z"
                                                                  fill="#FF8139"></path>
                                                            <path d="M8.65652 31.8085C9.38457 30.9685 10.4486 30.4924 11.5407 30.4924H21.5654C26.4937 30.4924 30.4979 26.4882 30.4979 21.5599V11.5352C30.4979 10.4431 30.974 9.37907 31.814 8.65102C32.6261 7.92297 33.7462 7.58695 34.8102 7.72696C41.3907 8.56701 47.4391 12.1792 51.3873 17.6116C55.3636 23.072 56.8197 29.7364 55.5596 36.4008C53.7395 46.0335 46.039 53.734 36.3783 55.5541C34.8382 55.8621 33.2981 56.0021 31.758 56.0021C26.6897 56.0021 21.7894 54.434 17.6171 51.3818C12.1848 47.4335 8.57252 41.3851 7.73246 34.8047C7.59246 33.7127 7.92848 32.6206 8.65652 31.8085Z"
                                                                  fill="#FF8139"></path>
                                                        </svg>
                                                    </i>
                                                </div>
                                                <div class="services-content-4">
                                                    <h2 class="title mb-20">SEO Analytics</h2>
                                                    <p>We develop digital strategies, products and services appreciated
                                                        by clients.</p>
                                                    <div class="services-btn-4 p-relative">
                                                        <a href="/" target="_self"
                                                           rel="nofollow">
                                                            <span>Read More</span>
                                                            <i>
                                                                <svg width="18" height="14" viewbox="0 0 18 14"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.2871 1L17 6.71285L11.2871 12.4257"
                                                                          stroke="currentColor" stroke-width="1.5"
                                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                    <path d="M1 6.71313H16.8397" stroke="currentColor"
                                                                          stroke-width="1.5" stroke-miterlimit="10"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f0a3c52"
                                 data-id="f0a3c52" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-ee9dfcf elementor-widget elementor-widget-tp-services-ex"
                                         data-id="ee9dfcf" data-element_type="widget"
                                         data-widget_type="tp-services-ex.default">
                                        <div class="elementor-widget-container">


                                            <div class="services-item-4 tp-align">
                                                <div class="services-icon-4 mb-30">
                                                    <img decoding="async"
                                                         src="/wp-content/uploads/2023/09/choose-4-shape-3.png" alt="">
                                                    <i>
                                                        <svg width="96" height="96" viewbox="0 0 96 96" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_1916_296)">
                                                                <path d="M66.6669 53.3331C64.0965 53.3331 61.7725 54.3719 60.0841 56.054L49.2446 49.628C49.9397 47.8878 50.3338 45.9915 50.3338 44C50.3338 42.0085 49.9397 40.1122 49.2425 38.372L60.0841 31.946C61.7725 33.6274 64.0965 34.6669 66.6669 34.6669C71.8231 34.6669 76 30.49 76 25.3331C76 20.179 71.8231 16 66.6669 16C61.5128 16 57.3331 20.179 57.3331 25.3331C57.3331 26.2333 57.5018 27.088 57.7391 27.9105L46.8702 34.3526C44.0898 30.9828 39.8793 28.8331 35.1669 28.8331C26.79 28.8331 20 35.6238 20 44C20 52.379 26.79 59.1669 35.1669 59.1669C39.8786 59.1669 44.0898 57.0179 46.8702 53.6474L57.7391 60.0895C57.5018 60.912 57.3331 61.7667 57.3331 62.6669C57.3331 67.8231 61.5128 72 66.6669 72C71.8231 72 76 67.8231 76 62.6669C76 57.5128 71.8231 53.3331 66.6669 53.3331Z"
                                                                      fill="#3CD0FF"></path>
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_d_1916_296" x="0" y="0" width="96"
                                                                        height="96" filterunits="userSpaceOnUse"
                                                                        color-interpolation-filters="sRGB">
                                                                    <feflood flood-opacity="0"
                                                                             result="BackgroundImageFix"></feflood>
                                                                    <fecolormatrix in="SourceAlpha" type="matrix"
                                                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                                   result="hardAlpha"></fecolormatrix>
                                                                    <feoffset dy="4"></feoffset>
                                                                    <fegaussianblur stddeviation="10"></fegaussianblur>
                                                                    <fecomposite in2="hardAlpha"
                                                                                 operator="out"></fecomposite>
                                                                    <fecolormatrix type="matrix"
                                                                                   values="0 0 0 0 0.231373 0 0 0 0 0.815686 0 0 0 0 1 0 0 0 0.4 0"></fecolormatrix>
                                                                    <feblend mode="normal" in2="BackgroundImageFix"
                                                                             result="effect1_dropShadow_1916_296"></feblend>
                                                                    <feblend mode="normal" in="SourceGraphic"
                                                                             in2="effect1_dropShadow_1916_296"
                                                                             result="shape"></feblend>
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </i>
                                                </div>
                                                <div class="services-content-4">
                                                    <h2 class="title mb-20">Social Marketing</h2>
                                                    <p>We develop digital strategies, products and services appreciated
                                                        by clients.</p>
                                                    <div class="services-btn-4 p-relative">
                                                        <a href="/" target="_self"
                                                           rel="nofollow">
                                                            <span>Read More</span>
                                                            <i>
                                                                <svg width="18" height="14" viewbox="0 0 18 14"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.2871 1L17 6.71285L11.2871 12.4257"
                                                                          stroke="currentColor" stroke-width="1.5"
                                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                    <path d="M1 6.71313H16.8397" stroke="currentColor"
                                                                          stroke-width="1.5" stroke-miterlimit="10"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                            class="elementor-section elementor-inner-section elementor-element elementor-element-719e5ed elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="719e5ed" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-354e2c6"
                                 data-id="354e2c6" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0ee5fd9"
                                 data-id="0ee5fd9" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-6905322 elementor-widget elementor-widget-tp-stylish-text-ex"
                                         data-id="6905322" data-element_type="widget"
                                         data-widget_type="tp-stylish-text-ex.default">
                                        <div class="elementor-widget-container">


                                            <div class="services-bottom text-center">
                                                <div class="servics-details-4 d-flex align-items-center justify-content-center">
                                                    <img decoding="async"
                                                         src="https://wp.themepure.net/seomy/wp-content/uploads/2024/03/header-rocket.png"
                                                         alt="">
                                                    <p>You can also find our
                                                        <a href="https://wp.themepure.net/seomy/services/">
                                                            Services
                                                            <i class="d-none d-md-block">
                                                                <svg width="60" height="7" viewbox="0 0 60 7"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.19582 4.26135C22.5561 -1.51199 38.7792 0.327797 59.246 6.22031"
                                                                          stroke="#775AFC"
                                                                          stroke-linecap="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        to contact for the consulting.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4728830"
                                 data-id="4728830" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-ceb9f15 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="ceb9f15" data-element_type="section">
        <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-66471de"
                 data-id="66471de" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-91d1927 elementor-widget elementor-widget-tp-brand"
                         data-id="91d1927" data-element_type="widget" data-widget_type="tp-brand.default">
                        <div class="elementor-widget-container">


                            <section class="brand-area brand-bg-3 mb-120 p-relative tp-el-section">
                                <div class="brand-bg-4">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="brand-wrapper text-center">
                                                    <h5 class="title tp-el-title">As Featured On:</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="tpbrand tpbrand-active-4 mb-170">

                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-1-1.png" alt="">
                                                    </div>
                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-2-1.png" alt="">
                                                    </div>
                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-3-1.png" alt="">
                                                    </div>
                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-4-1.png" alt="">
                                                    </div>
                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-5-1.png" alt="">
                                                    </div>
                                                    <div class="tpbrand-item-4 mb-35">
                                                        <img decoding="async"
                                                             src="/wp-content/uploads/2023/09/logo-3-6-1.png" alt="">
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- wave-animation -->
                                <div class="wave-bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                         class="wave wave-1">
                                        <title>Wave</title>
                                        <defs></defs>
                                        <path id="feel-the-wave" d="M1920.000,58.998 L1920.000,164.998 L0.000,164.998 L0.000,119.999
         C0.000,119.999 145.549,49.265 313.203,40.999 C525.449,30.533 672.724,94.775
         866.895,101.761 C907.604,103.225 957.454,99.228 1007.943,88.724 C1145.929,60.014
         1219.971,11.807 1403.910,2.999 C1450.093,0.787 1504.925,-13.381 1775.283,66.829
         C1844.663,87.411 1920.000,58.998 1920.000,58.998 Z"></path>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="wave">
                                        <title>Wave</title>
                                        <path id="wave-two" d="M1093.910,5.685 C1317.402,-23.097 1421.263,80.301 1608.427,83.440
         C1723.626,85.372 1799.711,52.828 1853.587,26.599 C1879.056,14.199
         1920.000,11.439 1920.000,11.439 L1920.000,190.998 L0.000,190.998 L0.000,53.998
         C0.000,53.998 27.746,55.576 50.698,61.929 C140.266,86.724 355.925,147.932
         523.203,133.999 C648.841,123.533 727.916,98.315 790.555,81.220 C937.278,41.176
         974.256,21.095 1093.910,5.685 Z"></path>
                                    </svg>
                                </div>
                                <!-- wave-animation-end -->
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-63009d4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="63009d4" data-element_type="section">
        <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6ada895"
                 data-id="6ada895" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-da9215d elementor-widget elementor-widget-tp-about-img-ex"
                         data-id="da9215d" data-element_type="widget" data-widget_type="tp-about-img-ex.default">
                        <div class="elementor-widget-container">


                            <div class="tpchoose-thumb tp-el-section">
                                <img decoding="async" class="tpchoose-border-anim"
                                     src="/wp-content/uploads/2023/09/choose-2.jpg" alt="">
                                <div class="tpchoose-shape">
                                    <div class="tpchoose-shape-one d-none d-md-block">
                                        <img decoding="async" src="/wp-content/uploads/2023/09/choose-shape-1.png"
                                             alt="">
                                    </div>
                                    <div class="tpchoose-shape-two">
                                        <img decoding="async" src="/wp-content/uploads/2023/09/choose-shape-2.png"
                                             alt="">
                                    </div>
                                    <div class="tpchoose-shape-three">
                                        <img decoding="async" src="/wp-content/uploads/2023/09/choose-shape-3.png"
                                             alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a00371e"
                 data-id="a00371e" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-1a86213 elementor-widget elementor-widget-tp-heading"
                         data-id="1a86213" data-element_type="widget" data-widget_type="tp-heading.default">
                        <div class="elementor-widget-container">


                            <div class="section-wrapper ele-content-align tp-el-section">
                                <span class="tp-el-subtitle">Let us do the work</span>
                                <h2 class="section-title-4 section-title-4-2 tp-el-title">How we do It</h2></div>

                        </div>
                    </div>
                    <div class="elementor-element elementor-element-9098955 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-tp-border-ani-line"
                         data-id="9098955" data-element_type="widget" data-settings="" style="position: absolute;" data-widget_type="tp-border-ani-line.default">
                    <div class="elementor-widget-container">


                        <div class="feature-4-shape-1 position-static">
                            <svg class="line-dash-path" width="38" height="122" viewbox="0 0 38 122" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.279297 1C41.9846 20.0005 55.1988 87.9525 2.74393 121.294" stroke="#A7ACB3"
                                      stroke-dasharray="4 4"></path>
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="elementor-element elementor-element-2684c0a elementor-widget elementor-widget-tp-feature-box-ex"
                     data-id="2684c0a" data-element_type="widget" data-widget_type="tp-feature-box-ex.default">
                    <div class="elementor-widget-container">


                        <div class="feature-list-4-item p-relative d-flex">
                            <div class="feature-list-4-icon ">
                                <div class="feature-list-bg p-relative">
                                    <i>
                                        <svg width="44" height="40" viewbox="0 0 44 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g style="mix-blend-mode:multiply">
                                                <path class="main-bg"
                                                      d="M4.66766 18.8519C-4.37425 32.8161 8.5593 40 19.4834 40C30.2244 40 42.3709 35.9136 42.3709 23.3559C42.3655 -8.96311 20.1854 -5.10428 4.66766 18.8519Z"
                                                      fill="currentColor"></path>
                                            </g>
                                            <path d="M0.886829 32.563C0.845942 32.563 0.805948 32.5509 0.771881 32.5281C0.737814 32.5053 0.711194 32.4729 0.695366 32.4349C0.679538 32.3968 0.675208 32.355 0.682925 32.3145C0.690641 32.274 0.710058 32.2367 0.738733 32.2073L8.96478 23.9395C9.00472 23.9178 9.05069 23.9101 9.09546 23.9176C9.14022 23.9251 9.18125 23.9474 9.21208 23.981C9.24291 24.0145 9.2618 24.0575 9.26578 24.1031C9.26975 24.1487 9.25859 24.1943 9.23404 24.2328L1.03493 32.5033C1.01546 32.5227 0.992326 32.538 0.966886 32.5483C0.941447 32.5585 0.914223 32.5635 0.886829 32.563V32.563Z"
                                                  fill="white"></path>
                                            <path d="M33.901 20.2052C33.8744 20.2053 33.8481 20.2001 33.8236 20.1899C33.7991 20.1796 33.7769 20.1645 33.7583 20.1455C33.7201 20.1064 33.6987 20.0537 33.6987 19.9989C33.6987 19.944 33.7201 19.8914 33.7583 19.8522C34.1056 19.4911 42.2751 11.0306 42.9887 10.55C43.0343 10.5237 43.0882 10.5159 43.1393 10.5281C43.1905 10.5403 43.2351 10.5717 43.2642 10.6159C43.2933 10.66 43.3047 10.7137 43.296 10.766C43.2873 10.8183 43.2593 10.8653 43.2175 10.8975C42.6548 11.2749 36.4132 17.6991 34.0625 20.1428C34.0415 20.1642 34.0163 20.1808 33.9884 20.1916C33.9606 20.2023 33.9308 20.207 33.901 20.2052V20.2052Z"
                                                  fill="white"></path>
                                        </svg>
                                    </i>
                                    <b>01</b>
                                    <span class="feature-bg-border-1"></span>
                                    <span class="feature-bg-border-2"></span>
                                    <span class="feature-bg-border-3"></span>
                                    <span class="feature-bg-border-4"></span>
                                </div>
                            </div>
                            <div class="feature-list-4-content">
                                <h2 class="title">Creative Ideas</h2>
                                <p>Keyword research and other market <br> research under the SEO analytics <br>
                                    umbrella.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="elementor-element elementor-element-69b3afa elementor-widget elementor-widget-tp-feature-box-ex"
                     data-id="69b3afa" data-element_type="widget" data-widget_type="tp-feature-box-ex.default">
                    <div class="elementor-widget-container">


                        <div class="feature-list-4-item p-relative d-flex">
                            <div class="feature-list-4-icon ">
                                <div class="feature-list-bg p-relative">
                                    <i>
                                        <svg width="44" height="40" viewbox="0 0 44 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g style="mix-blend-mode:multiply">
                                                <path class="main-bg main-bg-2"
                                                      d="M4.66766 18.8519C-4.37425 32.8161 8.5593 40 19.4834 40C30.2244 40 42.3709 35.9136 42.3709 23.3559C42.3655 -8.96311 20.1854 -5.10428 4.66766 18.8519Z"
                                                      fill="currentColor"></path>
                                            </g>
                                            <path d="M0.886829 32.563C0.845942 32.563 0.805948 32.5509 0.771881 32.5281C0.737814 32.5053 0.711194 32.4729 0.695366 32.4349C0.679538 32.3968 0.675208 32.355 0.682925 32.3145C0.690641 32.274 0.710058 32.2367 0.738733 32.2073L8.96478 23.9395C9.00472 23.9178 9.05069 23.9101 9.09546 23.9176C9.14022 23.9251 9.18125 23.9474 9.21208 23.981C9.24291 24.0145 9.2618 24.0575 9.26578 24.1031C9.26975 24.1487 9.25859 24.1943 9.23404 24.2328L1.03493 32.5033C1.01546 32.5227 0.992326 32.538 0.966886 32.5483C0.941447 32.5585 0.914223 32.5635 0.886829 32.563V32.563Z"
                                                  fill="white"></path>
                                            <path d="M33.901 20.2052C33.8744 20.2053 33.8481 20.2001 33.8236 20.1899C33.7991 20.1796 33.7769 20.1645 33.7583 20.1455C33.7201 20.1064 33.6987 20.0537 33.6987 19.9989C33.6987 19.944 33.7201 19.8914 33.7583 19.8522C34.1056 19.4911 42.2751 11.0306 42.9887 10.55C43.0343 10.5237 43.0882 10.5159 43.1393 10.5281C43.1905 10.5403 43.2351 10.5717 43.2642 10.6159C43.2933 10.66 43.3047 10.7137 43.296 10.766C43.2873 10.8183 43.2593 10.8653 43.2175 10.8975C42.6548 11.2749 36.4132 17.6991 34.0625 20.1428C34.0415 20.1642 34.0163 20.1808 33.9884 20.1916C33.9606 20.2023 33.9308 20.207 33.901 20.2052V20.2052Z"
                                                  fill="white"></path>
                                        </svg>
                                    </i>
                                    <b>02</b>
                                    <span class="feature-bg-border-1"></span>
                                    <span class="feature-bg-border-2"></span>
                                    <span class="feature-bg-border-3"></span>
                                    <span class="feature-bg-border-4"></span>
                                </div>
                            </div>
                            <div class="feature-list-4-content">
                                <h2 class="title">Data Collection</h2>
                                <p>Keyword research and other market <br> research under the SEO analytics <br>
                                    umbrella.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="elementor-element elementor-element-59f93db elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-tp-border-ani-line"
                     data-id="59f93db" data-element_type="widget" data-settings="" style="position: absolute" data-widget_type="tp-border-ani-line.default">
                <div class="elementor-widget-container">


                    <div class="feature-4-shape-2 position-static">
                        <svg class="line-dash-path" width="42" height="122" viewbox="0 0 42 122" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.3076 1.22192C-1.33493 18.0137 -18.0874 85.181 32.5507 121.222" stroke="#A7ACB3"
                                  stroke-dasharray="4 4"></path>
                        </svg>
                    </div>

                </div>
            </div>
            <div class="elementor-element elementor-element-e33b8be elementor-widget elementor-widget-tp-feature-box-ex"
                 data-id="e33b8be" data-element_type="widget" data-widget_type="tp-feature-box-ex.default">
                <div class="elementor-widget-container">


                    <div class="feature-list-4-item p-relative d-flex">
                        <div class="feature-list-4-icon ">
                            <div class="feature-list-bg p-relative">
                                <i>
                                    <svg width="44" height="40" viewbox="0 0 44 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g style="mix-blend-mode:multiply">
                                            <path class="main-bg main-bg-3"
                                                  d="M4.66766 18.8519C-4.37425 32.8161 8.5593 40 19.4834 40C30.2244 40 42.3709 35.9136 42.3709 23.3559C42.3655 -8.96311 20.1854 -5.10428 4.66766 18.8519Z"
                                                  fill="currentColor"></path>
                                        </g>
                                        <path d="M0.886829 32.563C0.845942 32.563 0.805948 32.5509 0.771881 32.5281C0.737814 32.5053 0.711194 32.4729 0.695366 32.4349C0.679538 32.3968 0.675208 32.355 0.682925 32.3145C0.690641 32.274 0.710058 32.2367 0.738733 32.2073L8.96478 23.9395C9.00472 23.9178 9.05069 23.9101 9.09546 23.9176C9.14022 23.9251 9.18125 23.9474 9.21208 23.981C9.24291 24.0145 9.2618 24.0575 9.26578 24.1031C9.26975 24.1487 9.25859 24.1943 9.23404 24.2328L1.03493 32.5033C1.01546 32.5227 0.992326 32.538 0.966886 32.5483C0.941447 32.5585 0.914223 32.5635 0.886829 32.563V32.563Z"
                                              fill="white"></path>
                                        <path d="M33.901 20.2052C33.8744 20.2053 33.8481 20.2001 33.8236 20.1899C33.7991 20.1796 33.7769 20.1645 33.7583 20.1455C33.7201 20.1064 33.6987 20.0537 33.6987 19.9989C33.6987 19.944 33.7201 19.8914 33.7583 19.8522C34.1056 19.4911 42.2751 11.0306 42.9887 10.55C43.0343 10.5237 43.0882 10.5159 43.1393 10.5281C43.1905 10.5403 43.2351 10.5717 43.2642 10.6159C43.2933 10.66 43.3047 10.7137 43.296 10.766C43.2873 10.8183 43.2593 10.8653 43.2175 10.8975C42.6548 11.2749 36.4132 17.6991 34.0625 20.1428C34.0415 20.1642 34.0163 20.1808 33.9884 20.1916C33.9606 20.2023 33.9308 20.207 33.901 20.2052V20.2052Z"
                                              fill="white"></path>
                                    </svg>
                                </i>
                                <b>03</b>
                                <span class="feature-bg-border-1"></span>
                                <span class="feature-bg-border-2"></span>
                                <span class="feature-bg-border-3"></span>
                                <span class="feature-bg-border-4"></span>
                            </div>
                        </div>
                        <div class="feature-list-4-content">
                            <h2 class="title">Targeting</h2>
                            <p>Keyword research and other market <br> research under the SEO analytics <br> umbrella.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</div>
</div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-fd2608b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="fd2608b" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-80fc038"
             data-id="80fc038" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-668a241 elementor-widget elementor-widget-tp-heading"
                     data-id="668a241" data-element_type="widget" data-widget_type="tp-heading.default">
                    <div class="elementor-widget-container">


                        <div class="section-wrapper ele-content-align tp-el-section">
                            <span class="tp-el-subtitle">Looking for best SEO results?</span>
                            <h2 class="section-title-4 section-title-4-2 tp-el-title">Organic Search <br>
                                Engine Optimisation</h2>
                            <p class="tp-el-content">So I said down the you owt to do with me absolutely bladdered, <br>
                                amongst what a plonker brolly baking.</p>
                        </div>

                    </div>
                </div>
                <section
                        class="elementor-section elementor-inner-section elementor-element elementor-element-edba0b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="edba0b8" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0c1efbb"
                             data-id="0c1efbb" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-706c9df elementor-widget elementor-widget-tp-progressbar-ex"
                                     data-id="706c9df" data-element_type="widget"
                                     data-widget_type="tp-progressbar-ex.default">
                                    <div class="elementor-widget-container">


                                        <div class="tpdrive-progress tp-el-section">
                                            <div class="tpdrive-bar-item mb-20">
                                                <h4 class="tpdrive-bar-title mb-15">
                                                    Desktop Score </h4>
                                                <div class="tpdrive-bar-progress">
                                                    <div class="progress">
                                                        <div class="progress-bar tpSecBar wow slideInLeft"
                                                             data-wow-delay=".1s" data-wow-duration="1.3s"
                                                             role="progressbar" data-width="98%" aria-valuenow="65"
                                                             aria-valuemin="0" aria-valuemax="100" style="width: 98%;">
                                                            <span class="tpSecBor">98</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-95db69f elementor-widget elementor-widget-tp-progressbar-ex"
                                     data-id="95db69f" data-element_type="widget"
                                     data-widget_type="tp-progressbar-ex.default">
                                    <div class="elementor-widget-container">


                                        <div class="tpdrive-progress tp-el-section">
                                            <div class="tpdrive-bar-item mb-20">
                                                <h4 class="tpdrive-bar-title mb-15">
                                                    Development Skill </h4>
                                                <div class="tpdrive-bar-progress">
                                                    <div class="progress">
                                                        <div class="progress-bar tpSecBar wow slideInLeft"
                                                             data-wow-delay=".1s" data-wow-duration="1.3s"
                                                             role="progressbar" data-width="84%" aria-valuenow="65"
                                                             aria-valuemin="0" aria-valuemax="100" style="width: 84%;">
                                                            <span class="tpSecBor">84</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-685f748"
                             data-id="685f748" data-element_type="column">
                            <div class="elementor-widget-wrap">
                            </div>
                        </div>
                    </div>
                </section>
                <div class="elementor-element elementor-element-5d87b43 elementor-widget elementor-widget-tp-button"
                     data-id="5d87b43" data-element_type="widget" data-widget_type="tp-button.default">
                    <div class="elementor-widget-container">


                        <div class="tp-el-btn-area">
                            <a href="/" target="_self" rel="nofollow" class="blue-btn tp-el-btn">Discover
                                More</a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c441a8d"
             data-id="c441a8d" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-bd36542 elementor-widget elementor-widget-tp-about-img-ex"
                     data-id="bd36542" data-element_type="widget" data-widget_type="tp-about-img-ex.default">
                    <div class="elementor-widget-container">


                        <div class=" optimize-wrapper optimize-area ">
                            <div class="optimize-thumb text-end p-relative pt-35">
                                <div class="optimize-thumb-img">
                                    <img decoding="async" src="/wp-content/uploads/2023/09/optimize-bg.png" alt="">
                                </div>
                                <div class="optimize-shape">
                                    <img decoding="async" src="/wp-content/uploads/2023/09/optimize-bg-2.png" alt=""
                                         class="optimize-shape-1">
                                    <img decoding="async" src="/wp-content/uploads/2023/09/optimize-shape-2.png" alt=""
                                         class="optimize-shape-2 d-none d-md-block"
                                         data-parallax='{`{"y": 50, "smoothness": 20}`}'>
                                    <img decoding="async" src="/wp-content/uploads/2023/09/optimize-shape-1.png" alt=""
                                         class="optimize-shape-3 d-none d-md-block"
                                         data-parallax='{`{"y": 50, "smoothness": 20}`}'>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-d8faa1f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="d8faa1f" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-adf0070"
             data-id="adf0070" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-5f8e7e5 elementor-widget elementor-widget-tp-fact"
                     data-id="5f8e7e5" data-element_type="widget" data-widget_type="tp-fact.default">
                    <div class="elementor-widget-container">


                        <section class="counter-area pb-140 tp-el-section">
                            <div class="container">
                                <div class="counter-bg-4 p-relative fix ">
                                    <div class="counter-shape-4  d-none d-md-block">
                                        <img decoding="async"
                                             src="/wp-content/themes/seomy/assets/img/shape/counter-shape-4-1.png"
                                             alt="" class="counter-shape-4-1">
                                        <img decoding="async"
                                             src="/wp-content/themes/seomy/assets/img/shape/counter-shape-4-2.png"
                                             alt="" class="counter-shape-4-2">
                                        <img decoding="async"
                                             src="/wp-content/themes/seomy/assets/img/shape/counter-shape-4-3.png"
                                             alt="" class="counter-shape-4-3">
                                        <img decoding="async"
                                             src="/wp-content/themes/seomy/assets/img/shape/counter-shape-4-4.png"
                                             alt="" class="counter-shape-4-4">
                                        <img decoding="async"
                                             src="/wp-content/themes/seomy/assets/img/shape/counter-shape-4-5.png"
                                             alt="" class="counter-shape-4-5">
                                    </div>
                                    <div class="counter-wrapper d-flex align-items-center justify-content-between">

                                        <div class="counter-item-4 d-flex">
                                            <div class="counter-item-4-icon">
                                                <i class="tp-el-rep-icon">
                                                    <svg width="18" height="28" viewbox="0 0 18 28" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.1967 8.97496L11.1834 8.82992V3.78816H12.2602V7.60474L15.4619 4.19164V0.614587H2.53824V4.19164L5.73933 7.60474V3.78816H6.81615V8.82992L5.80313 8.97496L1.46143 4.34574V0H16.5387V4.34574L12.1967 8.97496Z"
                                                              fill="white"></path>
                                                        <path d="M9 27.708C4.03724 27.708 0 23.7472 0 18.8786C0 14.0101 4.03724 10.0493 9 10.0493C13.9628 10.0493 18 14.0101 18 18.8786C18 23.7472 13.9628 27.708 9 27.708ZM9 11.1259C4.6311 11.1259 1.07681 14.6037 1.07681 18.8786C1.07681 23.1533 4.6311 26.6312 9 26.6312C13.3689 26.6312 16.9232 23.1533 16.9232 18.8786C16.9232 14.6037 13.3689 11.1259 9 11.1259Z"
                                                              fill="white"></path>
                                                        <path d="M5.27975 24.3296L6.70115 20.0441L2.96191 17.3825H7.58359L9.00014 13.1113L10.4164 17.3825H15.0384L11.2991 20.0441L12.7195 24.3296L9.00014 21.6803L5.27975 24.3296ZM9.00014 20.3585L10.6609 21.5414L10.0269 19.6285L11.6688 18.4596H9.63896L9.00014 16.5329L8.36132 18.4596H6.3318L7.97394 19.6285L7.33943 21.5414L9.00014 20.3585Z"
                                                              fill="white"></path>
                                                        <path d="M9.65103 4.31689H8.57422V8.78997H9.65103V4.31689Z"
                                                              fill="white"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div class="counter-item-4-content">
                                                <h3 class="counter-item-4-count tp-el-rep-num">
                                                    <span data-purecounter-duration="1" data-purecounter-end="120"
                                                          class="purecounter"></span>+ </h3>

                                                <p class="tp-el-rep-title">Successful Projects</p>
                                            </div>
                                        </div>
                                        <div class="counter-item-4 d-flex">
                                            <div class="counter-item-4-icon">
                                                <i class="tp-el-rep-icon">
                                                    <svg width="24" height="23" viewbox="0 0 24 23" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.0345 22.8965C9.52644 22.8965 8.10115 22.6069 6.75862 22.0276C5.41609 21.4483 4.24368 20.6575 3.24138 19.6552C2.23908 18.6529 1.44828 17.4805 0.868965 16.1379C0.289655 14.7954 0 13.3701 0 11.8621C0 10.3356 0.289655 8.90115 0.868965 7.55862C1.44828 6.21609 2.23908 5.04827 3.24138 4.05517C4.24368 3.06207 5.41609 2.27586 6.75862 1.69655C8.10115 1.11724 9.52644 0.827586 11.0345 0.827586C11.9172 0.827586 12.7678 0.924138 13.5862 1.11724C14.4046 1.31034 15.1816 1.5908 15.9172 1.95862C15.8437 2.12414 15.7931 2.29425 15.7655 2.46896C15.7379 2.64368 15.7241 2.83218 15.7241 3.03448C15.7241 3.16322 15.7287 3.28736 15.7379 3.4069C15.7471 3.52644 15.7701 3.65057 15.8069 3.77931C15.108 3.35632 14.3586 3.03448 13.5586 2.81379C12.7586 2.5931 11.9172 2.48276 11.0345 2.48276C8.44138 2.48276 6.22989 3.3931 4.4 5.21379C2.57012 7.03448 1.65517 9.25057 1.65517 11.8621C1.65517 14.4552 2.57012 16.6667 4.4 18.4965C6.22989 20.3264 8.44138 21.2414 11.0345 21.2414C13.646 21.2414 15.8621 20.3264 17.6828 18.4965C19.5034 16.6667 20.4138 14.4552 20.4138 11.8621C20.4138 11.1632 20.3402 10.4782 20.1931 9.80689C20.046 9.13563 19.8345 8.50575 19.5586 7.91724C19.7609 8.02759 19.9816 8.11494 20.2207 8.17931C20.4598 8.24368 20.708 8.27586 20.9655 8.27586H21.2138C21.2874 8.27586 21.3701 8.26667 21.4621 8.24827C21.6644 8.81839 21.8161 9.4023 21.9172 10C22.0184 10.5977 22.069 11.2184 22.069 11.8621C22.069 13.3701 21.7793 14.7954 21.2 16.1379C20.6207 17.4805 19.8345 18.6529 18.8414 19.6552C17.8483 20.6575 16.6805 21.4483 15.3379 22.0276C13.9954 22.6069 12.5609 22.8965 11.0345 22.8965ZM15.0621 10.4C15.4851 10.4 15.8391 10.2575 16.1241 9.97241C16.4092 9.68736 16.5517 9.33333 16.5517 8.91034C16.5517 8.48735 16.4092 8.13333 16.1241 7.84827C15.8391 7.56322 15.4851 7.42069 15.0621 7.42069C14.6391 7.42069 14.2851 7.56322 14 7.84827C13.7149 8.13333 13.5724 8.48735 13.5724 8.91034C13.5724 9.33333 13.7149 9.68736 14 9.97241C14.2851 10.2575 14.6391 10.4 15.0621 10.4ZM7.0069 10.4C7.42989 10.4 7.78391 10.2575 8.06897 9.97241C8.35402 9.68736 8.49655 9.33333 8.49655 8.91034C8.49655 8.48735 8.35402 8.13333 8.06897 7.84827C7.78391 7.56322 7.42989 7.42069 7.0069 7.42069C6.58391 7.42069 6.22988 7.56322 5.94483 7.84827C5.65977 8.13333 5.51724 8.48735 5.51724 8.91034C5.51724 9.33333 5.65977 9.68736 5.94483 9.97241C6.22988 10.2575 6.58391 10.4 7.0069 10.4ZM11.0345 17.9034C12.2483 17.9034 13.3655 17.577 14.3862 16.9241C15.4069 16.2713 16.1471 15.3839 16.6069 14.2621H5.46207C5.94023 15.3839 6.68506 16.2713 7.69655 16.9241C8.70805 17.577 9.82069 17.9034 11.0345 17.9034ZM20.1379 3.86207H18.7586C18.5195 3.86207 18.3218 3.78391 18.1655 3.62759C18.0092 3.47126 17.931 3.27356 17.931 3.03448C17.931 2.7954 18.0092 2.5977 18.1655 2.44138C18.3218 2.28506 18.5195 2.2069 18.7586 2.2069H20.1379V0.827586C20.1379 0.588506 20.2161 0.390804 20.3724 0.234483C20.5287 0.0781609 20.7264 0 20.9655 0C21.2046 0 21.4023 0.0781609 21.5586 0.234483C21.7149 0.390804 21.7931 0.588506 21.7931 0.827586V2.2069H23.1724C23.4115 2.2069 23.6092 2.28506 23.7655 2.44138C23.9218 2.5977 24 2.7954 24 3.03448C24 3.27356 23.9218 3.47126 23.7655 3.62759C23.6092 3.78391 23.4115 3.86207 23.1724 3.86207H21.7931V5.24138C21.7931 5.48046 21.7149 5.67816 21.5586 5.83448C21.4023 5.9908 21.2046 6.06896 20.9655 6.06896C20.7264 6.06896 20.5287 5.9908 20.3724 5.83448C20.2161 5.67816 20.1379 5.48046 20.1379 5.24138V3.86207Z"
                                                              fill="white"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div class="counter-item-4-content">
                                                <h3 class="counter-item-4-count tp-el-rep-num">
                                                    <span data-purecounter-duration="1" data-purecounter-end="180"
                                                          class="purecounter"></span>+ </h3>

                                                <p class="tp-el-rep-title">Happy Customers</p>
                                            </div>
                                        </div>
                                        <div class="counter-item-4 d-flex">
                                            <div class="counter-item-4-icon">
                                                <i class="tp-el-rep-icon">
                                                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.6282 6.6753C18.5621 6.6643 18.4849 6.6643 18.4188 6.6753C16.8982 6.6203 15.686 5.37746 15.686 3.83765C15.686 2.26484 16.9533 1 18.529 1C20.1048 1 21.372 2.27584 21.372 3.83765C21.361 5.37746 20.1488 6.6203 18.6282 6.6753Z"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                        <path d="M17.493 14.6823C19.0027 14.9352 20.6666 14.6713 21.8346 13.8904C23.3883 12.8565 23.3883 11.1627 21.8346 10.1288C20.6556 9.34795 18.9696 9.08397 17.46 9.34794"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                        <path d="M5.37173 6.6753C5.43785 6.6643 5.51498 6.6643 5.5811 6.6753C7.10176 6.6203 8.31388 5.37746 8.31388 3.83765C8.31388 2.26484 7.04666 1 5.47091 1C3.89515 1 2.62793 2.27584 2.62793 3.83765C2.63895 5.37746 3.85107 6.6203 5.37173 6.6753Z"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                        <path d="M6.50688 14.6823C4.99724 14.9352 3.33333 14.6713 2.16529 13.8904C0.61157 12.8565 0.61157 11.1627 2.16529 10.1288C3.34435 9.34795 5.0303 9.08397 6.53994 9.34794"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                        <path d="M12.0193 14.8911C11.9532 14.8801 11.876 14.8801 11.8099 14.8911C10.2893 14.8361 9.07715 13.5933 9.07715 12.0535C9.07715 10.4807 10.3444 9.21582 11.9201 9.21582C13.4959 9.21582 14.7631 10.4917 14.7631 12.0535C14.7521 13.5933 13.54 14.8471 12.0193 14.8911Z"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                        <path d="M8.81226 18.3558C7.25854 19.3897 7.25854 21.0835 8.81226 22.1174C10.5753 23.2942 13.4624 23.2942 15.2255 22.1174C16.7792 21.0835 16.7792 19.3897 15.2255 18.3558C13.4734 17.19 10.5753 17.19 8.81226 18.3558Z"
                                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div class="counter-item-4-content">
                                                <h3 class="counter-item-4-count tp-el-rep-num">
                                                    <span data-purecounter-duration="1" data-purecounter-end="64"
                                                          class="purecounter"></span>+ </h3>

                                                <p class="tp-el-rep-title">Team Members</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-449a8f0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="449a8f0" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cdc2f0e"
             data-id="cdc2f0e" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-6cd1efc elementor-widget elementor-widget-advanced-tab"
                     data-id="6cd1efc" data-element_type="widget" data-widget_type="advanced-tab.default">
                    <div class="elementor-widget-container">


                        <section class="portfolio-area portfolio-4-bg pb-140 mb-115 fix p-relative ele-section">
                            <div class="portfolio-4-main-bg-shape">
                                <img decoding="async" src="/wp-content/uploads/2023/09/portfolio-shape-bg-4.png" alt="">
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="portfolio-4-wrapper">
                                            <div class="portfolio-4 mt-20">
                                                <div class="section-wrapper mb-20">
                                                    <span class="tp-el-subtitle">Our Case Studies</span>
                                                    <h2 class="section-title-4 section-title-4-2 tp-el-title">Creative
                                                        <br> Works we done</h2></div>
                                            </div>
                                            <div class="portfolio-tab-4 mb-35">
                                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab"
                                                     role="tablist" aria-orientation="vertical">
                                                    <button class="nav-link tp-el-tab-title " id="v-pills-1-tab"
                                                            data-bs-toggle="pill" data-bs-target="#v-pills-1"
                                                            type="button" role="tab" aria-controls="v-pills-1"
                                                            aria-selected="false">All Work
                                                    </button>
                                                    <button class="nav-link tp-el-tab-title active" id="v-pills-2-tab"
                                                            data-bs-toggle="pill" data-bs-target="#v-pills-2"
                                                            type="button" role="tab" aria-controls="v-pills-2"
                                                            aria-selected="true">Marketing
                                                    </button>
                                                    <button class="nav-link tp-el-tab-title " id="v-pills-3-tab"
                                                            data-bs-toggle="pill" data-bs-target="#v-pills-3"
                                                            type="button" role="tab" aria-controls="v-pills-3"
                                                            aria-selected="false">Web Design
                                                    </button>
                                                    <button class="nav-link tp-el-tab-title " id="v-pills-4-tab"
                                                            data-bs-toggle="pill" data-bs-target="#v-pills-4"
                                                            type="button" role="tab" aria-controls="v-pills-4"
                                                            aria-selected="false">Branding
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="nav-tab-slider-4">
                                                <div class="tpnav-tab-4 p-relative d-none">
                                                    <button class="prv-nav-tab">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"
                                         viewbox="0 0 8 14">
                                        <path fill-rule="evenodd"
                                              d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                                              fill="currentColor"></path>
                                    </svg>
                                </span>
                                                    </button>
                                                    <button class="next-nav-tab">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"
                                         viewbox="0 0 8 14">
                                        <path fill-rule="evenodd"
                                              d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                              fill="currentColor"></path>
                                    </svg>
                                </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="tab-content-4">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade " id="v-pills-1" role="tabpanel"
                                                     aria-labelledby="v-pills-1-tab">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1712"
                                                         class="elementor elementor-1712">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-06365d7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="06365d7" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f5bda38"
                                                                     data-id="f5bda38" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-f561f62 elementor-widget elementor-widget-services"
                                                                             data-id="f561f62"
                                                                             data-element_type="widget"
                                                                             data-widget_type="services.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="protfolio-wrapper-4 portfolio-4-active tp-el-section">

                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-3.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        good UI
                                                                                                        design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-4.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DEVElOPMENT</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Online Media
                                                                                                        Management</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-8.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">GRAPHIC DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        Graphic
                                                                                                        Design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
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
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade show active" id="v-pills-2" role="tabpanel"
                                                     aria-labelledby="v-pills-2-tab">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1724"
                                                         class="elementor elementor-1724">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-94105f2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="94105f2" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e6177e1"
                                                                     data-id="e6177e1" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-c8d1ad7 elementor-widget elementor-widget-services"
                                                                             data-id="c8d1ad7"
                                                                             data-element_type="widget"
                                                                             data-widget_type="services.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="protfolio-wrapper-4 portfolio-4-active tp-el-section">

                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-2.png"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        good UI
                                                                                                        design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-1.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DEVElOPMENT</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Online Media
                                                                                                        Management</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-3-1.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">GRAPHIC DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        Graphic
                                                                                                        Design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
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
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade " id="v-pills-3" role="tabpanel"
                                                     aria-labelledby="v-pills-3-tab">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1733"
                                                         class="elementor elementor-1733">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-b11bb4c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="b11bb4c" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7aaf02c"
                                                                     data-id="7aaf02c" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-83fbe09 elementor-widget elementor-widget-services"
                                                                             data-id="83fbe09"
                                                                             data-element_type="widget"
                                                                             data-widget_type="services.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="protfolio-wrapper-4 portfolio-4-active tp-el-section">

                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-5.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        good UI
                                                                                                        design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-6.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DEVElOPMENT</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Online Media
                                                                                                        Management</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-2-1.png"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">GRAPHIC DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        Graphic
                                                                                                        Design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
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
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade " id="v-pills-4" role="tabpanel"
                                                     aria-labelledby="v-pills-4-tab">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1745"
                                                         class="elementor elementor-1745">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-e52008b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="e52008b" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-929e8a3"
                                                                     data-id="929e8a3" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-308be48 elementor-widget elementor-widget-services"
                                                                             data-id="308be48"
                                                                             data-element_type="widget"
                                                                             data-widget_type="services.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="protfolio-wrapper-4 portfolio-4-active tp-el-section">

                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-7.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        good UI
                                                                                                        design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-2-1.png"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">WEB DEVElOPMENT</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Online Media
                                                                                                        Management</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="portfolio-4-item-single">
                                                                                        <div class="portfolio-4-item p-relative">
                                                                                            <div class="portfolio-4-thumb">
                                                                                                <img decoding="async"
                                                                                                     src="/wp-content/uploads/2023/09/portfolio-bg-1.jpg"
                                                                                                     alt="">
                                                                                            </div>
                                                                                            <div class="portfolio-4-content">
                                                                                                <div class="portfolio-4-content-top">
                                                                                                    <span class="tp-el-rep-subtitle">GRAPHIC DESIGN</span>
                                                                                                    <h4 class="title tp-el-rep-title">
                                                                                                        Tips for the
                                                                                                        Graphic
                                                                                                        Design</h4>
                                                                                                </div>
                                                                                                <div class="portfolio-4-content-bottom">
                                                                                                    <a class="tp-el-rep-btn"
                                                                                                       target="_self"
                                                                                                       rel="nofollow">View
                                                                                                        Case Study <i
                                                                                                                class="fa-light fa-plus"></i></a>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-2b92e67 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="2b92e67" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-da26c6f"
             data-id="da26c6f" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-f740840 elementor-widget elementor-widget-tp-heading"
                     data-id="f740840" data-element_type="widget" data-widget_type="tp-heading.default">
                    <div class="elementor-widget-container">


                        <div class="section-wrapper ele-content-align tp-el-section">
                            <span class="tp-el-subtitle">Pricing Plans</span>
                            <h2 class="section-title-4 section-title-4-2 tp-el-title">Packages for everyone</h2></div>

                    </div>
                </div>
                <div class="elementor-element elementor-element-22abc81 elementor-widget elementor-widget-tp-pricing-tab"
                     data-id="22abc81" data-element_type="widget" data-widget_type="tp-pricing-tab.default">
                    <div class="elementor-widget-container">


                        <section class="pricing-area tp-price-parent tppricing-box-active pb-170 fix ele-section">
                            <div class="container">
                                <div class="tpprice-4-switch-box  p-relative z-index-1">
                                    <div class="tpprice-4-switch p-relative">
                                        <div class="tpprice-switch-wrapper tpprice-4-position tppricing-switch-2">
                                            <div class="toggle">
                                                <input type="checkbox" id="switcher-price" class="tp-check">
                                                <b class="switch"></b>
                                            </div>
                                            <div class="label-text">

                                                <label class="toggler toggler-price-active tp-el-tab-btn"
                                                       id="filt-monthly-price">Billed Yearly</label>
                                                <label class="toggler tp-el-tab-btn" id="filt-yearly-price">Billed
                                                    Monthy</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tppricing-shape-4">
                                        <div class="tppricing-shape-1">
                                            <img decoding="async"
                                                 src="/wp-content/themes/seomy/assets/img/shape/pricing-4-shape-3.png"
                                                 alt="">
                                        </div>
                                        <div class="tppricing-shape-3">
                                            <svg width="86" height="59" viewbox="0 0 86 59" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 39.5506C8 21.0506 23.7 -11.5494 30.5 6.05057C39 28.0506 33 68.5508 63 48.0508C71.5 44.0508 78 41.5508 85 58.0508"
                                                      stroke="currentColor" stroke-linejoin="round"
                                                      stroke-dasharray="4 4"></path>
                                            </svg>
                                        </div>
                                        <div class="tppricing-shape-2">
                                            <img decoding="async"
                                                 src="/wp-content/uploads/2023/09/pricing-4-shape-2.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="price-scroll">
                                    <div class="price-scroll-width">
                                        <div class="row gx-0">
                                            <div class="col-12">
                                                <div id="monthly-price" class="wrapper-full">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1765"
                                                         class="elementor elementor-1765">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-c1bc473 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="c1bc473" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-802545d"
                                                                     data-id="802545d" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-8756364 elementor-widget elementor-widget-tp-advanced-pricing"
                                                                             data-id="8756364"
                                                                             data-element_type="widget"
                                                                             data-widget_type="tp-advanced-pricing.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="fix tp-el-section">
                                                                                    <!-- priceing-top -->
                                                                                    <div class="tppriceing-top">
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center ">
                                                                                                            <span class="tp-el-head-title">Essential</span>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;36.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center active">
                                                                                                            <span class="tp-el-head-title">Pro</span>
                                                                                                            <div class="big-price-shape"></div>
                                                                                                            <div class="sm-price-shape"></div>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;54.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center ">
                                                                                                            <span class="tp-el-head-title">Business</span>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;89.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- priceing-top-end -->
                                                                                    <!-- pricing-box -->
                                                                                    <div class="pricing-box-4">

                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        keyword
                                                                                                        Research</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price tppricing-right text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                100</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                200</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price tppricing-left text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                250</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        On-page and SERP
                                                                                                        analysis</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                10</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                20</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                30</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Tools for
                                                                                                        Agencies</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Сontent
                                                                                                        Marketing</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                15
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                30
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                20
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Additional
                                                                                                        Features</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                5</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                10</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                15</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!-- pricing-item -->
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1"></div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!-- pricing-item-end -->
                                                                                    </div>
                                                                                    <!-- pricing-box-end -->
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                                <div id="hourly-price" class="wrapper-full price-is-hide">
                                                    <style></style>
                                                    <div data-elementor-type="container" data-elementor-id="1774"
                                                         class="elementor elementor-1774">
                                                        <section
                                                                class="elementor-section elementor-top-section elementor-element elementor-element-624babf elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                                data-id="624babf" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2a55fb5"
                                                                     data-id="2a55fb5" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-6fb7ee4 elementor-widget elementor-widget-tp-advanced-pricing"
                                                                             data-id="6fb7ee4"
                                                                             data-element_type="widget"
                                                                             data-widget_type="tp-advanced-pricing.default">
                                                                            <div class="elementor-widget-container">


                                                                                <div class="fix tp-el-section">
                                                                                    <!-- priceing-top -->
                                                                                    <div class="tppriceing-top">
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center ">
                                                                                                            <span class="tp-el-head-title">Essential</span>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;46.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center active">
                                                                                                            <span class="tp-el-head-title">Pro</span>
                                                                                                            <div class="big-price-shape"></div>
                                                                                                            <div class="sm-price-shape"></div>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;64.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-head text-center ">
                                                                                                            <span class="tp-el-head-title">Business</span>
                                                                                                            <h4 class="title tp-el-price">
                                                                                                                &#036;99.00</h4>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- priceing-top-end -->
                                                                                    <!-- pricing-box -->
                                                                                    <div class="pricing-box-4">

                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        keyword
                                                                                                        Research</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price tppricing-right text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                50</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                150</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price tppricing-left text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                200</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        On-page and SERP
                                                                                                        analysis</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                08</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                16</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                28</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Tools for
                                                                                                        Agencies</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                Limited</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Сontent
                                                                                                        Marketing</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                15
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                45
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                18
                                                                                                                articles</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1">
                                                                                                <div class="tppricing-4-title">
                                                                                                    <h4 class="title tp-el-fea-head">
                                                                                                        Additional
                                                                                                        Features</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                4</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                12</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  text-center">
                                                                                                            <p class="tp-el-fea-title">
                                                                                                                20</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!-- pricing-item -->
                                                                                        <div class="row gx-0">
                                                                                            <div class="price-custom-col-1"></div>
                                                                                            <div class="price-custom-col-2">
                                                                                                <div class="row gx-0">

                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price active tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-4">
                                                                                                        <div class="tppricing-4-price  tppricing-4-btn">
                                                                                                            <p>
                                                                                                                <a class="tp-el-btn"
                                                                                                                   href="/"
                                                                                                                   target="_self"
                                                                                                                   rel="nofollow">Join
                                                                                                                    this
                                                                                                                    Plan</a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!-- pricing-item-end -->
                                                                                    </div>
                                                                                    <!-- pricing-box-end -->
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-8047421 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="8047421" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e13759e"
             data-id="e13759e" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-37feb0f elementor-widget elementor-widget-tp-testimonial-image"
                     data-id="37feb0f" data-element_type="widget" data-widget_type="tp-testimonial-image.default">
                    <div class="elementor-widget-container">


                        <div class="scene">
                            <div class="testimonial-4-thumb p-relative pb-60">
                                <div class="testimonial-4-main-thumb p-relative">
                                    <img decoding="async" src="/wp-content/uploads/2024/03/testimonial-4-shape-1.png"
                                         alt="">
                                    <div class="testimonial-4-main-anim">
                                        <div class="tp-tooltip-circle">
                                            <div class="tp-tooltip-effect-1"></div>
                                            <div class="tp-tooltip-effect-2"></div>
                                            <div class="tp-tooltip-effect-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-4-shape-1">
                                    <img decoding="async" class="layer" data-depth="0.3"
                                         src="/wp-content/uploads/2023/09/testimonial-4-shape-1.png" alt="">
                                </div>
                                <div class="testimonial-4-shape-2">
                                    <img decoding="async" class="layer" data-depth="0.2"
                                         src="/wp-content/uploads/2024/03/testimonial-4-shape-2.png" alt="">
                                </div>
                                <div class="testimonial-4-shape-3">
                                    <img decoding="async" class="layer" data-depth="0.1"
                                         src="/wp-content/uploads/2024/03/testimonial-4-shape-3.png" alt="">
                                </div>
                                <div class="testimonial-4-shape-4 d-sm-block">
                                    <img decoding="async" class="layer" data-depth="0.2"
                                         src="/wp-content/uploads/2024/03/testimonial-4-shape-4.png" alt="">
                                </div>
                                <div class="testimonial-4-shape-5 d-sm-block">
                                    <img decoding="async" class="layer" data-depth="0.1"
                                         src="/wp-content/uploads/2024/03/testimonial-4-shape-5.png" alt="">
                                </div>
                                <div class="testimonial-4-shape-6">
                                    <img decoding="async" class="layer" data-depth="0.3"
                                         src="/wp-content/uploads/2024/03/testimonial-4-shape-6.png" alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6b62413"
             data-id="6b62413" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-c69c444 elementor-widget elementor-widget-tp-heading"
                     data-id="c69c444" data-element_type="widget" data-widget_type="tp-heading.default">
                    <div class="elementor-widget-container">


                        <div class="section-wrapper ele-content-align tp-el-section">
                            <span class="tp-el-subtitle">Testimonials</span>
                            <h2 class="section-title-4 section-title-4-2 tp-el-title">What Clients Say</h2></div>

                    </div>
                </div>
                <div class="elementor-element elementor-element-0349e20 elementor-widget elementor-widget-tp-testimonial-ex"
                     data-id="0349e20" data-element_type="widget" data-widget_type="tp-testimonial-ex.default">
                    <div class="elementor-widget-container">

                        <!--	testimonial style 2 -->


                        <div class="tp-testimonial-4 pb-60">
                            <div class="testimonial-4-wrap mb-40">
                                <div class="testimonial-4-wrapper tptestimonial-4-active">

                                    <div class="tptestimonial-4-item">
                                        <div class="tptestimonial-4-rating d-flex align-items-center mb-25">
                                            <div class="tptestimonial-4-rating-img mr-30">
                                                <img decoding="async"
                                                     src="/wp-content/uploads/2023/09/testimonial-4-shape-2.png" alt="">
                                            </div>
                                            <div class="review-star">
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                        <div class="tptestimonial-4-content d-flex">
                                            <div class="tptestimonial-4-icon mr-20">
                                                <img decoding="async"
                                                     src="/wp-content/themes/seomy/assets/img/shape/quation-4.png"
                                                     alt="">
                                            </div>
                                            <div class="tptestimonial-4-text">
                                                <p>As a strategy consultancy, we’re constantly multiple projects which
                                                    meant we had little resources left our online marketing. we were
                                                    also reluctant to partner with marketing agencies as most
                                                    package.!</p>
                                                <div class="tptestimonial-4-author">
                                                    <h4 class="title">Rasalina William</h4>
                                                    <span>CEO at YES Germany</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tptestimonial-4-item">
                                        <div class="tptestimonial-4-rating d-flex align-items-center mb-25">
                                            <div class="tptestimonial-4-rating-img mr-30">
                                                <img decoding="async"
                                                     src="/wp-content/uploads/2023/09/testimonial-4-shape-2.png" alt="">
                                            </div>
                                            <div class="review-star">
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                        <div class="tptestimonial-4-content d-flex">
                                            <div class="tptestimonial-4-icon mr-20">
                                                <img decoding="async"
                                                     src="/wp-content/themes/seomy/assets/img/shape/quation-4.png"
                                                     alt="">
                                            </div>
                                            <div class="tptestimonial-4-text">
                                                <p>As a strategy consultancy, we’re constantly multiple projects which
                                                    meant we had little resources left our online marketing. we were
                                                    also reluctant to partner with marketing agencies as most
                                                    package.!</p>
                                                <div class="tptestimonial-4-author">
                                                    <h4 class="title">Nathalie Grossman</h4>
                                                    <span>CEO of Advisor Fuel</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tptestimonial-4-item">
                                        <div class="tptestimonial-4-rating d-flex align-items-center mb-25">
                                            <div class="tptestimonial-4-rating-img mr-30">
                                                <img decoding="async"
                                                     src="/wp-content/uploads/2023/09/testimonial-4-shape-2.png" alt="">
                                            </div>
                                            <div class="review-star">
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                                <i class="fa-sharp fa-solid fa-star-sharp"></i>
                                            </div>
                                        </div>
                                        <div class="tptestimonial-4-content d-flex">
                                            <div class="tptestimonial-4-icon mr-20">
                                                <img decoding="async"
                                                     src="/wp-content/themes/seomy/assets/img/shape/quation-4.png"
                                                     alt="">
                                            </div>
                                            <div class="tptestimonial-4-text">
                                                <p>As a strategy consultancy, we’re constantly multiple projects which
                                                    meant we had little resources left our online marketing. we were
                                                    also reluctant to partner with marketing agencies as most
                                                    package.!</p>
                                                <div class="tptestimonial-4-author">
                                                    <h4 class="title">Jhone Krhioyia</h4>
                                                    <span>Managing Director</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="testimonial-arrow-4 pl-40">
                                <div class="tptestimonal-4-nav p-relative">
                                    <button class="prv-testi-case">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none" viewbox="0 0 8 14">
                        <path fill-rule="evenodd"
                              d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
                              fill="currentColor"></path>
                    </svg>
                </span>
                                    </button>
                                    <button class="next-testi-case">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none" viewbox="0 0 8 14">
                        <path fill-rule="evenodd"
                              d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                              fill="currentColor"></path>
                    </svg>
                </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-3c47f73 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="3c47f73" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-21b069e"
             data-id="21b069e" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-3005b3f elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                     data-id="3005b3f" data-element_type="widget" data-widget_type="divider.default">
                    <div class="elementor-widget-container">
                        <style>/*! elementor - v3.23.0 - 05-08-2024 */
                        .elementor-widget-divider {
                            --divider-border-style: none;
                            --divider-border-width: 1px;
                            --divider-color: #0c0d0e;
                            --divider-icon-size: 20px;
                            --divider-element-spacing: 10px;
                            --divider-pattern-height: 24px;
                            --divider-pattern-size: 20px;
                            --divider-pattern-url: none;
                            --divider-pattern-repeat: repeat-x
                        }

                        .elementor-widget-divider .elementor-divider {
                            display: flex
                        }

                        .elementor-widget-divider .elementor-divider__text {
                            font-size: 15px;
                            line-height: 1;
                            max-width: 95%
                        }

                        .elementor-widget-divider .elementor-divider__element {
                            margin: 0 var(--divider-element-spacing);
                            flex-shrink: 0
                        }

                        .elementor-widget-divider .elementor-icon {
                            font-size: var(--divider-icon-size)
                        }

                        .elementor-widget-divider .elementor-divider-separator {
                            display: flex;
                            margin: 0;
                            direction: ltr
                        }

                        .elementor-widget-divider--view-line_icon .elementor-divider-separator, .elementor-widget-divider--view-line_text .elementor-divider-separator {
                            align-items: center
                        }

                        .elementor-widget-divider--view-line_icon .elementor-divider-separator:after, .elementor-widget-divider--view-line_icon .elementor-divider-separator:before, .elementor-widget-divider--view-line_text .elementor-divider-separator:after, .elementor-widget-divider--view-line_text .elementor-divider-separator:before {
                            display: block;
                            content: "";
                            border-block-end: 0;
                            flex-grow: 1;
                            border-block-start: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                        }

                        .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator > .elementor-divider__svg:first-of-type {
                            flex-grow: 0;
                            flex-shrink: 100
                        }

                        .elementor-widget-divider--element-align-left .elementor-divider-separator:before {
                            content: none
                        }

                        .elementor-widget-divider--element-align-left .elementor-divider__element {
                            margin-left: 0
                        }

                        .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator > .elementor-divider__svg:last-of-type {
                            flex-grow: 0;
                            flex-shrink: 100
                        }

                        .elementor-widget-divider--element-align-right .elementor-divider-separator:after {
                            content: none
                        }

                        .elementor-widget-divider--element-align-right .elementor-divider__element {
                            margin-right: 0
                        }

                        .elementor-widget-divider--element-align-start .elementor-divider .elementor-divider-separator > .elementor-divider__svg:first-of-type {
                            flex-grow: 0;
                            flex-shrink: 100
                        }

                        .elementor-widget-divider--element-align-start .elementor-divider-separator:before {
                            content: none
                        }

                        .elementor-widget-divider--element-align-start .elementor-divider__element {
                            margin-inline-start: 0
                        }

                        .elementor-widget-divider--element-align-end .elementor-divider .elementor-divider-separator > .elementor-divider__svg:last-of-type {
                            flex-grow: 0;
                            flex-shrink: 100
                        }

                        .elementor-widget-divider--element-align-end .elementor-divider-separator:after {
                            content: none
                        }

                        .elementor-widget-divider--element-align-end .elementor-divider__element {
                            margin-inline-end: 0
                        }

                        .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {
                            border-block-start: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                        }

                        .elementor-widget-divider--separator-type-pattern {
                            --divider-border-style: none
                        }

                        .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator, .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after, .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before, .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {
                            width: 100%;
                            min-height: var(--divider-pattern-height);
                            -webkit-mask-size: var(--divider-pattern-size) 100%;
                            mask-size: var(--divider-pattern-size) 100%;
                            -webkit-mask-repeat: var(--divider-pattern-repeat);
                            mask-repeat: var(--divider-pattern-repeat);
                            background-color: var(--divider-color);
                            -webkit-mask-image: var(--divider-pattern-url);
                            mask-image: var(--divider-pattern-url)
                        }

                        .elementor-widget-divider--no-spacing {
                            --divider-pattern-size: auto
                        }

                        .elementor-widget-divider--bg-round {
                            --divider-pattern-repeat: round
                        }

                        .rtl .elementor-widget-divider .elementor-divider__text {
                            direction: rtl
                        }

                        .e-con-inner > .elementor-widget-divider, .e-con > .elementor-widget-divider {
                            width: var(--container-widget-width, 100%);
                            --flex-grow: var(--container-widget-flex-grow)
                        }
                        </style>
                        <div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
                        </div>
                    </div>
                </div>
                <section
                        class="elementor-section elementor-inner-section elementor-element elementor-element-fbb5983 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="fbb5983" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2e9a07a"
                             data-id="2e9a07a" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-f3b9cd6 elementor-widget elementor-widget-tp-star-box-ex"
                                     data-id="f3b9cd6" data-element_type="widget"
                                     data-widget_type="tp-star-box-ex.default">
                                    <div class="elementor-widget-container">


                                        <div class="review-item text-center  theme-bg-4 tp-el-section pt-10 pb-10 pl-10 pr-10">
                                            <div class="review-icon mb-10">
                                                <img decoding="async"
                                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/review-4-logo-1.png"
                                                     alt="">
                                            </div>
                                            <div class="review-content">
                                                <span class="tp-el-title">4.58 out of 5 stars from 1,045 reviews</span>
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
                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c2bf34d"
                             data-id="c2bf34d" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-3a37f2f elementor-widget elementor-widget-tp-star-box-ex"
                                     data-id="3a37f2f" data-element_type="widget"
                                     data-widget_type="tp-star-box-ex.default">
                                    <div class="elementor-widget-container">


                                        <div class="review-item text-center review-border theme-bg-4 tp-el-section pt-10 pb-10 pl-10 pr-10">
                                            <div class="review-icon mb-10">
                                                <img decoding="async"
                                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/review-4-logo-2.png"
                                                     alt="">
                                            </div>
                                            <div class="review-content">
                                                <span class="tp-el-title">4.58 out of 5 stars from 1,045 reviews</span>
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
                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d1c6584"
                             data-id="d1c6584" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-9223025 elementor-widget elementor-widget-tp-star-box-ex"
                                     data-id="9223025" data-element_type="widget"
                                     data-widget_type="tp-star-box-ex.default">
                                    <div class="elementor-widget-container">


                                        <div class="review-item text-center  theme-bg-4 tp-el-section pt-10 pb-10 pl-10 pr-10">
                                            <div class="review-icon mb-10">
                                                <img decoding="async"
                                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/review-4-logo-3.png"
                                                     alt="">
                                            </div>
                                            <div class="review-content">
                                                <span class="tp-el-title">4.58 out of 5 stars from 1,045 reviews</span>
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
                </section>
                <div class="elementor-element elementor-element-2a7371c elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                     data-id="2a7371c" data-element_type="widget" data-widget_type="divider.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-a3e8fd4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="a3e8fd4" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f8fc125"
             data-id="f8fc125" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <section
                        class="elementor-section elementor-inner-section elementor-element elementor-element-587e3ae elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="587e3ae" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b7aa433"
                             data-id="b7aa433" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-4f598e9 elementor-widget elementor-widget-tp-heading"
                                     data-id="4f598e9" data-element_type="widget" data-widget_type="tp-heading.default">
                                    <div class="elementor-widget-container">


                                        <div class="section-wrapper ele-content-align tp-el-section">
                                            <span class="tp-el-subtitle">Get in touch</span>
                                            <h2 class="section-title-4 section-title-4-2 tp-el-title">Lets work
                                                Together</h2>
                                            <p class="tp-el-content">Just tell us your requirements and we will help
                                                you!</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-6396b2d elementor-widget elementor-widget-tp-contactInfo-ex"
                                     data-id="6396b2d" data-element_type="widget" data-settings="'link_type':'tell'" data-widget_type="tp-contactInfo-ex.default">
                                <div class="elementor-widget-container">


                                    <div class="tpcontact-4-content tp-align">
                                        <a class="phone mb-5" href="tel:012345">+(800) 2563 123</a>
                                        <span><a class="mail mb-35" href="mailto:info@company.com">info@company.com</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="elementor-element elementor-element-6e4c051 elementor-widget elementor-widget-tp-button"
                                 data-id="6e4c051" data-element_type="widget" data-widget_type="tp-button.default">
                                <div class="elementor-widget-container">


                                    <div class="tp-el-btn-area">
                                        <a href="/" target="_self" rel="nofollow" class="blue-btn tp-el-btn">Call
                                            us Now</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bc1a1b2"
                         data-id="bc1a1b2" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-18cf083 elementor-widget elementor-widget-tp-contact-form-ex"
                                 data-id="18cf083" data-element_type="widget"
                                 data-widget_type="tp-contact-form-ex.default">
                                <div class="elementor-widget-container">


                                    <div class="tpcontact-4-box">
                                        <div class="tpcontact-4-box-wrapper">

                                            <div class="wpcf7 no-js" id="wpcf7-f1660-p6904-o1" lang="en-US" dir="ltr">
                                                <div class="screen-reader-response">
                                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                    <ul></ul>
                                                </div>
                                                <form action="/wordpress/?simply_static_page=1#wpcf7-f1660-p6904-o1"
                                                      method="post" class="wpcf7-form init" aria-label="Contact form"
                                                      novalidate="novalidate" data-status="init">
                                                    <div style="display: none;">
                                                        <input type="hidden" name="_wpcf7" value="1660">
                                                        <input type="hidden" name="_wpcf7_version" value="5.9.8">
                                                        <input type="hidden" name="_wpcf7_locale" value="en_US">
                                                        <input type="hidden" name="_wpcf7_unit_tag"
                                                               value="wpcf7-f1660-p6904-o1">
                                                        <input type="hidden" name="_wpcf7_container_post" value="6904">
                                                        <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                                                    </div>
                                                    <div class="tpcontact-from-wrapper">
                                                        <div class="row gx-6">
                                                            <div class="col-lg-6">
                                                                <div class="tpcontact-form-input mb-20">
                                                                    <span class="wpcf7-form-control-wrap"
                                                                          data-name="text-815"><input size="40"
                                                                                                      maxlength="400"
                                                                                                      class="wpcf7-form-control wpcf7-text"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Full name"
                                                                                                      value=""
                                                                                                      type="text"
                                                                                                      name="text-815"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="tpcontact-form-input mb-20">
                                                                    <span class="wpcf7-form-control-wrap"
                                                                          data-name="text-815"><input size="40"
                                                                                                      maxlength="400"
                                                                                                      class="wpcf7-form-control wpcf7-text"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Email Address"
                                                                                                      value=""
                                                                                                      type="text"
                                                                                                      name="text-815"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="tpcontact-form-input mb-20">
                                                                    <span class="wpcf7-form-control-wrap"
                                                                          data-name="text-815"><input size="40"
                                                                                                      maxlength="400"
                                                                                                      class="wpcf7-form-control wpcf7-text"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Phone number"
                                                                                                      value=""
                                                                                                      type="text"
                                                                                                      name="text-815"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="tpcontact-form-input mb-20">
                                                                    <span class="wpcf7-form-control-wrap"
                                                                          data-name="text-815"><input size="40"
                                                                                                      maxlength="400"
                                                                                                      class="wpcf7-form-control wpcf7-text"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Website"
                                                                                                      value=""
                                                                                                      type="text"
                                                                                                      name="text-815"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="tpcontact-form-textarea mb-25">
                                                                    <span class="wpcf7-form-control-wrap"
                                                                          data-name="textarea-525"><textarea cols="40"
                                                                                                             rows="10"
                                                                                                             maxlength="2000"
                                                                                                             class="wpcf7-form-control wpcf7-textarea"
                                                                                                             aria-invalid="false"
                                                                                                             placeholder="Message"
                                                                                                             name="textarea-525"></textarea></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tpcontact-form-submit">
                                                            <button type="submit">Send Message</button>
                                                        </div>
                                                    </div>
                                                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
</section>
<div class="elementor-element elementor-element-ca54aeb elementor-widget elementor-widget-tp-contact-area-shape"
     data-id="ca54aeb" data-element_type="widget" data-widget_type="tp-contact-area-shape.default">
    <div class="elementor-widget-container">


        <div class="cont-area">
            <div class="contact-main-shape-bg d-none d-md-block position-static">
                <img decoding="async" src="/wp-content/uploads/2023/09/contact-4-bg.jpg" alt="">
            </div>
            <div class="contact-shape d-none d-lg-block">
                <img decoding="async" src="/wp-content/uploads/2024/03/contact-4-shape-2.png" alt=""
                     class="contact-shape-1">
                <img decoding="async" src="/wp-content/uploads/2024/03/contact-4-shape-2.png" alt=""
                     class="contact-shape-2">
                <img decoding="async" src="/wp-content/uploads/2024/03/contact-4-shape-3.png" alt=""
                     class="contact-shape-3">
                <img decoding="async" src="/wp-content/uploads/2024/03/contact-4-shape-4.png" alt=""
                     class="contact-shape-4">
                <img decoding="async" src="/wp-content/uploads/2023/09/contact-4-shape-5.png" alt=""
                     class="contact-shape-5 d-none d-xxl-block">
                <img decoding="async" src="/wp-content/uploads/2024/03/contact-4-shape-6.png" alt=""
                     class="contact-shape-6 d-none d-xxl-block">
            </div>
        </div>

    </div>
</div>
</div>
</div>
</div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-78d73b7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="78d73b7" data-element_type="section" data-settings="{`{'background_background':'classic'}`}">

<div class="elementor-container elementor-column-gap-no">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b5d94f1"
         data-id="b5d94f1" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
            <section
                    class="elementor-section elementor-inner-section elementor-element elementor-element-7737a97 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="7737a97" data-element_type="section">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-847f528"
                         data-id="847f528" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-7cfdd91 elementor-widget elementor-widget-tp-heading"
                                 data-id="7cfdd91" data-element_type="widget" data-widget_type="tp-heading.default">
                                <div class="elementor-widget-container">


                                    <div class="section-wrapper ele-content-align tp-el-section">
                                        <span class="tp-el-subtitle">What's Going On</span>
                                        <h2 class="section-title-4 section-title-4-2 tp-el-title">Company blog &amp;
                                            Insights</h2></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-79d1310"
                         data-id="79d1310" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-3080746 elementor-widget elementor-widget-tp-button"
                                 data-id="3080746" data-element_type="widget" data-widget_type="tp-button.default">
                                <div class="elementor-widget-container">


                                    <div class="tp-el-btn-area">
                                        <a href="/" target="_self" rel="nofollow" class="blue-btn tp-el-btn">More
                                            Articles</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                    class="elementor-section elementor-inner-section elementor-element elementor-element-5c85042 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="5c85042" data-element_type="section" data-settings="{`{'background_background':'classic'}`}">

            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-265c489"
                     data-id="265c489" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-cbae656 elementor-widget elementor-widget-blogpost"
                             data-id="cbae656" data-element_type="widget" data-widget_type="blogpost.default">
                            <div class="elementor-widget-container">


                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                                        <div class="tpblog-4 p-relative mb-60 tp-el-section">
                                            <div class="tpblog-4-thumb"
                                                 style="background-image: url(/wp-content/uploads/2023/09/blog-big-1.png);">
                                            </div>
                                            <div class="row justify-content-end">
                                                <div class="col-lg-7 col-md-7">
                                                    <div class="tpblog-4-content">

                                                        <h5 class="tpblog-4-content-sub-tilte tp-el-rep-cat">Digital
                                                            Product</h5>

                                                        <h4 class="tpblog-4-content-title tp-el-rep-title">
                                                            <a href="/">How
                                                                to Increase Your ROI Through</a>
                                                        </h4>
                                                        <p class="tp-el-rep-des">Nancy boy Charles down the pub get
                                                            stuffed mate easy</p>
                                                        <div class="tpblog-4-info">
                                                            <span class="tp-el-rep-date">9월 07, 2023</span>
                                                            <span><a class="tp-el-rep-ava-name" href="/"><i>By</i>
                                    Root</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                                        <div class="tpblog-4 p-relative mb-60 tp-el-section">
                                            <div class="tpblog-4-thumb"
                                                 style="background-image: url(/wp-content/uploads/2023/09/blog-big-2.png);">
                                            </div>
                                            <div class="row justify-content-end">
                                                <div class="col-lg-7 col-md-7">
                                                    <div class="tpblog-4-content">

                                                        <h5 class="tpblog-4-content-sub-tilte tp-el-rep-cat">Events</h5>

                                                        <h4 class="tpblog-4-content-title tp-el-rep-title">
                                                            <a href="/">Getting
                                                                Ready to Chase Google Sitelinks</a>
                                                        </h4>
                                                        <p class="tp-el-rep-des">Nancy boy Charles down the pub get
                                                            stuffed mate easy</p>
                                                        <div class="tpblog-4-info">
                                                            <span class="tp-el-rep-date">9월 07, 2023</span>
                                                            <span><a class="tp-el-rep-ava-name" href="/"><i>By</i>
                                    Root</a></span>
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
        </div>
    </div>
</div>
</section>
<section
        class="elementor-section elementor-top-section elementor-element elementor-element-dd144a0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="dd144a0" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c398e73"
             data-id="c398e73" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-d024278 elementor-widget elementor-widget-tp-process-ex"
                     data-id="d024278" data-element_type="widget" data-widget_type="tp-process-ex.default">
                    <div class="elementor-widget-container">


                        <div class="tpaward tp-el-section tp-align mb-30 ">

                            <div class="tpaward-icon mb-15">
                                <img decoding="async"
                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/award-shape-1.png"
                                     alt="">
                            </div>

                            <div class="tpaward-content">
                                <h2 class="title mb-5">Best of the Year</h2>
                                <p class="tp-el-content">Best Apps - Apple</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-af86c39"
             data-id="af86c39" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-c268022 elementor-widget elementor-widget-tp-process-ex"
                     data-id="c268022" data-element_type="widget" data-widget_type="tp-process-ex.default">
                    <div class="elementor-widget-container">


                        <div class="tpaward tp-el-section tp-align mb-30 tpaward-border">

                            <div class="tpaward-icon mb-15">
                                <img decoding="async"
                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/award-shape-2.png"
                                     alt="">
                            </div>

                            <div class="tpaward-content">
                                <h2 class="title mb-5">Popular Product</h2>
                                <p class="tp-el-content">Nice Product 2024</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-166b98d"
             data-id="166b98d" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-cfe8002 elementor-widget elementor-widget-tp-process-ex"
                     data-id="cfe8002" data-element_type="widget" data-widget_type="tp-process-ex.default">
                    <div class="elementor-widget-container">


                        <div class="tpaward tp-el-section tp-align mb-30 ">

                            <div class="tpaward-icon mb-15">
                                <img decoding="async"
                                     src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/award-shape-3.png"
                                     alt="">
                            </div>

                            <div class="tpaward-content">
                                <h2 class="title mb-5">Fast Company</h2>
                                <p class="tp-el-content">Innovation by Design</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
<div data-elementor-type="wp-post" data-elementor-id="480" class="elementor elementor-480">
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-580b715 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="580b715" data-element_type="section" data-settings="{`{'background_background':'classic'}`}">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1fde04d"
             data-id="1fde04d" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-6899945 elementor-view-default elementor-widget elementor-widget-icon"
                     data-id="6899945" data-element_type="widget" data-widget_type="icon.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-icon-wrapper">
                            <a class="elementor-icon" href="https://wp.themepure.net/seomy/">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-203f5bf elementor-widget elementor-widget-heading"
                     data-id="203f5bf" data-element_type="widget" data-widget_type="heading.default">
                    <div class="elementor-widget-container">
                        <style>/*! elementor - v3.23.0 - 05-08-2024 */
                        .elementor-heading-title {
                            padding: 0;
                            margin: 0;
                            line-height: 1
                        }

                        .elementor-widget-heading .elementor-heading-title[class*=elementor-size-] > a {
                            color: inherit;
                            font-size: inherit;
                            line-height: inherit
                        }

                        .elementor-widget-heading .elementor-heading-title.elementor-size-small {
                            font-size: 15px
                        }

                        .elementor-widget-heading .elementor-heading-title.elementor-size-medium {
                            font-size: 19px
                        }

                        .elementor-widget-heading .elementor-heading-title.elementor-size-large {
                            font-size: 29px
                        }

                        .elementor-widget-heading .elementor-heading-title.elementor-size-xl {
                            font-size: 39px
                        }

                        .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {
                            font-size: 59px
                        }
                        </style>
                        <h2 class="elementor-heading-title elementor-size-default">This SEO is most reputed firm which
                            provides various online marketing</h2></div>
                </div>
                <div class="elementor-element elementor-element-ad98f76 elementor-widget elementor-widget-tp-button"
                     data-id="ad98f76" data-element_type="widget" data-widget_type="tp-button.default">
                    <div class="elementor-widget-container">


                        <div class="tp-el-btn-area">
                            <a href="/" target="_self" rel="nofollow" class="blue-btn tp-el-btn">Grow
                                Traffic</a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-55e15f4"
             data-id="55e15f4" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-535f9ac elementor-widget elementor-widget-tp-footer-list"
                     data-id="535f9ac" data-element_type="widget" data-widget_type="tp-footer-list.default">
                    <div class="elementor-widget-container">


                        <div class="footer-widget footer-col-2 mb-40 tp-el-section ">
                            <h4 class="footer-widget-title mb-15 tp-el-heading">Information</h4>
                            <div class="footer-widget-link">
                                <ul>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow"
                                           href="/">Home</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">About us</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">Services</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">Why SEO?</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow" href="/">Team</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow" href="/">
                                            Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8cf3092"
             data-id="8cf3092" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-20b1abd elementor-widget elementor-widget-tp-footer-list"
                     data-id="20b1abd" data-element_type="widget" data-widget_type="tp-footer-list.default">
                    <div class="elementor-widget-container">


                        <div class="footer-widget footer-col-2 mb-40 tp-el-section ">
                            <h4 class="footer-widget-title mb-15 tp-el-heading">Services</h4>
                            <div class="footer-widget-link">
                                <ul>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">SEO Audit</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">SEO Services</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">SEO Marketing</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">SEO Analysis</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">SEO Optimization</a>
                                    </li>
                                    <li>
                                        <a class="tp-el-title" target="_self" rel="nofollow">Social Media</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5f46ad7 footer-4-col-4"
             data-id="5f46ad7" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-b5deb3a elementor-widget elementor-widget-heading"
                     data-id="b5deb3a" data-element_type="widget" data-widget_type="heading.default">
                    <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">Contact Us</h2></div>
                </div>
                <div class="elementor-element elementor-element-3d5215e elementor-widget elementor-widget-heading"
                     data-id="3d5215e" data-element_type="widget" data-widget_type="heading.default">
                    <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">Only valuable resource no
                            bullshit</h2></div>
                </div>
                <div class="elementor-element elementor-element-145879f elementor-widget elementor-widget-html"
                     data-id="145879f" data-element_type="widget" data-widget_type="html.default">
                    <div class="elementor-widget-container">
                        <form action="#">
                            <div class="p-relative">
                                <div class="footer-widget-newsletter-input mb-15">
                                    <input type="email" placeholder="Your Email">
                                    <div>
                                        <svg width="18" height="16" viewbox="0 0 18 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                                                  stroke="#565764" stroke-width="1.5" stroke-miterlimit="10"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13 5.39844L10.496 7.39844C9.672 8.05444 8.32 8.05444 7.496 7.39844L5 5.39844"
                                                  stroke="#565764" stroke-width="1.5" stroke-miterlimit="10"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="footer-widget-btn">
                                    <button class="footer-widget-newsletter-btn-2">
                                        <i>
                                            <svg width="10" height="10" viewbox="0 0 10 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1" stroke="white" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M1 1H9V9" stroke="white" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="elementor-element elementor-element-a013d59 elementor-widget elementor-widget-tp-social"
                     data-id="a013d59" data-element_type="widget" data-widget_type="tp-social.default">
                    <div class="elementor-widget-container">


                        <div class="footer-widget-content">
                            <div class="footer-widget-social2 box-align ele-section">
                                <a target="_blank" rel="noopener" href="#"
                                   class="footer-facebook elementor-repeater-item-692e479"><i
                                        class="tp-el-sicon fa-brands fa-facebook-f" aria-hidden="true"></i></a><a
                                    target="_blank" rel="noopener" href="#"
                                    class="footer-twitter elementor-repeater-item-87f9806"><i
                                    class="tp-el-sicon fa-brands fa-twitter" aria-hidden="true"></i></a><a
                                    target="_blank" rel="noopener" href="#"
                                    class="footer-linkedin elementor-repeater-item-c16d875"><i
                                    class="tp-el-sicon fa-brands fa-linkedin-in" aria-hidden="true"></i></a><a
                                    target="_blank" rel="noopener" href="#"
                                    class="footer-instagram elementor-repeater-item-8689707"><i
                                    class="tp-el-sicon fa-brands fa-instagram" aria-hidden="true"></i></a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-a6c7322 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="a6c7322" data-element_type="section" data-settings="{`{'background_background':'classic'}`}">

    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c1c69c"
             data-id="4c1c69c" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <section
                        class="elementor-section elementor-inner-section elementor-element elementor-element-43a4cfa elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="43a4cfa" data-element_type="section"
                        data-settings="{`{'background_background':'classic'}`}">

                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-37ac2ea"
                         data-id="37ac2ea" data-element_type="column"
                         data-settings="{`{'background_background':'classic'}`}">

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-335e52f elementor-widget elementor-widget-heading"
                             data-id="335e52f" data-element_type="widget" data-widget_type="heading.default">
                            <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">© 2024 <a target="_blank"
                                                                                                     href="https://themeforest.net/user/theme_pure/portfolio"
                                                                                                     style="color:#775AFC;">Theme_Pure.</a>.
                                    All Rights Reserved.</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </div>
</div>
</section>
</div>
<div class="woosc-popup woosc-search">
    <div class="woosc-popup-inner">
        <div class="woosc-popup-content">
            <div class="woosc-popup-content-inner">
                <div class="woosc-popup-close"></div>
                <div class="woosc-search-input">
                    <label for="woosc_search_input"></label><input type="search" id="woosc_search_input"
                                                                   placeholder="Type any keyword to search...">
                </div>
                <div class="woosc-search-result"></div>
            </div>
        </div>
    </div>
</div>
<div class="woosc-popup woosc-settings">
    <div class="woosc-popup-inner">
        <div class="woosc-popup-content">
            <div class="woosc-popup-content-inner">
                <div class="woosc-popup-close"></div>
                <ul class="woosc-settings-tools">
                    <li>
                        <label><input type="checkbox" class="woosc-settings-tool" value="hide_similarities"
                                      id="woosc_hide_similarities"> Hide similarities </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="woosc-settings-tool" value="highlight_differences"
                                      id="woosc_highlight_differences"> Highlight differences </label>
                    </li>
                </ul>
                Select the fields to be shown. Others will be hidden. Drag and drop to rearrange the order.
                <ul class="woosc-settings-fields">
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="w1mm" checked><span class="move">Image</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="9ex1" checked><span
                            class="move">SKU</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="t4ac" checked><span class="move">Rating</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="esuo" checked><span class="move">Price</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="uif1" checked><span class="move">Stock</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="43wm" checked><span class="move">Availability</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="xejl" checked><span class="move">Add to cart</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="lyfd" checked><span class="move">Description</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="xlzy" checked><span class="move">Content</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="0frr" checked><span class="move">Weight</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="fn6x" checked><span class="move">Dimensions</span>
                    </li>
                    <li class="woosc-settings-field-li">
                        <input type="checkbox" class="woosc-settings-field" value="xsn9" checked><span class="move">Additional information</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="woosc-popup woosc-share">
    <div class="woosc-popup-inner">
        <div class="woosc-popup-content">
            <div class="woosc-popup-content-inner">
                <div class="woosc-popup-close"></div>
                <div class="woosc-share-content"></div>
            </div>
        </div>
    </div>
</div>
<div id="woosc-area" class="woosc-area woosc-bar-bottom woosc-bar-right woosc-bar-click-outside-yes woosc-hide-checkout"
     data-bg-color="transparent" data-btn-color="#00a0d2">
    <div class="woosc-inner">
        <div class="woosc-table">
            <div class="woosc-table-inner">
                <a href="/" id="woosc-table-close" class="woosc-table-close hint--left" aria-label="Close"><span
                        class="woosc-table-close-icon"></span></a>
                <div class="woosc-table-items"></div>
            </div>
        </div>

        <div class="woosc-bar">
            <div class="woosc-bar-notice">
                Click outside to hide the comparison bar
            </div>
            <a href="/" class="woosc-bar-print hint--top" aria-label="Print"></a>
            <a href="/" class="woosc-bar-share hint--top" aria-label="Share"></a>
            <a href="/" class="woosc-bar-search hint--top" aria-label="Add product"></a>
            <div class="woosc-bar-items"></div>
            <div class="woosc-bar-btn woosc-bar-btn-text">
                <div class="woosc-bar-btn-icon-wrapper">
                    <div class="woosc-bar-btn-icon-inner">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                Compare
            </div>
        </div>

    </div>
</div>
<div id="woosw_wishlist" class="woosw-popup woosw-popup-center"></div>
<script type="text/javascript">
    jQuery(function ($) {
        if (!String.prototype.getDecimals) {
            String.prototype.getDecimals = function () {
                var num = this,
                    match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                if (!match) {
                    return 0;
                }
                return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
            }
        }
        // Quantity "plus" and "minus" buttons
        $(document.body).on('click', '.plus, .minus', function () {
            let _qty = $(this).closest('.quantity').find('.qty')
            let currentVal = parseFloat(_qty.val()),
                max = parseFloat(_qty.attr('max')),
                min = parseFloat(_qty.attr('min')),
                step = _qty.attr('step');

            // Format values
            if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
            if (max === '' || max === 'NaN') max = '';
            if (min === '' || min === 'NaN') min = 0;
            if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

            // Change the value
            if ($(this).is('.plus')) {
                if (max && (currentVal >= max)) {
                    _qty.val(max);
                } else {
                    _qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
                }
            } else {
                if (min && (currentVal <= min)) {
                    _qty.val(min);
                } else if (currentVal > 0) {
                    _qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
                }
            }

            // Trigger change event
            _qty.trigger('change');
        });
    });
</script>
<script type="text/javascript">const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, {rootMargin: '200px 0px 200px 0px'});
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});
</script>
<script type="text/javascript">(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})();
</script>
<link rel="stylesheet" id="wc-blocks-style-css"
      href="/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-9.1.4" type="text/css"
      media="all">
<link rel="stylesheet" id="elementor-post-168-css" href="/wp-content/uploads/elementor/css/post-168.css?ver=1723622296"
      type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-4004-css"
      href="/wp-content/uploads/elementor/css/post-4004.css?ver=1723622296" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-4024-css"
      href="/wp-content/uploads/elementor/css/post-4024.css?ver=1723622296" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-480-css" href="/wp-content/uploads/elementor/css/post-480.css?ver=1723622297"
      type="text/css" media="all">
<link rel="stylesheet" id="google-fonts-2-css"
      href="https://fonts.googleapis.com/css?family=Urbanist%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.6.1"
      type="text/css" media="all">
<script type="text/javascript" src="/wp-includes/js/dist/hooks.min.js?ver=2810c76e705dd1a53b18" id="wp-hooks-js">
</script>
<script type="text/javascript" src="/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
    /* <![CDATA[ */
    // wp.i18n.setLocaleData({'text directionltr': ['ltr']});
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.9.8" id="swv-js">
</script>
<script type="text/javascript" id="contact-form-7-js-extra">
    /* <![CDATA[ */
    var wpcf7 = {"api": {"root": "\/wp-json\/", "namespace": "contact-form-7\/v1"}};
    /* ]]> */
</script>
<script type="text/javascript" id="contact-form-7-js-translations">
    /* <![CDATA[ */
    (function (domain, translations) {
        var localeData = translations.locale_data[domain] || translations.locale_data.messages;
        localeData[""].domain = domain;
        // wp.i18n.setLocaleData(localeData, domain);
    })("contact-form-7", {
        "translation-revision-date": "2024-07-18 01:06:18+0000",
        "generator": "GlotPress\/4.0.1",
        "domain": "messages",
        "locale_data": {
            "messages": {
                "": {
                    "domain": "messages",
                    "plural-forms": "nplurals=1; plural=0;",
                    "lang": "ko_KR"
                }, "This contact form is placed in the wrong place.": ["이 문의 양식이 잘못된 위치에 배치되었습니다."], "Error:": ["오류:"]
            }
        },
        "comment": {"reference": "includes\/js\/index.js"}
    });
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.9.8"
        id="contact-form-7-js"></script>
<script type="text/javascript"
        src="/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=9.1.4"
        id="sourcebuster-js-js"></script>
<script type="text/javascript" id="wc-order-attribution-js-extra">
    /* <![CDATA[ */
    var wc_order_attribution = {
        "params": {
            "lifetime": 1.0e-5,
            "session": 30,
            "base64": false,
            "ajaxurl": "\/wp-admin\/admin-ajax.php",
            "prefix": "wc_order_attribution_",
            "allowTracking": true
        },
        "fields": {
            "source_type": "current.typ",
            "referrer": "current_add.rf",
            "utm_campaign": "current.cmp",
            "utm_source": "current.src",
            "utm_medium": "current.mdm",
            "utm_content": "current.cnt",
            "utm_id": "current.id",
            "utm_term": "current.trm",
            "utm_source_platform": "current.plt",
            "utm_creative_format": "current.fmt",
            "utm_marketing_tactic": "current.tct",
            "session_entry": "current_add.ep",
            "session_start_time": "current_add.fd",
            "session_pages": "session.pgs",
            "session_count": "udata.vst",
            "user_agent": "udata.uag"
        }
    };
    /* ]]> */
</script>
<script type="text/javascript"
        src="/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=9.1.4"
        id="wc-order-attribution-js"></script>
<script type="text/javascript" src="/wp-content/plugins/woo-smart-compare/assets/libs/print/jQuery.print.js?ver=6.2.8"
        id="print-js"></script>
<script type="text/javascript"
        src="/wp-content/plugins/woo-smart-compare/assets/libs/table-head-fixer/table-head-fixer.js?ver=6.2.8"
        id="table-head-fixer-js"></script>
<script type="text/javascript"
        src="/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js?ver=6.2.8"
        id="perfect-scrollbar-js"></script>
<script type="text/javascript" src="/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"></script>
<script type="text/javascript" src="/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.3" id="jquery-ui-mouse-js"></script>
<script type="text/javascript" src="/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.3" id="jquery-ui-sortable-js">
</script>
<script type="text/javascript" id="woosc-frontend-js-extra">
    /* <![CDATA[ */
    var woosc_vars = {
        "ajax_url": "\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "\/wordpress\/?wc-ajax=%%endpoint%%",
        "nonce": "8b4456ec97",
        "hash": "6",
        "user_id": "0cdb64fab32a05bd393b20c8c351de9f",
        "page_url": "#",
        "open_button": "",
        "hide_empty_row": "yes",
        "reload_count": "no",
        "variations": "yes",
        "open_button_action": "open_popup",
        "menu_action": "open_popup",
        "button_action": "show_table",
        "sidebar_position": "right",
        "message_position": "right-top",
        "message_added": "{name} has been added to Compare list.",
        "message_removed": "{name} has been removed from the Compare list.",
        "message_exists": "{name} is already in the Compare list.",
        "open_bar": "no",
        "bar_bubble": "no",
        "adding": "prepend",
        "click_again": "no",
        "hide_empty": "no",
        "click_outside": "yes",
        "freeze_column": "yes",
        "freeze_row": "yes",
        "scrollbar": "yes",
        "limit": "100",
        "remove_all": "Do you want to remove all products from the compare?",
        "limit_notice": "You can add a maximum of {limit} products to the comparison table.",
        "copied_text": "Share link %s was copied to clipboard!",
        "button_text": "Compare",
        "button_text_added": "Compare",
        "button_normal_icon": "woosc-icon-1",
        "button_added_icon": "woosc-icon-74"
    };
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/woo-smart-compare/assets/js/frontend.js?ver=6.2.8"
        id="woosc-frontend-js"></script>
<script type="text/javascript" id="wc-add-to-cart-variation-js-extra">
    /* <![CDATA[ */
    var wc_add_to_cart_variation_params = {
        "wc_ajax_url": "\/wordpress\/?wc-ajax=%%endpoint%%",
        "i18n_no_matching_variations_text": "죄송합니다. 고객님의 선택에 일치하는 상품이 없습니다. 다른 조합을 선택해주세요.",
        "i18n_make_a_selection_text": "상품을 장바구니에 담기 전에 옵션을 먼저 선택해 주세요.",
        "i18n_unavailable_text": "죄송하지만 해당 상품은 가능하지 않습니다. 다른 조합을 선택해주세요."
    };
    /* ]]> */
</script>
<script type="text/javascript"
        src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=9.1.4"
        id="wc-add-to-cart-variation-js" data-wp-strategy="defer"></script>
<script type="text/javascript" src="/wp-content/plugins/woo-smart-quick-view/assets/libs/slick/slick.min.js?ver=4.0.6"
        id="slick-js"></script>
<script type="text/javascript"
        src="/wp-content/plugins/woo-smart-quick-view/assets/libs/magnific-popup/jquery.magnific-popup.min.js?ver=4.0.6"
        id="magnific-popup-js"></script>
<script type="text/javascript" id="woosq-frontend-js-extra">
    /* <![CDATA[ */
    var woosq_vars = {
        "ajax_url": "\/wp-admin\/admin-ajax.php",
        "nonce": "05fda6e542",
        "view": "popup",
        "effect": "mfp-3d-unfold",
        "scrollbar": "yes",
        "auto_close": "yes",
        "hashchange": "no",
        "cart_redirect": "no",
        "cart_url": "\/cart\/",
        "close": "Close (Esc)",
        "next_prev": "yes",
        "next": "Next (Right arrow key)",
        "prev": "Previous (Left arrow key)",
        "thumbnails_effect": "no",
        "related_slick_params": "{\"slidesToShow\":2,\"slidesToScroll\":2,\"dots\":true,\"arrows\":false,\"adaptiveHeight\":true,\"rtl\":false}",
        "thumbnails_slick_params": "{\"slidesToShow\":1,\"slidesToScroll\":1,\"dots\":true,\"arrows\":true,\"adaptiveHeight\":false,\"rtl\":false}",
        "thumbnails_zoom_params": "{\"duration\":120,\"magnify\":1}",
        "quick_view": "0"
    };
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/woo-smart-quick-view/assets/js/frontend.js?ver=4.0.6"
        id="woosq-frontend-js"></script>
<script type="text/javascript" id="woosw-frontend-js-extra">
    /* <![CDATA[ */
    var woosw_vars = {
        "ajax_url": "\/wp-admin\/admin-ajax.php",
        "nonce": "a06ca20d91",
        "menu_action": "open_page",
        "reload_count": "no",
        "perfect_scrollbar": "yes",
        "wishlist_url": "\/wishlist\/",
        "button_action": "list",
        "message_position": "right-top",
        "button_action_added": "popup",
        "empty_confirm": "This action cannot be undone. Are you sure?",
        "delete_confirm": "This action cannot be undone. Are you sure?",
        "copied_text": "Copied the wishlist link:",
        "menu_text": "Wishlist",
        "button_text": "Add to wishlist",
        "button_text_added": "Browse wishlist",
        "button_normal_icon": "woosw-icon-5",
        "button_added_icon": "woosw-icon-8",
        "button_loading_icon": "woosw-icon-4"
    };
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/woo-smart-wishlist/assets/js/frontend.js?ver=4.8.9"
        id="woosw-frontend-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/bootstrap-bundle.js?ver=6.6.1"
        id="bootstrap-bundle-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/waypoints.js?ver=6.6.1" id="waypoints-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/meanmenu.js?ver=6.6.1" id="meanmenu-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/swiper-bundle.js?ver=6.6.1"
        id="swiper-bundle-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/slick.js?ver=6.6.1" id="seomy-slick-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/nouislider.js?ver=6.6.1" id="nouislider-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/parallax.js?ver=6.6.1" id="parallax-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/nice-select.js?ver=6.6.1" id="nice-select-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/wow.js?ver=6.6.1" id="wow-js"></script>
<script type="text/javascript" src="/wp-includes/js/imagesloaded.min.js?ver=5.0.0" id="imagesloaded-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/isotope-pkgd.js?ver=6.6.1" id="isotope-pkgd-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/purecounter.js?ver=6.6.1" id="purecounter-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/tilt.js?ver=6.6.1" id="tilt-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/parallax-scroll.js?ver=6.6.1"
        id="parallax-scroll-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/jarallax.js?ver=6.6.1" id="jarallax-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/wavify.js?ver=6.6.1" id="wavify-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/TweenMax.min.js?ver=6.6.1" id="TweenMax-js">
</script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/animate-headline.js?ver=6.6.1"
        id="animate-headline-js"></script>
<script type="text/javascript" src="/wp-content/themes/seomy/assets/js/main.js?ver=6.6.1" id="seomy-main-js"></script>
<script type="text/javascript" src="/wp-content/plugins/seomy-core/assets/js/hello-world.js?ver=6.6.1" id="tpcore-js">
</script>
<script type="text/javascript" src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.23.4"
        id="elementor-webpack-runtime-js"></script>
<script type="text/javascript" src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.23.4"
        id="elementor-frontend-modules-js"></script>
<script type="text/javascript" src="/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
        id="elementor-waypoints-js"></script>
<script type="text/javascript" id="elementor-frontend-js-before">
    /* <![CDATA[ */
    var elementorFrontendConfig = {
        "environmentMode": {"edit": false, "wpPreview": false, "isScriptDebug": false},
        "i18n": {
            "shareOnFacebook": "페이스북에 공유",
            "shareOnTwitter": "트위터에 공유",
            "pinIt": "핀 하기",
            "download": "다운로드",
            "downloadImage": "이미지 다운로드",
            "fullscreen": "전체 화면",
            "zoom": "확대\/축소",
            "share": "공유",
            "playVideo": "동영상 재생",
            "previous": "이전",
            "next": "다음",
            "close": "닫기",
            "a11yCarouselWrapperAriaLabel": "캐러셀 | 가로 스크롤: 왼쪽 및 오른쪽 화살표",
            "a11yCarouselPrevSlideMessage": "이전 슬라이드",
            "a11yCarouselNextSlideMessage": "다음 슬라이드",
            "a11yCarouselFirstSlideMessage": "첫 번째 슬라이드입니다.",
            "a11yCarouselLastSlideMessage": "마지막 슬라이드입니다.",
            "a11yCarouselPaginationBulletMessage": "슬라이드로 이동"
        },
        "is_rtl": false,
        "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600},
        "responsive": {
            "breakpoints": {
                "mobile": {
                    "label": "모바일 초상화",
                    "value": 767,
                    "default_value": 767,
                    "direction": "max",
                    "is_enabled": true
                },
                "mobile_extra": {
                    "label": "모바일 풍경",
                    "value": 880,
                    "default_value": 880,
                    "direction": "max",
                    "is_enabled": false
                },
                "tablet": {
                    "label": "태블릿 세로",
                    "value": 1024,
                    "default_value": 1024,
                    "direction": "max",
                    "is_enabled": true
                },
                "tablet_extra": {
                    "label": "태블릿 가로",
                    "value": 1200,
                    "default_value": 1200,
                    "direction": "max",
                    "is_enabled": false
                },
                "laptop": {
                    "label": "랩탑",
                    "value": 1366,
                    "default_value": 1366,
                    "direction": "max",
                    "is_enabled": false
                },
                "widescreen": {
                    "label": "와이드스크린",
                    "value": 2400,
                    "default_value": 2400,
                    "direction": "min",
                    "is_enabled": false
                }
            }
        },
        "version": "3.23.4",
        "is_static": false,
        "experimentalFeatures": {
            "e_optimized_css_loading": true,
            "e_font_icon_svg": true,
            "additional_custom_breakpoints": true,
            "container": true,
            "container_grid": true,
            "e_swiper_latest": true,
            "e_nested_atomic_repeaters": true,
            "e_optimized_control_loading": true,
            "e_onboarding": true,
            "home_screen": true,
            "editor_v2": true,
            "ai-layout": true,
            "e_lazyload": true,
            "e_element_cache": true,
            "link-in-bio": true,
            "floating-buttons": true
        },
        "urls": {"assets": "\/wp-content\/plugins\/elementor\/assets\/", "ajaxurl": "\/wp-admin\/admin-ajax.php"},
        "nonces": {"floatingButtonsClickTracking": "9cc600e7ce"},
        "swiperClass": "swiper",
        "settings": {"page": [], "editorPreferences": []},
        "kit": {
            "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
            "global_image_lightbox": "yes",
            "lightbox_enable_counter": "yes",
            "lightbox_enable_fullscreen": "yes",
            "lightbox_enable_zoom": "yes",
            "lightbox_enable_share": "yes",
            "lightbox_title_src": "title",
            "lightbox_description_src": "description"
        },
        "post": {"id": 6904, "title": "wezxro", "excerpt": "", "featuredImage": false}
    };
    /* ]]> */
</script>
<script type="text/javascript" src="/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.23.4"
        id="elementor-frontend-js"></script>
</body>