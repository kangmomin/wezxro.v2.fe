import axios from "axios";
import {env} from "$lib/config.js";
import {goto} from "$app/navigation";

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
    delete: async (endPoint, body) => {
        return await request("delete", endPoint, body)
    },
    patch: async (endPoint, body) => {
        return await request("patch", endPoint, body)
    }
}

async function request(method, endPoint, data = null) {
    try {
        let token = localStorage.getItem("accessToken");
        if (!token && endPoint !== "/u/login" && endPoint !== "/u/join") location.href = "/login"
        if (Boolean(localStorage.getItem("isDemo")) && method.toUpperCase() !== "GET") {
            alert("데모 계정은 접근할 수 없습니다.")
            return null
        }
        const response = await axios({
            url: `${host}${endPoint}`,
            data: data === null ? data : JSON.stringify(data),
            headers: {
                "X-Auth-Token": token,
                "Content-Type": "application/json;charset=UTF-8"
            },
            method: method
        })

        if (response.data.status === "ERROR" && endPoint !== "/u/login") {
            if (response.data.data.code === "A204") {
                unAuthorizedHandler()
            }

            alert(response.data.data.message)
            return null
        }

        return response.data.data
    } catch (e) {
        console.log(e)
        if (e.response.status === 401) {
            alert(e.response.data.data.message)
            return unAuthorizedHandler()
        }

        if (e.response.status === 403) {
            alert(e.response.data.data.message)
            await goto("/")
        }

        if (e.response.status === 500) {
            alert("서버 오류가 발생하였습니다.")
            return null
        }
        alert(e.response.data.data.message)
        return null
    }
}