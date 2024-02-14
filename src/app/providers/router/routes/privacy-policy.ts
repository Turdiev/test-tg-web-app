import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'PrivacyPolicyPage'

export const route: RouteRecordRaw = {
    path: '/privacy-policy',
    name: routeName,
    component: () => import('@/pages/privacyPolicy')
}