<template>
  <NuxtLayout :name="layout" title="Home">
    <div class="h-screen w-screen overflow-y-auto">
      <!-- Scrollable Container -->
      <div class="w-full space-y-4 p-5 rounded-md">
        <carousel />
        <category-cards />
        <product-grid />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = 'main-layout'
</script>
