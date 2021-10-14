<template>
    <el-container>
      <el-header style="background-color: #FFFFFF">
        <Header></Header>
      </el-header>
      <el-container>
        <router-view />
      </el-container>
    </el-container>
</template>

<script lang="ts">
  import Header from './general/Header.vue'
  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>

<style scoped lang="scss">
</style>