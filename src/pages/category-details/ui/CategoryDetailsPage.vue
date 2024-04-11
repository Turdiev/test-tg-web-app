<script setup lang="ts">

import {computed, onBeforeMount, ref} from 'vue';
import {useRoute} from 'vue-router';
import {useCatalogStore} from '@/entities/Catalog';
import {TitleBack, TitleH3} from '@/shared/ui/title';
import {CategoryDetails} from '@/widgets/Category/ui/CategoryDetails';
import {pluralize} from '@/shared/lib/helpers';
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const route = useRoute()

const catalogStore = useCatalogStore()
const { getCurrentCategory, transitionFrom } = catalogStore

const currentCategory = ref(null)

const categoryName = computed(() => {
  return route.params.name
})

onBeforeMount(() => {
  currentCategory.value = getCurrentCategory(categoryName.value)
})
</script>

<template>
  <div class="category-details-page">
    <div class="container">
      <title-back :path="transitionFrom" text-align="center">
        <div class="category-details-page__title">
          <title-h3>{{ currentCategory.name }}</title-h3>
          <span class="category-details-page__amount-channel">
            {{ pluralize(currentCategory.channels.length,
              t('common.channel.channel'),
              t('common.channel.channel_s'),
              t('common.channel.channels'))
            }}
          </span>
        </div>
      </title-back>

      <CategoryDetails :channels="currentCategory.channels" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>