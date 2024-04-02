<script setup lang="ts">

import {useModal} from 'vue-final-modal';
import {type ICatalogChannel} from '@/entities/Catalog';
import {CardArrow} from '@/shared/ui/card/CardArrow';
import {ChannelModal} from '@/entities/Catalog';
import {vfm} from '@/shared/lib/plugins/vue-final-model';

defineProps<{
  channels: ICatalogChannel[]
}>()


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

</script>

<template>
  <div
    class="category-details"
  >
    <card-arrow
      v-for="channel in channels"
      :key="channel.id"
      :title="channel.title"
      image="image"
      :subscribers="channel.subscribersCount"
      class="category-details__channel"
      @click="showModal(channel)"
    />
  </div>
</template>

<style lang="scss">
@import "style";
</style>