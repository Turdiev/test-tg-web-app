<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {onBeforeMount, watch} from 'vue';
import {useLoadingWrap, useTelegram} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';
import {PurchaseContentItem} from '@/entities/PurchaseContent/ui';
import {usePurchaseContentStore} from '@/entities/PurchaseContent/model';
import {useI18n} from "vue-i18n";

const purchaseContentStorage = usePurchaseContentStore()
const { purchaseContentData, isShowSearchBar, purchaseContentTabs, activeTab } = storeToRefs(purchaseContentStorage)
const { fetchPurchaseContentsBot, fetchPurchaseContentsChannel } = purchaseContentStorage

const { t } = useI18n()

const { webApp, secondaryThemeBgColor } = useTelegram()
const { isLoading, runWithLoading } = useLoadingWrap()


watch(activeTab, (newTab) => {
  if (newTab.value === 'content') {
    runWithLoading(fetchPurchaseContentsBot)
  } else {
    runWithLoading(fetchPurchaseContentsChannel)
  }
})

onBeforeMount(() => {
  isShowSearchBar.value = false
  runWithLoading(fetchPurchaseContentsBot)
})

const routeToChannel = (link: string) => {
  webApp.openTelegramLink(link)
}
</script>

<template>
  <div class="purchase-content-listing">
    <div
      class="purchase-content-listing__tabs"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <div
        v-for="tab in purchaseContentTabs"
        :key="tab.value"
        class="purchase-content-listing__tab"
        :class="[
          {'purchase-content-listing__tab_active': tab.value === activeTab.value}
        ]"
        @click="activeTab = tab"
      >
        <span>{{ tab.name }}</span>
      </div>
    </div>

    <div class="purchase-content-listing__content">
      <v-loader v-model="isLoading"/>

      <template v-if="!isLoading && purchaseContentData.length !== 0">
        <PurchaseContentItem
          v-for="content in purchaseContentData"
          :key="content.id"
          :content="content"
          :is-bot="activeTab.value === 'content'"
          class="purchase-content-listing__item"
          @click="routeToChannel(content.link)"
        />
      </template>
      <div
        v-if="!isLoading && purchaseContentData.length === 0"
        class="purchase-content-listing__not-subscribers"
      >
        <span>{{ t('common.noPurchasedContent') }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>