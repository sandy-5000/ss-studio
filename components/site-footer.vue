<template>
  <footer class="mt-auto w-full h-[80px] md:h-[65px] v-center bg-site-light">
    <div class="mx-5 md:mx-16 lg:mx-32 md:flex justify-between">
      <span class="text-slate-100 text-sm"
        >Copyright © {{ year }} SaiStudioSS. All rights reserved.</span
      >
      <span
        class="block md:inline-flex font-normal text-slate-100 text-xs uppercase my-2 md:my-0"
      >
        <div class="flex justify-end"></div>
      </span>
    </div>
  </footer>
</template>

<script setup>
const date = new Date()
const year = date.getFullYear()
</script>
