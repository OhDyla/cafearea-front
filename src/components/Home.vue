<template>
  <div class="home">
    <div class="home__search">
      <div class="home__titlebar">
        <div class="home__title">すぐに検索をする</div>
      </div>
      <div class="home__search-wrapper">
        <div class="home__search-wrapper-left">
          <div class="home__search-card">場所から<br>探す</div>
          <div class="home__search-card">名前から<br>探す</div>
        </div>
        <div class="home__search-wrapper-right">
          <div class="home__search-r-card">>&nbsp;&nbsp;チェーン店を探す</div>
          <div class="home__search-r-card">>&nbsp;&nbsp;作業場所を探す</div>
          <div class="home__search-r-card">>&nbsp;&nbsp;タグから探す</div>
          <div class="home__search-r-card is-pick">詳細検索</div>
        </div>
      </div>
    </div>
    <div class="home__trend">
      <div class="home__titlebar">
        <div class="home__title">トレンド</div>
        <div class="home__title-button">詳細はこちら</div>
      </div>
      <div class="home__trend-wrapper">
        <div v-for="i of 6" :key="i" class="home__trend-card">
          <div class="home__trend-card-img"></div>
          <div class="home__trend-card-title">エニーカフェ</div>
          <div class="home__trend-card-locate">江東区&nbsp;豊洲</div>
          <div class="home__trend-card-detail">
            エニーアップ社から遂にコーヒーショップが誕生！
          </div>
        </div>
      </div>
    </div>
    <div class="home__ranking">
      <div class="home__titlebar">
        <div class="home__title">ランキング</div>
        <div class="home__title-button">詳細はこちら</div>
      </div>
      <div class="home__rank-wrapper">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'

export default {
  setup(_, context) {

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home__titlebar {
    margin-top: 24px;
    margin-bottom: 20px;
    padding-right: 12px;
    display: flex;
    justify-content: space-between;
    .home__title {
      font-size: 24px;
      font-weight: bold;
    }
    .home__title-button {
      padding: 4px 12px;
      border: 1px solid #AAAAAA;
      font-size: 18px;
      border-radius: 4px;
    }
  }

  .home__search {
    width: 100%;
    .home__search-wrapper {
      display: flex;
      width: 100%;
      .home__search-wrapper-left {
        flex: 0 0 40%;
        .home__search-card {
          box-sizing: border-box;
          margin-bottom: 8px;
          padding: 12px 0;
          width: 100%;
          text-align: center;
          font-weight: bold;
          color: #FFFFFF;
          background-color: #800000;
          border: 4px solid #BBBBBB;
          border-radius: 8px;
        }
      }
      .home__search-wrapper-right {
        flex: 1 1 60%;
        padding-left: 20px;
        .home__search-r-card {
          margin-bottom: 12px;
          padding-left: 20px;
          width: 60%;

          &.is-pick {
            border: 1px solid #666666;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .home__trend {
    .home__trend-wrapper {
      display: flex;
      flex-wrap: wrap;
      .home__trend-card {
        box-sizing: border-box;
        margin-right: 16px;
        margin-bottom: 16px;
        padding: 20px;
        width: 22%;
        background-color: rgba(245, 222, 179, 0.6);
        border-radius: 8px;
        .home__trend-card-img {
          margin-bottom: 8px;
          width:100%;
          height: 100px;
          background-color: #FFFFFF;
        }
        .home__trend-card-title {
          font-size: 20px;
          font-weight: bold;
        }
        .home__trend-card-locate {
          margin-bottom: 8px;
          font-size: 12px;
          color: #666666;
        }
        .home__trend-card-detail {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .home__ranking {
    .home__ranking-wrapper {
      .home__ranking-card {

      }
    }
  }

}
</style>