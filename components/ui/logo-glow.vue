<template>
  <div
    :class="{
      'hover-effect hover:scale-105 duration-300 relative aspect-[4/3] w-[200px]': true,
      [className]: true,
    }"
  >
    <ui-logo class="absolute blur-sm z-[0] left-0 right-0 h-full"></ui-logo>
    <ui-logo class="absolute z-[1] left-0 right-0 h-full"></ui-logo>
  </div>
</template>

<script setup>
const props = defineProps({
  className: String,
})
</script>
