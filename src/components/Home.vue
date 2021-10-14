<template>
  <div class="home">
    <div class="home__search">
      <div class="home__titlebar">
        <div class="home__title">すぐに検索をする</div>
      </div>
      <div class="home__search-wrapper">
        <div class="home__search-wrapper-left">
          <div class="home__search-card">
            <div class="home__search-card-icon">
              <fa class="awsome" icon="map-marker-alt" />
            </div>
            <div class="home__search-card-name">
              場所から探す
            </div>
          </div>
          <div class="home__search-card">
            <div class="home__search-card-icon">
              <fa class="awsome" icon="font" />
            </div>
            <div class="home__search-card-name">
              名前から探す
            </div>
          </div>
        </div>
        <div class="home__search-wrapper-right">
          <div class="home__search-r-card">
            <div><fa class="awsome" icon="store-alt" /></div>
            チェーン店を探す
          </div>
          <div class="home__search-r-card">
            <div><fa class="awsome" icon="laptop" /></div>
            作業場所を探す
          </div>
          <div class="home__search-r-card">
            <div><fa class="awsome" icon="tags" /></div>
            タグから探す
          </div>
          <div class="home__search-r-card is-pick">
            <div><fa class="awsome" icon="search" /></div>
            詳細検索
          </div>
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
        flex: 0 0 50%;
        .home__search-card {
          box-sizing: border-box;
          display: flex;
          margin-bottom: 16px;
          padding: 20px;
          width: 100%;
          height: 112px;
          background-color: #F3F3F3;
          border-radius: 20px;
          .home__search-card-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            width: 60px;
            height: 60px;
            background-color:#DEB887;
            border-radius: 16px;
            .awsome {
              font-size: 36px;
              color: #FFFFFF;
            }
          }
          .home__search-card-name {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
      .home__search-wrapper-right {
        flex: 1 1 50%;
        display: flex;
        flex-wrap: wrap;
        padding-left: 28px;
        .home__search-r-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 12px 12px 0;
          width: 112px;
          height: 112px;
          font-size: 12px;
          background-color: #F3F3F3;
          border-radius: 20px;
          .awsome {
            margin-bottom: 16px;
            font-size: 32px;
          }
          &.is-pick {
            font-weight: bold;
            background-color: #DEB887;
            color: #FFFFFF;
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
        border-radius: 20px;
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