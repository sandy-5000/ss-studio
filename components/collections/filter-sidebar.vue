<template>
    <aside class="w-1/4 p-5 border-r border-gray-300">
      <div class="space-y-6">
        <!-- Collections -->
        <div>
          <h2 @click="toggleDropdown('collections')" class="text-lg font-bold cursor-pointer flex justify-between">
            COLLECTIONS
            <span :class="{ 'rotate-180': dropdowns.collections }">▼</span>
          </h2>
          <div v-if="dropdowns.collections" class="mt-2 pl-3">
            <p class="text-gray-500">Dummy Collection 1</p>
            <p class="text-gray-500">Dummy Collection 2</p>
          </div>
        </div>
  
        <!-- Availability Filter -->
        <div>
          <h2 @click="toggleDropdown('availability')" class="text-lg font-bold cursor-pointer flex justify-between">
            AVAILABILITY
            <span :class="{ 'rotate-180': dropdowns.availability }">▼</span>
          </h2>
          <ul v-if="dropdowns.availability" class="mt-2 space-y-2 pl-3">
            <li>
              <label class="flex items-center space-x-2">
                <input type="checkbox" checked class="accent-purple-700" />
                <span>In stock</span>
                <span class="bg-purple-700 text-white px-2 py-1 rounded-full text-xs">225</span>
              </label>
            </li>
            <li>
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="accent-gray-400" />
                <span>Out of stock</span>
                <span class="bg-gray-400 text-white px-2 py-1 rounded-full text-xs">1</span>
              </label>
            </li>
          </ul>
        </div>
  
        <!-- Price Range -->
        <div>
          <h2 @click="toggleDropdown('price')" class="text-lg font-bold cursor-pointer flex justify-between">
            PRICE
            <span :class="{ 'rotate-180': dropdowns.price }">▼</span>
          </h2>
          <div v-if="dropdowns.price" class="mt-2 pl-3">
            <input type="range" min="0" max="3599" class="w-full mt-2" />
            <p>Price: Rs. 0.00 — Rs. 3,599.00</p>
          </div>
        </div>
  
        <!-- Featured Products -->
        <div>
          <h2 @click="toggleDropdown('featured')" class="text-lg font-bold cursor-pointer flex justify-between">
            FEATURED PRODUCTS
            <span :class="{ 'rotate-180': dropdowns.featured }">▼</span>
          </h2>
          <div v-if="dropdowns.featured" class="mt-2 pl-3">
            <p class="text-gray-500">Dummy Featured Product 1</p>
            <p class="text-gray-500">Dummy Featured Product 2</p>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const dropdowns = ref({
    collections: false,
    availability: false,
    price: false,
    featured: false,
  });
  
  const toggleDropdown = (section) => {
    dropdowns.value[section] = !dropdowns.value[section];
  };
  </script>
  
  <style scoped>
  /* Rotate arrow animation */
  .rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;
  }
  </style>
  