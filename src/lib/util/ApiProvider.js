import axios from "axios";
import {env} from "$lib/config.js";

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
    },
    patch: async (endPoint, body) => {
        return await request("patch", endPoint, body)
    }
}

async function request(method, endPoint, data = null) {
    try {
        let token = localStorage.getItem("accessToken");
        if (!token) location.href = "/login"
        const response = await axios({
            url: `${host}${endPoint}`,
            data: data === null ? data : JSON.stringify(data),
            headers: {
                "X-Auth-Token": token,
                "Content-Type": "application/json;charset=UTF-8"
            },
            method: method
        })

        return response.data.data
    } catch (e) {
        console.log(e)
        if (e.response.status === 401) {
            alert(e.response.data.data.message)
            return unAuthorizedHandler()
        }

        if (e.response.status === 500) {
            alert("서버 오류가 발생하였습니다.")
            return null
        }
        alert(e.response.data.data.message)
        return null
    }
}