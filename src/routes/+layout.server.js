import {env} from "$lib/config.js"

export function load({ fetch, params }) {
    return {
        props: {
            "KR_NAME": env.KR_NAME,
            "EN_NAME": env.EN_NAME,
            "DOMAIN": env.DOMAIN,
            "favicon": `/public/assets/logo/${env.EN_NAME.toLowerCase()}/logo.png`,
            "THEME": env.THEME,
            "CLIENT_KEY": env.CLIENT_KEY
        }
    }
}