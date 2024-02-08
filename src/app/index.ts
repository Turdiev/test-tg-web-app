import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from '@/app/providers'

import './styles/main.scss'

export const app = createApp(App).use(router).use(store)
