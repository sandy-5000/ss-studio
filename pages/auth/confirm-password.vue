<template>
  <NuxtLayout :name="layout" title="Confirm Password">
    <div class="mb-4 text-sm text-gray-400">
      <p>
        This is a secure area of the application. Please confirm your password
        before continuing.
      </p>
    </div>
    <form method="POST" action="#">
      <!-- Password -->
      <div>
        <ui-input-label for="password" :value="__('Password')" />
        <ui-text-input
          id="password"
          class="block mt-1 w-full"
          type="password"
          name="password"
          required
        />
        <ui-input-error :messages="null" class="mt-2" />
      </div>
      <div class="flex justify-end mt-4">
        <ui-button-primary>
          {{ __('Confirm') }}
        </ui-button-primary>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
const layout = 'guest-layout'
</script>
