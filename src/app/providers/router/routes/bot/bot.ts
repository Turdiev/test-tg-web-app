import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'BotPage'

export const route: RouteRecordRaw = {
    path: '/bot/:username',
    name: routeName,
    component: () => import('@/pages/bot'),
}