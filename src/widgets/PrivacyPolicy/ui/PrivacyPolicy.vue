<script setup lang="ts">

import {ref, watch} from 'vue';
import {storeToRefs} from 'pinia';
import {ProcessingData, VerificationAge} from '@/entities/PrivacyPolicy';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/store';

const privacyPolicyStore = usePrivacyPolicyStore()
const { verificationAge } = storeToRefs(privacyPolicyStore)

const steps = ['verification-age', 'processing-data']
const activeStep = ref('verification-age')

watch(verificationAge, () => {
  activeStep.value = 'processing-data'
})
</script>

<template>
  <div class="privacy-policy">
    <div class="container">
      <div class="privacy-policy__stepper">
        <div
          v-for="item in steps"
          :key="item"
          class="privacy-policy__step"
          :class="{'privacy-policy__step_active': activeStep === item}"
        ></div>
      </div>
      <VerificationAge v-if="activeStep === 'verification-age'"/>
      <ProcessingData v-else/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>