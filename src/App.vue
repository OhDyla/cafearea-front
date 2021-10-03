<template>
    <el-container>
      <el-header style="background-color: rgb(238, 241, 246)">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>すべて</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>トレンド</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span>ランキング</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <span>チェーン店検索</span>
            </el-menu-item>
            <el-menu-item index="5" disabled>
              <i class="el-icon-map-location"></i>
              <span>場所から検索</span>
            </el-menu-item>
            <el-menu-item index="6" disabled>
              <i class="el-icon-document"></i>
              <span>タグから検索</span>
            </el-menu-item>
            <el-menu-item index="7" disabled>
              <i class="el-icon-document"></i>
              <span>カスタム検索</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-setting"></i>
              <span>設定</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="background-color: rgb(200, 200, 255)">
            <router-view />
          </el-main>
          <el-footer style="background-color: rgb(200, 200, 20)">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
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
.el-main {
  min-height: calc(100vh - 120px);
}
</style>