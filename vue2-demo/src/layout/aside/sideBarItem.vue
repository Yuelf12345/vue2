<template>
  <div>
    <el-submenu :index="item.path" v-if="item.children">
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item?.meta.title }}</span>
    </template>
    <sideBarItem v-for="(i, key) in item.children" :key="key" :item="i" />
  </el-submenu>

  <el-menu-item v-else :index="item.path" v-show="!item.hidden">
    <i :class="item.meta.icon"></i>
    <span slot="title">{{ item?.meta.title }}</span>
  </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "sideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$children[0].$parent = this.$parent;
  },
};
</script>
