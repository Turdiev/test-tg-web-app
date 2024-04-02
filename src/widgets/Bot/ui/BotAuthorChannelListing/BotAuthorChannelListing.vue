<script setup lang="ts">
import {BotAuthorChannelItem, type InfluenceBotChannel, useBotStore} from '@/entities/Bot';
import {storeToRefs} from 'pinia';
import {useTelegram} from '@/shared/lib/use';
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';
import {ChannelModal} from '@/entities/Catalog';

const botStorage = useBotStore()
const { allInfluenceBotChannels } = storeToRefs(botStorage)
const { fetchInfluenceChannelById } = botStorage

const route = useRoute()

const botUsername = computed(() => route.params.username)
const goToChannel = async (channelId: string) => {
  const channel = await fetchInfluenceChannelById(botUsername.value, channelId)

  showModal(channel)
}

const showModal = (channel: InfluenceBotChannel) => {
  const { open } = useModal({
    context: vfm,
    component: ChannelModal,
    attrs: {
      channel: channel
    },
  })

  open()
}
</script>

<template>
  <div class="bot-author-channel-listing">
    <div class="bot-author-channel-listing__content">
      <template v-if="allInfluenceBotChannels.length > 0">
        <BotAuthorChannelItem
          v-for="channel in allInfluenceBotChannels"
          :key="channel"
          :channel="channel"
          class="bot-author-channel-listing__item"
          @click="goToChannel(channel.id)"
        />
      </template>
      <div
          v-if="allInfluenceBotChannels.length === 0"
          class="bot-author-channel-listing__not-subscribers"
      >
        <span>Нет каналов!</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>