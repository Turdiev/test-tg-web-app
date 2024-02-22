<script setup lang="ts">

import type {IChannel} from '@/entities/Catalog';
import {VModal} from '@/shared/ui/modal';
import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';

defineProps<{
  channel: IChannel,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

</script>

<template>
  <v-modal
    class="channel-modal"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <template #modal-head>
      <div class="channel-modal__head">
        <image-avatar
          size="medium"
          background="default"
          class="channel-modal__head-avatar"
        />
        <div class="channel-modal__head-info">
          <span class="channel-modal__head-title">
            {{ channel.title }}
          </span>
        <span class="channel-modal__head-amount">
            {{ channel.amount_subscribers }} подписчиков
          </span>
        </div>
      </div>
    </template>

    <template #modal-body>
      <div class="channel-modal__body">
        <div class="channel-modal__body-tags">
          <div
              v-for="tag in channel.tags"
              :key="tag"
              class="channel-modal__body-tag"
          >
            <span>{{ tag }}</span>
          </div>
        </div>

        <div class="channel-modal__body-description">
          <span>ОПИСАНИЕ</span>
          <p>{{ channel.description }}</p>
        </div>

        <div class="channel-modal__body-buttons">
          <button-base
            color="default"
          >
            Перейти в канал
          </button-base>
          <button-base
            color="black"
          >
            Перейти к боту с материалами
          </button-base>
        </div>
      </div>
    </template>
  </v-modal>
</template>

<style lang="scss" scoped>
@import "style";
</style>