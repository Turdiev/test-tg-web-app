import type {RouteRecordRaw} from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component:  () => import('@/pages/main')
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
        path: '/purchase-history',
        name: 'PurchaseHistory',
        component: () => import('@/pages/purchase-history')
    },
    {
        path: '/purchase-history/:id',
        name: 'PurchaseHistoryDetails',
        component: () => import('@/pages/purchase-history-details')
    }
]