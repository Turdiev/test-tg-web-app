<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import { useBotStore } from '@/entities/Bot/model/bot';
import { VTabs } from '@/shared/ui/tabs'
import { IconBulletList, IconDashboard } from '@/shared/ui/icons'
import {BotProfileAuthor, BotFooter, BotContentGrid, BotHeader} from '@/widgets/Bot';
import {BotContentPost} from '@/widgets/Bot/ui/BotContentPost';
import {VLoader} from '@/shared/ui/loaders';
import {useIsLoading} from '@/shared/lib/use';
import {storeToRefs} from 'pinia';
import {BotEmptyContent} from '@/entities/Bot';

const route = useRoute()

const botStorage = useBotStore()
const { influenceBotInformation, informationAuthorInfluenceBot, allChannelPosts } = storeToRefs(botStorage)
const {
  fetchInfoInfluenceBot,
  fetchInfoInfluenceBotAuthor,
  fetchAllChannelPosts
} = botStorage

const { isLoading, startLoading, finishLoading } = useIsLoading()

const botUsername = computed(() => route.params.username)
const channelId = computed(() => route.query.channelId)

const tabs = [
  {
    icon: IconDashboard,
    key: 'grid',
    label: 'Сетка'
  },
  {
    icon: IconBulletList,
    key: 'list',
    label: 'Лента'
  },
]

onMounted(async () => {
  startLoading()
  await loadData()
  finishLoading()
})

const loadData = async () => {
  if (influenceBotInformation.value === null) {
    await fetchInfoInfluenceBot(botUsername.value)
  }
  if (informationAuthorInfluenceBot.value === null) {
    await fetchInfoInfluenceBotAuthor(botUsername.value)
  }
  if (allChannelPosts.value.length === 0) {
    await fetchAllChannelPosts(botUsername.value, channelId.value)
  }
}

const currentTab = ref('grid')
</script>

<template>
  <v-loader v-model="isLoading"/>

  <div v-if="!isLoading" class="bot-page">
    <BotHeader :close="true"  class="bot-page__header">
      <span>{{ influenceBotInformation?.username }}</span>
    </BotHeader>

    <div class="bot-page__content">
      <div class="container">
        <BotProfileAuthor class="bot-page__profile" />
        <VTabs
          v-model="currentTab"
          :tabs="tabs"
          class="bot-page__tabs"
        />

        <BotEmptyContent v-if="allChannelPosts.length === 0" />
      </div>

      <BotContentGrid v-if="currentTab === 'grid' && allChannelPosts.length !== 0" />
      <BotContentPost v-if="currentTab === 'list' && allChannelPosts.length !== 0" />
    </div>

    <BotFooter />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>