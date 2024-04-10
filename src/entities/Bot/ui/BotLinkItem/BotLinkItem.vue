<script setup lang="ts">

import type { BotLink } from '@/entities/Bot'
import { useTelegram } from '@/shared/lib/use';

withDefaults(defineProps<{
  link: BotLink
}>(), {
  link: null,
})

const emit = defineEmits(['click'])

const { secondaryThemeBgColor } = useTelegram()
</script>

<template>
  <div
    class="bot-link-item"
    :style="{ backgroundColor: secondaryThemeBgColor }"
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