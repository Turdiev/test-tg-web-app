<script setup lang="ts">

import {IconArrowLeft, IconArrowRight} from "@/shared/ui/icons";
import {PurchaseHistoryDetails} from "@/widgets/PurchaseHistory/PurchaseHistoryDetails";
import {useRoute} from "vue-router";
import {usePurchaseHistoryStore} from "@/entities/PurchaseHistory/model/purchase-history";
import {computed, onBeforeMount, ref} from "vue";
import type {IHistory} from "@/entities/PurchaseHistory/model/types";
import {ButtonBase} from "@/shared/ui/button/ButtonBase";

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
      <div class="purchase-history-details-page__head">
        <router-link to="/purchase-history">
          <div class="purchase-history-details-page__back">
            <icon-arrow-left />
          </div>
        </router-link>
        <div class="purchase-history-details-page__title">
          <span>Чек операции</span>
        </div>
      </div>
      <PurchaseHistoryDetails />
    </div>
    <div class="purchase-history-details-page__button">
      <button-base
        color="default"
      >
        <div class="purchase-history-details-page__button-wrap">
          <span>{{ titleButton }}</span>
          <icon-arrow-right />
        </div>
      </button-base>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>