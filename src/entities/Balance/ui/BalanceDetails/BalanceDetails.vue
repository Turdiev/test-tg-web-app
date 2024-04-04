<script setup lang="ts">

import {useProfileStore} from "@/entities/Balance/model";
import {storeToRefs} from "pinia";
import {CurrencyType} from "@/shared/types";

const balanceStorage = useProfileStore()
const { profileInfo } = storeToRefs(balanceStorage)
</script>

<template>
  <div class="balance-details">
    <div class="balance-details__wrapper">
      <div class="balance-details__info">
        <h2 class="balance-details__title">
          Fidsty-баланс
        </h2>
        <div class="balance-details__amount">
          <span>{{ profileInfo.balance?.amount }} {{ CurrencyType.USD }}</span>
        </div>
      </div>
      <div class="balance-details__actions">
        <slot name="top-up-balance"/>
        <slot name="purchase-history"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>