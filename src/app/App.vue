<script setup lang="ts">
import { RouterView } from 'vue-router'
import {TheNavigation} from '@/widgets/TheNavigation'
import {UsingTheBot} from '@/features/UsingTheBot';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';
import {ModalsContainer} from 'vue-final-modal';

const privacyPolicyStore = usePrivacyPolicyStore()
const { agreementAccepted, verificationAge } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="app page">

    <main class="app__content">
      <router-view />
    </main>

    <UsingTheBot v-if="verificationAge && !agreementAccepted" />
    <TheNavigation v-if="agreementAccepted" />
    <modals-container />
  </div>
</template>

<style lang="scss" scoped>
.app {

  &__content {
    //height: 100%;
    height: 100vh;
    overflow-y: auto;
  }
}
</style>
