<script setup lang="ts">

import {useProfileStore} from '@/entities/Balance/model';
import {storeToRefs} from 'pinia';
import {CurrencyType} from '@/shared/types';
import {useI18n} from "vue-i18n";
import {currencyToFormat} from "../../../../shared/lib/helpers";

const { t } = useI18n()

const balanceStorage = useProfileStore()
const { profileInfo } = storeToRefs(balanceStorage)

</script>

<template>
  <div class="balance-details">
    <div class="balance-details__wrapper">
      <div class="balance-details__info">
        <h2 class="balance-details__title">
          {{ t("main.fidstyBalance") }}
        </h2>
        <div class="balance-details__amount">
          <span>{{ currencyToFormat(profileInfo.balance?.amount) }}</span>
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