<script setup lang="ts">

import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {IconArrowRight} from '@/shared/ui/icons';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";
import {currencyToFormat} from "@/shared/lib/helpers";

const { t } = useI18n()

const { secondaryThemeBgColor } = useTelegram()
</script>

<template>
	<div
    class="bot-footer"
    :style="{ backgroundColor: secondaryThemeBgColor }"
  >
    <div class="container">
     <div class="bot-footer__wrapper">
       <div class="bot-footer__left">
         <image-avatar
           title="Ilyas"
           size="medium"
           form="square"
           background="blue"
           class="bot-footer__avatar"
         />

         <div class="bot-footer__balance">
           <router-link
             to=""
             class="bot-footer__balance-link"
           >
             <span>{{ t('main.fidstyBalance') }}</span>
             <icon-arrow-right class="bot-footer__balance-link-icon"/>
           </router-link>
           <span class="bot-footer__balance-text">{{ currencyToFormat(0) }}</span>
         </div>
       </div>
       <div class="bot-footer__right">
         <button-base
           color="blue-light"
           class="bot-footer__button"
         >
           <span>{{ t('bot.donateToAuthor') }}</span>
         </button-base>
       </div>
     </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>