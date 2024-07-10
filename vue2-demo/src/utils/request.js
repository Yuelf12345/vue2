// 封装axios
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service