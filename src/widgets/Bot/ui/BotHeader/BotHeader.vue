<script setup lang="ts">

import {BotLinks} from '@/widgets/Bot';
import {TitleBack} from '@/shared/ui/title';
import {useTelegram} from '@/shared/lib/use';

const { onClose } = useTelegram()

withDefaults(defineProps<{
  labelHeader?: string,
  backPath?: string
  close?: boolean
}>(), {
  labelHeader: '',
  backPath: '',
  close: false
})
</script>

<template>
	<div class="bot-header">
    <div class="container">
      <title-back
        :path="backPath"
        text-align="left"
        :icon-label="labelHeader"
        @click="close ? onClose() : ''"
      >
        <slot />

        <template #right>
          <BotLinks />
        </template>
      </title-back>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>