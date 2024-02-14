import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAgreement && !localStorage.getItem('agreementAccepted')) {
    next({ name: 'PrivacyPolicyPage' })
  } else {
    next()
  }
})
