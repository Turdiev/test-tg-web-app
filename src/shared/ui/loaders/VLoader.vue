<script setup lang="ts">

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
})

</script>

<template>
  <div
    v-if="modelValue"
    class="ux-loading"
  >
    <div class="ux-loading__loader"></div>
  </div>
</template>

<style lang="scss">
@import "style";
</style>