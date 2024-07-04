<template>
  <div class="snft-list-box">
    <van-list :loading="loading" :finished="finished" finished-text="No more" @load="onLoad">
      <div v-for="item in list" :key="item.address" class="flex justify-between snft-card center-v van-hairline--bottom">
        <div>{{ item.address }}</div>
      </div>
    </van-list>
  </div>
</template>
<script lang="ts" setup>
import { List as VanList, Cell as VanCell } from 'vant'
import { ref, computed, onUnmounted } from 'vue';
import { get_snft_meta_page, GetSnftMetaParams } from '../../../../http/modules/account';
import store from '@/store';
import eventBus from '@/utils/bus';
import { onMounted } from 'vue';
const finished = ref(false)
const loading = ref(false)
const list = ref([])
const accountInfo = computed(() => store.state.account.accountInfo);

const params = ref<GetSnftMetaParams>({
  page: 1,
  page_size: 15,
  owner: ''
})
const onLoad = () => {
  handleGetList()
}

const handleGetList = async () => {
  if (!loading.value) {
    loading.value = true
    params.value.owner = accountInfo.value.address
    const data = await get_snft_meta_page(params.value)
    if (!data.nfts) {
      finished.value = true
    } else {
      list.value.push(...data.nfts)
    }
    loading.value = false
  }

}
const changeAccountCallBack = () => {
  params.value.page = 1
  finished.value = false
  list.value = []
  handleGetList()
}
onMounted(() => {
  eventBus.on('changeAccount', changeAccountCallBack)
})
onUnmounted(() => {
  eventBus.off('changeAccount', changeAccountCallBack)
})
</script>
<style lang="scss">
.snft-list-box {
  width: 100%;

  .snft-card {
    height: 38px;
    padding: 0 14px;
    transition: ease .3s;

    &:hover {
      background: #0f0e12;
    }
  }
}
</style>