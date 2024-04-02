<script setup lang="ts">
import {SearchBar} from '@/shared/ui/search';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {ref, watch} from 'vue';
import {ChannelModal, type ICatalogChannel, useCatalogStore} from '@/entities/Catalog';
import {useTimeout} from '@/shared/lib/use';
import {CardArrow} from '@/shared/ui/card/CardArrow';
import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';

const emit = defineEmits(['close', 'focus'])

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const catalogStore = useCatalogStore()
const { foundChannelsListing } = storeToRefs(catalogStore)
const { fetchSearchCatalogChannel } = catalogStore

const {setTimeoutId, clearTimeoutId} = useTimeout(fetchSearchCatalogChannel, 800)

const isSearch = ref(false)

watch(searchQuery, (newValue) => {
  clearTimeoutId()
  if ( newValue !== '') {
    setTimeoutId(newValue)
    setTimeout(() => {
      if (foundChannelsListing.value.length === 0) isSearch.value = true
    }, 900)
  } else {
    foundChannelsListing.value = []
    isSearch.value = false
  }
})

const showModal = (channel: ICatalogChannel) => {
  const { open } = useModal({
    context: vfm,
    component: ChannelModal,
    attrs: {
      channel: channel
    },
  })

  open()
}

const closeSearchBar = () => {
  searchQuery.value = ''
  foundChannelsListing.value = []
  emit('close')
}
const focused = () => {
  emit('focus')
}

</script>

<template>
  <div class="catalog-search">
    <search-bar
      :is-show-btn-close="false"
      @focused="focused"
      @close="closeSearchBar"
    >
      <template #results>
        <template v-if="foundChannelsListing.length > 0">
          <div class="catalog-search__results">
            <card-arrow
              v-for="channel in foundChannelsListing"
              :key="channel.id"
              :title="channel.title"
              image="image"
              :subscribers="channel.subscribersCount"
              class="catalog-search__channel"
              @click="showModal(channel)"
            />
          </div>
        </template>
        <div
          v-if="isSearch && foundChannelsListing.length === 0"
          class="catalog-search__not-results"
        >
          <span>Нечего не найдено!</span>
        </div>
      </template>
    </search-bar>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>