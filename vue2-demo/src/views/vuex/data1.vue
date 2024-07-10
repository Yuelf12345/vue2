<template>
    <div>
        <h1>VueX</h1>
        <div>
            姓名：{{ $store.state.name }}
        </div>
        <div>
            年龄：{{ $store.state.age }}
        </div>
        10年后年龄
        {{ tenYearOld }}
    </div>
</template>
<script>
// import { mapState，mapGetters } from 'vuex';
export default {
    computed: {
        //语法糖
        // ...mapState(['name', 'age']),
        // ...mapGetters(["tenYearOld"])
        tenYearOld(){
          return this.$store.state.age + 10
            // return this.$store.getters.tenYearOld
        },
    },
}
</script>
<style lang="">

</style>