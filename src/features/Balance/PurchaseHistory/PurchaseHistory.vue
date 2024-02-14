<script setup lang="ts">

import {IconClock} from '@/shared/ui/icons';
import {ButtonRound} from '@/shared/ui/button';
import {useRouter} from 'vue-router';

const router = useRouter()

const goToPurchaseHistory = () => {
  router.push({name: 'PurchaseHistory'})
}
</script>

<template>
  <ButtonRound
    label="История покупок"
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