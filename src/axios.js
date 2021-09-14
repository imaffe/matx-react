import axios from 'axios'
import {devConfig} from "./config";

const axiosInstance = axios.create({
        baseURL: devConfig.serverBaseUrl,
  }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
