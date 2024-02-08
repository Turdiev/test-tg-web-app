<script setup lang="ts">

import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/store';
import {storeToRefs} from 'pinia';
import {useRouter} from 'vue-router';
import {computed} from 'vue';

const router = useRouter()
const privacyPolicyStore = usePrivacyPolicyStore()
const { agreementAccepted, privacyPolicyCheckbox, termsOfUseCheckbox } = storeToRefs(privacyPolicyStore)
const { setAgreementAccepted } = privacyPolicyStore

const isDisabledButton = computed(() => {
  return privacyPolicyCheckbox.value && termsOfUseCheckbox.value
})

const startUsingBot = () => {
  agreementAccepted.value = true
  setAgreementAccepted()
  router.push({name: 'MainPage'})
}
</script>

<template>
  <div class="using-the-bot">
    <button-base
      :disabled="!isDisabledButton"
      @click="startUsingBot"
    >
      Начать пользоваться ботом
    </button-base>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>