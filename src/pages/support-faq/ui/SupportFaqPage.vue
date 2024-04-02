<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {VLoader} from '@/shared/ui/loaders';
import {useLoadingWrap} from '@/shared/lib/use';
import {useSupportStore} from '@/entities/Support/model/support';
import SupportFaqListing from '@/widgets/Support/ui/SupportFaqListing/SupportFaqListing.vue';
import {onBeforeMount} from 'vue';

const supportStorage = useSupportStore()
const { fetchSupportsQuestions } = supportStorage

const { isLoading, runWithLoading } = useLoadingWrap()

onBeforeMount(() => {
  runWithLoading(fetchSupportsQuestions)
})

</script>

<template>
  <div class="support-faq-page">
    <div class="container">
      <title-back path="/support" text-align="center">
        <title-h3>FAQ</title-h3>
      </title-back>

      <v-loader v-model="isLoading"/>

      <SupportFaqListing v-if="!isLoading"/>

<!--      <SupportStillQuestions />-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>