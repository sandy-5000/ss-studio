<template>
  <loader :loading="loading" />

  <NuxtLayout :name="layout" title="Profile">
    <div class="mx-2 md:mx-0">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-site-light shadow rounded-lg">
          <div class="max-w-xl">
            <section>
              <header>
                <h2 class="text-lg font-medium">
                  {{ __('Add Product') }}
                </h2>
                <p class="mt-1 text-sm text-gray-800">
                  {{ __('Create a new product by filling the details') }}
                </p>
              </header>
              <form
                @submit.prevent="handleProfileUpdate"
                class="mt-6 space-y-6"
              >
                <div>
                  <ui-input-label for="product_name" :value="__('Name')" />
                  <ui-text-input
                    id="product_name"
                    :value="info.product.product_name"
                    @update:value="(x) => (info.product.product_name = x)"
                    name="product_name"
                    placeholder="Enter Name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>

                <div>
                  <ui-input-label for="price" :value="__('Price')" />
                  <ui-num-input
                    id="price"
                    :value="info.product.price"
                    @update:value="(x) => (info.product.email = x)"
                    name="price"
                    placeholder="Enter Selling Price"
                    class="mt-1 block w-full"
                    required
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>

                <div>
                  <ui-input-label
                    for="collection"
                    :value="__('Select Collection')"
                  />
                  <ui-select-input
                  :modelValue="info.product.collection"
                  @update:modelValue="info.product.collection = $event"
                  name="collection"
                  id="collection"
                  required
                  :options="{
                    general: 'General',
                    fashion: 'Fashion',
                    tech: 'Technology'
                  }"
                  :searchable="true"
                  />
                </div>

                <div>
                  <ui-input-label for="vendor_name" :value="__('Vendor Name')" />
                  <ui-text-input
                    id="vendor_name"
                    :value="info.product.vendor_name"
                    @update:value="(x) => (info.product.vendor_name = x)"
                    name="vendor_name"
                    placeholder="Enter Name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>

                <div>
                  <ui-input-label for="vendor_code" :value="__('Vendor Code')" />
                  <ui-text-input
                    id="vendor_code"
                    :value="info.product.vendor_code"
                    @update:value="(x) => (info.product.vendor_code = x)"
                    name="vendor_code"
                    placeholder="Enter Vendor Code"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>

                <div>
                  <ui-input-label for="product_images" :value="__('Add Images')" />
                  <ui-file-input
                    id="product_images"
                    @update:files="(x) => (info.product.images = x)"
                    name="product_images"
                    class="mt-1 block w-full"
                    required
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>


                <div class="flex items-center gap-4">
                  <ui-button-primary type="submit" v-if="!loading"
                    >Save</ui-button-primary
                  >
                  <ui-button-loading v-if="loading"
                    >Updating...</ui-button-loading
                  >
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useState } from 'nuxt/app'

const layout = 'admin-layout'

const { session, update } = await useSession()
const route = useRoute()

if (!session.value || !session.value._id) {
  navigateTo(`/login?redirect=${route.path}`)
}

const loading = useState('loading', () => false)

const info = useState('info', () => {
  return {
    profile: {
      name: session.value.name,
      email: session.value.email,
    },
    product: {
      product_name: '',
      price: 0,
      collection: 'general',
      vendor_name: '',
      vendor_code: '',
      images:[],
    },
  }
})

const show = useState('show', () => {
  return {
    profileUpdated: '',
    passwordUpdated: '',
  }
})

const handleProfileUpdate = async () => {
  const { name, email } = info.value.profile
  const { product_name, price, collection } = info.value.product
  info.value.profile = { name: '', email: '' }

  console.log(info)

  loading.value = true // Show loader
  // await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate API call

  const uploadedImageKeys = []

  for (const file of info.product.images.value) {
    const buffer = await file.arrayBuffer()
    const contentType = file.type
    const fileKey = `products/${info.product.product_name}/${uuidv4()}-${file.name}`

    const s3Url = await uploadToS3(buffer, fileKey, contentType)
    uploadedImageKeys.push(fileKey) // or s3Url if you're storing URLs
  }


  loading.value = false // Hide loader

  // loading.value.profileUpdate = true
  // try {
  //   const response = await $fetch('/api/user/profile', {
  //     method: 'PATCH',
  //     body: {
  //       update: 'profile',
  //       _id: session.value._id,
  //       name,
  //       email,
  //     },
  //   })
  //   if (!response.error) {
  //     await update({
  //       name: name || defaultInfo.value.name,
  //       email: email || defaultInfo.value.email,
  //     })
  //     defaultInfo.value = {
  //       name: session.value.name,
  //       email: session.value.email,
  //     }
  //   }
  //   info.value.profile = {
  //     name: defaultInfo.value.name,
  //     email: defaultInfo.value.email,
  //   }
  //   profileUpdated(response.error || response.status)
  // } catch (e) {
  //   profileUpdated('Update Failed')
  // } finally {
  //   loading.value.profileUpdate = false
  // }
}
</script>
