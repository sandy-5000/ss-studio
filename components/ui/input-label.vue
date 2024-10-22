<template>
  <label class="block font-normal text-sm">
    {{ value }}
  </label>
</template>

<script setup>
const props = defineProps({
  value: String,
})
</script>
