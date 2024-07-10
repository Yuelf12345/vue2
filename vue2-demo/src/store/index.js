import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //数据，类似data
    state: {
        name: "张三",
        age: 12
    },
    //获取数据 类似计算属性，有缓存效果
    getters: {
        tenYearOld(state) {
            // return this.$store.state.age = 20
            return state.age + 10
        }
    },
    //定义方法，操作state
    mutations: {
        ageIncrease() {
            this.state.age++
        },
    },
    //异步操作mutation
    actions: {
        ageIncreaseAsyn({ commit }) {
            setTimeout(() => {
                commit("ageIncrease")
            }, 2000)
        }
    },
    //模块
    modules: {

    }
})

export default store