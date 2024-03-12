<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {onBeforeMount} from 'vue';
import {useLoadingWrap, useTelegram} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';
import {FavoritesItem} from "@/entities/Favorites/ui";
import {useFavoritesStore} from "@/entities/Favorites/model";

const { webApp } = useTelegram()

const favoritesStorage = useFavoritesStore()
const { channelFavorites } = storeToRefs(favoritesStorage)
const { fetchFavoritesChannel } = favoritesStorage

const { isLoading, runWithLoading } = useLoadingWrap()

onBeforeMount(() => {
  runWithLoading(fetchFavoritesChannel)
})

const routeToChannel = (link: string) => {
  if (link.indexOf('https') === -1) {
    webApp.openTelegramLink(`https://${link}`)
  } else {
    webApp.openTelegramLink(link)
  }
}

const handleBookmark = () => {
  // TODO добавить логику удаления из избранного
}
</script>

<template>
  <div class="favorites-listing">
    <v-loader v-model="isLoading"/>

    <template v-if="!isLoading && channelFavorites.length !== 0">
      <FavoritesItem
        v-for="channel in channelFavorites"
        :key="channel.id"
        :channel="channel"
        class="favorites-listing__item"
        @click="routeToChannel(channel.referralLink)"
        @click:bookmark="handleBookmark"
      />
    </template>
    <div
      v-if="!isLoading && channelFavorites.length === 0"
      class="favorites-listing__not-subscribers"
    >
      <span>Нечего нет!</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>