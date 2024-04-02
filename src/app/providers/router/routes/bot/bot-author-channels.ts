import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'BotAuthorChannelsPage'

export const route: RouteRecordRaw = {
    path: '/bot/:username/channels',
    name: routeName,
    component: () => import('@/pages/bot-author-channel'),
}