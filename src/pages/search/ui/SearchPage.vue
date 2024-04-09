<script setup lang="ts">

import {useTelegram} from "@/shared/lib/use";

const { webApp } = useTelegram()
</script>

<template>
  <div class="params">
    {{ webApp.themeParams }}
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>