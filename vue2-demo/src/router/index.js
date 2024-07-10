//引入Vue|Vue-router
import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// layout
import Layout from '@/layout'

import routerView from '@/components/routerView.vue'

//使用路由插件
Vue.use(Router)

export const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home'
                }
            },
            {
                path: '/slot',
                name: 'slot',
                component: () => import('@/views/slot'),
                meta: {
                    title: '插槽',
                    icon: 'el-icon-s-home'
                },
            },
            {
                path: '/page',
                name: 'page',
                redirect: '/page1',
                component: routerView,
                meta: {
                    title: '页面',
                    icon: 'el-icon-s-home'
                },
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        component: () => import('@/views/page/page1'),
                        meta: {
                            title: 'page1',
                        }
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        component: () => import('@/views/page/page2'),
                        meta: {
                            title: 'page2',
                        }
                    }
                ]
            },
            {
                path: '/vuex',
                name: 'vuex',
                redirect: '/data1',
                component: routerView,
                meta: {
                    title: '页面',
                    icon: 'el-icon-s-home'
                },
                children: [
                    {
                        path: '/data1',
                        name: 'data1',
                        component: () => import('@/views/vuex/data1'),
                        meta: {
                            title: 'data1',
                        }
                    },
                    {
                        path: '/data2',
                        name: 'data2',
                        component: () => import('@/views/vuex/data2'),
                        meta: {
                            title: 'data2',
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        hidden: true
    }, 
    {
        path: '*',
        component: () => import('@/views/notFount.vue'),
        hidden: true
    }
]
const createRouter = () => new Router({
    mode: 'history',
    routes
})


const router = createRouter()

// 路由守卫
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    setTimeout(()=>{
        NProgress.done()
    },500)
    next();
})

export default router