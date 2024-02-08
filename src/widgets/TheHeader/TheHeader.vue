<script setup lang="ts">

import {IconDots} from '@/shared/ui/icons';
import {useTelegram} from '@/shared/lib/use';

const { onClose } = useTelegram()

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div
            class="header__button"
            @click="onClose"
        >
          <span>Отмена</span>
        </div>
        <div class="header__title">
          <h1>Fidsty</h1>
          <span>бот</span>
        </div>
        <div class="header__clue">
          <div class="header__clue-button">
            <icon-dots class="icon header__clue-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "style";
</style>