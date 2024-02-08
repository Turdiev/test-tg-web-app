<script setup lang="ts">

import {BalanceDetails} from '@/entities/Balance'
import {TopUpBalance} from '@/features/Balance/TopUpBalance';
import {PurchaseHistory} from '@/features/Balance/PurchaseHistory';
</script>

<template>
  <div class="balance-action">
    <BalanceDetails>
      <template #top-up-balance>
        <TopUpBalance />
      </template>
      <template #purchase-history>
        <PurchaseHistory />
      </template>
    </BalanceDetails>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>