<script setup lang="ts">

import type { BotLink } from '@/entities/Bot'

withDefaults(defineProps<{
  link: BotLink
}>(), {
  link: null,
})

const emit = defineEmits(['click'])
</script>

<template>
  <div
    class="bot-link-item"
    @click="emit('click')"
  >
    <component
      :is="link.icon"
      class="bot-link__icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>