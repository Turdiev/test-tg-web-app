<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {BotAuthorChannelListing} from '@/widgets/Bot/ui/BotAuthorChannelListing';
import {useBotStore} from '@/entities/Bot';
import {useRoute} from 'vue-router';
import {computed, onBeforeMount} from 'vue';
import {useIsLoading} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';

const botStorage = useBotStore()
const { fetchInfluenceChannels } = botStorage

const route = useRoute()
const { isLoading, startLoading, finishLoading } = useIsLoading()

const botUsername = computed(() => route.params.username)
const channelId = computed(() => route.query.channelId)

onBeforeMount(async () => {
  startLoading()
  await fetchInfluenceChannels(botUsername.value)
  finishLoading()
})
</script>

<template>
  <div class="bot-author-channel-page">
    <div class="container">
      <title-back :path="`/bot/${botUsername}`" text-align="center">
        <div class="bot-author-channel-page__title">
          <title-h3>Каналы автора</title-h3>
          <span class="bot-author-channel-page__amount-channel">
            {{ botUsername }}
          </span>
        </div>
      </title-back>

      <v-loader v-model="isLoading"/>
      <BotAuthorChannelListing v-if="!isLoading"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>