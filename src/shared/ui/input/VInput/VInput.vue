<script setup lang="ts">
import {computed, ref} from 'vue'
import type { IVInput } from './types'

const emit = defineEmits(['update:modelValue', 'blur', 'change'])

const props = withDefaults(defineProps<IVInput>(), {
  modelValue: '',
  inputType: 'text',
  placeholder: ''
})

const inputValue = ref(props.modelValue)

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error
}))

const onInput = (event: Event) => {
  inputValue.value = getValue(event)

  emit('update:modelValue', inputValue)
}

const onBlur = () => {
  emit('blur', inputValue.value)
}

const onChange = () => {
  emit('change', inputValue.value)
}

const getValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  return target.value.trim()
}
</script>

<template>
  <div
    class="v-input"
    :class="classes"
  >
    <label
      v-if="label"
      class="v-input__label"
      :for="name"
    >
      {{ label }}
    </label>

    <div class="v-input__field-wrap">
      <div class="v-input__icon">
        <slot name="icon"/>
      </div>

      <input
        ref="v-input"
        :value="modelValue"
        class="v-input__field"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :disabled="isDisabled"
        autocomplete="false"
        @input="onInput"
        @blur="onBlur"
        @change="onChange"
      />
    </div>

    <small
      v-if="error"
      class="v-input__error"
    >
      {{ error }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
@import "styles/index";
</style>