let envConfig = import.meta.env;
export const env = {
    KR_NAME: envConfig.VITE_KR_NAME,
    EN_NAME: envConfig.VITE_EN_NAME,
    CLIENT_KEY: envConfig.VITE_KEY,
    HOST: envConfig.VITE_HOST,
    THEME: envConfig.VITE_THEME,
    DOMAIN: envConfig.DOMAIN
}