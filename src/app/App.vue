<script setup lang="ts">
import { RouterView } from 'vue-router'
import {TheNavigation} from '@/widgets/TheNavigation'
</script>

<template>
  <div class="app page">

    <main class="app__content">
      <RouterView />
    </main>

    <TheNavigation />
  </div>
</template>

<style lang="scss" scoped>
.app {

  &__content {
    //height: 100%;
    height: 100vh;
  }
}
</style>
