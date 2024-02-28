export function load({ fetch, params }) {
    const env = import.meta.env

    return {
        props: {
            "KR_NAME": env.VITE_KR_NAME,
            "EN_NAME": env.VITE_EN_NAME
        }
    }
}