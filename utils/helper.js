export const ROUTES = {
  ABOUT: '/about',
  HOME: '/home',
  CART: '/user/cart',
  CHECKOUT: '/checkout',
  CONTACT_US: '/contactus',
  DETAILS: '/details',
  ORDERS: '/user/orders',
  COLLECTIONS: '/collections',
  AUTH: {
    FORGET_PASSWORD: '/auth/forgot-password',
  },
  USER: {
    LOGIN: '/user/login',
    REGISTER: '/user/register',
    PROFILE: '/user/profile',
  },
  ADMIN: {
    ADMIN_DASHBOARD: '/admin/dashboard',
    ADD_ITEM: '/admin/add-item'
  }
}

export const __ = (string) => string
