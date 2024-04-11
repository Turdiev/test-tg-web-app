import {defineStore} from 'pinia';
import {markRaw, ref} from 'vue';
import type {INavigation} from './types';
import {IconHome, IconCatalog, IconMessage} from '@/shared/ui/icons';
import {useI18n} from "vue-i18n";

const namespace = 'navigation'
export const useNavigationStore = defineStore(namespace, () => {
    const { t } = useI18n()

    const navigationItems: INavigation[] = markRaw([
        {
            name: 'home',
            label: t('pages.main'),
            icon: IconHome,
            path: '/'
        },
        {
            name: 'catalog',
            label: t('pages.catalog'),
            icon: IconCatalog,
            path: '/catalog'
        },
        {
            name: 'support',
            label: t('pages.support'),
            icon: IconMessage,
            path: '/support'
        }
    ])
    const activeNav = ref('home')

    const handleNavigation = (payload: string) => {
        activeNav.value = payload
    }


    return {
        navigationItems,
        activeNav,
        handleNavigation
    }
})