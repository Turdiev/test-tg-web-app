<script setup lang="ts">

import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {useRoute, useRouter} from 'vue-router';
import {routeName} from '@/app/providers/router/routes/bot/bot-author-channels';
import {computed} from 'vue';
import {useTelegram} from '@/shared/lib/use';

const route = useRoute()
const router = useRouter()
const { webApp } = useTelegram()

const channelId = computed(() => route.query.channelId)
const botUsername = computed(() => route.params.username)

const goToChannel = () => {
  router.push({ name: routeName, query: { channelId: channelId.value }})
}

const goToTelegramChat = () => {
  const link = `https://t.me/${botUsername.value}?start=startchat`
  webApp.openTelegramLink(link)
}

</script>

<template>
	<div class="bot-actions">
    <button-base
      color="default"
      class="bot-actions__button"
      @click="goToChannel"
    >
      <span>Каналы автора</span>
    </button-base>
    <button-base
      color="blue-light"
      class="bot-actions__button"
      @click="goToTelegramChat"
    >
      <span>Написать автору</span>
    </button-base>
    <div class="bot-actions__bookmark">
      <slot name="bookmark"/>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>