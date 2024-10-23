<template>
  <nav class="w-full flex h-[70px] bg-site">
    <div class="v-center mr-5 md:mr-10">
      <NuxtLink :to="ROUTES.HOME">
        <ui-logo-glow class="w-[55px]"></ui-logo-glow>
      </NuxtLink>
    </div>
    <div class="space-x-4 flex">
      <ui-nav-link :to="ROUTES.HOME" :active="path === ROUTES.HOME"
        >Home</ui-nav-link
      >
      <ui-nav-link :to="ROUTES.ABOUT" :active="path === ROUTES.ABOUT"
        >About</ui-nav-link
      >
    </div>
    <div class="ml-auto v-center">
      <login-button></login-button>
    </div>
  </nav>
</template>

<script setup>
import { ROUTES } from '~/utils/helper'

const route = useRoute()
const path = route.path
</script>
