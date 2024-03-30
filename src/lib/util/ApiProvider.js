import axios from "axios";
import {env} from "$lib/config.js";
import {onMount} from "svelte";

const host = env.HOST

const unAuthorizedHandler = () => {
    if (localStorage === undefined) return;
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    location.href = "/login"
}

export const api = {
    get: async (endPoint) => {
        return await request("get", endPoint)
    },
    post: async (endPoint, body) => {
        return await request("post", endPoint, body)
    }
}

async function request(method, endPoint, data = null) {
    try {
        let token = localStorage.getItem("accessToken");
        if (!token) location.href = "/login"
        const response = await axios({
            url: `${host}${endPoint}`,
            data: data,
            headers: {
                "X-Auth-Token": token,
                "Content-Type": "application/json;charset=UTF-8"
            },
            method: method
        });

        return response.data.data
    } catch (e) {
        if (e.code === "ERR_NETWORK") {
            unAuthorizedHandler()
            return null
        }
        if (e.response === undefined || e.response.status === 500) {
            alert("서버 오류가 발생하였습니다.")
            return null
        }
        if (e.response.status === 401) {
            unAuthorizedHandler()
            return null
        }
        alert(e.response.data.data.message)
    }
}