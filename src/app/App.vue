<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheHeader } from '@/widgets/TheHeader'
import {TheNavigation} from '@/widgets/TheNavigation'
import {UsingTheBot} from '@/features/UsingTheBot';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/store';
import {storeToRefs} from 'pinia';

const privacyPolicyStore = usePrivacyPolicyStore()
const { agreementAccepted, verificationAge } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="app page">
    <TheHeader />

    <main class="app__content">
      <RouterView />
    </main>

    <UsingTheBot v-if="verificationAge && !agreementAccepted" />
    <TheNavigation v-if="agreementAccepted" />
  </div>
</template>

<style lang="scss" scoped>
.app {

  &__content {
    height: 100vh;
  }
}
</style>
