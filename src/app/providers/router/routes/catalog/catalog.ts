import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CatalogPage'

export const route: RouteRecordRaw = {
    path: '/catalog',
    name: routeName,
    component: () => import('@/pages/catalog')
}