<script setup lang="ts">

defineProps<{
  label: string
}>()

defineEmits(['click'])

</script>

<template>
  <div class="button-round">
    <button
      @click="$emit('click')"
    >
      <slot name="icon"/>
    </button>

    <div class="button-round__label">
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>