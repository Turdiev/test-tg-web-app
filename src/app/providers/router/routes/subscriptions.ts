import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SubscriptionsPage'

export const route: RouteRecordRaw = {
    path: '/subscriptions',
    name: routeName,
    component: () => import('@/pages/subscriptions')
}