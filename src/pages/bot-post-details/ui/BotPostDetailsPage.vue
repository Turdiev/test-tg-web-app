<script setup lang="ts">
import {computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import { useBotStore } from '@/entities/Bot/model/bot';
import { BotFooter, BotHeader} from '@/widgets/Bot';
import {useIsLoading, useTelegram} from '@/shared/lib/use';
import {VLoader} from '@/shared/ui/loaders';
import {BotContentPostItem} from '@/entities/Bot';
import {storeToRefs} from 'pinia';

const botStorage = useBotStore()
const { fetchChannelPostById, fetchInfoInfluenceBot, fetchInfoInfluenceBotAuthor, fetchBotInfluenceBueLink } = botStorage
const { currentChannelPost, informationAuthorInfluenceBot, influenceBotInformation } = storeToRefs(botStorage)

const { webApp } = useTelegram()
const route = useRoute()
const { isLoading, startLoading, finishLoading } = useIsLoading()

const botUsername = computed(() => route.params.username)
const currentPostId = computed(() => route.params.id)

onMounted(async () => {
  startLoading()
  await loadData()
  finishLoading()
})

const loadData = async () => {
  await fetchChannelPostById(botUsername.value, currentPostId.value)

  if (influenceBotInformation.value === null) {
    await fetchInfoInfluenceBot(botUsername.value)
  }
  if (informationAuthorInfluenceBot.value === null) {
    await fetchInfoInfluenceBotAuthor(botUsername.value)
  }
}

const byuPostChannel = async (postId: string) => {
  const bueLink = await fetchBotInfluenceBueLink(botUsername.value, postId)
  webApp.openLink(bueLink)
}

</script>

<template>
  <div class="bot-post-details-page">
    <BotHeader
      :back-path="`/bot/${botUsername}`"
      label-header="Назад"
      class="bot-post-details-page__header"
    />

    <div class="bot-post-details-page__content">
      <v-loader v-model="isLoading"/>

      <BotContentPostItem
        v-if="!isLoading"
        :post="currentChannelPost"
        :channel-name="influenceBotInformation.name"
        :author-username="`${informationAuthorInfluenceBot?.firstName || ''} ${informationAuthorInfluenceBot?.lastName || ''}`"
        class="bot-post-details-page__post-item"
        @click="byuPostChannel(currentChannelPost.id)"
      />
    </div>

    <BotFooter />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>