<script lang="ts">
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import {api} from "$lib/util/ApiProvider.js";
    import type {UserInfo} from "$lib/types/Account/UserInfo";

    export let data

    const isUnread = false
    let name = "로딩중"
    let money = "로딩중"

    onMount(async () => {
        let userInfo: UserInfo = await api.get("/u/info")

        name = userInfo.name
        money = userInfo.money.toLocaleString()

        localStorage.setItem("isDemo", String(userInfo.isDemo))
    })

    const EN_NAME = data.props.EN_NAME
</script>

<svelte:head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <meta content="en" http-equiv="Content-Language">
    <meta content="                                    " name="description">
    <meta content="                                                           " name="keywords">
    <title>{EN_NAME}</title>

    <link href="/public/assets\logo\{EN_NAME.toLowerCase()}\logo.png" rel="icon" type="image/png">
    <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="yes" name="mobile-web-app-capable">
    <meta content="True" name="HandheldFriendly">
    <meta content="320" name="MobileOptimized">
    <link href="https://fonts.googleapis/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext"
          rel="stylesheet">

    <script src="/public/assets/js/vendors/jquery-3.2.1.min.js"></script>
    <link href="/public/assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="/public/assets/plugins/emoji/emojionearea.min.css" media="screen" rel="stylesheet" type="text/css">
    <script src="/public/assets/plugins/emoji/emojionearea.min.js" type="text/javascript"></script>

    <!-- c3.js Charts Plugin -->
    <link href="/public/assets/plugins/charts-c3/c3.css" rel="stylesheet">
    <script src="/public/assets/plugins/charts-c3/d3.v3.min.js"></script>
    <script src="/public/assets/plugins/charts-c3/c3.min.js"></script>
    <link href="/public/assets/plugins/flags/css/flag-icon.css" rel="stylesheet">
    <link href="/public/assets/plugins/flags/css/flag-icon.css" rel="stylesheet">
    <!-- vendor -->
    <link href="/public/assets/admin/vendors/css/vendor.css" rel="stylesheet">
    <link href="/public/assets/admin/dist/css/admin-core.css" rel="stylesheet"/>
    <link href="/public/assets/admin/dist/css/layout.css" rel="stylesheet">
</svelte:head>

<header class="navbar navbar-expand-lg js-header">
    <div class="header-wrap">
        <a class="navbar-toggler mobile-menu" href="#a">
            <span class="navbar-toggler-icon">
                <i class="icon fe fe-menu"></i>
            </span>
        </a>

        <a class="navbar-brand text-inherit mr-md-3" href="../../routes">
            <img alt="Website Logo"
                 class="d-md-none navbar-brand-logo"
                 src="public/assets/logo/{EN_NAME.toLowerCase()}/logo.png">
        </a>

        <ul class="nav navbar-menu align-items-center order-1 order-lg-2">
            <li class="nav-item notifcation">
                <a class="nav-link ajaxModal" href="/news-annoucement">
            <span class="nav-icon">
              <i class="icon fe fe-bell" data-original-title="공지 및 알림" data-placement="bottom" data-toggle="tooltip"
                 title=""></i>
              <span class="nav-{isUnread ? 'unread': 'read'} change_color"></span>
            </span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link d-flex align-items-center py-0 px-lg-0 px-2 text-color" data-toggle="dropdown"
                   href="#">
            <span class="ml-2 d-none d-lg-block leading-none">
              <span class="mt-1"><span class="text-uppercase">
                  { name }
                </span>님</span>
              <small class="badge bg-indigo d-block mt-1">
                { money }원
              </small>
            </span>
                    <span class="avatar admin-profile m-l-10"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="/logout">
                        <i class="icon fe fe-log-out dropdown-icon"></i>
                        로그아웃
                    </a>
                </div>
            </li>
        </ul>
    </div>
</header>
<div class="d-flex flex-row h-100p">

    <style>
        .tickets-number {
            font-size: 14px !important;
        }
    </style>

    <aside class="navbar navbar-side navbar-fixed js-sidebar" id="aside">
        <div class="mobile-logo">
            <a class="navbar-brand text-inherit" href="/">
                <h1 style="margin-top: 0.5rem;"> { EN_NAME }</h1>
            </a>
        </div>
        <div class="flex-fill scroll-bar">
            <ul class="navbar-nav mb-md-4" id="menu">

                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/dashboard/statistic'}
                       data-placement="right"
                       data-toggle="tooltip" href="/dashboard/statistic" title="대시보드">
                    <span class="nav-icon">
                <i class="fe fe-bar-chart"></i>
              </span>
                        <span class="nav-text" class:active={$page.url.pathname === '/dashboard/statistic'}>
                        대시보드
                    </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/dashboard/order'} data-placement="right"
                       data-toggle="tooltip"
                       href="/dashboard/order" title="주문 내역">
                    <span class="nav-icon">
                <i class="fe fe-calendar"></i>
              </span>
                        <span class="nav-text" class:active={$page.url.pathname === '/dashboard/order'}>
                        주문 내역
                    </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/dashboard/order/add'}
                       data-placement="right"
                       data-toggle="tooltip" href="/dashboard/order/add" title="주문하기">
                    <span class="nav-icon">
                <i class="fe fe-shopping-cart"></i>
              </span>
                        <span class="nav-text" class:active={$page.url.pathname === '/dashboard/order/add'}>
                        주문하기
                    </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/dashboard/services'}
                       data-placement="right"
                       data-toggle="tooltip" href="/dashboard/services" title="서비스 목록">
                        <span class="nav-icon">
                            <i class="fa fa-list-ul" class:active={$page.url.pathname === '/dashboard/services'}></i>
                        </span>
                        <span class="nav-text ">
                            서비스 목록
                        </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/dashboard/transactions'}
                       data-placement="right"
                       data-toggle="tooltip" href="/dashboard/transactions" title="충전하기">
                        <span class="nav-icon">
                            <i class="fa fa-credit-card"></i>
                        </span>
                        <span class="nav-text" class:active={$page.url.pathname === '/dashboard/transactions'}>
                            충전 신청
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>

    <div class="layout-main d-flex flex-column flex-fill max-w-full">
        <main class="app-content">
            <slot></slot>
        </main>
    </div>
</div>