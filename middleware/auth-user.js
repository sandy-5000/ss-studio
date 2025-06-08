import { ROUTES } from '~/utils/helper'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { session } = await useUserSession()

  if (!session.value) {
    return navigateTo('/') // Redirect to home if no session
  }

  if (session.value.user.is_admin && to.path !== ROUTES.ADMIN.ADMIN_DASHBOARD) {
    return navigateTo(ROUTES.ADMIN.ADMIN_DASHBOARD) // Only redirect if not already on the dashboard
  }

  if (!session.value.user.is_admin && to.path.startsWith('/admin')) {
    return navigateTo('/') // Redirect non-admin users away from admin routes
  }
})
