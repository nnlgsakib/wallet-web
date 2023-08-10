<template>
  <div class="guide-page pt-30">
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#9F54BA" @change="handleChange" :loop="true" lazy-render :stop-propagation="false">
      <van-swipe-item key="1">
        <div>
          <WormTransition v-if="idx == 0">
            <template v-slot:t1>
              <img class="icon" src="./imgs/symbol2.png" />
            </template>
            <template v-slot:t2>
              <img class="icon" src="./imgs/symbol3.png" />
            </template>
            <template v-slot:t3>
              <img class="icon" src="./imgs/symbol4.png" />
            </template>
            <template v-slot:t4>
              <img class="icon" src="./imgs/symbol5.png" />
            </template>
            <template v-slot:t5>
              <img class="icon" src="./imgs/black.png" />
            </template>
            <template v-slot:icon>
              <img class="logo" src="@/assets/token/logowallet.png" />
            </template>
          </WormTransition>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap1") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap1title") }}</div>
        </div>
      </van-swipe-item>
      <van-swipe-item key="2" >
        <div>
          <WormTransition  v-if="idx == 1">
            <template v-slot:t1>
              <img class="icon" src="./imgs/symbol2.png" />
            </template>
            <template v-slot:t2>
              <img class="icon" src="./imgs/symbol3.png" />
            </template>
            <template v-slot:t3>
              <img class="icon" src="./imgs/symbol4.png" />
            </template>
            <template v-slot:t4>
              <img class="icon" src="./imgs/symbol5.png" />
            </template>
            <template v-slot:t5>
              <img class="icon" src="./imgs/black.png" />
            </template>
            <template v-slot:icon>
              <img src="./imgs/shakehands.png" />
            </template>
          </WormTransition>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap2") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap2title") }}</div>
        </div>
      </van-swipe-item>
      <van-swipe-item key="3">
        <div>
          <WormTransition  v-if="idx == 2">
            <template v-slot:t1>
              <img class="icon" src="./imgs/symbol2.png" />
            </template>
            <template v-slot:t2>
              <img class="icon" src="./imgs/symbol3.png" />
            </template>
            <template v-slot:t3>
              <img class="icon" src="./imgs/symbol4.png" />
            </template>
            <template v-slot:t4>
              <img class="icon" src="./imgs/symbol5.png" />
            </template>
            <template v-slot:t5>
              <img class="icon" src="./imgs/black.png" />
            </template>
            <template v-slot:icon>
              <img src="./imgs/upload.png" />
            </template>
          </WormTransition>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap3") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap3title") }}</div>
        </div>
      </van-swipe-item>
      <van-swipe-item key="4">
        <div>
          <WormTransition  v-if="idx == 3">
            <template v-slot:t1>
              <img class="icon" src="./imgs/symbol2.png" />
            </template>
            <template v-slot:t2>
              <img class="icon" src="./imgs/symbol3.png" />
            </template>
            <template v-slot:t3>
              <img class="icon" src="./imgs/symbol4.png" />
            </template>
            <template v-slot:t4>
              <img class="icon" src="./imgs/symbol5.png" />
            </template>
            <template v-slot:t5>
              <img class="icon" src="./imgs/black.png" />
            </template>
            <template v-slot:icon>
              <img src="./imgs/shield.png" />
            </template>
          </WormTransition>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap4") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap4title") }}</div>
        </div>
      </van-swipe-item>
    </van-swipe> -->
    <el-carousel autoplay @change="handleChange" indicator-position="outside">
      <el-carousel-item style="height: 70vh">
        <div>
          <div class="wormBox">
            <WormTransition v-if="idx == 0">
              <template v-slot:t1>
                <img class="icon" src="./imgs/symbol2.png" />
              </template>
              <template v-slot:t2>
                <img class="icon" src="./imgs/symbol3.png" />
              </template>
              <template v-slot:t3>
                <img class="icon" src="./imgs/symbol4.png" />
              </template>
              <template v-slot:t4>
                <img class="icon" src="./imgs/symbol5.png" />
              </template>
              <template v-slot:t5>
                <img class="icon" src="./imgs/black.png" />
              </template>
              <template v-slot:icon>
                <img class="logo" src="@/assets/token/logowallet.png" />
              </template>
            </WormTransition>
          </div>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap1") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap1title") }}</div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 70vh">
        <div>
          <div class="wormBox">
            <WormTransition v-if="idx == 1">
              <template v-slot:t1>
                <img class="icon" src="./imgs/symbol2.png" />
              </template>
              <template v-slot:t2>
                <img class="icon" src="./imgs/symbol3.png" />
              </template>
              <template v-slot:t3>
                <img class="icon" src="./imgs/symbol4.png" />
              </template>
              <template v-slot:t4>
                <img class="icon" src="./imgs/symbol5.png" />
              </template>
              <template v-slot:t5>
                <img class="icon" src="./imgs/black.png" />
              </template>
              <template v-slot:icon>
                <img src="./imgs/shakehands.png" />
              </template>
            </WormTransition>
          </div>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap2") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap2title") }}</div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 70vh">
        <div>
          <div class="wormBox">
            <WormTransition v-if="idx == 2">
              <template v-slot:t1>
                <img class="icon" src="./imgs/symbol2.png" />
              </template>
              <template v-slot:t2>
                <img class="icon" src="./imgs/symbol3.png" />
              </template>
              <template v-slot:t3>
                <img class="icon" src="./imgs/symbol4.png" />
              </template>
              <template v-slot:t4>
                <img class="icon" src="./imgs/symbol5.png" />
              </template>
              <template v-slot:t5>
                <img class="icon" src="./imgs/black.png" />
              </template>
              <template v-slot:icon>
                <img src="./imgs/upload.png" />
              </template>
            </WormTransition>
          </div>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap3") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap3title") }}</div>
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 70vh">
        <div>
          <div class="wormBox">
            <WormTransition v-if="idx == 3">
              <template v-slot:t1>
                <img class="icon" src="./imgs/symbol2.png" />
              </template>
              <template v-slot:t2>
                <img class="icon" src="./imgs/symbol3.png" />
              </template>
              <template v-slot:t3>
                <img class="icon" src="./imgs/symbol4.png" />
              </template>
              <template v-slot:t4>
                <img class="icon" src="./imgs/symbol5.png" />
              </template>
              <template v-slot:t5>
                <img class="icon" src="./imgs/black.png" />
              </template>
              <template v-slot:icon>
                <img src="./imgs/shield.png" />
              </template>
            </WormTransition>
          </div>
          <div class="title tit-big text-center f-24">{{ t("introductorypage.bootstrap4") }}</div>
          <div class="title-center tit-small text-center f-12">{{ t("introductorypage.bootstrap4title") }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>

  <!-- Log in to create a new account -->
  <div class="btn-groups">
    <div class="flex center container pl-28 pr-28">

      <van-button round block plain class="mr-10" @click="handleImport">
        <span>{{
          t("createAccountpage.mnemonicBtn")
        }}</span>

      </van-button>

      <van-button round block type="primary" @click="tologin">
        {{
          t("introductorypage.create")
        }}
      </van-button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { onMounted, ref } from 'vue'
import { createApp } from 'vue'
import { Swipe, SwipeItem, Button, Toast, Popover } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import WormTransition from '@/components/wromTransition/index.vue'
import { useI18n } from 'vue-i18n'
import localforage from "localforage";
import { onUnmounted } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
export default {
  name: 'guide-step1',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Popover.name]: Popover,
    ElCarousel,
    ElCarouselItem,
    WormTransition
  },
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const tologin = () => {
      router.push({
        name: 'newwallet'
      })
    }
    const idx = ref(0)
    onMounted(() => {
      (async function () {
        const hasMove = localStorage.getItem("hasMove");
        if (!hasMove) {
          router.replace({ name: "guidance" })
          // on confirm
          const vuex = localStorage.getItem("vuex");
          const mnemonic = localStorage.getItem("mnemonic");
          if (vuex && mnemonic) {
            Toast.loading({ duration: 0, message: t('common.moveTip2') })
            try {
              let time = setTimeout(async () => {
                const vuexp = JSON.parse(vuex);
                const mnemonicp = JSON.parse(mnemonic);
                // store.commit("account/UPDATE_ACCOUNT", vuexp.account);
                // store.commit("system/UPDATE_SYSTEM", vuexp.system);

                // const res1 = await localforage.setItem('vuex', vuexp)
                await localforage.setItem("mnemonic", mnemonicp);
                await localforage.setItem("vuex", vuexp);
                // localStorage.removeItem("vuex");
                // localStorage.removeItem("mnemonic");
                localStorage.setItem("hasMove", "true");
                location.reload();
              }, 5000)
            } catch (err) {
              localStorage.setItem("hasMove", "true");
              console.error(err);
              Toast(JSON.stringify(err))
            }
          }

        }
      })();
    })
    onUnmounted(() => {

    })
    const handleImport = () => {
      router.push({ name: "export-mnemonic" })
    }
    const handleChange = (e) => {
      idx.value = e

    }

    return {
      handleChange,
      t,
      tologin,
      handleImport,
      idx

    }
  }
}
</script>
<style lang="scss" scoped>
:deep() {
  .van-popover__wrapper {
    width: 49%;
    display: block;
    margin-right: 2%;
  }

  .el-carousel__indicators {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 20vh;
  }

  .el-carousel__indicator.is-active button {
    background: #9F54BA;
  }

  .el-carousel__indicators--outside button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

}

.wormBox {
  height: 250px;
}

.container {
  &>button {
    width: 49%;
  }
}

.guide-page {
  margin: 0 auto;

  .tit-big {
    font-weight: bold;
  }

  .tit-small {
    padding-left: 70px;
    padding-right: 70px;
  }
}

.el-carousel {
  height: 70vh;
}

.el-carousel .el-carousel__item {
  margin-top: 20px;
  color: #000;
  font-size: 14px;
  text-align: center;
  background-repeat: no-repeat;

  .iconele {
    width: 180px;
    height: 180px;
    margin: 0 auto;
    // border-radius: 50%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    // background-image: url('./imgs/background.png');
    background-position: left 0 top 0 right 0 bottom 0;

    .iconinner {
      width: 175px;
      height: 175px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left 0 top 0 right 0 bottom 0;

      img {
        display: block;
        width: 80px;
      }
    }
  }

  .title {
    line-height: 20px;
    margin-top: 44px;
    margin-bottom: 16px;
  }

  .title-center {
    color: #b3b3b3;
    line-height: 16px;
  }

  .icon {
    width: 30px;
  }

  .logo {
    width: 60px !important;
  }
}

.form-button {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;

  button {
    font-size: 12px;
    padding: 0;
    margin: 20px;
  }

}</style>