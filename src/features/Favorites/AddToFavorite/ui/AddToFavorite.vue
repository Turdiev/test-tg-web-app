
<script setup lang="ts">

import IconBookmark from '@/shared/ui/icons/IconBookmark.vue';
import {useAddToFavorite} from '@/features/Favorites/AddToFavorite/model';
import {toRef} from 'vue';

const props = withDefaults(defineProps<{
  data: any[],
  id: string,
  isFavorites: boolean
}>(), {
  data() {
      return []
  },
})

const propsData = toRef(props, 'data')

const { changeToFavorite } = useAddToFavorite()

const onClick = async () => {
  const newFavorite = await changeToFavorite(props.id)
  propsData.value.forEach(item => {
    if (item.id === newFavorite.botId) {
      item.isFavorite = newFavorite.isFavorite
    }
  })
}
</script>

<template>
  <div
    class="add-to-favorite"
    @click.stop="onClick"
  >
    <icon-bookmark
      class="add-to-favorite__icon"
      :class="{'add-to-favorite__icon_is-not-favorites': !isFavorites}"
    />
  </div>
</template>

<style lang="scss" >
@import "style";
</style>