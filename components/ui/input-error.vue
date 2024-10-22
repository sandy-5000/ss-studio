<template>
  <span :class="className" v-if="messages && Array.isArray(messages)">
    <ul v-for="message of messages" class="text-sm text-red-400 space-y-1">
      <li>{{ message }}</li>
    </ul>
  </span>
  <span :class="className" v-if="messages && !Array.isArray(messages)">
    <ul class="text-sm text-red-400 space-y-1">
      <li>{{ messages }}</li>
    </ul>
  </span>
</template>

<script setup>
const props = defineProps({
  messages: [String] | String,
  className: String,
})
</script>
