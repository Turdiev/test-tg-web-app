import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'PurchaseHistory'

export const route: RouteRecordRaw = {
    path: '/purchase-history',
    name: routeName,
    component: () => import('@/pages/purchase-history')
}