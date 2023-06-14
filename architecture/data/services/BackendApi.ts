import axios from "axios";

export const BackendApi = axios.create({
    baseURL: "http://134.209.172.61:2160",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default BackendApi