export default {
    theme: {
        // 기본 그라디언트 색상들
        defaultGradientText: "background: linear-gradient(90deg, #E5D85C 0%, #FAED7D 43.75%, #FAF4C0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        defaultGradientAreaHtml: "background: linear-gradient(90deg, #E5D85C 0%, #FAED7D 43.75%, #FAF4C0 100%)",
        defaultGradientArea: "linear-gradient(90deg, #E5D85C 0%, #FAED7D 43.75%, #FAF4C0 100%)",
        
        // 메인 컬러 (헤더 회원가입 버튼 등)
        main: "#FFE819",

        white: "#ffffff",
        black: "#000",

        // wave 아래 영역
        common1: "#FFE819",

        common2: "#ABBF78",
        common3: "#FFB876",
        common4: "#FFA0C9",
        common5: "#E4F7FF",
        common6: "#FFF2D6",
        common7: "#E3E8FF",
        common8: "#FFE4E4",
        common9: "#D2F8EC",
        common10: "#FFE4F3",
        common11: "#010F1C",
        headingPrimary: "#0C1338",
        headingSecondary: "#0F1123",
        grey1: "#6C6E76",
        grey2: "#93959F",
        grey3: "#565764",
        grey4: "#666666",
        grey5: "#8A8A8D",
        grey6: "#C3C4CD",
        grey7: "#414250",
        grey8: "#55585B",
        textBody: "#565764",
        text1: "#271D3A",

        // 메인 컬러 동일 적용
        "theme-primary": "#FFE819",
        "theme-secondary": "#131683",

        theme3: "#05003B",
        themeGreen: "#59BA41",
        themeApple: "#F5F1EB",
        themeDarkBlue: "#1E2B8A",
        themeBlue: "#05A2E9",
        border1: "#F0F1F4",
        border5: "#000"
    },
    main: {
        firstSection: {
            bannerContent: {
                bannerTitle: {
                    firstSection: "WEODUS는",
                    secondSection: [
                        "광고이상의 가치",
                        "마케팅 이상의 성공",
                        "실시간 상위 노출",
                    ],
                    thirdSection: "<br/>전문입니다!"
                },
                bannerExplain: "WEODUS가 고객의 니즈를 맞춰드립니다!<br/>WE grows with US!"
            },
            MainContactBtn: {
                text: "서비스 둘러보기",
                link: "/login"
            },
            phoneNumber: {
                text: "CONTACT",
                link: "/contact"
            },
            email: {
                text: "wezxro@hwalaon.com"
            },
            links: {
                facebook: "",
                twitter: "",
                instagram: "",
                youtube: "",
                linkedin: ""
            }
        },
        secondSection: {
            subText: "Why Services us",
            mainText: "WEODUS 서비스",
            cards: [
                {
                    mainText: "검색 엔진 최적화(SEO)",
                    description: "weodus가 제공하는 맞춤형 전략으로<br/>귀하의 웹사이트 순위를 효과적으로 높여드립니다.",
                    image: "/assets/pictograms/seo.png",
                    readMore: {
                        link: "/services",
                        text: "Read More",
                    }
                }, {
                    mainText: "소셜 미디어 마케팅",
                    description: "온라인 시대에서 많은 연령층 유입을 위해서는<br/>소셜미디어 마케팅은 선택이 아닌 필수입니다.",
                    image: "/assets/pictograms/socialMediaMarketing.png",
                    readMore: {
                        link: "/services",
                        text: "Read More"
                    }
                }, {
                    mainText: "마케팅 자동화 패널",
                    description: "그 전과 다른 결과를 창출하기 위해서는<br />혁신적인 방법이 필요합니다.<br />마케팅 자동화 패널은 <br />더 나은 성과와 효율을 가질 수 있습니다.",
                    image: "/assets/pictograms/marketingPanel.png",
                    readMore: {
                        link: "/services",
                        text: "Read More"
                    }
                }
            ]
        },
        thirdSection: {
            mainBanner: {
                text: "WEZXRO 서비스 제공 플랫폼"
            }
        },
        fourthSection: {
            banner: {
                url: "assets/img/banner/easyToUse.gif",
                // 이미지가 네모로 뜨는게 아니라 둥근 모양으로 뜨게 하기 위해 isRound: true로 설정
                isRound: false
            },
            title: "WEODUS 사용방법",
            captionTheme: "color: linear-gradient(91.91deg, #E5D85C 5.01%, #FAED7D 43.79%, #FAF4C0 93.65%",
            content: [
                {
                    title: "위오더스 회원가입",
                    description: "우측 상단의 <b>\"회원가입\"</b> 클릭해 주시고, <br/>가입 후 위오더스 대시보드에 접속해 주시면 됩니다.",
                    color: "#39DDB8"
                },
                {
                    title: "예치금 충전하기",
                    description: "대시보드에서 좌측 카테고리를 보시면, <br /> <b>'충전 신청'</b> 클릭 후 예치금 충전해 주시면 됩니다.",
                    color: "#FFE819"
                },
                {
                    title: "서비스 주문하기",
                    description: "좌측 카테고리에 <b>'주문하기'</b> 클릭 한 뒤, <br />서비스를 선택하고 링크와 수량을 입력하시면 자동 주문 완료!",
                    color: "#05A2E9"
                }
            ]
        },
        fifthSection: {
            banner: {
                url: "assets/img/banner/wd_optimize.png",
                bg1Url: "",
                bg2Url: "", 
                bgThumbUrl: "",
            },
            label: "Looking for best AD results?",
            title: "비전을 실현하는 완벽한 파트너!<br/>당신의 시간과 노력을 위오더스가 아껴드리겠습니다!",
            content: "24시간 연중무휴 완벽한 서비스를 제공합니다",
            data: [
                {
                    title: "서비스 자동 주문 성공 비율",
                    size: 100,
                    color: "#6EC857"
                },
                {
                    title: "고객센터 10분 내 응답 비율",
                    size: 83,
                    color: "#FFB34E"
                },
            ],
            btn: {
                text: "WEODUS 소개",
                link: "/about"
            }
        },
        sixthSection: {
            counter: [
                {
                    text: "현재까지 처리 된 주문",
                    number: 50000,
                },
                {
                    text: "현재까지 회원가입 횟수",
                    number: 3300,
                },
                {
                    text: "위제로 공식 파트너 및 대행사",
                    number: 80
                }
            ]
        },
        seventhSection: {},
        eighthSection: {
            subTitle: "Pricing Partner Plans",
            title: "WEODUS 파트너 플랜",
            billedOptions: ["파트너 계약 연정액", "파트너 계약 월정액"],
            planOptions: ["자체 사이트 제작 및 서버 세팅", "로고, 배너 및 디자인 제작", "매뉴얼 및 노하우 교육 자료 전달", "위제로 모든 서비스 도매가 (평균)", "패널 제작 권한 및 매뉴얼 전달"],
            pricing: {
                firstOption: [
                    {
                        title: "PREMIUM",
                        pricing: "₩3,000,000",
                        values: ["○", "+ 브랜딩", "+ 컨설팅", "65%", "⨉"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    },
                    {
                        title: "ENTERPRISE",
                        pricing: "₩5,000,000",
                        values: ["+ 전체 아웃소싱", "+ 기업 맞춤 제작", "+ 전용 자료 전달", "77%", "○"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    },
                    {
                        title: "전속 파트너 (영구제)",
                        pricing: "<a href='/contact' id='contact'>고객센터</a>",
                        values: ["상담 후 협의", "상담 후 협의", "상담 후 협의", "77% ~ 95%", "상담 후 협의"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    }
                ],
                secondOption: [
                    {
                        title: "STANDARD",
                        pricing: "₩100,000",
                        values: ["⨉", "○", "○", "55%", "⨉"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    },
                    {
                        title: "PREMIUM",
                        pricing: "₩300,000",
                        values: ["○", "+ 브랜딩", "+ 컨설팅", "65%", "⨉"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    },
                    {
                        title: "ENTERPRISE",
                        pricing: "₩500,000",
                        values: ["+ 전체 아웃소싱", "+ 기업 맞춤 제작", "+ 전용 자료 전달", "77%", "○"],
                        btn: {
                            link: "#",
                            text: "플랜 자세히 보기"
                        }
                    }
                ]
            }
        },
        nineSection: {
            subTitle: "Our Partner Systems",
            title: "WEODUS<br/>파트너 시스템",
            options: [
                {
                    id: "profit",
                    title: "패널 수익 Panel Profit",
                    contents: [
                        {
                            title: "test1",
                            subTitle: "test1",
                            image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                        },{
                            title: "test2",
                            subTitle: "test2",
                            image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                        },{
                            title: "test3",
                            subTitle: "test3",
                            image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                        }
                    ]
                },
                {
                    id: "design",
                    title: "디자인 Design",
                    contents: [{
                        title: "test1",
                        subTitle: "test1",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test2",
                        subTitle: "test2",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test3",
                        subTitle: "test3",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    }]
                },
                {
                    id: "manual",
                    title: "매뉴얼 Manual",
                    contents: [{
                        title: "test1",
                        subTitle: "test1",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test2",
                        subTitle: "test2",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test3",
                        subTitle: "test3",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    }]
                },
                {
                    id: "price",
                    title: "도매가 Wholesale Price",
                    contents: [{
                        title: "test1",
                        subTitle: "test1",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test2",
                        subTitle: "test2",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    },{
                        title: "test3",
                        subTitle: "test3",
                        image: "assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg"
                    }]
                }
            ],
            noticeText: "*파트너 계약 체결 시, 추가적인 비공개 매뉴얼이 전달됩니다. <br/> 파트너 플랜에 따라 매뉴얼 갯수와 도매가격 등이 달라집니다.",
            linkBtn: {
                text: "포트폴리오 바로가기",
                link: "#"
            },
        },
        tenSection: {
            subTitle: "Honest Reviews",
            title: "클라이언트분들의 솔직한 후기"
        },
        reviewSection: [
            {
                image: "assets/img/icon/instagram.png",
                title: "인스타그램 서비스",
                description: "주문 5000건 리뷰, 5점 만점에 평균 4.7점 이상.",
                star: 5
            }, {
                image: "assets/img/icon/telegram.png",
                title: "텔레그램 서비스",
                description: "주문 8000건 리뷰, 5점 만점에 평균 4.7점 이상.",
                star: 5
            }, {
                image: "assets/img/icon/youtube.png",
                title: "유튜브 서비스",
                description: "주문 3000건 리뷰, 5점 만점에 평균 4.7점 이상.",
                star: 5
            }
        ],
        contactSection: {
            title: "디지털 시대를 리드하는 마케팅 파트너<br/>트렌드를 넘어 미래를 디자인하다.",
            description: "고객의 니즈를 맞추기 위해서 바로 weodus가 더 노력하겠습니다.",
            tel: "+(82) 010-6296-1338",
            email: "wezxro@hwalaon.com",
            btn: {
                text: "즉시 통화하기",
                link: "01039715538"
            },
            inputs: ["성/이름", "이메일 주소", "전화번호", "웹사이트", "메세지", "메세지 전송"]
        },
        awardSection: [
            {
                icon: "assets/img/shape/award-shape-1.png",
                title: "화라온 HWALAON",
                content: "위제로 헤드 오피스"
            }, {
                icon: "assets/img/shape/award-shape-2.png",
                title: "리오브 LEOWVW",
                content: "위제로 단독 광고 계약 체결"
            }, {
                icon: "assets/img/shape/award-shape-3.png",
                title: "퀄리치 KWLRICH",
                content: "위제로 파트너 솔루션 협력"
            }
        ],
    },
    about: {
        breadcrumb: {
            title: "About",
            list: [
                {
                    context: "Home",
                    link:"/"
                },
                {
                    context: "About",
                    link:"/about"
                }
            ]
        },
        about: {
            title: "클릭 한번에 끝나는 광고.<br />최소 비용으로 최대 효과.",
            content: "위제로보다 효과가 더 좋은 광고 회사는 있겠지만, 금액대비 효율이 더 높은 광고 회사는 보지 못했습니다."
        },
        brand: {
            innerTitle: "아래로 스크롤하여 <br/> 자세히 살펴보기"
        }
    },
    faq: {
        faq: {
            background: "assets/img/banner/wd-faq-banner.png",
            title: {
                main: "궁금한 ",
                highlight: "질문들"
            },
            subContent: "",
            content: "궁금하신 내용,찾는것이 있으시다면 눌러주세요!",
            accordion: [
                {
                    title: "seo가 중요한 어떤 비즈니스이든 seo가 쓰이는 이유는 뭔가요?",
                    description: "비즈니스의 최적화된 seo에이전시를 고르기위한 방법은 뭔가요?"
                },
                {
                    title: "비즈니스의 최적화된 seo에이전시를 고르기위한 방법은 뭔가요?",
                    description: ""
                },
                {
                    title: "seo 에이전시의 운영방식은 어떻게 되나요?",
                    description: ""
                },
            ]
        },
        cta: {
            subTitle: "기다릴 시간이 없나요? 연락주세요!",
            title: {
                main: "seo전문가",
                highlight: "같이 성장해 나갑시다!"
            },
            phone: {
                number: "+82 010-2429-1834",
                text: "연락 해주시면됩니다!"
            }
        }
    },
    service: {
        about: {
            title: "SEO에이전시의 서비스를 확인하세요!",
            subTitle: "기업의 성장을 위해선 연속적인 접근 방식은 문제해결의 큰 가치를 가져다줍니다.",
        },
        services: [
            {
                title: "소셜 마케팅",
                description: "빠른 접근성을 가진 계정활성화의 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
            {
                title: "SEO최적화",
                description: "서비스의 최적화 접근이 필요한 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
            {
                title: "원 페이지 SEO",
                description: "즉각 계정 활성화가 가능한 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
            {
                title: "콘텐츠 마케팅",
                description: "SEO의 계정의 즉각접근이 필요한 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
            {
                title: "이메일 마케팅",
                description: "이메일 마케팅의 즉각 접근이 가능한 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
            {
                title: "키워드 리서치",
                description: "이메일 마케팅의 즉각 접근이 가능한 상황",
                image: "assets/img/services/services-1-icon-1.png",
                link: "/"
            },
        ],
        aboutInner: {
            subTitle: "Best SEO results?",
            title: "SEO의 가치를 높일 방법입니다!",
            content: "상승을 위한 SEO에이전시는 당신의 상향을 원합니다!",
        },
        project: {
            title: "당신의 계정을 빠르고 쉽게 최적화하세요!",
            image: "assets/img/services/wb-project.jpg",
            content: [
                {
                    title: "기능",
                    description: "답답한 페이지,너무큰 CSS"
                },
                {
                    title: "현지활성도",
                    description: "언어 문제의 해결"
                },
                {
                    title: "콘텐츠",
                    description: "복합적인 중복페이지 해결"
                }
            ]
        },
        pricing: {
            subTitle: "가격 선택",
            title: "필요한 상품을 선택하세요!",
        },
        cta: {
            title: "성공적인 비즈니스 상승!",
            btn: {
                text: "요청하기",
                link: "/contact"
            }
        }
    },
    footer: {
        firstRow: {
            content: `WE가 ZXRO에서부터 함께 만들어 나갑니다.<br/>WE is made together from ZXRO.`,
            btn: {
                text: "서비스 둘러보기",
                link: "/login"
            }
        },
        listRow: [
            {
                title: "WEODUS",
                list: [
                    {
                        text: "HOME",
                        link: "/"
                    }, {
                        text: "ABOUT US",
                        link: "/about"
                    }, {
                        text: "FAQ",
                        link: "/FAQ"
                    }, {
                        text: "SERVICES",
                        link: "/services"
                    }, {
                        text: "고객센터",
                        link: "/contact"
                    },
                ]
            },
            {
                title: "PARTNER",
                list: [
                    {
                        text: "파트너 신청하기",
                        link: "/join-partner"
                    }, {
                        text: "포트폴리오",
                        link: "/portfolios"
                    }
                ]
            }
        ],
        lastRow: {
            title: "CONTACT US",
            list: [
                {
                    text: "파트너 신청하기",
                    link: "/join-partner"
                }, {
                    text: "포트폴리오",
                    link: "/portfolios"
                }
            ]
        },
        links: {
            instagram: "https://www.instagram.com/wezxro/",
            katalk: "http://pf.kakao.com/_feGHxj",
            telegram: "https://t.me/wezxro",
            hwalaon: "https://hwalaon.com"
        },
        copyright: "© 2024 Copyrights by <a target=\"_blank\" href=\"https://hwalaon.com\">HWALAON.</a> All Rights Reserved."
    }
}