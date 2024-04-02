<script setup lang="ts">
import { RouterView } from 'vue-router'
import {ModalsContainer} from 'vue-final-modal';


</script>

<template>
  <div class="app page">

    <router-view />

    <modals-container />
  </div>
</template>

<style lang="scss" scoped>
.app {}
</style>
