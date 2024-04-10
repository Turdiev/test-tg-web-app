<script setup lang="ts">

import {IconPlus} from '@/shared/ui/icons';
import {ButtonRound} from '@/shared/ui/button';
import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';
import {BalanceModal} from '@/entities/Balance';

const showModal = () => {
  const { open } = useModal({
    context: vfm,
    component: BalanceModal,
    attrs: {},
  })

  open()
}
</script>

<template>
  <ButtonRound
    label="Пополнить баланс"
    @click="showModal"
  >
    <template #icon>
      <icon-plus />
    </template>
  </ButtonRound>
</template>

<style lang="scss" scoped>
@import "style";
</style>