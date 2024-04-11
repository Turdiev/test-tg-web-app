<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {storeToRefs} from 'pinia';
import {pluralize} from '@/shared/lib/helpers';
import {FavoritesListing} from '@/widgets/Favorites/SubscriptionsListing';
import {useFavoritesStore} from '@/entities/Favorites/model';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const favoritesStorage = useFavoritesStore()
const { channelFavorites } = storeToRefs(favoritesStorage)

</script>

<template>
  <div class="subscriptions-page">
    <div class="container">
      <title-back path="/" text-align="center">
        <div class="subscriptions-page__title">
          <title-h3>{{ t('pages.favorite') }}</title-h3>
          <span class="subscriptions-page__amount-channel">
            {{ pluralize(channelFavorites.length,
              t('common.bot.bot'),
              t('common.bot.bot_s'),
              t('common.bot.bots'))
            }}
          </span>
        </div>
      </title-back>

      <FavoritesListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>