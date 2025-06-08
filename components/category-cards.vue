<template>
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-center text-2xl font-bold mb-6">
        SHOP BY COLLECTION
      </h2>

      <p class="text-center text-sm text-gray-500 mb-6">
      Discover your perfect dress with our curated categories
    </p>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="(item, index) in visibleCollections"
          :key="index"
          class="relative group cursor-pointer neon-border transition-all"
          @click="handleClick(item)"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover rounded-md" />
          <div class="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <h3 class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold tracking-wider">
            {{ item.name }}
          </h3>
        </div>
      </div>
  
      <!-- Show More Button (Only on Mobile) -->
      <div v-if="isMobile" class="flex justify-center mt-4">
        <button
          @click="showMore = !showMore"
          class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          {{ showMore ? "Show Less" : "Show More" }}
        </button>
      </div>
    </div>
  </template>
  

<script setup>
import { ref, computed, onMounted } from "vue";
import { ROUTES } from '~/utils/helper'

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 1024;
  window.addEventListener("resize", handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024;
};

// const collections = ref([
//   { name: "SAREES", image: new URL("~/assets/images/banner1.png", import.meta.url).href },
//   { name: "KURTAAS", image: new URL("~/assets/images/banner3.png", import.meta.url).href },
//   { name: "HALF SAREES", image: new URL("~/assets/images/banner2.png", import.meta.url).href },
//   { name: "SPECIALS", image: new URL("~/assets/images/banner1.png", import.meta.url).href },
//   { name: "DRESSES", image: new URL("~/assets/images/banner2.png", import.meta.url).href },
//   { name: "KURTIS", image: new URL("~/assets/images/banner3.png", import.meta.url).href },
// ]);

const collections = ref([
  { name: "SAREES", image: "/images/banner1.png" },
  { name: "KURTAAS", image: "/images/banner3.png" },
  { name: "HALF SAREES", image: "/images/banner2.png" },
  { name: "SPECIALS", image: "/images/banner1.png" },
  { name: "DRESSES", image: "/images/banner2.png" },
  { name: "KURTIS", image: "/images/banner3.png" },
])


const showMore = ref(false);

const visibleCollections = computed(() => {
  return isMobile.value
    ? showMore.value
      ? collections.value
      : collections.value.slice(0, 4) // Show only 4 on mobile initially
    : collections.value;
});

const handleClick = (item) => {
  console.log("Clicked:", item.name);
};
</script>


<style scoped>
/* Neon Glow Effect for Heading */
.neon-text {
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0 5px rgb(231, 30, 30), 0 0 10px rgb(231, 30, 30),
    0 0 20px rgb(231, 30, 30), 0 0 40px rgb(231, 30, 30);
  animation: neon-flicker 1.5s infinite alternate;
}

@keyframes neon-flicker {
  0% {
    text-shadow: 0 0 5px rgb(231, 30, 30), 0 0 10px rgb(231, 30, 30);
  }
  100% {
    text-shadow: 0 0 10px rgb(231, 30, 30), 0 0 20px rgb(231, 30, 30);
  }
}

/* Neon Glow Effect for Cards */
.neon-border {
  border-radius: 6px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}

.neon-border:hover {
  border-color: rgb(231, 30, 30);
  box-shadow: 0 0 10px rgb(231, 30, 30),0 0 15px rgb(231, 30, 30);
  transition: all 0.3s ease-in-out;
}


/* Scale Image on Hover */
.neon-border img {
  transition: transform 0.3s ease-in-out;
}

.neon-border:hover img {
  transform: scale(1.1); /* Slight zoom effect */
}

h3 {
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}

.group:hover h3 {
  transform: scale(1.2);
  text-decoration: none;
  /* color: rgb(231, 30, 30); */
}
</style>
