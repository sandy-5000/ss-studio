<template>
  <div 
    ref="carouselContainer"
    class="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg touch-pan-x"
    @touchstart="startTouch"
    @touchmove="moveTouch"
    @touchend="endTouch"
  >
    <!-- Image Slider -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="w-full shrink-0">
        <img :src="image" class="w-full h-[500px] object-cover" alt="carousel image" />
      </div>
    </div>

    <!-- Left Button -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black hidden md:block"
    >
      ⬅
    </button>

    <!-- Right Button -->
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black hidden md:block"
    >
      ➡
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="index === currentIndex ? 'bg-white' : 'bg-gray-500'"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Import local images
const images = ref([
  new URL("~/assets/images/banner1.png", import.meta.url).href,
  new URL("~/assets/images/banner2.png", import.meta.url).href,
  new URL("~/assets/images/banner3.png", import.meta.url).href,
]);

const currentIndex = ref(0);
let interval = null;

// Move to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Move to the previous slide
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Jump to a specific slide
const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-slide functionality
const startAutoSlide = () => {
  interval = setInterval(nextSlide, 6000);
};

const stopAutoSlide = () => {
  clearInterval(interval);
};

// Start auto-slide on mount
onMounted(() => {
  startAutoSlide();
});

// Stop auto-slide when component unmounts
onUnmounted(() => {
  stopAutoSlide();
});

// Swipe handling for mobile
const startX = ref(0);
const endX = ref(0);

const startTouch = (event) => {
  startX.value = event.touches[0].clientX;
};

const moveTouch = (event) => {
  endX.value = event.touches[0].clientX;
};

const endTouch = () => {
  if (startX.value - endX.value > 50) {
    nextSlide(); // Swipe left
  } else if (endX.value - startX.value > 50) {
    prevSlide(); // Swipe right
  }
};
</script>

<style scoped>
/* Prevent text selection on buttons */
button {
  user-select: none;
}
</style>
