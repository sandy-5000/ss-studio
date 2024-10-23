<template>
  <Head>
    <Title>Sai Studio SS | {{ title || 'Auth' }}</Title>
    <Meta name="description" content="Sai Studio SS - Auth" />
  </Head>
  <div class="font-sans text-gray-900 antialiased">
    <div style="height: 100dvh" class="a-center bg-site">
      <div
        style="width: min(100%, 500px)"
        class="min-h-screen flex flex-col justify-center pt-6 px-3 sm:pt-0"
      >
        <div class="flex flex-col">
          <NuxtLink :to="ROUTES.HOME" class="flex justify-start px-3">
            <ui-logo-glow class-name="w-[80px] mr-5 mb-2"></ui-logo-glow>
            <div class="a-center">
              <h1 class="text-xl block logo-text font-semibold">
                Sai Studio SS
              </h1>
            </div>
          </NuxtLink>
        </div>
        <div
          class="w-full sm:max-w-md mt-2 px-6 py-8 bg-site-light shadow-md overflow-hidden rounded-lg"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ROUTES } from '~/utils/helper'

const props = defineProps({
  title: String,
})
</script>
