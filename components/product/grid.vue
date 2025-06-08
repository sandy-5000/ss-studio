<template>
  <section class="container mx-auto px-4 py-10">
    <h2 class="text-center text-2xl font-bold mb-6">NEW ARRIVALS</h2>
    <p class="text-center text-sm text-gray-500 mb-6">
      Discover your perfect dress with our curated categories
    </p>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <product-card
        v-for="(product, index) in visibleProducts"
        :key="index"
        :product="product"
        @click="() => console.log('clicked', product)"
      />
    </div>

    <div v-if="isMobile" class="flex justify-center mt-4">
      <button
        @click="showMore = !showMore"
        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        {{ showMore ? "Show Less" : "Show More" }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isMobile = ref(false)
const showMore = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 1024
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 1024
  })
})
const products = ref([
  {
    name: 'Party wear',
    oldPrice: 27999,
    price: 21999,
    discount: 21,
    image: '/images/banner1.png',
  },
  {
    name: 'Party wear',
    oldPrice: 25999,
    price: 19999,
    discount: 23,
    image: '/images/banner2.png',
  },
  {
    name: 'Lavender Penkalamkari Lehanga',
    oldPrice: 32999,
    price: 27999,
    discount: 15,
    image: '/images/banner3.png',
  },
  {
    name: 'FDS Signature Penkalamkari Lehanga',
    oldPrice: 32999,
    price: 27999,
    discount: 15,
    image: '/images/banner1.png',
  },
  {
    name: 'Designer Gown',
    oldPrice: 31999,
    price: 26999,
    discount: 16,
    image: '/images/banner2.png',
  },
  {
    name: 'Wedding Special',
    oldPrice: 33999,
    price: 29999,
    discount: 12,
    image: '/images/banner3.png',
  },
])


const visibleProducts = computed(() => {
  return isMobile.value
    ? showMore.value
      ? products.value
      : products.value.slice(0, 4)
    : products.value
})
</script>

<style scoped>
.neon-text {
  color: #fff;
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

.neon-border {
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}

.neon-border:hover {
  border-color: rgb(231, 30, 30);
  box-shadow: 0 0 10px rgb(231, 30, 30), 0 0 15px rgb(231, 30, 30);
}
</style>
