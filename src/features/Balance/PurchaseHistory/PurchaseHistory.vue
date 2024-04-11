<script setup lang="ts">

import {IconClock} from '@/shared/ui/icons';
import {ButtonRound} from '@/shared/ui/button';
import {useRouter} from 'vue-router';
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const router = useRouter()

const goToPurchaseHistory = () => {
  router.push({name: 'PurchaseHistory'})
}
</script>

<template>
  <ButtonRound
    :label="t('pages.purchaseHistory')"
    @click="goToPurchaseHistory"
  >
    <template #icon>
      <IconClock />
    </template>
  </ButtonRound>
</template>

<style lang="scss" scoped>
@import "style";
</style>