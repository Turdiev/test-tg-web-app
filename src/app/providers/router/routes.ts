import type {RouteRecordRaw} from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component:  () => import('@/pages/main'),
        meta: { requiresAgreement: true }
    },
    {
        path: '/catalog',
        name: 'CatalogPage',
        component: () => import('@/pages/catalog')
    },
    {
        path: '/support',
        name: 'SupportPage',
        component: () => import('@/pages/support')
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicyPage',
        component: () => import('@/pages/privacyPolicy')
    }
]