import request from '@/utils/request'

//登录接口
export function apiLogin(data){
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}

export function apiGetData(){
    return request({
        url: '/api/getData',
        method: 'get'
    })
}