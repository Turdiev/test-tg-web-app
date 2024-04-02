<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

withDefaults(defineProps<{
  slidesPerView?: number | 'auto',
  spaceBetween?: number,
  pagination?: {
    type: string
  },
  centeredSlides?: boolean,
}>(), {
  slidesPerView: 2,
  spaceBetween: 10,
  isPagination: false,
  centeredSlides: true,
})



</script>

<template>
  <swiper-container
    id="swiper"
    slides-per-view="auto"
    :space-between="spaceBetween"
    :centered-slides="centeredSlides"
    :pagination="pagination"
    class="v-swiper"
  >
    <slot name="swiper-slide"/>
  </swiper-container>
</template>

<style lang="scss" >
@import "style";
</style>