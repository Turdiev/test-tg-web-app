<script setup lang="ts">

import {BalanceAction} from '@/widgets/Balance';
import {FunctionalityList} from '@/widgets/Functionality';
import {useProfileStore} from '@/entities/Balance/model';
import {onBeforeMount} from 'vue';

const balanceStorage = useProfileStore()
const { fetchSubscriberInformation } = balanceStorage

onBeforeMount(async () => {
  await fetchSubscriberInformation()
})
</script>

<template>
  <div class="main-page">
    <BalanceAction />
    <FunctionalityList />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>