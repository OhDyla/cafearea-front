<template>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>ホーム</span>
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
              <i class="el-icon-map-location"></i>
              <span>現在地から検索</span>
            </el-menu-item>
            <el-menu-item index="7" disabled>
              <i class="el-icon-document"></i>
              <span>タグから検索</span>
            </el-menu-item>
            <el-menu-item index="8" disabled>
              <i class="el-icon-search"></i>
              <span>カスタム検索</span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="el-icon-setting"></i>
              <span>設定</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
</template>

<script lang="ts">

</script>

<style lang="scss">

</style>