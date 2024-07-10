<template>
    <div>
        <h1>login</h1>
        <el-button @click="login('admin')">admin登录</el-button>
        <el-button @click="login('supAdmin')">supAdmin登录</el-button>
        <el-button @click="logOut">退出</el-button>

        <h2>{{ msg }}</h2>
        <el-button @click="getData">获取数据</el-button>
    </div>
</template>
<script>
import { apiLogin,apiGetData } from '@/api'
export default {
    data(){
        return{
            msg: '无数据'
        }
    },
    methods: {
        login(name) {
            apiLogin({ name }).then((res) => {
                console.log(res)
                if (res.code == 200) {
                    localStorage.setItem('token', res.data.token)
                    // this.$router.push('/')
                }
            })
        },
        logOut() {
            this.msg =  '用户退出'
            localStorage.removeItem('token')
        },
        getData(){
            apiGetData().then((res)=>{
                console.log(res);
                this.msg =  res.data.msg
            })
        }
    }
}
</script>
<style lang="">

</style>