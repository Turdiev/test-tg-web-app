import type {RouteRecordRaw} from 'vue-router';

import { route as mainRoute } from './main'
import { route as searchRoute } from './search'
import { categoryRoute, catalogRoute, categoryDetailsRoute} from './catalog'
import { route as privacyPolicyRoute } from './privacy-policy'
import { supportRoute, supportFaqRoute, supportArticleRoute } from './support';
import { purchaseHistoryRoute, purchaseHistoryDetailsRoute } from './purchase-history';
import { route as subscriptionsRoute } from './subscriptions'
import { route as favoritesRoute } from './favorites'
import { purchaseContentRoute, purchaseContentDetailsRoute } from './purchase-content'
import { botRoute, botAuthorChannelsRoute, botPostDetailsRoute } from './bot'

const mainRoutes: RouteRecordRaw[] = [
    mainRoute,
    catalogRoute,
    categoryRoute,
    categoryDetailsRoute,
    privacyPolicyRoute,
    supportRoute,
    supportFaqRoute,
    supportArticleRoute,
    purchaseHistoryRoute,
    purchaseHistoryDetailsRoute,
    subscriptionsRoute,
    favoritesRoute,
    purchaseContentRoute,
    purchaseContentDetailsRoute,
    searchRoute
]

const botRoutes: RouteRecordRaw[] = [
    botRoute,
    botAuthorChannelsRoute,
    botPostDetailsRoute
]

export const routes: readonly RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainLayout',
        component: () => import('@/shared/ui/layouts/MainLayout'),
        children: mainRoutes
    },
    {
        path: '/',
        name: 'BotLayout',
        component: () => import('@/shared/ui/layouts/BotLayout'),
        children: botRoutes
    }
] as const