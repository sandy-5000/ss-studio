<template>
  <button
    :type="type || 'button'"
    class="hover:scale-105 inline-flex items-center px-4 py-2 bg-app border border-transparent rounded-md font-semibold text-xs text-app-content uppercase tracking-widest focus:outline-none transition ease-in-out duration-150"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: String,
})
</script>
