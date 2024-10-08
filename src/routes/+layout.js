export function load({ fetch}) {
    const env = import.meta.env

    return {
        props: {
            "KR_NAME": env.VITE_KR_NAME,
            "EN_NAME": env.VITE_EN_NAME,
            "DOMAIN": env.VITE_DOMAIN,
            "THEME": env.VITE_THEME
        },
        ...env
    }
}