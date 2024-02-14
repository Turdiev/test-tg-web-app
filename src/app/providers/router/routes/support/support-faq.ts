import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'SupportFaqPage'

export const route: RouteRecordRaw = {
    path: '/support-faq',
    name: routeName,
    component: () => import('@/pages/support-faq')
}