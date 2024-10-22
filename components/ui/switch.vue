<template>
  <label :for="id" class="inline-flex items-center cursor-pointer">
    <input
      :checked="checked"
      @input="$emit('update:checked', $event.target.checked)"
      :id="id"
      type="checkbox"
    />
    <span class="ms-2 text-sm">{{ prompt }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  id: String,
  prompt: String,
  checked: Boolean,
})
</script>
