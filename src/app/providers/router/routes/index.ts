import type {RouteRecordRaw} from 'vue-router';

import { route as mainRoute } from './main'
import { route as catalogRoute } from './catalog'
import { route as privacyPolicyRoute } from './privacy-policy'
import { supportRoute, supportFaqRoute, supportArticleRoute } from './support';
import { purchaseHistoryRoute, purchaseHistoryDetailsRoute } from './purchase-history';

export const routes: readonly RouteRecordRaw[] = [
    mainRoute,
    catalogRoute,
    privacyPolicyRoute,
    supportRoute,
    supportFaqRoute,
    supportArticleRoute,
    purchaseHistoryRoute,
    purchaseHistoryDetailsRoute
] as const