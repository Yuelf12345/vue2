<template lang="">
  <div>
    <el-menu router class="menu">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item>
        <router-link :to="{ name: 'slot' }">插槽</router-link>
      </el-menu-item>
      <!-- <el-menu-item @click="handleToSlot">插槽</el-menu-item> -->
      <el-submenu index="/page">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>页面</span>
        </template>
        <el-menu-item index="/page1">页面1</el-menu-item>
        <el-menu-item index="/page2">页面2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">禁用</span>
      </el-menu-item>
      <el-submenu index="/page">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>页面</span>
        </template>
        <el-menu-item index="/page1">页面1</el-menu-item>
        <el-menu-item index="/page2">页面2</el-menu-item>
      </el-submenu>
      <el-submenu index="/vuex">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>vuex</span>
        </template>
        <el-menu-item index="/data1">数据1</el-menu-item>
        <el-menu-item index="/data2">数据2</el-menu-item>
      </el-submenu>
      <el-menu-item index="/login">登录</el-menu-item>
      <!-- <SideBarItem
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      /> -->
    </el-menu>
  </div>
</template>
<script>
import SideBarItem from "./sideBarItem.vue";

export default {
  name: "Aside",
  components: {
    SideBarItem,
  },
  data() {
    return {
      routes: [
        {
          path: "/home",
          name: "home",
          meta: {
            title: "首页",
            icon: "el-icon-s-home",
          },
        },
        {
          path: "/page",
          name: "page",
          redirect: "/page1",
          meta: {
            title: "页面",
            icon: "el-icon-s-home",
          },
          children: [
            {
              path: "/page1",
              name: "page1",
              meta: {
                title: "page1",
              },
            },
            {
              path: "/page2",
              name: "page2",
              meta: {
                title: "page2",
              },
            },
          ],
        },
        {
          path: "/login",
          name: "login",
          meta: {
            title: "登录",
            icon: "el-icon-position",
          },
        },
      ],
    };
  },
  methods: {
    handleToSlot() {
      // 跳转，有历史记录
      this.$router.push({
        name: "slot",
      });
      // 跳转，没有历史记录
      // this.$router.replace({
      //     name:"aboutView"
      // })
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100vh;
}
</style>
