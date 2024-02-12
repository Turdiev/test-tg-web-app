<script setup lang="ts">

import {IconSearch} from "@/shared/ui/icons";
import {VInput} from "@/shared/ui/input";
import {usePurchaseHistorySearchStore} from "@/features/PurchaseHistory/model/purchase-history-search";
import {storeToRefs} from "pinia";

const searchStore = usePurchaseHistorySearchStore()
const { searchQuery } = storeToRefs(searchStore)

</script>

<template>
  <v-input
    v-model="searchQuery"
    placeholder="Поиск"
    type="text"
    class="purchase-history-search"
  >
    <template #icon>
      <icon-search />
    </template>
  </v-input>
</template>

<style lang="scss" scoped>
@import "style";
</style>