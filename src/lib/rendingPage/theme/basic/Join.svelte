
<script>
    import {api} from "$lib/util/ApiProvider.js";

    export let data

    console.log(data.props)
    const EN_NAME = data.props.EN_NAME
    const joinInfo = {
        email: "",
        password: "",
        name: "",
        key: data.props.CLIENT_KEY
    }

    const join = async () => {
        console.log(joinInfo)
        let res = await api.post("/u/join", joinInfo);

        if (res === null) return;

        alert(res.message)
        location.href = "/login"
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

        <title> {EN_NAME} </title>

        <link rel="shortcut icon" type="image/x-icon"
              href="/public/assets/logo/{EN_NAME.toLowerCase()}/logo_white.png">
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
        <link rel="stylesheet" type="text/css"
              href="/public/assets/plugins/jquery-toast/css/jquery.toast.css">


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

<div>
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div class="row flex-grow">
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div class="auth-form-transparent text-left p-3 auth-login-form">
                        <div class="brand-logo">
                            <a href="/">
                                <img
                                        src="public/assets/logo/{EN_NAME.toLowerCase()}/logo_white.png"
                                        alt="logo">
                            </a>
                        </div>
                        <h4 style="font-weight: 700;">{EN_NAME}에 오신 것을 환영합니다.</h4>
                        <h6 class="font-weight-light" style="font-weight: 300;">서비스 이용을 위해 회원으로 가입해주세요.</h6>
                        <div id="signin" class="pt-3 ">

                            <div class="form-group">
                                <label for="exampleInputEmail">이름</label>
                                <div class="input-group">
                                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-user text-primary"></i>
                      </span>
                                    </div>
                                    <input type="text" class="form-control form-control-lg border-left-0" name="name"
                                           placeholder="이름을 입력해주세요." bind:value={joinInfo.name}>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail">이메일</label>
                                <div class="input-group">
                                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-email text-primary"></i>
                      </span>
                                    </div>
                                    <input type="email" class="form-control form-control-lg border-left-0" name="email"
                                           placeholder="이메일을 입력해주세요." bind:value="{joinInfo.email}">
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
                                    <input type="hidden" class="form-control" name="key" id="key" value="{data.props.CLIENT_KEY}"/>
                                    <input type="password" class="form-control form-control-lg border-left-0" name="password"
                                           placeholder="비밀번호를 입력해주세요." bind:value={joinInfo.password}>
                                </div>
                            </div>

                            <div class="my-2 d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                    <label class="text-muted">
                                        <input type="checkbox" name="terms" checked>
                                        <a href="https://inssalife82.com/terms">이용약관 및 개인정보처리방침</a>에 동의합니다.
                                    </label>
                                </div>
                            </div>

                            <div class="my-3 form-footer">
                                <button
                                        class="btn btn-block btn-primary btn-lg font-weight-medium"
                                        on:click={() => join()}>
                                    회원가입</button>
                            </div>

                            <div class="mt-4 font-weight-light">
                                이미 가입하셨다면 바로 <a href="/login" class="text-primary">로그인</a>해주세요.
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
<script type="text/javascript"
        src="/public/assets/plugins/jquery-toast/js/jquery.toast.js"></script>

<script src="/public/assets/plugins/aos/dist/aos.js"></script>

<script>
    AOS.init();
</script>

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
</script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>