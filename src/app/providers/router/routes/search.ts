import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'SearchPage'

export const route: RouteRecordRaw = {
    path: '/search',
    name: routeName,
    component:  () => import('@/pages/search'),
}