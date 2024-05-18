<script>
    import {page} from "$app/stores";
    export let data
    const EN_NAME = data.props.EN_NAME
</script>

<svelte:head>

    <meta charset="utf-8" />
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="description" content="                                    ">
    <meta name="keywords" content="                                                           ">
    <title>
        {EN_NAME}
    </title>

    <link rel="shortcut icon" type="image/x-icon"
          href="/public/assets/logo/logo.png">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">

    <script src="/public/assets/js/vendors/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="/public/assets/plugins/font-awesome/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="/public/assets/plugins/emoji/emojionearea.min.css" media="screen">
    <script type="text/javascript" src="/public/assets/plugins/emoji/emojionearea.min.js"></script>

    <!-- c3.js Charts Plugin -->
    <link href="/public/assets/plugins/charts-c3/c3.css" rel="stylesheet">
    <script src="/public/assets/plugins/charts-c3/d3.v3.min.js"></script>
    <script src="/public/assets/plugins/charts-c3/c3.min.js"></script>

    <!-- c3.js Charts Plugin -->
    <link href="/public/assets/plugins/flags/css/flag-icon.css" rel="stylesheet">
    <!-- vendor -->
    <link href="/public/assets/admin/vendors/css/vendor.css" rel="stylesheet">
    <link href="/public/assets/admin/dist/css/admin-core.css" rel="stylesheet" />
    <link href="/public/assets/admin/dist/css/layout.css" rel="stylesheet">
    <script type="text/javascript">
        var token = '881f8aa8f3508a318738939a44c7eef0',
            PATH = './',
            BASE = './';
        var deleteItem = "선택하신 아이템을 삭제하시겠습니까?";
        var deleteItems = "선택하신 모든 아이템을 삭제하시겠습니까?";
    </script>
</svelte:head>

<div id="page-overlay" class="visible incoming">
    <div class="loader-wrapper-outer">
        <div class="loader-wrapper-inner">
            <div class="lds-double-ring">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .search-box div.form-group {
        margin-bottom: 0 !important;
    }

    .search-box .form-control {
        height: auto !important;
    }
</style>

<header class="navbar navbar-expand-lg js-header">
    <div class="header-wrap">
        <p class="navbar-toggler mobile-menu">
            <span class="navbar-toggler-icon">
                <i class="icon fe fe-menu"></i>
            </span>
        </p>

        <a href="./" class="navbar-brand text-inherit mr-md-3">
            <img src="/public/assets/logo/logo.png" alt="Website Logo"
                 class="d-md-none navbar-brand-logo">
        </a>

        <ul class="nav navbar-menu align-items-center order-1 order-lg-2">
            <li class="nav-item d-none d-lg-block">
                <a class="nav-link" href="#customize" data-toggle="modal">
            <span class="nav-icon">
              <i class="icon fe fe-sliders" data-toggle="tooltip" data-placement="bottom" title="Theme Customizer"></i>
            </span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" data-toggle="dropdown"
                   class="nav-link d-flex align-items-center py-0 px-lg-0 px-2 text-color ml-2">
            <span class="ml-2 d-none d-lg-block leading-none">
              <span class="mt-1">Hi! 관리자</span>
            </span>
                    <span class="avatar admin-profile m-l-10"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="./profile">
                        <i class="icon fe fe-user dropdown-icon"></i>
                        Profile </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/logout">
                        <i class="icon fe fe-log-out dropdown-icon"></i>
                        Logout </a>
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
            <a href="./statistics" class="navbar-brand text-inherit">
                <h1 style="margin-top: 0.5rem;">
                    { EN_NAME }
                </h1>
            </a>
        </div>
        <div class="flex-fill scroll-bar">
            <ul class="navbar-nav mb-md-4" id="menu">
                <h6 class="navbar-heading first"><span class="text">대시보드</span></h6>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/statistics'} href="./statistics" data-toggle="tooltip" data-placement="right" title="대시보드">
                    <span class="nav-icon">
                <i class="fa fa-bar-chart"></i>
              </span>
                    <span class="nav-text">
                대시보드

              </span>
                    </a>
                </li>
                <h6 class="navbar-heading first"><span class="text">서비스 및 주문 관리</span></h6>
                <li class="nav-item">
                    <a class="nav-link " class:active={$page.url.pathname === '/admin/orders'} href="./orders" data-toggle="tooltip" data-placement="right" title="주문 관리">
                    <span class="nav-icon">
                <i class="fe fe-shopping-cart"></i>
              </span>
                    <span class="nav-text">
                주문 관리

              </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/services'} href="./services" data-toggle="tooltip" data-placement="right" title="서비스 관리">
                    <span class="nav-icon">
                <i class="fa fa-list-ul"></i>
              </span>
                    <span class="nav-text">
                서비스 관리

              </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/transactions'} href="./transactions" data-toggle="tooltip" data-placement="right" title="충전 관리">
                    <span class="nav-icon">
                <i class="fa fa-file-text-o"></i>
              </span>
                    <span class="nav-text">
                충전 관리

              </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/category'} href="./category" data-toggle="tooltip" data-placement="right" title="카테고리 관리">
                    <span class="nav-icon">
                <i class="fa fa-th-large"></i>
              </span>
                    <span class="nav-text">
                카테고리 관리

              </span>
                    </a>
                </li>
                <h6 class="navbar-heading first"><span class="text">회원 관리</span></h6>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/users'} href="./users" data-toggle="tooltip" data-placement="right" title="회원 관리">
                    <span class="nav-icon">
                <i class="fe fe-users"></i>
              </span>
                    <span class="nav-text">
                회원 관리

              </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/provider'} href="/admin/provider" data-toggle="tooltip" data-placement="right" title="도매처 관리">
                    <span class="nav-icon">
                <i class="fe fe-link"></i>
              </span>
                    <span class="nav-text">
                도매처 관리

              </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/admin/news'} href="./news" data-toggle="tooltip" data-placement="right" title="공지사항 관리">
                    <span class="nav-icon">
                <i class="fe fe-bell"></i>
              </span>
                    <span class="nav-text">
                공지사항 관리

              </span>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="/logout" class="nav-link" data-toggle="tooltip" data-placement="right" title="Logout">
            <span class="nav-icon"><i class="icon fe fe-power"></i>
            </span>
                    <span class="nav-text">Logout</span>
                </a>
            </li>
        </ul>
    </aside>

    <div class="layout-main d-flex flex-column flex-fill max-w-full">
        <main class="app-content">
            <slot></slot>
        </main>
    </div>
</div>