<template>
  <NuxtLayout :name="layout" title="Forgot Password">
    <div class="mb-4 text-sm text-gray-400">
      <p>
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </p>
    </div>
    <form method="POST" action="#">
      <!-- Email Address -->
      <div>
        <ui-input-label for="email" :value="__('Email')" />
        <ui-text-input
          id="email"
          class="block mt-1 w-full"
          type="email"
          name="email"
          :value="null"
          required
          autofocus
        />
        <ui-input-error :messages="null" class="mt-2" />
      </div>
      <div class="flex items-center justify-end mt-4">
        <ui-button-primary>
          {{ __('Email Password Reset Link') }}
        </ui-button-primary>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
import { __ } from '~/utils/helper'

const layout = 'guest-layout'
</script>
