<script setup lang="ts">

withDefaults(defineProps<{
  isLink: boolean,
  path?: string
}>(), {
  path: ''
})

const emit = defineEmits(['click'])

</script>

<template>
  <router-link
    v-if="isLink"
    :to="path"
    class="v-card"
  >
    <slot />
  </router-link>
  <div
    v-else
    class="v-card"
    @click="emit('click')"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>