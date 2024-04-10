<script setup lang="ts">

import {TitleH2} from '@/shared/ui/title';
import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';
import {useTelegram} from '@/shared/lib/use';

const { secondaryThemeBgColor } = useTelegram()

const privacyPolicyStore = usePrivacyPolicyStore()
const { verificationAge } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="verification-age">
    <title-h2 class="verification-age__title">Подтверждение возраста</title-h2>
    <p class="verification-age__description">
      Бот позволяет получить доступ к пользовательскому контенту,
      который может содержать контент, предназначенный исключительно
      для лиц старше 18 лет
    </p>
    <div
      class="verification-age__wrapper"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <span>Вам уже есть 18?</span>
      <div class="verification-age__actions">
        <button-base
          color="red"
          class="verification-age__button"
          @click="verificationAge = !verificationAge"
        >
          Нет
        </button-base>
        <button-base
          color="green"
          class="verification-age__button"
          @click="verificationAge = !verificationAge"
        >
          Да
        </button-base>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>