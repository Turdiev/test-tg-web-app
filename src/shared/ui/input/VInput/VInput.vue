<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import type { IVInput } from './types'
import {useFocus} from '@vueuse/core';
import {useTelegram} from '@/shared/lib/use';

const { secondaryThemeBgColor } = useTelegram()

const vInput = ref<HTMLInputElement>()
const { focused } = useFocus(vInput)

const props = withDefaults(defineProps<IVInput>(), {
  inputType: 'text',
  placeholder: '',
  isButtonClose: false
})

const emit = defineEmits(['update:modelValue', 'focus', 'change', 'close'])

watch(focused, (value) => {
  if (value) {
    emit('focus', value)
  }
})


const inputValue = ref(props.modelValue)

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error
}))

const onInput = () => {
  emit('update:modelValue', inputValue.value)
}

const onChange = () => {
  emit('change', inputValue.value)
}

const onClose = () => {
  inputValue.value = ''
  emit('close', false)
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
      <div class="v-input__icon v-input__icon_left">
        <slot name="icon-left"/>
      </div>

      <input
        ref="vInput"
        v-model="inputValue"
        class="v-input__field"
        :class="{'v-input__field_border-color': secondaryThemeBgColor}"
        :style="{ backgroundColor: secondaryThemeBgColor }"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :disabled="isDisabled"
        autocomplete="false"
        @input="onInput"
        @change="onChange"
      />

      <div
        v-if="isButtonClose"
        class="v-input__icon v-input__icon_right"
        @click="onClose"
      >
        <slot name="icon-right"/>
      </div>
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