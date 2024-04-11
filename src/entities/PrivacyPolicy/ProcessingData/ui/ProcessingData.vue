<script setup lang="ts">

import {CheckboxBase} from '@/shared/ui/checkbox/CheckboxBase';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';
import {TitleH2} from '@/shared/ui/title';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";

const { secondaryThemeBgColor } = useTelegram()

const { t } = useI18n()

const privacyPolicyStore = usePrivacyPolicyStore()
const { privacyPolicyCheckbox, termsOfUseCheckbox } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="processing-data">
    <title-h2>{{ t('privacy.dataProcessingConsent') }}</title-h2>
    <p class="processing-data__description">
      {{ t('privacy.consentToDataText') }}
      <router-link to="" >{{ t('privacy.privacyText') }}</router-link> и
      <router-link to="" >{{ t('privacy.serviceTermsText') }}</router-link>
    </p>
    <div
      class="processing-data__wrapper"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <div class="processing-data__wrapper-item">
        <checkbox-base v-model="privacyPolicyCheckbox"/>
        <p>
          {{ t('privacy.acceptTerms') }}
          <router-link to="" >{{ t('privacy.acceptTermsPrivacy') }}</router-link>
        </p>
      </div>
      <div class="processing-data__wrapper-item">
        <checkbox-base v-model="termsOfUseCheckbox"/>
        <p>
          {{ t('privacy.acceptYears') }}
          <router-link to="">{{ t('privacy.acceptYearsServiceTerms') }}</router-link>
        </p>
      </div>
    </div>
    <div
      class="processing-data__cookie"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <p>
        {{ t('privacy.fileCookieText') }}
        <router-link to="" >{{ t('privacy.fileCookie') }}</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>