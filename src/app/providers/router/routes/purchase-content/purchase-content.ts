import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'PurchaseContentPage'

export const route: RouteRecordRaw = {
    path: '/purchase-content',
    name: routeName,
    component: () => import('@/pages/purchase-content')
}