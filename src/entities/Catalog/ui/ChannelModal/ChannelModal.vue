<script setup lang="ts">

import type {ICatalogChannel} from '@/entities/Catalog';
import {VModal} from '@/shared/ui/modal';
import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {pluralize} from '@/shared/lib/helpers';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";
import type {InfluenceBotChannel} from "@/entities/Bot";

const props = defineProps<{
  channel: ICatalogChannel | InfluenceBotChannel,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const { t } = useI18n()
const { webApp, secondaryThemeBgColor } = useTelegram()

const goToBotPage = () => {
  emit('update:modelValue', false)
  const link = `https://t.me/${props.channel.botAdmin.username}?start=webapp`
  webApp.openTelegramLink(link)
}

const goToChannel = () => {
  webApp.openTelegramLink(props.channel.link)
}

</script>

<template>
  <v-modal
    class="channel-modal"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <template #modal-head>
      <div class="channel-modal__head">
        <image-avatar
          :title="channel.title"
          size="large"
          background="blue"
          class="channel-modal__head-avatar"
        />
        <div class="channel-modal__head-info">
          <span class="channel-modal__head-title">
            {{ channel.title }}
          </span>
          <span class="channel-modal__head-amount">
            {{ pluralize(channel.subscribersCount,
              t('common.subscriber.subscriber'),
              t('common.subscriber.subscriber_s'),
              t('common.subscriber.subscribers'))
            }}
          </span>
        </div>
      </div>
    </template>

    <template #modal-body>
      <div class="channel-modal__body">
        <div class="channel-modal__body-tags">
          <div
            class="channel-modal__body-tag"
            :style="{ backgroundColor: secondaryThemeBgColor }"
          >
            <span>{{ channel.category ? channel.category.name : t('catalog.other') }}</span>
          </div>
        </div>

        <div class="channel-modal__body-description">
          <span>{{ t('common.description') }}</span>
          <p>{{ channel.about || channel.preview }}</p>
        </div>

        <div class="channel-modal__body-buttons">
          <button-base
            color="default"
            @click="goToChannel"
          >
            {{ t('common.goToChannel') }}
          </button-base>
          <button-base
            v-if="channel.botAdmin"
            color="hint"
            @click="goToBotPage"
          >
            {{ t('common.goToBotWithMaterials') }}
          </button-base>
        </div>
      </div>
    </template>
  </v-modal>
</template>

<style lang="scss" scoped>
@import "style";
</style>