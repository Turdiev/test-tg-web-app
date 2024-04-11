<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import {pluralize} from '@/shared/lib/helpers';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import type {AllInfluenceBotChannels} from '@/entities/Bot';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

withDefaults(defineProps<{
  channel: AllInfluenceBotChannels
}>(), {
  channel() {
    return null
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <v-card
    :is-link="false"
    class="bot-author-channel-item"
    @click="emit('click')"
  >
    <div class="bot-author-channel-item__body">
      <image-avatar
        :title="channel.title"
        size="large"
        form="round"
        background="blue"
        class="bot-author-channel-item__avatar"
      />

      <div class="bot-author-channel-item__info">
        <div class="bot-author-channel-item__name">
          <span>{{ channel.title }}</span>
        </div>
        <div class="bot-author-channel-item__purchase">
          <span>{{ pluralize(channel.subscribersCount,
              t('common.subscriber.subscriber'),
              t('common.subscriber.subscriber_s'),
              t('common.subscriber.subscribers'))
          }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>