import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'PurchaseHistoryDetails'

export const route: RouteRecordRaw = {
    path: '/purchase-history/:id',
    name: routeName,
    component: () => import('@/pages/purchase-history-details')
}