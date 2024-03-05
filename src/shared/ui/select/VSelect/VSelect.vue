<script setup lang="ts">
import VueSelect from 'vue-select';
import type { IVSelect } from './types'
import {computed} from 'vue';
import {IconArrowDown} from '@/shared/ui/icons';
import type {OptionItem} from "@/shared/types";

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IVSelect>(), {
  label: '',
  options () {
    return []
  },
})

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
  <vue-select
    v-model="model"
    :options="options"
    :label="label"
    :clearable="false"
    :searchable="false"
    :getOptionLabel="(option: OptionItem) => option.label"
    class="v-select"
  >
    <template #open-indicator="{ attributes }">
      <icon-arrow-down
        v-bind="attributes"
        class="v-select__arrow"
      />
    </template>
  </vue-select>
</template>

<style lang="scss">
@import "vue-select/dist/vue-select.css";
@import "style";
</style>