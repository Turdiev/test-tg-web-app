<script lang="ts" setup>
import {computed} from 'vue';

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => {
    return props.modelValue
  },
  set: (value: boolean) => {
    emit('update:modelValue', value)
  }
})

</script>

<template>
  <label
    class="checkbox-base"
    :class="{
    'checkbox-base_active': model,
    'checkbox-base_disabled': disabled
		}"
  >
    <input
      v-model="model"
      type="checkbox"
      class="checkbox-base__input visually-hidden"
    >
  </label>
</template>

<style lang="scss" scoped>
@import "style";
</style>
