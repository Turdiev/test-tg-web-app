import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'BotPostDetailsPage'

export const route: RouteRecordRaw = {
    path: '/bot/:username/post/:id',
    name: routeName,
    component: () => import('@/pages/bot-post-details'),
}