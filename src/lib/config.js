import dotenv from "dotenv";

dotenv.config()

export const env = {
    KR_NAME: import.meta.env.VITE_KR_NAME,
    EN_NAME: import.meta.env.VITE_EN_NAME,
    KEY: import.meta.env.VITE_KEY
}