import {env} from "$lib/config.js"

export function load({ fetch, params }) {
    console.log("env: ", env)

    return {
        props: {
            "KR_NAME": env.VITE_KR_NAME,
            "EN_NAME": env.VITE_EN_NAME,
            "DOMAIN": env.VITE_DOMAIN,
            "favicon": `/public/assets/logo/${env.VITE_EN_NAME.toLowerCase()}/logo.png`,
            "THEME": env.VITE_THEME
        }
    }
}