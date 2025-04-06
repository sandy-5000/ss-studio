<template>
  <NuxtLayout :name="layout" title="Collections">
    <div class="h-screen w-screen overflow-y-auto flex">
      <!-- Filter Sidebar (Left) -->
      <collections-filter-sidebar />

      <!-- Products Grid (Right) -->
      <div class="flex-1 p-5">
        <h1 class="text-xl font-bold">Collections</h1>
        <p>Here goes the products...</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// import FilterSidebar from '@/components/FilterSidebar.vue'

const layout = 'main-layout'
</script>
