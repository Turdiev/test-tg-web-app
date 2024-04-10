<script setup lang="ts">

import {CheckboxBase} from '@/shared/ui/checkbox/CheckboxBase';
import {usePrivacyPolicyStore} from '@/entities/PrivacyPolicy/ProcessingData/model/privacy-policy';
import {storeToRefs} from 'pinia';
import {TitleH2} from '@/shared/ui/title';
import {useTelegram} from '@/shared/lib/use';

const { secondaryThemeBgColor } = useTelegram()

const privacyPolicyStore = usePrivacyPolicyStore()
const { privacyPolicyCheckbox, termsOfUseCheckbox } = storeToRefs(privacyPolicyStore)
</script>

<template>
  <div class="processing-data">
    <title-h2>Согласие на обработку данных</title-h2>
    <p class="processing-data__description">
      Для продолжения работы с ботом и доступа
      к контенту Вам необходимо ознакомиться, принять условия
      <router-link to="" >Политики конфиденциальности сервиса Fidsty</router-link> и
      <router-link to="" >Условия использования сервиса</router-link>
    </p>
    <div
      class="processing-data__wrapper"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <div class="processing-data__wrapper-item">
        <checkbox-base v-model="privacyPolicyCheckbox"/>
        <p>
          Я ознакомлен(а), принимаю условияи соглашаюсь с
          <router-link to="" >Политикой конфиденциальности сервиса Fidsty</router-link>
        </p>
      </div>
      <div class="processing-data__wrapper-item">
        <checkbox-base v-model="termsOfUseCheckbox"/>
        <p>
          Мне уже есть 18 лет и я ознакомлен(а), принимаю условия и соглашаюсь с
          <router-link to="">Условиями Использования сервиса Fidsty</router-link>
        </p>
      </div>
    </div>
    <div
      class="processing-data__cookie"
      :style="{ backgroundColor: secondaryThemeBgColor }"
    >
      <p>
        Для корректной работы бота сервис использует технологию cookie.
        Пользуясь ботом, вы соглашаетесь на использование
        <router-link to="" >файлов cookie</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>