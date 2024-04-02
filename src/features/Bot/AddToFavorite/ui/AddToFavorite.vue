
<script setup lang="ts">

import IconBookmark from '@/shared/ui/icons/IconBookmark.vue';
import {useBotAddToFavorite} from '@/features/Bot/AddToFavorite/model';
import {computed} from 'vue';
import {useRoute} from 'vue-router';

withDefaults(defineProps<{
  isFavorites: boolean
}>(), {})

const route = useRoute()
const { changeToFavorite } = useBotAddToFavorite()

const botUsername = computed(() => route.params.username)

const onClick = async () => {
  await changeToFavorite(botUsername.value)
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