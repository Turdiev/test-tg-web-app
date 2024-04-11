<script setup lang="ts">
import {SearchBar} from '@/shared/ui/search';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {ref, watch} from 'vue';
import {useSupportStore} from '@/entities/Support/model/support';
import {useTimeout} from '@/shared/lib/use';
import {SupportArticlesItem} from '@/entities/Support/ui/SupportArticleItem';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const supportStorage = useSupportStore()
const { foundSupportArticles } = storeToRefs(supportStorage)
const { fetchSupportsArticlesSearch } = supportStorage

const {setTimeoutId, clearTimeoutId} = useTimeout(fetchSupportsArticlesSearch, 800)

const isSearch = ref(false)

watch(searchQuery, (newValue) => {
  clearTimeoutId()
  if ( newValue !== '') {
    setTimeoutId(newValue)
    setTimeout(() => {
      if (foundSupportArticles.value.length === 0) isSearch.value = true
    }, 900)
  } else {
    foundSupportArticles.value = []
    isSearch.value = false
  }
})

const closeSearchBar = () => {
  searchQuery.value = ''
  foundSupportArticles.value = []
}
</script>

<template>
  <div class="support-article-search">
    <search-bar
      :is-show-btn-close="false"
      @close="closeSearchBar"
    >
      <template #results>
        <template v-if="foundSupportArticles.length > 0">
          <SupportArticlesItem
            v-for="item in foundSupportArticles"
            :key="item.id"
            :title="item.title"
            :path="`/support/article/${item.id}`"
            class="support-article-search__item"
          />
        </template>
        <div
          v-if="isSearch && foundSupportArticles.length === 0"
          class="support-article-search__not-results"
        >
          <span>{{ t('common.nothingFound') }}</span>
        </div>
      </template>
    </search-bar>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>