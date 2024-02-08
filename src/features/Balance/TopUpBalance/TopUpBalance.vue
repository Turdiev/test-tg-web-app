<script setup lang="ts">

import {IconPlus} from '@/shared/ui/icons';
import {ButtonRound} from '@/shared/ui/button';
</script>

<template>
  <ButtonRound label="Пополнить баланс">
    <template #icon>
      <icon-plus />
    </template>
  </ButtonRound>
</template>

<style lang="scss" scoped>
@import "style";
</style>