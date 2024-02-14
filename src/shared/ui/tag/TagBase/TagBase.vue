<script setup lang="ts">

import IconClose from '@/shared/ui/icons/IconClose.vue';
import type {ITags} from '@/entities/PurchaseHistory/model/types';

defineProps<{
  tag: ITags
  active: ITags | null
}>()

defineEmits(['click'])
</script>

<template>
  <div
    class="tag-base"
    :class="{'tag-base_active': active?.value === tag.value}"
    @click="$emit('click')"
  >
    <span>{{ tag.label }}</span>

    <icon-close v-if="active?.value === tag.value"/>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>