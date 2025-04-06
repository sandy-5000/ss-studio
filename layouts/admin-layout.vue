<template>
  <Head>
    <Title>Sai Studio SS | {{ title || 'Home' }}</Title>
    <Meta name="description" content="Sai Studio SS - Auth" />
  </Head>

  <div class="px-5 fixed w-full h-[70px] top-0 left-0 z-10">
    <nav-bar />
  </div>

  <div class="pt-[70px] space-y-4 flex flex-row">
    <div class="w-1/6">
      <admin-sidebar />
    </div>
    <div class="w-5/6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// import Loader from '~/components/Loader.vue' // Import loader component

const props = defineProps({
  title: String,
})

</script>
