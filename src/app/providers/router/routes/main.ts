import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'MainPage'

export const route: RouteRecordRaw = {
    path: '/',
    name: routeName,
    component:  () => import('@/pages/main'),
    meta: { requiresAgreement: true }
}