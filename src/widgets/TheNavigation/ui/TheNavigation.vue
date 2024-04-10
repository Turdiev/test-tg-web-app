<script setup lang="ts">

import {useNavigationStore} from '../model/navigation';
import {storeToRefs} from 'pinia';
import {useTelegram} from '@/shared/lib/use';

const { secondaryThemeBgColor } = useTelegram()

const navigationStore = useNavigationStore()
const { activeNav } = storeToRefs(navigationStore)
const { handleNavigation, navigationItems } = navigationStore

</script>

<template>
  <nav
    class="navigation"
    :style="{ backgroundColor: secondaryThemeBgColor }"
  >
    <ul>
      <li
        v-for="item in navigationItems"
        :key="item.name"
        class="navigation__item"
        :class="{'navigation__item_active': item.name === activeNav}"
        @click="handleNavigation(item.name)"
      >
        <router-link :to="item.path">
          <component :is="item.icon" />
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "style";
</style>