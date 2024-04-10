<script setup lang="ts">

import {useProfileStore} from "@/entities/Balance/model";
import {storeToRefs} from "pinia";
import {CurrencyType} from "@/shared/types";
import {useTelegram} from "@/shared/lib/use";
import {onMounted, ref, toRef, watch} from "vue";

const { webApp, viewportHeightTelegram, viewportStableHeightTelegram  } = useTelegram()
const viewportHeight = toRef(viewportHeightTelegram)
const viewportStableHeight = toRef(viewportStableHeightTelegram)

const balanceStorage = useProfileStore()
const { profileInfo } = storeToRefs(balanceStorage)

const mount = ref('dildo')

watch([viewportHeightTelegram, viewportStableHeightTelegram], (val1, val2) => {
  console.log('change')
  webApp.onEvent('viewportChanged', (event) => {
    console.log('1viewportChanged', event)
    console.log('2viewportHeightTelegram', viewportHeightTelegram)
    console.log('3viewportStableHeightTelegram', viewportStableHeightTelegram)
  })
})

onMounted(() => {
  mount.value = 'is dildo'

  webApp.onEvent('viewportChanged', (event) => {
    mount.value = event
    console.log('viewportChanged', event)
    console.log('viewportHeightTelegram', viewportHeight)
    console.log('viewportStableHeightTelegram', viewportStableHeight)
  })
})

const show = () => {
  webApp.showPopup({ title: 'DIldo', message: 'все гуд' })
}
</script>

<template>
  <div class="balance-details">
    <div class="balance-details__wrapper">
      <div class="balance-details__info">
        <h2
            class="balance-details__title"
            @click="show"
        >
          Fidsty-баланс
        </h2>
        <p>mount: {{ mount }}</p>
        <p>viewportHeightTelegram: {{ viewportHeight }}</p>
        <p>viewportStableHeightTelegram: {{ viewportStableHeight }}</p>
        <div class="balance-details__amount">
          <span>{{ profileInfo.balance?.amount }} {{ CurrencyType.USD }}</span>
        </div>
      </div>
      <div class="balance-details__actions">
        <slot name="top-up-balance"/>
        <slot name="purchase-history"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>