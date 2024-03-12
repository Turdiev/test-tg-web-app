<script setup lang="ts">

import type {IPurchaseContentBot} from "@/entities/PurchaseContent/model";
import {CardAuthor} from "@/shared/ui/card/CardAuthor";
import {useTelegram} from "@/shared/lib/use";

withDefaults(defineProps<{
  salesman: IPurchaseContentBot
}>(), {
  salesman() {
    return null
  },
})

const emit = defineEmits(['click'])

const { webApp } = useTelegram()

const openTelegramLink = (link: string) => {
  if (link.indexOf('https') === -1) {
    webApp.openTelegramLink(`https://${link}`)
  } else {
    webApp.openTelegramLink(link)
  }
}
</script>

<template>
  <card-author
    :user-name="salesman?.name"
    class="purchase-content-salesman"
    @click="openTelegramLink(salesman?.referralLink)"
  >
    <template #bookmark>
      <div class="purchase-content-salesman__bookmark">
        <slot />
      </div>
    </template>
  </card-author>
</template>

<style lang="scss" scoped>
@import "style";
</style>