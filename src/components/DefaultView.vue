<template>
    <el-container>
      <el-header style="background-color: #FFFFFF">
        <Header></Header>
      </el-header>
      <el-container>
        <Sidemenu></Sidemenu>
        <el-container>
          <el-main style="background-color: #FFFFFF">
            <router-view />
          </el-main>
          <el-footer style="background-color: #EEEEEE">
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script lang="ts">
  import Header from './general/Header.vue'
  import Sidemenu from './general/Sidemenu.vue'
  import Footer from './general/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Sidemenu,
      Footer,
    }
  }
</script>

<style scoped lang="scss">
.el-main {
  min-height: calc(100vh - 120px);
}
</style>