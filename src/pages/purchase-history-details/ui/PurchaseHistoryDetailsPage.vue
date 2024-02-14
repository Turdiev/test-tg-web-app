<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {PurchaseHistoryDetails} from '@/widgets/PurchaseHistory/PurchaseHistoryDetails';
import {useRoute} from 'vue-router';
import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model/purchase-history';
import {computed, onBeforeMount, ref} from 'vue';
import type {IHistory} from '@/entities/PurchaseHistory/model/types';
import {TitleBack} from '@/shared/ui/title';
import {ButtonSticky} from '@/shared/ui/button/ButtonSticky';

const router = useRoute()
const purchaseHistoryStore = usePurchaseHistoryStore()
const { getHistoryById } = purchaseHistoryStore

const currentHistory = ref<IHistory>();

const historyId = computed(() => router.params.id)
const titleButton = computed(() => {
  return currentHistory.value?.type.value === 'content' ? 'Перейти к материалу' : 'Перейти к закрытому каналу'
})

onBeforeMount(() => {
  currentHistory.value = getHistoryById(historyId.value)
})
</script>

<template>
  <div class="purchase-history-details-page">
    <div class="container purchase-history-details-page__content">
      <title-back path="/purchase-history" text-align="right">
        <div class="purchase-history-details-page__title">
          <span>Чек операции</span>
        </div>
      </title-back>
      <PurchaseHistoryDetails />
    </div>
    <button-sticky color="default">
      <div class="purchase-history-details-page__button">
        <span>{{ titleButton }}</span>
        <icon-arrow-right />
      </div>
    </button-sticky>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>