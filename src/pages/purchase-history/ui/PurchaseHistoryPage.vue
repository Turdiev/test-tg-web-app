<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {PurchaseHistoryExpenses} from '@/entities/PurchaseHistory/ui';
import {PurchaseHistorySearch} from '@/entities/PurchaseHistory/ui';
import {PurchaseHistoryList} from '@/widgets/PurchaseHistory/PurchaseHistoryList';
</script>

<template>
  <div class="purchase-history-page">
    <div class="container">
      <title-back path="/" text-align="center">
        <title-h3>История покупок</title-h3>
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