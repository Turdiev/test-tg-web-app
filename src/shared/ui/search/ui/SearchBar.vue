<script setup lang="ts">

import {IconSearch} from '@/shared/ui/icons';
import {VInput} from '@/shared/ui/input';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {onMounted, ref, watch} from "vue";
import IconClose from "@/shared/ui/icons/IconClose.vue";

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const isFocusedSearch = ref(false)

const onFocusInput = (event: boolean) => {
  isFocusedSearch.value = event
}

const onCloseSearchBar = (event: boolean) => {
  isFocusedSearch.value = event
}
</script>

<template>
  <div
    class="search-bar"
    :class="{'search-bar_focused': isFocusedSearch}"
  >
    <v-input
      v-model="searchQuery"
      placeholder="Поиск"
      type="text"
      :is-button-close="isFocusedSearch"
      class="search-bar__input"
      @focus="onFocusInput"
      @close="onCloseSearchBar"
    >
      <template #icon-left>
        <icon-search class="search-bar__icon"/>
      </template>
      <template #icon-right>
        <icon-close class="search-bar__icon"/>
      </template>
    </v-input>

    <div
      v-if="isFocusedSearch"
      class="search-bar__body"
    >
      <span>РЕЗУЛЬТАТ ПОИСКА</span>

      <div class="search-bar__results">
        <slot name="results"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>