<script setup lang="ts">

import {SubscriptionsItem} from '@/entities/Subscriptions/ui/SubscriptionsItem';
import {useSubscriptionsStore} from '@/entities/Subscriptions/model';
import {storeToRefs} from 'pinia';
import {onBeforeMount} from 'vue';
import {useLoadingWrap, useTelegram} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';

const tg = useTelegram()
const { webApp } = tg

const subscriptionsStorage = useSubscriptionsStore()
const { channelSubscriptions, isShowSearchBar } = storeToRefs(subscriptionsStorage)
const { fetchChannelSubscriptions } = subscriptionsStorage

const { isLoading, runWithLoading } = useLoadingWrap()

onBeforeMount(() => {
  isShowSearchBar.value = false
  runWithLoading(fetchChannelSubscriptions)
})

const routeToChannel = (link: string) => {
  webApp.openTelegramLink(link)
}
</script>

<template>
  <div class="subscriptions-listing">
    <v-loader v-model="isLoading"/>

    <template v-if="!isLoading && channelSubscriptions.length !== 0">
      <SubscriptionsItem
        v-for="channel in channelSubscriptions"
        :key="channel.id"
        :channel="channel"
        class="subscriptions-listing__item"
        @click="routeToChannel(channel.link)"
      />
    </template>
    <div
      v-if="!isLoading && channelSubscriptions.length === 0"
      class="subscriptions-listing__not-subscribers"
    >
      <span>Нет подписок</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>