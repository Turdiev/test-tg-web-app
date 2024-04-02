<script setup lang="ts">

import {ref} from 'vue';
import {IconArrowDown} from '@/shared/ui/icons';
import {TitleH3} from '@/shared/ui/title';

defineProps<{
  label: string
}>()

const isOpen = ref<boolean>(false)

</script>

<template>
  <div class="v-accordion">
    <div
      class="v-accordion__wrapper"
      @click="isOpen = !isOpen"
    >
      <title-h3 class="v-accordion__title">{{ label }}</title-h3>
      <div
        class="v-accordion__icon"
        :class="{'v-accordion__icon_rotate': isOpen}"
      >
        <icon-arrow-down />
      </div>
    </div>
    <div
      class="v-accordion__content"
      :class="{'v-accordion__content_is-open': isOpen}"
    >
      <div class="v-accordion__content-wrapper">
        <span>
          <slot />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
@import "style";
</style>