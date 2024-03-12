import type {RouteRecordRaw} from 'vue-router';

import { route as mainRoute } from './main'
import { categoryRoute, catalogRoute, categoryDetailsRoute} from './catalog'
import { route as privacyPolicyRoute } from './privacy-policy'
import { supportRoute, supportFaqRoute, supportArticleRoute } from './support';
import { purchaseHistoryRoute, purchaseHistoryDetailsRoute } from './purchase-history';
import { route as subscriptionsRoute } from './subscriptions'
import { route as favoritesRoute } from './favorites'
import { purchaseContentRoute, purchaseContentDetailsRoute } from './purchase-content'

export const routes: readonly RouteRecordRaw[] = [
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
    purchaseContentDetailsRoute
] as const