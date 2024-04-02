<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import {IconArrowRight} from '@/shared/ui/icons';

withDefaults(defineProps<{
  title: string,
  path: string
}>(), {
  title: '',
  path: ''
})

</script>

<template>
  <v-card
    :is-link="true"
    :path="path"
    class="support-articles-item"
  >
    <div class="support-articles__wrapper">
      <span>{{ title }}</span>
      <icon-arrow-right />
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>