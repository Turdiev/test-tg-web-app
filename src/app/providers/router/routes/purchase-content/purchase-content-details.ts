import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'PurchaseContentDetailsPage'

export const route: RouteRecordRaw = {
    path: '/purchase-content/:id',
    name: routeName,
    component: () => import('@/pages/purchase-content-details')
}