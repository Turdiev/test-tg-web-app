<script setup lang="ts">
import {VModal} from "@/shared/ui/modal";
import {TitleH3} from "@/shared/ui/title";
import {VInput} from "@/shared/ui/input";
import {ref} from "vue";
import {ButtonBase} from "@/shared/ui/button/ButtonBase";
import {IconCoins} from "@/shared/ui/icons";
import {useProfileStore} from "@/entities/Balance/model";
import {useTelegram} from "@/shared/lib/use";

const { webApp } = useTelegram()

const balanceStorage = useProfileStore()
const { fetchTopUpBalanceUser } = balanceStorage

const amountValue = ref<number | null>(null)

const upBalance = async () => {
  const paymentLink = await fetchTopUpBalanceUser(amountValue.value)
  webApp.openLink(paymentLink)
}
</script>

<template>
  <v-modal class="balance-modal">
    <template #modal-head>
      <title-h3>
        Пополнить баланс
      </title-h3>
    </template>

    <template #modal-body>
      <div class="balance-modal__body">
        <v-input
          v-model="amountValue"
          placeholder="Сумма пополнения в $"
          input-type="number"
          class="balance-modal__input"
        >
          <template #icon-left>
            <icon-coins />
          </template>
        </v-input>

        <button-base
          color="default"
          :disabled="!amountValue || amountValue <= 0"
          class="balance-modal__button"
          @click="upBalance"
        >
          Пополнить
        </button-base>
      </div>
    </template>
  </v-modal>
</template>

<style lang="scss" scoped>
@import "style";
</style>