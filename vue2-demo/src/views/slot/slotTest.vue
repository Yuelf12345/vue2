<template>
    <div>
        <h1>SlotTest</h1>
        <div>
            <slot></slot>
            <slot name="userInfo"></slot>
            <slot name="subDataInfo" :data="subdata"></slot>
        </div>
        {{ parentData }}
    </div>
</template>
<script>
export default {
    name: 'slotTest',
    props:['parentData'],
    data(){
        return {
            subdata:{
                msg: '子组件数据',
                count: 1
            }
        }
    }
}
</script>
<style lang="">

</style>