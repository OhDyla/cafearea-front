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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100vw;
  height: 60px;
  background-color: #FAFAFA;
  border-bottom: 1px solid #EEEEEE;
}
</style>