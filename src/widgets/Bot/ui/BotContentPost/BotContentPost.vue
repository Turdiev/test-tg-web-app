<script setup lang="ts">

import {useBotStore} from '@/entities/Bot';
import {storeToRefs} from 'pinia';
import {BotContentPostItem} from '@/entities/Bot';
import {useTelegram} from '@/shared/lib/use';
import {computed} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()
const { webApp } = useTelegram()
const botStorage = useBotStore()
const { informationAuthorInfluenceBot, allChannelPosts, influenceBotInformation } = storeToRefs(botStorage)
const { fetchBotInfluenceBueLink } = botStorage


const botUsername = computed(() => route.params.username)
const byuPostChannel = async (postId: string) => {
  const bueLink = await fetchBotInfluenceBueLink(botUsername.value, postId)
  webApp.openLink(bueLink)
}
</script>

<template>
	<div class="bot-content-post">
    <BotContentPostItem
      v-for="post in allChannelPosts"
      :key="post.id"
      :channel-name="influenceBotInformation.name"
      :post="post"
      :author-username="`${informationAuthorInfluenceBot.firstName || ''} ${informationAuthorInfluenceBot.lastName || ''}`"
      class="bot-content-post__item"
      @click="byuPostChannel(post.id)"
    />
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>