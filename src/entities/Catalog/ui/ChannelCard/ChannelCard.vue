<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import type {ICatalogChannel} from '@/entities/Catalog';
import {pluralize} from '@/shared/lib/helpers';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

defineProps<{
  channel: ICatalogChannel
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <v-card
    :is-link="false"
    class="channel-card"
    @click="emit('click')"
  >
    <div class="channel-card__wrapper">
      <image-avatar
        :title="channel.title"
        background="blue"
        class="channel-card__image"
      />
      <div class="channel-card__info">
        <p class="channel-card__title">{{ channel.title }}</p>
        <p class="channel-card__amount_subscribers">
          {{ pluralize(channel.subscribersCount,
            t('common.subscriber.subscriber'),
            t('common.subscriber.subscriber_s'),
            t('common.subscriber.subscribers'))
          }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>