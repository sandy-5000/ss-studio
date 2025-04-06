<template>
  <div ref="dropdownRef" class="relative">
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="modelValue"
    />

    <div
      class="text-input w-full bg-site border-2 border-gray-700 h-10 px-3 rounded-md shadow-sm flex items-center justify-between cursor-pointer"
      :id="id"
      :aria-required="required"
      @click="toggleDropdown"
    >
      <span class="truncate">
        {{ selectedLabel || "Select an option" }}
      </span>
      <font-awesome-icon
        :icon="isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"
        class="text-sm"
      />
    </div>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10"
    >
      <!-- Search Input -->
      <input
        v-if="searchable"
        v-model="searchQuery"
        type="text"
        class="w-full px-3 py-2 border-b border-gray-300 outline-none"
        placeholder="Search..."
      />

      <ul class="max-h-40 overflow-auto">
        <li
          v-for="(item, key) in filteredOptions"
          :key="key"
          @click="selectOption(key)"
          class="px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  id: String,
  name: String,
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: [String, Number],
  options: {
    type: Object,
    required: true,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const searchQuery = ref("");
const dropdownRef = ref(null);

// Selected Label
const selectedLabel = computed(() => props.options[props.modelValue] || "");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) return props.options;
  return Object.fromEntries(
    Object.entries(props.options).filter(([key, value]) =>
      value.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

const selectOption = (key) => {
  emit("update:modelValue", key);
  isOpen.value = false;
};
</script>
