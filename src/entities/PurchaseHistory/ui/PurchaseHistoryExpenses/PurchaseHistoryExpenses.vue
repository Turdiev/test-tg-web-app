<script setup lang="ts">

import {usePurchaseHistoryExpensesStore} from '@/entities/PurchaseHistory/model';
import {TagBase} from '@/shared/ui/tag/TagBase';
import {VSelect} from '@/shared/ui/select';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

const purchaseHistoryStore = usePurchaseHistoryExpensesStore()
const { activeTag, selectedMonth } = storeToRefs(purchaseHistoryStore)
const { tags, handleTag, selectOptions } = purchaseHistoryStore

// defineProps<{
// }>()

const titleExpenses = computed(() => {
  if (activeTag.value?.value === 'content') {
    return 'Расходы на покупки платного контента'
  } else if (activeTag.value?.value === 'close-channel') {
    return 'Расходы на доступы к закрытым каналам'
  } else {
    return 'Всего расходов'
  }
})

//TODO для верстки
const costCalculation = computed(() => {
  if (activeTag.value?.value === 'content') {
    return '1 200,54 ₽'
  } else if (activeTag.value?.value === 'close-channel') {
    return '1 000,54 ₽'
  } else {
    return '2 600,54 ₽'
  }
})

</script>

<template>
  <div class="purchase-history-expenses">
    <div class="purchase-history-expenses__tags">
      <v-select v-model="selectedMonth" :options="selectOptions"/>
      <tag-base
        v-for="tag in tags"
        :key="tag.value"
        :tag="tag"
        :active="activeTag"
        @click="handleTag(tag)"
      />
    </div>
    <div class="purchase-history-expenses__balance">
      <span>{{ titleExpenses }}</span>
      <div class="purchase-history-expenses__balance-calc">
        <p>{{ costCalculation }}</p>
        <p v-if="activeTag" class="purchase-history-expenses__balance-calc_total">из 2 600,54 ₽</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>