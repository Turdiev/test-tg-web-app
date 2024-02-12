<script setup lang="ts">

import {VCard} from "@/shared/ui/card";
import {IconArrowRight, IconUser} from "@/shared/ui/icons";
import {ImageAvatar} from "@/shared/ui/image/ImageAvatar";
</script>

<template>
  <v-card
    :is-link="true"
    class="card-author"
  >
    <div class="card-author__user">
      <image-avatar background="default" />
      <div class="card-author__wrapper">
        <div class="card-author__salesman">
          <icon-user />
          <span>Продавец контента</span>
        </div>
        <div class="card-author__username">
          <span>@ilyasaitkulov_bot</span>
        </div>
      </div>
    </div>
    <div class="card-author__button">
      <icon-arrow-right />
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>