<script setup lang="ts">

import {IconSearch} from '@/shared/ui/icons';
import {VInput} from '@/shared/ui/input';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

</script>

<template>
  <v-input
    v-model="searchQuery"
    placeholder="Поиск"
    type="text"
    class="search-bar"
  >
    <template #icon>
      <icon-search />
    </template>
  </v-input>
</template>

<style lang="scss" scoped>
@import "style";
</style>