<template>
  <div class="relative">
    <input
      v-bind:value="internalValue"
      @input="handleInput"
      type="text"
      :name="name || ''"
      :required="required || false"
      :id="id"
      :class="{
        'text-input w-full placeholder-gray-500 placeholder:text-sm border-gray-700 bg-site border-2 outline-none h-10 px-3 focus:border-app focus:ring-app rounded-md shadow-sm': true,
        'pr-8': showIncrement ? true : false,
        [className]: true,
      }"
      :disabled="disabled || false"
      autocomplete="false"
    />
    <div
      v-if="showIncrement"
      class="absolute right-0 top-0 flex flex-col h-full pr-2"
    >
      <button @click="increment" type="button" class="text-sm cursor-pointer">
        ▲
      </button>
      <button @click="decrement" type="button" class="text-sm cursor-pointer">
        ▼
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: String,
  disabled: Boolean,
  className: String,
  name: String,
  required: Boolean,
  value: [String, Number],
  min: Number,
  max: Number,
  step: {
    type: Number,
    default: 1,
  },
  showIncrement: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:value'])
const internalValue = ref(props.value || 0)

// Watch for external changes to `value` and sync with `internalValue`
watch(() => props.value, (newValue) => {
  internalValue.value = newValue
})

const handleInput = (event) => {
  let newValue = event.target.value.replace(/[^0-9]/g, '') // Allow only numbers
  internalValue.value = newValue
  emit('update:value', newValue)
}

const increment = () => {
  let newValue = (Number(internalValue.value) || 0) + props.step
  if (props.max !== undefined && newValue > props.max) return
  internalValue.value = newValue
  emit('update:value', newValue)
}

const decrement = () => {
  let newValue = (Number(internalValue.value) || 0) - props.step
  if (props.min !== undefined && newValue < props.min) return
  internalValue.value = newValue
  emit('update:value', newValue)
}
</script>
