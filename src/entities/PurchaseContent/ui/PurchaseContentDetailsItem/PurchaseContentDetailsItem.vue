<script setup lang="ts">

import type {IPurchaseContentBotById} from '@/entities/PurchaseContent/model';
import {CardArrow} from '@/shared/ui/card/CardArrow';

withDefaults(defineProps<{
  content: IPurchaseContentBotById,
}>(), {
  content() {
    return null
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <card-arrow
    path=""
    :post-name="content.postPreview"
    :price="content.amount"
    :channel-name="content.channelTitle || content.botSellerName"
    class="purchase-content-details-item"
    @click="emit('click')"
  />
</template>

<style lang="scss" scoped>
@import "style";
</style>