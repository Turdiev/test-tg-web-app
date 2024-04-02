<script setup lang="ts">

withDefaults(defineProps<{
  title?: string,
  background?: 'default' | 'blue' | 'blue-light',
  form?: 'square' | 'round',
  size?: 'x-large' | 'large' | 'medium' | 'small' | 'extra-small'
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
    <span v-if="title" >{{ title.charAt(0).toUpperCase() }}</span>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>