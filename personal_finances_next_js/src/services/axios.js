import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx){
    const { 'personalfinances.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:5281/api'
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        api.defaults.headers['Content-Type'] = "application/json";
    }
}