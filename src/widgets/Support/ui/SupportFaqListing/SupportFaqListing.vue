<script setup lang="ts">

import {VAccordion} from '@/shared/ui/accordion';
import {useSupportStore} from '@/entities/Support/model/support';

const supportStorage = useSupportStore()
const { supportQuestionListing } = supportStorage
</script>

<template>
  <div class="support-faq-listing">
    <v-accordion
      v-for="item in supportQuestionListing"
      :key="item.id"
      :label="item.text"
      class="support-faq-listing__item"
    >
      {{ item.answer }}
    </v-accordion>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>