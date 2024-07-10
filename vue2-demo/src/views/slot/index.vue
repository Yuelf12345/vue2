<template lang="">
    <div>
        slotPage
        <SlotTest :parentData="parentData">
            <template>
                <h2>默认插槽</h2>
            </template>
            <template slot="userInfo">
                <div>
                <h2>具名插槽</h2>
                <p>Name: {{ user.name }}</p>
                <p>Age: {{ user.age }}</p>
                </div>
            </template>
            <template v-slot:subDataInfo="{data}">
                <div>
                    <h2>作用域插槽</h2>
                    {{ data }}
                </div>
            </template>
        </SlotTest>
    </div>
</template>
<script>
import SlotTest from './slotTest.vue'
export default {
    name: 'slotPage',
    components: {
        SlotTest
    },
    data() {
        return {
            user: {
                name: '张三',
                age: 18
            },
            parentData: {
                msg: '父组件数据'
            }
        }
    }
}
</script>
<style lang="">

</style>