<script setup lang="ts">

withDefaults(defineProps<{
  color?: 'default' | 'red' | 'green' | 'black',
  disabled?: boolean
}>(), {
  color: 'default',
  disabled: false
})

defineEmits(['click'])

</script>

<template>
  <button
    class="button-base"
    :class="[`button-base_${color}`, {'button-base_disabled': disabled}]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "style";
</style>