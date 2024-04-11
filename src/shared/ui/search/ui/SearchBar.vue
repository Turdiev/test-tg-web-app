<script setup lang="ts">

import {IconSearch} from '@/shared/ui/icons';
import {VInput} from '@/shared/ui/input';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
import IconClose from '@/shared/ui/icons/IconClose.vue';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

withDefaults(defineProps<{
  isShowBtnClose?: boolean
}>(), {
  isShowBtnClose: false
})

const emit = defineEmits(['close', 'focused'])

const isFocusedSearch = ref(false)

const onFocusInput = (event: boolean) => {
  isFocusedSearch.value = event
  emit('focused')
}

const onCloseSearchBar = (event: boolean) => {
  isFocusedSearch.value = event
  emit('close')
}
</script>

<template>
  <div
    class="search-bar"
    :class="{'search-bar_focused': isFocusedSearch}"
  >
    <v-input
      v-model="searchQuery"
      :placeholder="t('common.search')"
      type="text"
      :is-button-close="isFocusedSearch || isShowBtnClose"
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
      <span>{{ t('common.searchResult') }}</span>

      <div class="search-bar__results">
        <slot name="results"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>