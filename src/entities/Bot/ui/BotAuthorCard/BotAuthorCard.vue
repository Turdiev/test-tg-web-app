<script setup lang="ts">

import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import type {InformationAuthorInfluenceBot} from '@/entities/Bot';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

withDefaults(defineProps<{
  botAuthor: InformationAuthorInfluenceBot
}>(), {
  botAuthor() {
      return null
  },
})

</script>

<template>
	<div class="bot-author-card">
    <image-avatar
      :title="botAuthor?.firstName"
      size="x-large"
      background="blue"
      class="bot-author-card__avatar"
    />

    <div class="bot-author-card__info">
      <div class="bot-author-card__name">
        <span>{{ botAuthor?.firstName }} {{ botAuthor?.lastName }}</span>
      </div>
      <div class="bot-author-card__description">
        <span>{{ botAuthor?.description || t('bot.noDescription') }}</span>
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>