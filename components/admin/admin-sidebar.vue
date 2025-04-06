<template>
  <div class="h-full">
    <!-- Sidebar -->
    <div class="p-4 sm:p-8 shadow-2xl rounded-lg h-screen">
      <section class="space-y-3 flex flex-col items-center">
        <div class="w-full">
          <div
            :class="{
              ' w-full rounded-md bg-site-light p-2': true,
            }"
          >
            <NuxtLink
              :to="ROUTES.ADMIN.ADMIN_DASHBOARD"
              :class="{
                'block py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-app hover:text-app-content': true,
                'bg-app text-app-content': route.path === ROUTES.ADMIN.ADMIN_DASHBOARD,
              }"
              >DASHBOARD</NuxtLink
            >
          </div>
        </div>
        <div class="w-full">
          <div
            :class="{
              ' w-full rounded-md bg-site-light p-2': true,
            }"
          >
            <NuxtLink
              :to="ROUTES.USER.PROFILE"
              :class="{
                'block py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-app hover:text-app-content': true,
                'bg-app text-app-content': route.path === ROUTES.USER.PROFILE,
              }"
              >ALL ORDERS</NuxtLink
            >
          </div>
        </div>
        <div class="w-full">
          <div
            :class="{
              ' left-0 w-full rounded-md bg-site-light p-2': true,
            }"
          >
            <NuxtLink
              :to="ROUTES.ADMIN.ADD_ITEM"
              :class="{
                'block py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-app hover:text-app-content': true,
                'bg-app text-app-content': route.path === ROUTES.ADMIN.ADD_ITEM,
              }"
              >ADD ITEM</NuxtLink
            >
          </div>
        </div>
        <div class="w-full">
          <div
            :class="{
              ' left-0 w-full rounded-md bg-site-light p-2': true,
            }"
          >
            <NuxtLink
              :to="ROUTES.USER.PROFILE"
              :class="{
                'block py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-app hover:text-app-content': true,
                'bg-app text-app-content': route.path === ROUTES.USER.PROFILE,
              }"
              >ALL USERS</NuxtLink
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ROUTES } from '~/utils/helper'

const route = useRoute()
// const { session, remove } = await useSession()
// const options = useState('options', () => false)

// const toggleOptions = () => {
//   options.value = !options.value
// }

// const logout = async () => {
//   await remove()
//   navigateTo(ROUTES.USER.LOGIN)
// }

// const runOnMount = () => {
//   window.onclick = function (event) {
//     if (!event.target.matches('.options-button')) {
//       options.value = false
//     }
//   }
// }

// onMounted(runOnMount)
</script>
