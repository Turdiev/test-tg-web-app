<script setup lang="ts">

import {VSwiper} from '@/shared/ui/swiper';
import {ChannelCard, type IChannel} from '@/entities/Catalog';
import {IconArrowRight} from '@/shared/ui/icons';
import {useCatalogStore} from '@/entities/Catalog';
import {storeToRefs} from 'pinia';
import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';
import {ChannelModal} from '@/entities/Catalog/ui/ChannelModal';

const catalogStore = useCatalogStore()
const { categoryListing, transitionFrom } = storeToRefs(catalogStore)

const showModal = (channel: IChannel) => {
  const { open } = useModal({
    context: vfm,
    component: ChannelModal,
    attrs: {
      channel: channel
    },
  })

  open()
}

const saveTransitionFrom = () => {
  transitionFrom.value = '/catalog'
}

</script>

<template>
  <div
      v-for="category in categoryListing"
      :key="category.id"
      class="catalog-listing"
  >
    <div class="container">
      <div class="catalog-listing__head">
        <span class="catalog-listing__title">{{ category.title }}</span>
        <router-link
            :to="`/catalog/category/${category.name}`"
            class="catalog-listing__route"
            @click="saveTransitionFrom"
        >
          <span>{{ category.channels.length }} каналов</span>
          <icon-arrow-right />
        </router-link>
      </div>
    </div>
    <div class="catalog-listing__carousel-wrap">
      <v-swiper
        slides-per-view="auto"
        :space-between="12"
        :centered-slides="false"
        class="catalog-listing__carousel"
      >
        <template #swiper-slide>
          <swiper-slide
              v-for="channel in category.channels"
              :key="channel.id"
              class="catalog-listing__item"
          >
            <ChannelCard
                :channel="channel"
                @click="showModal(channel)"
            />
          </swiper-slide>
        </template>
      </v-swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>