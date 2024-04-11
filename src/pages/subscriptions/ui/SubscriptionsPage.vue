<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {IconSearch} from '@/shared/ui/icons';
import {SubscriptionsListing} from '@/widgets/Subscriptions/SubscriptionsListing';
import {useSubscriptionsStore} from '@/entities/Subscriptions/model';
import {storeToRefs} from 'pinia';
import {pluralize} from '@/shared/lib/helpers';
import {SubscriptionsSearch} from '@/entities/Subscriptions/ui';
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n()

const subscriptionsStorage = useSubscriptionsStore()
const { channelSubscriptions, isShowSearchBar } = storeToRefs(subscriptionsStorage)

const handleSearch = () => {
  isShowSearchBar.value = true
}

</script>

<template>
  <div class="subscriptions-page">
    <div class="container">
      <title-back path="/" text-align="center">
        <div class="subscriptions-page__title">
          <title-h3>{{ t('pages.subscriptions') }}</title-h3>
          <span class="subscriptions-page__amount-channel">
            {{ pluralize(channelSubscriptions.length,
              t('common.channel.channel'),
              t('common.channel.channel_s'),
              t('common.channel.channels'))
            }}
          </span>
        </div>

        <template #right>
          <div
            class="subscriptions-page__search-btn"
            @click="handleSearch"
          >
            <icon-search  class="subscriptions-page__search-btn-icon" />
          </div>
        </template>
      </title-back>

      <transition name="fade">
        <SubscriptionsSearch v-if="isShowSearchBar" />
      </transition>
      <SubscriptionsListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>