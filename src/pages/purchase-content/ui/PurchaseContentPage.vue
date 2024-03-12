<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {TitleBack, TitleH3} from '@/shared/ui/title';
import {IconSearch} from '@/shared/ui/icons';
import {PurchaseContentListing} from "@/widgets/PurchaseContent/PurchaseContentListing";
import {PurchaseContentSearch} from "@/entities/PurchaseContent/ui";
import {pluralize} from '@/shared/lib/helpers';
import {usePurchaseContentStore} from "@/entities/PurchaseContent/model";
import {onBeforeMount, onMounted} from "vue";

const purchaseContentStorage = usePurchaseContentStore()
const { fetchPurchaseContentsCount } = purchaseContentStorage
const { totalPurchaseContents, isShowSearchBar } = storeToRefs(purchaseContentStorage)

onBeforeMount(() => {
  fetchPurchaseContentsCount()
})

const handleSearch = () => {
  isShowSearchBar.value = true
}

</script>

<template>
  <div class="purchase-content-page">
    <div class="container">
      <title-back path="/" text-align="center">
        <div class="purchase-content-page__title">
          <title-h3>Купленный контент</title-h3>
          <span class="purchase-content-page__amount-channel">
            {{ pluralize(totalPurchaseContents, 'покупка', 'покупки', 'покупок') }}
          </span>
        </div>

        <template #right>
          <div
            class="purchase-content-page__search-btn"
            @click="handleSearch"
          >
            <icon-search  class="purchase-content-page__search-btn-icon" />
          </div>
        </template>
      </title-back>

      <transition name="fade">
        <PurchaseContentSearch v-if="isShowSearchBar" />
      </transition>
      <PurchaseContentListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>