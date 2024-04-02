<script setup lang="ts">

import {UsingTheBot} from '@/features/UsingTheBot';
import {TheNavigation} from '@/widgets/TheNavigation';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';

const privacyPolicyStore = usePrivacyPolicyStore()
const { agreementAccepted, verificationAge } = storeToRefs(privacyPolicyStore)
</script>

<template>

  <main>
    <router-view />
  </main>

  <UsingTheBot v-if="verificationAge && !agreementAccepted" />
  <TheNavigation v-if="agreementAccepted" />
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  overflow-y: auto;
}
</style>