<script setup lang="ts">

import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {useI18n} from "vue-i18n";
// import {IconInfoCircle} from '@/shared/ui/icons';

const { t } = useI18n()

withDefaults(defineProps<{
  username: string
  channelName: string
}>(), {
  username: '',
  channelName: '',
})

// const emit = defineEmits(['click'])
</script>

<template>
	<div class="bot-post-profile">
    <div class="bot-post-profile__left">
      <image-avatar
        :title="username"
        size="small"
        background="blue"
        class="bot-post-profile__avatar"
      />
      <div class="bot-post-profile__user-info">
        <div class="bot-post-profile__user-name">
          <span>{{ username }}</span>
        </div>
        <div class="bot-post-profile__user-channel">
          <span>{{ t('bot.channel') }}: {{ channelName }}</span>
        </div>
      </div>
    </div>
<!--    <div-->
<!--      class="bot-post-profile__info-circle"-->
<!--      @click="emit('click')"-->
<!--    >-->
<!--      <icon-info-circle class="bot-post-profile__info-circle-icon" />-->
<!--    </div>-->
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>