<script setup lang="ts">

import {PurchaseHistorySearch} from "@/features/PurchaseHistory/ui";
import {IconArrowLeft} from "@/shared/ui/icons";
import {TitleH3} from "@/shared/ui/title/h3";
import {PurchaseHistoryExpenses} from "@/entities/PurchaseHistory/ui";
import {PurchaseHistoryList} from "@/widgets/PurchaseHistory/PurchaseHistoryList";
</script>

<template>
  <div class="purchase-history-page">
    <div class="container">
      <div class="purchase-history-page__head">
        <router-link to="/">
          <div class="purchase-history-page__back">
            <icon-arrow-left />
          </div>
        </router-link>
        <div class="purchase-history-page__title">
          <title-h3>История покупок</title-h3>
        </div>
      </div>
      <PurchaseHistorySearch class="purchase-history-page__search"/>
      <PurchaseHistoryExpenses />
      <PurchaseHistoryList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>