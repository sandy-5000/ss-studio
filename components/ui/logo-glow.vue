<template>
  <div
    :class="{
      'group hover-effect hover:scale-105 duration-300 relative aspect-[4/3] w-[200px]': true,
      [className]: true,
    }"
  >
    <ui-logo
      class="absolute group-hover:blur-md z-[0] left-0 right-0 h-full"
    ></ui-logo>
    <ui-logo class="absolute z-[1] left-0 right-0 h-full"></ui-logo>
    <ui-logo
      class="animate-pulse absolute z-[0] blur-xl left-0 right-0 h-full"
    ></ui-logo>
  </div>
</template>

<script setup>
const props = defineProps({
  className: String,
})
</script>
