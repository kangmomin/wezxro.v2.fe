export function load({ fetch, params }) {
    const env = import.meta.env

    return {
        props: {
            "KR_NAME": env.VITE_KR_NAME,
            "EN_NAME": env.VITE_EN_NAME,
            "DOMAIN": env.VITE_DOMAIN,
            "favicon": `/public/assets/logo/${env.VITE_EN_NAME.toLowerCase()}/logo.png`
        }
    }
}