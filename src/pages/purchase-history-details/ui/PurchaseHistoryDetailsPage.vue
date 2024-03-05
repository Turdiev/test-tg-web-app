<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {PurchaseHistoryDetails} from '@/widgets/PurchaseHistory/PurchaseHistoryDetails';
import {useRoute} from 'vue-router';
import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {computed, onBeforeMount, onMounted, ref} from 'vue';
import {TitleBack} from '@/shared/ui/title';
import {ButtonSticky} from '@/shared/ui/button/ButtonSticky';
import {VLoader} from "@/shared/ui/loaders";
import {storeToRefs} from "pinia";
import {useTelegram} from "@/shared/lib/use";

const tg = useTelegram()
const { webApp } = tg

const router = useRoute()

const purchaseHistoryStore = usePurchaseHistoryStore()
const { getDetailedPurchaseHistory } = purchaseHistoryStore
const { currentPurchaseHistoryDetails } = storeToRefs(purchaseHistoryStore)

const isLoadingPage = ref(true);

const routerParamsId = computed(() => router.params.id)
const routerQueryPostId = computed(() => router.query.post_id)
const titleButton = computed(() => {
  return currentPurchaseHistoryDetails.value?.type === 'SINGLE_POST' ? 'Перейти к материалу' : 'Перейти к закрытому каналу'
})

onBeforeMount(() => {
  if (routerQueryPostId.value) {
    getDetailedPurchaseHistory(true, routerQueryPostId.value)
  } else {
    getDetailedPurchaseHistory(false, routerParamsId.value)
  }
})

onMounted(() => {
  setTimeout(() => {
    isLoadingPage.value = false
  }, 1000)
})

const goToChannel = () => {
  const link = currentPurchaseHistoryDetails.value?.link || currentPurchaseHistoryDetails.value?.channelLink
  webApp.openTelegramLink(link)
}
</script>

<template>
  <div class="purchase-history-details-page">
    <div class="container purchase-history-details-page__content">
      <title-back path="/purchase-history" text-align="right">
        <div class="purchase-history-details-page__title">
          <span>Чек операции</span>
        </div>
      </title-back>
      <v-loader
        v-model="isLoadingPage"
        class="purchase-history-details-page__loading"
      />
      <PurchaseHistoryDetails v-if="!isLoadingPage"/>
    </div>
    <button-sticky color="default">
      <div
        class="purchase-history-details-page__button"
        @click="goToChannel"
      >
        <span>{{ titleButton }}</span>
        <icon-arrow-right />
      </div>
    </button-sticky>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>