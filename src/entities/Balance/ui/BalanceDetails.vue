<script setup lang="ts">

</script>

<template>
  <div class="balance-details">
    <div class="balance-details__wrapper">
      <div class="balance-details__info">
        <h2 class="balance-details__title">
          Fidsty-баланс
        </h2>
        <div class="balance-details__amount">
          <span>999 999 ₽</span>
        </div>
      </div>
      <div class="balance-details__actions">
        <slot name="top-up-balance"/>
        <slot name="purchase-history"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>