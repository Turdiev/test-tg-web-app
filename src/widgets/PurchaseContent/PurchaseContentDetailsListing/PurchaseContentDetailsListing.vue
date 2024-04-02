<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {useTelegram} from '@/shared/lib/use';
import {usePurchaseContentStore} from '@/entities/PurchaseContent/model';
import {PurchaseContentDetailsItem} from '@/entities/PurchaseContent/ui/PurchaseContentDetailsItem';

const purchaseContentStorage = usePurchaseContentStore()
const { purchasingBotContent } = storeToRefs(purchaseContentStorage)

const { webApp } = useTelegram()

const routeToChannel = (botName: string, postId: string) => {
  const postLink = `https://t.me/${botName}?start=${postId}`
  webApp.openTelegramLink(postLink)
}
</script>

<template>
  <div class="purchase-content-details-listing">
    <PurchaseContentDetailsItem
      v-for="content in purchasingBotContent"
      :key="content.postId"
      :content="content"
      class="purchase-content-details-listing"
      @click="routeToChannel(content.botSellerUsername, content.postId)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>