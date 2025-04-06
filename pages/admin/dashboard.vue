<template>
    <NuxtLayout :name="layout" title="Home">
      <div class="h-screen w-screen overflow-y-auto">
        <!-- Scrollable Container -->
        <div class="w-full  space-y-4 p-5 rounded-md">
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
  const layout = 'admin-layout'
  definePageMeta({
    middleware: ['auth-user'],
  })
  </script>
  