<template>
  <div class="relative">
    <input
      v-bind:value="value"
      @input="$emit('update:value', $event.target.value)"
      :type="inputType || __('text')"
      :name="name || ''"
      :required="required || false"
      :id="id"
      :class="{
        'text-input w-full placeholder-gray-500 placeholder:text-sm border-gray-700 bg-site border-2 outline-none  h-10 px-3 focus:border-app focus:ring-app rounded-md shadow-sm': true,
        'pr-8': type === __('password'),
        [className]: true,
      }"
      :disabled="disabled || false"
      autocomplete="false"
    />
    <div
      v-if="type === __('password')"
      class="h-full absolute right-0 top-0 a-center pr-2 w-8"
    >
      <font-awesome-icon
        v-if="showPasswd"
        @click="showPasswd = false"
        class="cursor-pointer text-sm"
        icon="far fa-eye"
      />
      <font-awesome-icon
        v-if="!showPasswd"
        @click="showPasswd = true"
        class="cursor-pointer text-sm"
        icon="far fa-eye-slash"
      />
    </div>
  </div>
</template>

<script setup>
import { __ } from '~/utils/helper'

const props = defineProps({
  id: String,
  disabled: Boolean,
  className: String,
  type: String,
  name: String,
  autocomplete: Boolean,
  required: Boolean,
  value: String,
})

const showPasswd = ref(false)
const inputType = computed(() => (showPasswd.value ? 'text' : props.type))
</script>
