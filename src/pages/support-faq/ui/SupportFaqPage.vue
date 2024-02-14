<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {VAccordion} from '@/shared/ui/accordion';
import {SupportStillQuestions} from '@/widgets/Support';

const faqList = [
  {
    id: '1',
    title: 'Can I change my plan later?',
    text: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
  },
  {
    id: '2',
    title: 'Can I change my plan later?',
    text: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
  }
]

</script>

<template>
  <div class="support-faq-page">
    <div class="container">
      <title-back path="/support" text-align="center">
        <title-h3>FAQ</title-h3>
      </title-back>
      <div class="support-faq-page__list">
        <v-accordion
          v-for="item in faqList"
          :key="item.id"
          :label="item.title"
          class="support-faq-page__item"
        >
          {{ item.text }}
        </v-accordion>
      </div>
      <SupportStillQuestions />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>