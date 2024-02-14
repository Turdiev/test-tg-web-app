import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'SupportPage'

export const route: RouteRecordRaw = {
    path: '/support',
    name: routeName,
    component: () => import('@/pages/support')
}