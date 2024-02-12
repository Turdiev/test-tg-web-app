<script setup lang="ts">

withDefaults(defineProps<{
  background?: 'default' | 'blue',
  form?: 'square' | 'round',
  size?: 'medium' | 'small'
}>(), {
  background: 'default',
  form: 'round',
  size: 'medium'
})
</script>

<template>
  <div
    class="image-avatar"
    :class="[
      `image-avatar_${background}`,
      `image-avatar_${form}`,
      `image-avatar_${size}`,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>