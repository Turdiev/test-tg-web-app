<script setup lang="ts">

import {TitleH3} from '@/shared/ui/title';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const { secondaryThemeBgColor } = useTelegram()
</script>

<template>
  <router-link
    to="/support/faq"
    class="support-faq"
    :style="{ backgroundColor: secondaryThemeBgColor }"
  >
    <div class="support-faq__wrapper">
      <title-h3>FAQ</title-h3>
      <span class="support-faq__text">{{ t('support.faq') }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>