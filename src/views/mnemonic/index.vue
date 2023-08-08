<template>
  <van-sticky>
    <NavHeader @clickRight="handleRight" backReplaceName="home" :title="title">
      <template v-slot:left>
      <span class="back" @click="appProvide.back">{{ t("common.back") }}</span>
    </template>
    <template v-slot:right>
        <cancel-btn />
      </template>
    </NavHeader>
  </van-sticky>
  <router-view v-slot="{ Component }" >
    <keep-alive :exclude="['mnemonic-step2','mnemonic-step3','mnemonic-backupSuccessful']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script lang="ts">
import { Icon, Toast, Button, Sticky, Field } from "vant";
import NavHeader from "@/components/navHeader/index.vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Vue, { inject,computed } from "vue";
export default {
  name: "pageMnemonic",
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Sticky.name]: Sticky,
    NavHeader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const clickLeft = () => {
      router.back();
    }; 
    const appProvide = inject("appProvide");
    const handleRight =()=>{
       router.push({
            name: "home",
          });
    }
    const title = computed(() => {
      return route.name =='mnemonic-step3' ?  t('mnemonic.tit2') :t('mnemonic.recoveryPhrase')
    })
    return {
      title,
      appProvide,
      t,
      route,
      clickLeft,
      handleRight
    };
  },
};
</script>