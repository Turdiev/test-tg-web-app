import type { Component } from 'vue';

export interface TabItem {
	icon?: Component,
	key: string,
	label: string
}