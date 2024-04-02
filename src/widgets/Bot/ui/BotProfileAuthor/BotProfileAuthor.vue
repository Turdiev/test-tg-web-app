<script setup lang="ts">

import {BotAuthorCard, BotActions, useBotStore} from '@/entities/Bot'
import {AddToFavorite} from '@/features/Bot/AddToFavorite/ui';
import {storeToRefs} from 'pinia';

const botStorage = useBotStore()
const { informationAuthorInfluenceBot, isFavoriteInfluenceBot } = storeToRefs(botStorage)

</script>

<template>
	<div class="bot-profile-author">
    <BotAuthorCard :bot-author="informationAuthorInfluenceBot"/>

    <BotActions>
      <template #bookmark>
        <add-to-favorite
          :is-favorites="isFavoriteInfluenceBot"
        />
      </template>
    </BotActions>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>