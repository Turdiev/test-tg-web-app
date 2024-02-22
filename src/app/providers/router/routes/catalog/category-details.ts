import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CategoryDetailsPage'

export const route: RouteRecordRaw = {
    path: '/catalog/category/:name',
    name: routeName,
    component: () => import('@/pages/category-details')
}