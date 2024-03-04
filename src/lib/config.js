import dotenv from "dotenv";

dotenv.config()

export const env = {
    KR_NAME: import.meta.env.VITE_KR_NAME,
    EN_NAME: import.meta.env.VITE_EN_NAME,
    CLIENT_KEY: import.meta.env.VITE_KEY,
    HOST: import.meta.env.VITE_HOST
}