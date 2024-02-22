import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CategoryPage'

export const route: RouteRecordRaw = {
    path: '/catalog/category',
    name: routeName,
    component: () => import('@/pages/category')
}