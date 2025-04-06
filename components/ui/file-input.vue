<template>
  <div
    :class="[ 
      'relative text-input w-full placeholder-gray-500 placeholder:text-sm border-gray-700 bg-site border-2 outline-none px-3 focus:border-app focus:ring-app rounded-md shadow-sm overflow-y-auto',
      selectedFiles.length > 0 ? 'py-2' : 'h-10',
    ]"
  >
    <!-- File Input Overlay (limited to empty space only) -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <input
        type="file"
        :id="id"
        :name="name"
        accept="image/*"
        multiple
        class="w-full h-full opacity-0 cursor-pointer pointer-events-auto"
        @change="handleFileSelect"
      />
    </div>

    <!-- File Name List -->
    <div class="z-0 relative">
      <p v-if="selectedFiles.length === 0" class="text-sm text-gray-400">
        Select images...
      </p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(file, index) in selectedFiles"
          :key="file.name + index"
          class="flex items-center max-w-[250px] bg-red-600 text-white text-sm px-3 py-1 rounded-md"
        >
          <span class="truncate flex-1">{{ file.name }}</span>
          <!-- <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="text-white ml-2 cursor-pointer"
            @click.stop="removeFile(index)"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faXmark)
defineProps({
  id: String,
  name: String,
  required: Boolean,
})
const emit = defineEmits(['update:files'])

const selectedFiles = ref([])

const handleFileSelect = (e) => {
  const newFiles = Array.from(e.target.files)
  const existingNames = selectedFiles.value.map(f => f.name)
  const uniqueNewFiles = newFiles.filter(f => !existingNames.includes(f.name))
  selectedFiles.value.push(...uniqueNewFiles)
  emit('update:files', selectedFiles.value)
  e.target.value = ''
}

const removeFile = (index) => {
  console.log("remove click");
  selectedFiles.value.splice(index, 1)
  emit('update:files', selectedFiles.value)
}
</script>

<style scoped>
/* Optional: improve icon alignment */
svg {
  height: 1em;
}
</style>
