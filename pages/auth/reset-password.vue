<template>
  <NuxtLayout :name="layout" title="Reset Password">
    <form method="POST" action="#">
      <!-- Password Reset Token -->
      <input type="hidden" name="token" value="null" />

      <!-- Email Address -->
      <div>
        <ui-input-label for="email" :value="__('Email')" />
        <ui-text-input
          id="email"
          class="block mt-1 w-full"
          type="email"
          name="email"
          required
          autofocus
        />
        <ui-input-error :messages="null" class="mt-2" />
      </div>

      <!-- Password -->
      <div class="mt-4">
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

      <!-- Confirm Password -->
      <div class="mt-4">
        <ui-input-label
          for="password_confirmation"
          :value="__('Confirm Password')"
        />
        <ui-text-input
          id="password_confirmation"
          class="block mt-1 w-full"
          type="password"
          name="password_confirmation"
          required
        />
        <ui-input-error :messages="null" class="mt-2" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <ui-button-primary>
          {{ __('Reset Password') }}
        </ui-button-primary>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
const layout = 'guest-layout'
</script>
