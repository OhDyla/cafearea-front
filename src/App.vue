<template>
    <el-container>
      <el-header style="background-color: rgb(238, 241, 246)">Header</el-header>
      <el-container>
        <el-aside width="160px">Aside</el-aside>
        <el-container>
          <el-main style="background-color: rgb(200, 200, 255)">
            <router-view />
          </el-main>
          <el-footer style="background-color: rgb(200, 200, 20)">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>


  <!-- <Header /> -->
  <!-- <Sidemenu /> -->
</template>

<script lang="ts">
  import Header from './components/general/Header.vue'
  import Sidemenu from './components/general/Sidemenu.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Sidemenu,
    }
  }
</script>

<style scoped lang="scss">
.main-wrapper {
  position: fixed;
  top: 60px;
  left: 160px;
}
</style>