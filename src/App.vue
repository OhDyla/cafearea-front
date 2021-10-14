<template>
  <DefaultView></DefaultView>
</template>

<script lang="ts">
  import DefaultView from './components/DefaultView.vue'
  export default {
    name: 'App',
    components: {
      DefaultView
    }
  }
</script>

<style scoped lang="scss">
.el-main {
  min-height: calc(100vh - 120px);
}
</style>