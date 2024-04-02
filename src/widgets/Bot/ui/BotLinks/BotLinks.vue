<script setup lang="ts">
import {BotLink, LINKS} from '@/entities/Bot';
import {useTelegram} from '@/shared/lib/use';

const { webApp } = useTelegram()

const openUrl = (url: string) => {
  window.open(url, '_blank')
  webApp.openLink(url)
}
</script>

<template>
  <div class="bot-links">
    <div class="bot-links__list">
      <BotLink
        v-for="item in LINKS"
        :key="item.url"
        :link="item"
        class="bot-links__item"
        @click="openUrl(item.url)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>