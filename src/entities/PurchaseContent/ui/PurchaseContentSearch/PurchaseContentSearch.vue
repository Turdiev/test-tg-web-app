<script setup lang="ts">

import {ref, watch} from 'vue';
import {storeToRefs} from 'pinia';
import {PurchaseContentItem} from '@/entities/PurchaseContent/ui';
import {SearchBar} from '@/shared/ui/search';
import {useTelegram, useTimeout} from '@/shared/lib/use';
import {useSearchBarStore} from '@/shared/ui/search';
import {usePurchaseContentStore} from '@/entities/PurchaseContent/model';


const purchaseContentStore = usePurchaseContentStore()
const { foundPurchaseContents, isShowSearchBar, activeTab } = storeToRefs(purchaseContentStore)
const { fetchSearchPurchaseContents } = purchaseContentStore

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const { webApp } = useTelegram()

const {setTimeoutId, clearTimeoutId} = useTimeout(fetchSearchPurchaseContents, 800)

const isSearch = ref(false)

watch(searchQuery, (newValue) => {
  clearTimeoutId()
  if ( newValue !== '') {
    setTimeoutId(newValue)
    setTimeout(() => {
      if (foundPurchaseContents.value.length === 0) isSearch.value = true
    }, 900)
  } else {
    foundPurchaseContents.value = []
    isSearch.value = false
  }
})

const routeToChannel = (content:{ nameOrLink: string, id: string }) => {
  if (activeTab.value.value === 'content') {
    const postLink = `https://t.me/${content.nameOrLink}?start=${content.id}`
    webApp.openTelegramLink(postLink)
  } else {
    webApp.openTelegramLink(content.nameOrLink)
  }
}

const closeSearchBar = () => {
  searchQuery.value = ''
  foundPurchaseContents.value = []
  isShowSearchBar.value = false
}
</script>

<template>
  <div class="purchase-content-search">
    <div class="container">
      <search-bar
        :is-show-btn-close="true"
        @close="closeSearchBar"
      >
        <template #results>
          <template v-if="foundPurchaseContents.length > 0">
            <div class="purchase-content-search__results">
              <PurchaseContentItem
                v-for="content in foundPurchaseContents"
                :key="content.id"
                :content="content"
                :is-bot="activeTab.value === 'content'"
                class="purchase-content-search__item"
                @click="routeToChannel({ nameOrLink: content.username || content.link, id: content.postId })"
              />
            </div>
          </template>
          <div
            v-if="isSearch && foundPurchaseContents.length === 0"
            class="purchase-content-search__not-results"
          >
            <span>Нечего не найдено!</span>
          </div>
        </template>
      </search-bar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>