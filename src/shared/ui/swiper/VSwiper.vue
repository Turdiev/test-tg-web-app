<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

withDefaults(defineProps<{
  slidesPerView?: number | 'auto',
  spaceBetween?: number,
  isPagination?: boolean,
  centeredSlides?: boolean,
}>(), {
  slidesPerView: 2,
  spaceBetween: 10,
  isPagination: false,
  centeredSlides: true,
})

// const onProgress = (e) => {
//   const [swiper, progress] = e.detail;
//   console.log(progress)
// };

// const onSlideChange = (e) => {
//   console.log('slide changed')
// }
</script>

<template>
  <swiper-container
    slides-per-view="auto"
    :space-between="spaceBetween"
    :centered-slides="centeredSlides"
    :pagination="isPagination"
    class="v-swiper"
  >
    <slot name="swiper-slide"/>
  </swiper-container>
</template>

<style lang="scss" scoped>
@import "style";
</style>