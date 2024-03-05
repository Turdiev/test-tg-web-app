<script setup lang="ts">

import {type ITags, usePurchaseHistoryExpensesStore, usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {TagBase} from '@/shared/ui/tag/TagBase';
import {VSelect} from '@/shared/ui/select';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

const purchaseHistoryExpensesStore = usePurchaseHistoryExpensesStore()
const { activeTag, selectedMonth } = storeToRefs(purchaseHistoryExpensesStore)
const { tags, changeActiveTag, selectOptions } = purchaseHistoryExpensesStore

const purchaseHistoryStore = usePurchaseHistoryStore()
const { groupPurchaseHistoryByDate, purchaseHistoryData, contentType, totalPurchaseExpenses } = storeToRefs(purchaseHistoryStore)


const titleExpenses = computed(() => {
  if (activeTag.value?.value === 'POST') {
    return 'Расходы на покупки платного контента'
  } else if (activeTag.value?.value === 'CHANNEL') {
    return 'Расходы на доступы к закрытым каналам'
  } else {
    return 'Всего расходов'
  }
})

const totalExpenses = computed(() => {
  return groupPurchaseHistoryByDate.value.reduce((acc, curr) => {
    acc += curr.totalAmount
    return acc
  }, 0)
})

const costCalculation = computed(() => {
  return purchaseHistoryData.value.reduce((acc, curr) => {
    if (curr.type === activeTag.value?.type) {
      acc += curr.amount
    }

    return acc
  }, 0)
})

const handleClickTag = (tag: ITags) => {
  if (contentType?.value !== tag.value) {
    contentType.value = tag.value
  } else {
    contentType.value = 'ALL'
  }
  changeActiveTag(tag)
}

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
        @click="handleClickTag(tag)"
      />
    </div>
    <div class="purchase-history-expenses__balance">
      <span>{{ titleExpenses }}</span>
      <div class="purchase-history-expenses__balance-calc">
        <p>{{ activeTag ? costCalculation : totalExpenses }}</p>
        <p v-if="activeTag && totalPurchaseExpenses > 0" class="purchase-history-expenses__balance-calc_total">{{ totalPurchaseExpenses }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>