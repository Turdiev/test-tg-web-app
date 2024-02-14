import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'SupportArticlePage'

export const route: RouteRecordRaw = {
    path: '/support/article/:id',
    name: routeName,
    component: () => import('@/pages/support-article')
}