<script setup lang="ts">
import {SearchBar} from '@/shared/ui/search';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {usePurchaseHistorySearchStore} from '@/entities/PurchaseHistory/model/purchase-history-search';
import {ref, watch} from 'vue';
import {PurchaseHistoryItem} from '@/entities/PurchaseHistory/ui';
import {useTimeout} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const purchaseHistorySearchStore = usePurchaseHistorySearchStore()
const { foundPurchaseHistories } = storeToRefs(purchaseHistorySearchStore)
const { fetchPurchaseHistorySearch } = purchaseHistorySearchStore

const {setTimeoutId, clearTimeoutId} = useTimeout(fetchPurchaseHistorySearch, 800)

const isSearch = ref(false)

watch(searchQuery, (newValue) => {
  clearTimeoutId()
  if ( newValue !== '') {
    setTimeoutId(newValue)
    setTimeout(() => {
      if (foundPurchaseHistories.value.length === 0) isSearch.value = true
    }, 900)
  } else {
    foundPurchaseHistories.value = []
    isSearch.value = false
  }
})

const closeSearchBar = () => {
  searchQuery.value = ''
  foundPurchaseHistories.value = []
}
</script>

<template>
  <div class="purchase-history-search">
    <search-bar
      @close="closeSearchBar"
    >
      <template #results>
        <template v-if="foundPurchaseHistories.length > 0">
          <PurchaseHistoryItem
            v-for="history in foundPurchaseHistories"
            :key="history.channelId"
            :item="history"
            class="purchase-history-search__item"
          />
        </template>
        <div
          v-if="isSearch && foundPurchaseHistories.length === 0"
          class="purchase-history-search__not-results"
        >
          <span>{{ t('common.nothingFound') }}</span>
        </div>
      </template>
    </search-bar>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>