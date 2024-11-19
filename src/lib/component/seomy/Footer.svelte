<script>
    import {seomySetting} from "$lib/rendingPage/theme/seomy/SeomySetting.js";

    export let data
    const {EN_NAME} = data.props
    const config = seomySetting[EN_NAME]?.footer ?? seomySetting["WEZXRO"].footer
    const theme = seomySetting[EN_NAME]?.theme ?? seomySetting["WEZXRO"].theme

    import { onMount } from 'svelte';

    onMount(() => {
        (function () {
            const w = window;
            if (w.ChannelIO) {
                return w.console.error('ChannelIO script included twice.');
            }
            const ch = function () {
                ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args) {
                ch.q.push(args);
            };
            w.ChannelIO = ch;

            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                const s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                const x = document.getElementsByTagName('script')[0];
                if (x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                }
            }

            if (document.readyState === 'complete') {
                l();
            } else {
                w.addEventListener('DOMContentLoaded', l);
                w.addEventListener('load', l);
            }
        })();

        // ChannelIO boot configuration
        ChannelIO('boot', {
            pluginKey: '0f97bf1a-6cbc-437e-94a6-279431a903f9', // Replace with your actual plugin key
        });

        return () => {
            ChannelIO('shutdown'); // Cleanup on component unmount
        };
    });
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
                                             <img alt="logo"
                                                  src="/public/assets\logo\{EN_NAME.toLowerCase()}\logo_fit_black.png"
                                                  width="170"
                                                  height="40">
                                         </span>
                                    </a>
                                </div>
                                <div class="footer-widget-content">
                                    <p class="footer-widget-text mb-20" style="font-size: 14px">{@html config.firstRow.content}</p>
                                    <div class="fooer-btn-4">
                                        <a class="blue-btn" href="{config.firstRow.btn.link}">{config.firstRow.btn.text}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {#each config.listRow as row}
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget  footer-4-col-2 pl-30 mb-40">
                                <h4 class="footer-widget-title mb-15">{row.title}</h4>
                                <div class="footer-widget-link">
                                    <ul>
                                        {#each row.list as data}
                                        <li><a href="{data.link}">{data.text}</a></li>
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/each}
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="footer-widget footer-4-col-4 mb-40">
                                <h4 class="footer-widget-title mb-20">{config.lastRow.title}</h4>
                                <div class="footer-widget-content mb-40">
                                    <p class="footer-widget-text mb-20">24시간 연중무휴 고객센터 운영</p>
                                    <form action="#">
                                        <div class="p-relative">
                                            <div class="footer-widget-newsletter-input mb-15">
                                                <input type="email" placeholder="이메일 주소">
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
                                    <a href="{config.links.instagram}"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="{config.links.katalk}">
                                        <i class="fa-brands">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15.5" height="16" viewBox="0 0 512 512">
                                                <image id="레이어_1" data-name="레이어 1" y="21" width="512" height="470" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAE+UlEQVRogdWZeYhVZRjGf3MzGydlsKYyBVuwbBnbhQqkbaxpjyKl8o8EpwJt+yNojwmD6o+CNKgowyTLatoz2qCsKFolxrRskXJaQHOyKcflOvHGc+Llm3PuOefO3Dt3HjjcM99yvvf5lvd73nfqZsycwyBgD+AI4DjgIGACsI/KdwfqgL+BbuA34Ffge+AToFNlA8KIAfSdCJwPnAGcBIwu8zvbgPeAt4EXgLXlfKQcIucAs4CLgUI5gwYYCUzXcw/wCrAEeDbPR/IYciqwQgPNHCQScTgXeAb4QiueCVmM2Qt4HHgHmFYh4+NwNPAi0AEcmNY4jciZwBrg8oqZm44LgdXApaValiJyHbBcnmeoYefoSaA9L5H5wP01QCDE7cAjcRVxRG4AbqmqefnQBtwX9giJ2Jm4twaND3E9MNuXeSJj5FqHCxYB+8URscO0yzAiglzzf4iIHK6LaLjhWF3U/0uU+QkEvgK2J9SZENw/cM8mAPcF9kzoY/XNJSZrlSY1RLHEbjFZM7WgQS+IaXAJcKQUbdxjs3GALkyDyegpUr8rY743W/WnAzuCuj5dfM3ySh7LNWHWryfmu2bLZJPxbQm+2WZgZ8IseKyUEvYrYyQ/Cwzdza3uL1q5CJuBRr3b5bdV72+JQAS74Q+JsaHdttbJCQZ+CDwqmb1RM4NWYZqMa9aqhRLmc6BLcQnahqaXvtF27gva24Q1AP+4CfkuIDHXZj7B1hPto5MSKo/Xg2YwMso+/pBrZ8u9WO8NMqpXZTe7dg2OVF0wVp1zPJM0EdNd/TxgQYKdhokF7b80dAWGe3S492XAeXp/OGiXVfZbYDUV2ATU64IuRcLQVNBFmAZ/VsJtEa3OSAVdLfr7p+CcFDMS+d2N0SLJlIb6gs5AubC4+2P1vVG/bZpJw93uu1vLGON9hcFp2DFCiYDGDI3jsNCVrdF9tCswSuekQ7/1Sj5kQRNwmKLRP3UmLTkxtkTfzQXNarlY7PpZeHqbVmaTK1+k3+hs1QWuF7n6aOuN0yrMUN02JThKocuIfJmTRLR/nw8MHiPPNNptLaTh/BkrquwNufROtY9Uxh9qt8x5uk/luZKwqqAUTBp6Xf0W/S5xZQvl2dbr+dnF2XaG3nX3Q1FZmFbgbN325uHGq77HTdYTbowHgZcS7Hy5oGzFDylExrn3yF3/6MrmakXG6rw1uRncqTPTQjIa3XYb7+6Zi4CrXa84iWKq4LVoOduD/R5ismbna+Am1dmt/1ykPmNwLbBB2+ME4Ci13a4z0SeSE5Tgs6zJUzEq4QGtrvW5LGYcu2eKPmW6oYRqrVUUdSZ7/W0bx7bWcUV0fj0R8yKPDSMSrzvX3k//zAlkRa1iHXCWty1OyJ0ywEuy0tgYl7qNI9IjD5L3oqwGvpX3W5+FiOEvRXlP1xCJN4Fj4kiQEiP0KW6fp8htKHGr9Fai8MwS7Jg0ODhGM1UDr0oJ35U2VtaorUv66KoqEmhVrm11lg55//VWyZvf4hlT1EuV38qFvESuHCSje3RoTbt9oMeketnIQ2RKhkTFCqlVU6R7SxGPkprdIm/Yrbi8ewB290MeIq0p9XcAd7q/1w2CfZmRh0hSIq9T4u2jKtrdD1m9VkOQMIuwQFtuSEmQg0iLsiMR1kq0XVM50/IhK5FZ7t0itkMlo2sGWYlYFGb52NMUwmbNGlYHwL/Kgvx+5rUw/AAAAABJRU5ErkJggg=="/>
                                            </svg>
                                        </i>
                                    </a>
                                    <a href="{config.links.telegram}"><i class="fa-brands fa-telegram"></i></a>
                                    <a href="{config.links.hwalaon}">
                                        <i class="fa-brands">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 512 512">
                                                <image id="레이어_2" data-name="레이어 2" x="19" y="93" width="476" height="328" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAiCAYAAAD23jEpAAALLklEQVRYhb1YCVRTZxa+2TQJIRESEC1K3UDC0GUspcUqitalWpwZtcm0WnVsqqCjVZYqggRRdkZRFDCOoq1OMjPtHB0Bp1KnjkqPtKIggihrEqJCCGvYss25yYulKYTYenrPyXnvz3vvf//3f/d+995HMplMZACgAQAFAIwAMEgc0UjED4b892sZvhfXZhrt3VQAGJOSenh1f//AWxQK+WFcbESOQCjSyqQS0qNHT1gFhcV+zixmt0Dw+4cCoWjQEQAyqYRCbAwuQCcQip55A2RSCUOckBby2muvlC1ftujxSHPIpBIzUmZHe2dYQ0PTRrVasx0AnInrpOvXb/rfunWn4Natis8AwOUZ1sDeG5+anJF57E8AwPgZAHBdvMePW3NVzY8X4kbbu9/sSgajYUJ//wClr6/fFQDGWi9yuS5GjabDtUmufLW1tW2aTCoZa28y+IGFiTU1tZ/I5coEABj3rCAAwOnkybMb29s7XlA2PwrHTRkNBFCp1AHLkfLUXZC+kJA5D+bOeeMkjpNTsmQA4OrAAtjp6dmJeNLSonbTavsmyaQSuzs51AgW3Eu+/T4ax3V1ja9rtVqcg2YXhB3r3LJlYyqdPtbQ3PzIs7a2wdceGwQLHncrq1fg2GQygTgh7ayD4K3mdPLUuQ3d3T10HOv1elJqWnaePUbtghAIRQYAeDx7dmAWjnNy8/NxQRj0IzzCTk8/mjgwMEgOCHj1Kx7PtUMuV05taFDMdNAVcT3jS0pKI3EcGPjbQgqFAg8e1M1CFx2JjdGYQOv5WLQ2x8mJqVMqVZNulpYFAgB9mAWg0k28U175BxKJBJER4fGzg17PxGtHj53Id1AYWLm5+Vu7u7Vj2Wzn/p07wg5MmTK5ysyoOG1ENkYFQUjbk5CQOWY/P3NGhjHCG4YNdlLyoQykn8/3uQYA9e+/v1LKYNANCoXKS622LwxWFm6Wlm3Bcdjm9XGYHw7sj9lLo1FN92tqAwcHdZ7DseEIE2jaNR+sOsdiOQ2q1RqXwsLiBUOl08pCZeX9JcjC3riIrQDQjrEdHByUivckJWdJRwBvNVZe3pnNvb19OBccyjqe+sGasJIP1235u06nx6QMScmHsgGA87NAEGy0zHnrjSQcFxYV/8VmQZzklKx0g8EAM2fOKAEAlUAo0qErblj/x1NMJkOPwpCTm7+QqAx+ZIQgjC/9rgzBA4NB1+v1erLJZCLp9QYyCgv+//Bh/ZsAMMGWDUeZQNOuXy88w+E497a2trmcP39pKSZKKwvl5feWYBCK46PCUNWGgufzfZInTBh/x2QyqYgs/hMWjh47+UlPj3aMmxtXk3/qyJxzZ3P5587m+uHxdH52oI/P9DvoqvsSM3/ChsMgrAtavmxRBI6LioozMB9isCXuzzyMdPv6ev8XAJoJFqzWExW5JeXQwf3zwsM2XLOtg6ybUFpatgnHy955ewcAlAuEomqBUFSFRwCo2Jfw6XoymQzV1Q/m2irVszCB1hsauqTI1XVcd3tHJ6usrAKlz+vevZp5GAtxsTs/sbIwFLxAKOoVCEWdAqGoXyAU2TIxZk9sUjJWDB4e7i1Lly64AgD9NnPgpjTz+d5XjUYjxIvTTgxVquFADEe3dTK81rp4cchOHJ8998Wh3LzTUciC/298rxAs6J9xY4xMJuOGmxuvbtaslzEm2oYBitYZFxuxDdmoqakNIGLDLALUoXdRKFRcwAvWiyMY6XcrllbfvFlWXV/f6KtUqibTaDTTnj07ttuy4KDp98TsOA4AfwWAPlsWhmygTiaVqHx8pt+orn4wOyk562DM7u3rUP6plp0nmf1Uo2nnfrwp4rKllh+RECCRSCa93vAUqPeMqahIj60sEJqPCZFFSDGZ6FN6UCBs2KLvS8wU7I2LKEB3HYGFp2yI46PC16wNv1NZWT0/Ni7l9P7EXauolkVZ7sDo7+zscnJkA5FWjAN0pTeDAlAxugjJxUV7HMs5JWpqUq7EShSlkk6naz083Eo+2rgmUSaVNAJABwGGpVSq0sLCotJyctIDZVJJw0h9C8FGm5eXZ3VtbQO/rU3zGtZaCMLa3QGP59p+NDt1NVLkAI7xYeHRX2o07ezguUE1AIBaPu7Spa/f+eLLghNdXd0/Kk26uroZLS2todu2x4T6+/OLYvfsCJNJJY9wPzgctkYuV06JiIz/KjMjYYFMKpHbacCeKh+FQsZzsq3v405iBycfDYFMKulGIsBcLjcwfX29WSdOfL79cvHVePzPy2tSXUDAK1mrV4X+D4P33r37HgWFxVsrKu69e/du1dLIKPHXGelizPwGCoVsdi+Mr6ho8eX0NPHbdoCQjEajOWGiW2M4/Eid0DWG9NSjmslkuXfatCn4she/vnLNDGDhwuAjaal7569eFYpSWCEQiu76+c38Jjpq64bPP8t5ncNh9yoUzdMOJB3MwcRlMFjiC11ULm9+MTJKXAwADvchz5onhrUxY2ic6E/3/RM1fNasly+KPlpzgJDbPmugoj8LhCINAFQez8uchwuuqKjCrM+jUqnmHd+8aV08h8PWKhTNXrtj9p8nlHJUIM8FhFyhmtbUpJiONU501NZdhNYP29hjwgOABn9/X1RB+PJfBYucnVkteB4cHFR+PC/zPXd3nrq+vslvT2zSRUeA/GIQqFAXLhQtwvPJkz0rAUDtQMLrXLRovrnRKi29vYpMski86OOdf9u2PeaU0Wg0uxcqEAHE0x6QXwyCQiGb2ts7PfCczWahSg048Jj+JX9+M5709PTwdDq9uc9ABXvypNVdrdY8LSkQyKe79l2yB8ReZnbIMLhpxAcGnc7AGa7UHsZIanUbw7IJVJ3RZNn5lSuXZzs5OZXodHoThUKGMTQq+/yFS2mNjYoZu3YnXkxJjluOSdMqKM8NBPYQvnyf72/fqZynUj0KILJ02yiPMa9e/TYYTyZNmliuG9SZc8pMn+kXX3rJ7xsi56CNXbw45Pqft8VcbWiQ++7alfjvlJS4NVZJttpzCewVoUtuYOPT2trmWlVV449f70a61/pF5Nr1b3fj+MMP3zvWPzBg/mBXU1OHbmnAmCJ+WkxDRw4nzXFz47Y3NMr5ecfPRLu6jFOAJSWY1/9cQGCfETL/LTGeHDyU9w8AmCGTSpi2rSjRA0zIyDyW0dbWznZx4fS4u/GatVot9iUoEiTbPCUQijDGGrOPpAS5u7u1XrlyTVheUYUdItBoNFQ64y8B8fRljU1KWLv2vdOenhObsNzYtDmypLCo+H0AmCKTStxlUombTCrxBAA/cUL6F999d3sFlUo17dyxeRn24rY+bmtWWT5yOGmuuzuvbWBggGIBQcWq1xITRqOFFis9jprJZNmE7q5unFSNdU90dEJhk1zpffq0TFJQcLmDx+PWkUgkXa+2112hVE3FhMhkMnSrVr67ztt7+m0UNSwQifePCAYZweLwyOHkoKho8X8ws3d0dKH7kXARRoPBYIIfyghHv2AbTETRTCKTdIS0KtLS4hfMCw5K53JdO1Aq799/OKu6+sEbTXLlVBqNavTzm3nt1MnD/suWvX2BKM311sUP6nR284vVtbC2mjz5hbtOTsxafC+C6KfTx94YP95NxXZmlRITO2JaNpv1PZfrqjAaDC3ES1BqVWFhG5L4vt7xU6d4lWPjz+W6dHp6TpTPmDHt3N64CAF+k8KgJUqSPgaDfoPLdVVSyOT60TaReIfCy2tSOJvtnILrxTIcXQF7CJQ5vAEVYWijP5JhkOJzuBH4zNAkh/9hArPOizuNc+J9vUMkFA1dmkkc8RrOY68xMpNPvIMEAMb/Ax8yFO3NEwbjAAAAAElFTkSuQmCC"/>
                                            </svg>
                                        </i>
                                    </a>
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
                            <span>{@html config.copyright}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>