<template>
  <NuxtLayout :name="layout" title="Verify Email">
    <div class="mb-4 text-sm text-gray-400">
      <p>
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn\'t receive the email, we will gladly send you another.
      </p>
    </div>

    <div class="mb-4 font-medium text-sm text-green-400">
      <p>
        A new verification link has been sent to the email address you provided
        during registration.
      </p>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <form method="POST" action="#">
        <div>
          <ui-button-primary>
            {{ __('Resend Verification Email') }}
          </ui-button-primary>
        </div>
      </form>

      <form method="POST" action="#">
        <button
          type="submit"
          class="underline text-sm text-gray-400 hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
        >
          {{ __('Log Out') }}
        </button>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = 'guest-layout'
</script>
