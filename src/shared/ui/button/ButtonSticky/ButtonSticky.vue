<script setup lang="ts">

import {ButtonBase} from '@/shared/ui/button/ButtonBase';

withDefaults(defineProps<{
  color?: 'default' | 'red' | 'green',
}>(), {
  color: 'default',
})

defineEmits(['click'])

</script>

<template>
  <div class="button-sticky">
    <button-base
      :color="color"
      @click="$emit('click')"
    >
      <slot />
    </button-base>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>