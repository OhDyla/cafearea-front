<template>
  <div class="header">
    <div class="header__left-wrapper">
      <div>CafeArea</div>
    </div>
    <div class="header__right-wrapper">
      <el-button>検索</el-button>
      <el-button>マイページ</el-button>
      <el-button type="info">投稿</el-button>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 100%;
  .header__right-wrapper {
    margin: 0 0 0 auto;
  }
}
</style>