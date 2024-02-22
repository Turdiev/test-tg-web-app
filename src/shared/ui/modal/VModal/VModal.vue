<script setup lang="ts">

import { VueFinalModal} from 'vue-final-modal';
import IconClose from '@/shared/ui/icons/IconClose.vue';


const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

</script>

<template>
  <vue-final-modal
    class="v-modal"
    content-class="v-modal__content"
    teleport-to="body"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <div
      class="v-modal__close"
      @click="emit('update:modelValue', false)"
    >
      <icon-close class="v-modal__close-icon"/>
    </div>

    <div class="v-modal__head">
      <slot name="modal-head" />
    </div>

    <div class="v-modal__body">
      <slot name="modal-body" />
    </div>
  </vue-final-modal>
</template>

<style lang="scss">
@import 'vue-final-modal/style.css';
@import "style";
</style>