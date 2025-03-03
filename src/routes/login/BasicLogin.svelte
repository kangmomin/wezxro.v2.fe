<script>
    import {api} from "$lib/util/ApiProvider.js";

    export let data

    const EN_NAME = data.props.EN_NAME
    import {goto} from "$app/navigation";

    const loginInfo = {
        key: data.props.CLIENT_KEY,
        password: "",
        email: ""
    }

    const login = async () => {
        const res = await api.post("/u/login", loginInfo)

        if (res === null) return;
        localStorage.setItem("accessToken", res.accessToken)
        localStorage.setItem("refreshToken", res.refreshToken)
        alert("로그인 완료됐습니다.")
        await goto("/dashboard/statistic")
    }
</script>

<svelte:head>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="Content-Language" content="en">
        <meta name="description" content="                                    ">
        <meta name="keywords" content="                                                           ">

        <title>{EN_NAME} - 로그인</title>

        <link rel="shortcut icon" type="image/x-icon"
              href="public/assets/logo/{EN_NAME.toLowerCase()}/logo.png">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">


        <link rel="stylesheet" href="/public/assets/plugins/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">
        <script src="/public/assets/js/vendors/jquery-3.2.1.min.js"></script>

        <link rel="stylesheet" href="/public/assets/auth/vendors/ti-icons/css/themify-icons.css">
        <link rel="stylesheet" href="/public/assets/auth/vendors/css/vendor.bundle.base.css">

        <!-- Core -->
        <link rel="stylesheet" href="/public/assets/auth/css/style.css">


        <!-- toast -->
        <link rel="stylesheet" type="text/css" href="/public/assets/plugins/jquery-toast/css/jquery.toast.css">


        <!-- AOS -->
        <link rel="stylesheet" href="/public/assets/plugins/aos/dist/aos.css" />
        <link href="/public/assets/css/footer.css" rel="stylesheet">
    </head>
</svelte:head>

<body class="">

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

<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div class="row flex-grow">
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div class="auth-form-transparent text-left p-3 auth-login-form">
                        <div class="brand-logo">
                            <a href="./"><img style="width: 200px;" src="public/assets/logo/{EN_NAME.toLowerCase()}/logo_white.png"
                                              alt="logo"></a>
                        </div>
                        <h4 style="font-weight: 700;">{EN_NAME}에 오신 것을 환영합니다.</h4>
                        <h6 class="font-weight-light" style="font-weight: 300;">서비스 이용을 위해 로그인해주세요.</h6>
                        <div id="signin" class="pt-3">

                            <div class="form-group">
                                <label for="exampleInputEmail">이메일</label>
                                <div class="input-group">
                                    <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="ti-user text-primary"></i>
                    </span>
                                    </div>
                                    <input type="email" class="form-control form-control-lg border-left-0" name="email" id="email"
                                           placeholder="이메일을 입력해주세요." bind:value={loginInfo.email} required>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword">비밀번호</label>
                                <div class="input-group">
                                    <div class="input-group-prepend bg-transparent">
                    <span class="input-group-text bg-transparent border-right-0">
                      <i class="ti-lock text-primary"></i>
                    </span>
                                    </div>
                                    <input type="password" class="form-control form-control-lg border-left-0" name="password"
                                           id="password" placeholder="비밀번호를 입력해주세요." bind:value={loginInfo.password} required>
                                </div>
                            </div>

                            <div class="my-3 form-footer">
                                <button type="submit"
                                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" on:click={() => login()}>로그인</button>
                                <button on:click={() => location.href = '/demo-login'}
                                        class="btn btn-block btn-dark btn-lg font-weight-medium auth-form-btn">둘러보기</button>
                            </div>
                            <div class="mt-4 font-weight-light">
                                아직 회원이 아니시라면 <a href="/join" class="text-primary">회원가입</a> 후 이용해주세요.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 login-half-bg d-flex flex-row">
                    <p class="font-weight-medium text-center flex-grow align-self-end">&copy; <strong>{EN_NAME}</strong></p>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
</div>


<script src="/public/assets/js/vendors/bootstrap.bundle.min.js"></script>
<script src="/public/assets/js/vendors/jquery.sparkline.min.js"></script>
<script src="/public/assets/js/core.js"></script>
<!-- toast -->
<script type="text/javascript" src="/public/assets/plugins/jquery-toast/js/jquery.toast.js"></script>

<script src="/public/assets/plugins/aos/dist/aos.js"></script>

<script src="/public/assets/js/process.js"></script>
<script src="/public/assets/js/general.js"></script>
<script>
    $(document).ready(function () {
        var is_notification_popup = "0"
        setTimeout(function () {
            if (is_notification_popup == 1) {
                $("#notification").modal('show');
            } else {
                $("#notification").modal('hide');
            }
        }, 500);
    });

    const token = ""
</script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>