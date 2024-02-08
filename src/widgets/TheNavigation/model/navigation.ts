import {defineStore} from 'pinia';
import {markRaw, ref} from 'vue';
import type {INavigation} from './types';
import {IconHome, IconCatalog, IconMessage} from '@/shared/ui/icons';

const namespace = 'navigation'
export const useNavigationStore = defineStore(namespace, () => {
    const navigationItems: INavigation[] = markRaw([
        {
            name: 'home',
            label: 'Главное',
            icon: IconHome,
            path: '/'
        },
        {
            name: 'catalog',
            label: 'Каталог',
            icon: IconCatalog,
            path: '/catalog'
        },
        {
            name: 'support',
            label: 'Поддержка',
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