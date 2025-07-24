import axios from "axios";
import { HOST_API } from "../config-global";


export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}
const axiosInstance = axios.create({
    baseURL: HOST_API,
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || "some thing went wrong !"
        )
);

export const axiosPrivate = axios.create({
    baseURL: HOST_API,
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    withCredentials: true,
});

export const setHeaderToken = (token: string) => {
    console.log(token);
    
    axiosPrivate.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export default axiosInstance;