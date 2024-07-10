<template lang="">
  <div  class="container">
    <el-container>
      <el-aside width="200px" class="aside">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
            <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from './aside'
export default {
    components: {
        Aside
    },
};
</script>
<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  .aside {
    height: 100vh;
  }
  .header{
    height: 50px !important;
    background: #ccc;
  }
  .main{
    padding: 0px;
    height: calc(100vh - 100px);
  }
  .footer{
    height: 50px !important;
    background: #ccc;
  }
}
</style>
