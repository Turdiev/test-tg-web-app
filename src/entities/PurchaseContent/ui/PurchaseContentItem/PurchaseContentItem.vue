<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import {currencyToFormat, pluralize} from '@/shared/lib/helpers';
import type {IPurchaseContentBot, IPurchaseContentChannel} from '@/entities/PurchaseContent/model';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

withDefaults(defineProps<{
  content: IPurchaseContentBot | IPurchaseContentChannel,
  isBot?: boolean,
}>(), {
  content() {
    return null
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <v-card
    :is-link="isBot"
    :path="`/purchase-content/${content.id}`"
    class="purchase-content-item"
    @click="!isBot ? emit('click') : ''"
  >
    <div class="purchase-content-item__body">
      <image-avatar
        :title="content.title || content.name"
        size="large"
        background="blue"
        class="purchase-content-item__avatar"
      />

      <div class="purchase-content-item__info">
        <div class="purchase-content-item__name">
          <span>{{ content.title || `@${content.name}` }}</span>
        </div>
        <div
          v-if="isBot"
          class="purchase-content-item__purchase"
        >
          <span>{{ pluralize(content.purchaseCount,
              t('common.purchase.purchase'),
              t('common.purchase.purchases'),
              t('common.purchase.purchasesPlural'))
            }}
          </span>
        </div>
        <div
          v-else
          class="purchase-content-item__purchase"
        >
          <span>{{ currencyToFormat(content.cost || 0) }}/{{ t('common.month') }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>