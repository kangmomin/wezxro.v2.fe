import axios from "axios";
import {env} from "$lib/config.js";

const host = env.HOST

const unAuthorizedHandler = () => {
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

        if (response.status > 299) {

            if (response.data.message) alert(response.data.message)
            else return null

            location.href = "/dashboard/statistic"
        }

        return response.data.data
    } catch (e) {
        console.log(e)
        if (e.response.status === 401) unAuthorizedHandler()
        alert(e.response.data.data.message)
    }
}