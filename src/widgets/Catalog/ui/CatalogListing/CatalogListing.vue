<script setup lang="ts">

import {VSwiper} from '@/shared/ui/swiper';
import {ChannelCard, type ICatalogChannel} from '@/entities/Catalog';
import {IconArrowRight} from '@/shared/ui/icons';
import {useCatalogStore} from '@/entities/Catalog';
import {storeToRefs} from 'pinia';
import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';
import {ChannelModal} from '@/entities/Catalog/ui/ChannelModal';
import {pluralize} from '@/shared/lib/helpers';
import {onBeforeMount} from 'vue';
import {useLoadingWrap} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const catalogStore = useCatalogStore()
const { creationOfCatalogs, transitionFrom } = storeToRefs(catalogStore)
const { fetchCatalogChannel } = catalogStore

const { isLoading, runWithLoading } = useLoadingWrap()

const showModal = (channel: ICatalogChannel) => {
  const { open } = useModal({
    context: vfm,
    component: ChannelModal,
    attrs: {
      channel: channel
    },
  })

  open()
}

onBeforeMount(() => {
  runWithLoading(fetchCatalogChannel)
})

const saveTransitionFrom = () => {
  transitionFrom.value = '/catalog'
}

</script>

<template>
  <div class="catalog-listing">
    <v-loader v-model="isLoading"/>

    <template v-if="!isLoading && creationOfCatalogs.length !== 0">
      <div
        v-for="category in creationOfCatalogs"
        :key="category.id"
        class="catalog-listing__wrapper"
      >
        <div class="container">
          <div class="catalog-listing__head">
            <span class="catalog-listing__title">{{ category.name }}</span>
            <router-link
              :to="`/catalog/category/${category.name}`"
              class="catalog-listing__route"
              @click="saveTransitionFrom"
            >
              <span>{{ pluralize(category.channels.length,
                  t('common.channel.channel'),
                  t('common.channel.channel_s'),
                  t('common.channel.channels'))
                }}</span>
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
    <div
      v-if="!isLoading && creationOfCatalogs.length === 0"
      class="catalog-listing__not-results"
    >
      <span>{{ t('catalog.catalogEmpty') }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>