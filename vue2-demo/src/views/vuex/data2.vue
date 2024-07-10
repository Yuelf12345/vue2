<template>
    <div>
        <h1>修改 VueX</h1>
        <div>
            年龄：{{ $store.state.age }}
        </div>
        <el-button @click="ageIncrease">同步修改年龄+1</el-button>
        <el-button @click="ageIncreaseAsyn">异步修改年龄+1</el-button>
    </div>
</template>
<script>

import { mapMutations, mapActions } from 'vuex'
export default {
    methods: {
        ageIncrease() {
            this.$store.commit('ageIncrease')
        },
        ageIncreaseAsyn() {
            this.$store.dispatch('ageIncreaseAsyn')
        },
        // ...mapMutations(['ageIncrease']),
        // ...mapActions(['ageIncreaseAsyn']),
    }
}
</script>
<style lang="">

</style>