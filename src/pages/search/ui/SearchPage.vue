<script setup lang="ts">

import {useTelegram} from "@/shared/lib/use";
import {onMounted} from "vue";

const { webApp } = useTelegram()

onMounted(() => {
  webApp.MainButton.show()
})
</script>

<template>
  <div class="params">
    {{ webApp.themeParams }}
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>