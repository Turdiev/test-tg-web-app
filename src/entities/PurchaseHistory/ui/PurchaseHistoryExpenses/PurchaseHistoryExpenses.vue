<script setup lang="ts">

import {type ITags, usePurchaseHistoryExpensesStore, usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {TagBase} from '@/shared/ui/tag/TagBase';
import {VSelect} from '@/shared/ui/select';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";
import {currencyToFormat} from "../../../../shared/lib/helpers";

const { t } = useI18n()

const { secondaryThemeBgColor } = useTelegram()

const purchaseHistoryExpensesStore = usePurchaseHistoryExpensesStore()
const { activeTag, selectedMonth } = storeToRefs(purchaseHistoryExpensesStore)
const { tags, changeActiveTag, selectOptions } = purchaseHistoryExpensesStore

const purchaseHistoryStore = usePurchaseHistoryStore()
const { groupPurchaseHistoryByDate, purchaseHistoryData, contentType, totalPurchaseExpenses } = storeToRefs(purchaseHistoryStore)


const titleExpenses = computed(() => {
  if (activeTag.value?.value === 'POST') {
    return t('purchaseHistory.contentPurchasesExpenses')
  } else if (activeTag.value?.value === 'CHANNEL') {
    return t('purchaseHistory.closedChannelsExpenses')
  } else {
    return  t('purchaseHistory.totalExpenses')
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
  <div
    class="purchase-history-expenses"
    :style="{ backgroundColor: secondaryThemeBgColor }"
  >
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
        <p>{{ currencyToFormat(activeTag ? costCalculation : totalExpenses) }}</p>
        <p v-if="activeTag && totalPurchaseExpenses > 0" class="purchase-history-expenses__balance-calc_total">из {{ currencyToFormat(totalPurchaseExpenses) }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>