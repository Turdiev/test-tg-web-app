<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import {IconArrowRight, IconUser} from '@/shared/ui/icons';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

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
      <image-avatar
        :title="userName"
        background="blue"
      />
      <div class="card-author__wrapper">
        <div class="card-author__salesman">
          <icon-user />
          <span>{{ t('common.contentSeller') }}</span>
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