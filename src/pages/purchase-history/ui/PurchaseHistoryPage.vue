<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {PurchaseHistoryExpenses} from '@/entities/PurchaseHistory/ui';
import {PurchaseHistorySearch} from '@/entities/PurchaseHistory/ui';
import {PurchaseHistoryList} from '@/widgets/PurchaseHistory/PurchaseHistoryList';
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <div class="purchase-history-page">
    <div class="container">
      <title-back path="/" text-align="center">
        <title-h3>{{ t('pages.purchaseHistory') }}</title-h3>
      </title-back>
      <PurchaseHistorySearch class="purchase-history-page__search" />
      <PurchaseHistoryExpenses />
      <PurchaseHistoryList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>