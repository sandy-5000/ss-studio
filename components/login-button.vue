<style scoped>
.nav-options-close {
  z-index: -1;
  opacity: 0;
  transform: scale(0.9) translateY(-20%);
  transition: 0.2s;
}

.nav-options-open {
  z-index: 2;
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>

<template>
  <div v-if="session._id" class="flex items-center">
    <div class="relative w-32 md:w-48">
      <div class="flex justify-end">
        <button
          @click="toggleOptions"
          class="options-button a-center inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-normal rounded-md text-gray-400 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
        >
          <span
            class="options-button font-normal text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm"
            >{{ session.name }}</span
          >
          <font-awesome-icon
            class="ml-1 mt-[2px] text-xs"
            icon="fa-solid fa-angle-down"
          />
        </button>
      </div>
      <div
        :class="{
          'absolute top-full left-0 w-full rounded-md bg-site-lighter p-2 min-w-16 nav-options-close': true,
          'nav-options-open': options,
        }"
      >
        <NuxtLink
          :to="ROUTES.USER.PROFILE"
          :class="{
            'block py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-site text-slate-300': true,
            'text-slate-100 bg-site': route.path === ROUTES.USER.PROFILE,
          }"
          >Profile</NuxtLink
        >
        <span
          class="block mt-1 py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-site text-slate-300"
          @click="logout"
          >Log Out</span
        >
      </div>
    </div>
  </div>
  <div v-if="!session._id" class="flex items-center">
    <button
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-normal rounded-md text-gray-400 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
    >
      <NuxtLink
        :to="`${ROUTES.USER.LOGIN}?redirect=${route.path}`"
        class="font-semibold text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
      >
        Log in</NuxtLink
      >
    </button>
  </div>
</template>

<script setup>
import { ROUTES } from '~/utils/helper'

const route = useRoute()
const { session, remove } = await useSession()
const options = useState('options', () => false)

const toggleOptions = () => {
  options.value = !options.value
}

const logout = async () => {
  await remove()
  navigateTo(ROUTES.USER.LOGIN)
}

const runOnMount = () => {
  window.onclick = function (event) {
    if (!event.target.matches('.options-button')) {
      options.value = false
    }
  }
}

onMounted(runOnMount)
</script>
