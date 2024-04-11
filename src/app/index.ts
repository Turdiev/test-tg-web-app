import { createApp } from 'vue'
import App from './App.vue'
import { router, store, i18n } from '@/app/providers'
import { vfm } from '@/shared/lib/plugins/vue-final-model';

import './styles/main.scss'

export const app = createApp(App).use(router).use(store).use(i18n).use(vfm)
