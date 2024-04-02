<script setup lang="ts">

import {BotGridItem, useBotStore} from '@/entities/Bot';
import {storeToRefs} from 'pinia';

const botStorage = useBotStore()
const { allChannelPosts } = storeToRefs(botStorage)
</script>

<template>
	<div class="bot-content-grid">
    <BotGridItem
      v-for="post in allChannelPosts"
      :key="post.id"
      :post="post"
    ></BotGridItem>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>