<script setup lang="ts">

import {useTelegram} from "@/shared/lib/use";

withDefaults(defineProps<{
  isLink: boolean,
  path?: string
}>(), {
  path: ''
})

const emit = defineEmits(['click'])

const { darkThemeBgColor } = useTelegram()

</script>

<template>
  <router-link
    v-if="isLink"
    :to="path"
    class="v-card"
    :style="{ backgroundColor: darkThemeBgColor }"
  >
    <slot />
  </router-link>
  <div
    v-else
    class="v-card"
    :style="{ backgroundColor: darkThemeBgColor }"
    @click="emit('click')"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>