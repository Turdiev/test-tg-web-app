<script setup lang="ts">

import {TitleBack} from '@/shared/ui/title';
import {usePurchaseContentStore} from '@/entities/PurchaseContent/model';
import {computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useIsLoading, useTelegram} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';
import {storeToRefs} from 'pinia';
import PurchaseContentSalesman
  from '@/entities/PurchaseContent/ui/PurchaseContentSalesman.vue/PurchaseContentSalesman.vue';
import {PurchaseContentDetailsListing} from '@/widgets/PurchaseContent/PurchaseContentDetailsListing';
import {AddToFavorite} from '@/features/Favorites/AddToFavorite/ui';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const { secondaryThemeBgColor } = useTelegram()
const router = useRoute()

const purchaseContentStorage = usePurchaseContentStore()
const { fetchPurchaseContentsBotById } = purchaseContentStorage
const { purchaseContentData } = storeToRefs(purchaseContentStorage)

const { isLoading, startLoading, finishLoading } = useIsLoading()

const routerParamsId = computed(() => router.params.id)
const currentBot = computed(() => purchaseContentData.value.find(item => item.id === routerParamsId.value))

onMounted(async () => {
  startLoading()
  await fetchPurchaseContentsBotById(routerParamsId.value)
  finishLoading()
})

</script>

<template>
  <div class="purchase-content-details-page">
    <div
      class="purchase-content-details-page__head"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <div class="container">
        <title-back
          path="/purchase-content"
          text-align="left"
          :icon-label="t('common.back')"
        />

        <PurchaseContentSalesman
          v-if="!isLoading"
          :salesman="currentBot"
          class="purchase-content-details-page__salesman"
        >
          <AddToFavorite
            :id="currentBot?.id"
            :data="purchaseContentData"
            :is-favorites="currentBot?.isFavorite"
          />
        </PurchaseContentSalesman>
      </div>
    </div>

    <v-loader v-model="isLoading"/>

    <div
      v-if="!isLoading"
      class="purchase-content-details-page__body"
    >
      <div class="container">
        <span class="purchase-content-details-page__title">
          {{ t('common.yourPurchases') }}
        </span>

        <PurchaseContentDetailsListing />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>