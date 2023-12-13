import axios from "axios";


export const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
    'Cache-Control': 'no-cache',
  },
  timeout: 60000,
});

axiosClient.interceptors.response.use(function (response) {
  return response.data;
});

axiosClient.interceptors.request.use(async function (config) {
 
  return config;
});

export const fetchAxios = (url, params) => axiosClient.get(url, { params });
export default axiosClient;
