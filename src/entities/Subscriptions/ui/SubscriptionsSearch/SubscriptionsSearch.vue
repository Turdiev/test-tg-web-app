<script setup lang="ts">

import {SearchBar} from '@/shared/ui/search';
import {SubscriptionsItem} from '@/entities/Subscriptions/ui';
import {useSubscriptionsStore} from '@/entities/Subscriptions/model';
import {storeToRefs} from 'pinia';
import {useTelegram, useTimeout} from '@/shared/lib/use';
import {ref, watch} from 'vue';
import {useSearchBarStore} from '@/features/SearchBar';

const subscriptionsStorage = useSubscriptionsStore()
const { foundChannelSubscriptions, isShowSearchBar } = storeToRefs(subscriptionsStorage)
const { fetchSearchChannelSubscriptions } = subscriptionsStorage

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const { webApp } = useTelegram()
const {setTimeoutId, clearTimeoutId} = useTimeout(fetchSearchChannelSubscriptions, 800)

const isSearch = ref(false)

watch(searchQuery, (newValue) => {
  clearTimeoutId()
  if ( newValue !== '') {
    setTimeoutId(newValue)
    setTimeout(() => {
      if (foundChannelSubscriptions.value.length === 0) isSearch.value = true
    }, 900)
  } else {
    foundChannelSubscriptions.value = []
    isSearch.value = false
  }
})

const routeToChannel = (link: string) => {
  webApp.openTelegramLink(link)
}

const closeSearchBar = () => {
  searchQuery.value = ''
  isShowSearchBar.value = false
}
</script>

<template>
  <div class="subscriptions-search">
    <div class="container">
      <search-bar
        :is-show-btn-close="true"
        @close="closeSearchBar"
      >
        <template #results>
          <template v-if="foundChannelSubscriptions.length > 0">
            <SubscriptionsItem
              v-for="channel in foundChannelSubscriptions"
              :key="channel.id"
              :channel="channel"
              class="subscriptions-search__item"
              @click="routeToChannel(channel.link)"
            />
          </template>
          <div
            v-if="isSearch && foundChannelSubscriptions.length === 0"
            class="subscriptions-search__not-results"
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