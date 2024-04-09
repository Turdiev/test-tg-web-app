<script setup lang="ts">

import {useTelegram} from "@/shared/lib/use";
import {onMounted} from "vue";

const { webApp } = useTelegram()

// onMounted(() => {
//   webApp.MainButton.show()
// })
</script>

<template>
  <div class="params">
    <p>themeParams: {{ webApp.themeParams }}</p>
  </div>
  <div>
    <p>colorScheme: {{ webApp.colorScheme }}</p>
    <p>backgroundColor: {{ webApp.backgroundColor }}</p>
    <p>headerColor: {{ webApp.headerColor }}</p>
    <p>viewportHeight: {{ webApp.viewportHeight }}</p>
    <p>viewportHeight: {{ webApp.viewportHeight }}</p>
    <p>viewportStableHeight: {{ webApp.viewportStableHeight }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>