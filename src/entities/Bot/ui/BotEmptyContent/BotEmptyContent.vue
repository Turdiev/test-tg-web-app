<script setup lang="ts">
import {useTelegram} from '@/shared/lib/use';

const { secondaryThemeBgColor } = useTelegram()
</script>

<template>
  <div
    class="bot-empty-content"
    :style="{ backgroundColor: secondaryThemeBgColor }"
  >
    <span>Автор еще не опубликовал контент на продажу</span>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>