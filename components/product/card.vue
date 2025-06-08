<template>
  <div
    class="relative group cursor-pointer neon-border transition-all overflow-hidden rounded-md"
    @click="$emit('click', product)"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      -{{ product.discount }}%
    </div>
    <div class="mt-2 p-2 bg-white">
      <h3 class="text-sm font-medium truncate">{{ product.name }}</h3>
      <div class="text-sm space-x-2">
        <span class="line-through text-gray-400 text-xs">₹{{ product.oldPrice }}</span>
        <span class="text-black font-semibold">₹{{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>
