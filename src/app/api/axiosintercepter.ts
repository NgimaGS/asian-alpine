import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "your-api-base-url",
  // You can add other configuration options here
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Do something before sending the request, e.g., adding headers
    config.headers = config.headers || {};
    config.headers["Authorization"] = "test";
    // Add your headers here
    // config.headers['Authorization'] = 'Bearer your-token';
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Do something with the response data, e.g., logging
    // console.log(response.data);
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
