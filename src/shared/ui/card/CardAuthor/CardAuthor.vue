<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import {IconArrowRight, IconUser} from '@/shared/ui/icons';

withDefaults(defineProps<{
  userName: string
  link?: string
}>(), {
  userName: '',
  link: '',
})

const emit = defineEmits(['click'])
</script>

<template>
  <v-card
    :is-link="false"
    class="card-author"
    @click="emit('click')"
  >
    <div class="card-author__user">
<!--      <image-avatar background="default" />-->
      <div class="card-author__wrapper">
        <div class="card-author__salesman">
          <icon-user />
          <span>Продавец контента</span>
        </div>
        <div class="card-author__username">
          <span>{{ userName }}</span>
        </div>
      </div>
    </div>
    <div class="card-author__buttons">
      <slot name="bookmark"/>

      <div class="card-author__button">
        <icon-arrow-right />
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>