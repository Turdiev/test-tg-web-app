<script setup lang="ts">

import {TitleH2} from '@/shared/ui/title';
import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n()

const { secondaryThemeBgColor } = useTelegram()

const privacyPolicyStore = usePrivacyPolicyStore()
const { verificationAge } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="verification-age">
    <title-h2 class="verification-age__title">{{ t('privacy.ageConfirmation') }}</title-h2>
    <p class="verification-age__description">
      {{ t('privacy.ageVerificationText') }}
    </p>
    <div
      class="verification-age__wrapper"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <span>{{ t('privacy.alreadyEighteen') }}</span>
      <div class="verification-age__actions">
        <button-base
          color="red"
          class="verification-age__button"
          @click="verificationAge = !verificationAge"
        >
          {{ t('privacy.no') }}
        </button-base>
        <button-base
          color="green"
          class="verification-age__button"
          @click="verificationAge = !verificationAge"
        >
          {{ t('privacy.yes') }}
        </button-base>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>