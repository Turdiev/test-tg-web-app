<script setup lang="ts">
import type { TabItem } from '@/shared/ui/tabs/VTabs/types';

withDefaults(defineProps<{
	tabs: TabItem[],
	modelValue: string
}>(), {
	tabs: () => {
		return []
	},
	modelValue: ''
})

const emit = defineEmits<{
	(e: 'update:modelValue', modelValue: string): void
}>()
</script>

<template>
	<div
		class="v-tabs"
		:style="{
			gridTemplateColumns: `repeat(${tabs.length}, 1fr)`
		}"
	>
		<div
			v-for="(tab, key) in tabs"
			:key="`v-tabs-item-${key}`"
			class="v-tabs__tab"
			:class="{
				'v-tabs__tab--active': tab.key === modelValue,
			}"
			@click="emit('update:modelValue', tab.key)"
		>
			<component
				v-if="tab.icon"
				:is="tab.icon"
				class="v-tabs__tab-icon"
			/>
			{{ tab.label }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>
