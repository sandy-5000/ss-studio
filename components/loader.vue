<template>
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div class="loader"></div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    loading: Boolean, // Accepts loading state as a prop
  })
  </script>
  
  <style scoped>
  /* Simple Loader CSS */
  .loader {
    width: 50px;
    height: 50px;
    border: 5px solid white;
    border-top: 5px solid rgb(235, 39, 52);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  