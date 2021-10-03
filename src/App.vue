<template>
  <Header />
  <Sidemenu />
  <div class="main-wrapper">
    <router-view />
  </div>
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
  left: 60px;
}
</style>