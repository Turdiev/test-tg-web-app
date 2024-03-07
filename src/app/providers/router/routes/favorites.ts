import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'FavoritesPage'

export const route: RouteRecordRaw = {
    path: '/favorites',
    name: routeName,
    component: () => import('@/pages/favorites')
}