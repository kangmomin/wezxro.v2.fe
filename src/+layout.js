export async function load() {
    return {
        favicon: `/public/assets/logo/${import.meta.env.VITE_EN_NAME.toLowerCase()}/logo.ico`
    };
}
