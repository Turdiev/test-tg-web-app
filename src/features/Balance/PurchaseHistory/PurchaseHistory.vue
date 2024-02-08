<script setup lang="ts">

import {IconClock} from '@/shared/ui/icons';
import {ButtonRound} from '@/shared/ui/button';
</script>

<template>
  <ButtonRound label="История покупок">
    <template #icon>
      <IconClock />
    </template>
  </ButtonRound>
</template>

<style lang="scss" scoped>
@import "style";
</style>