import axios from "axios";
import {env} from "$lib/config.js";

const host = env.HOST

export const api = {
    get: async (endPoint) => {
        try {
            let token = localStorage.getItem("accessToken");
            if (!token) location.href = "/login"
            const response = await axios.get(`${host}${endPoint}`, {
                headers: {
                    "X-Auth-Token": token,
                    "Content-Type": "application/json"
                },
            });

            if (response.status > 299) {
                if (response.data.message) alert(response.data.message)
                else return null

                location.href = "/dashboard/statistic"
            }

            return response.data.data
        } catch (e) {
            return null
        }
    }
}