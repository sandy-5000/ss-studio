<template>
  <Head>
    <Title>Sai Studio SS | {{ title || 'Home' }}</Title>
    <Meta name="description" content="Sai Studio SS - Auth" />
  </Head>
  <div class="px-5 fixed w-full h-[70px] top-0 left-0 z-10">
    <nav-bar />
  </div>
  <div class="pt-[70px]">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>
