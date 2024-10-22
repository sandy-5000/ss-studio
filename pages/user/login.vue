<template>
  <NuxtLayout :name="layout" title="login">
    <form @submit.prevent="loginSubmit">
      <!-- Email Address -->
      <div>
        <ui-input-label for="email" :value="__('Email')" />
        <ui-text-input
          :value="body.email"
          @update:value="(x) => changeValue('email', x)"
          id="email"
          className="block mt-1 w-full"
          type="text"
          name="email"
          autofocus="true"
          required
        />
        <ui-input-error :messages="errors.email" className="mt-2" />
      </div>

      <!-- Password -->
      <div class="mt-4">
        <ui-input-label for="password" :value="__('Password')" />
        <ui-text-input
          :value="body.passwd"
          @update:value="(x) => changeValue('passwd', x)"
          id="password"
          className="block mt-1 w-full"
          type="password"
          name="password"
          :required="true"
        />
        <ui-input-error :messages="errors.passwd" className="mt-2" />
      </div>

      <!-- Remember Me -->
      <div class="mt-4 flex justify-between">
        <ui-switch id="remember_me" prompt="Remember me" checked></ui-switch>
        <NuxtLink
          :to="ROUTES.AUTH.FORGET_PASSWORD"
          class="underline text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"
        >
          {{ __('Forgot your password?') }}
        </NuxtLink>
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
          :to="ROUTES.USER.REGISTER"
          style="margin-right: auto"
          class="underline text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"
        >
          {{ __('Not registered?') }}
        </NuxtLink>

        <ui-button-primary v-if="!loading" class="ms-3" type="submit">
          Log in
        </ui-button-primary>
        <ui-button-loading v-if="loading" class="ms-3">
          Logging in...
        </ui-button-loading>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
import { ROUTES } from '~/utils/helper'

const layout = 'guest-layout'
const { session, remove, overwrite } = await useSession()
const route = useRoute()
const { redirect } = route.query
if (session.value?._id) {
  navigateTo(ROUTES.HOME)
}

const body = useState('body', () => {
  return {
    email: '',
    passwd: '',
  }
})

const errors = useState('errors', () => {
  return {
    email: null,
    passwd: null,
  }
})

const loading = useState('loading', () => false)

const changeValue = (key, value) => {
  body.value[key] = value
}

const loginSubmit = async () => {
  const { email, passwd } = body.value
  body.value = { email: '', passwd: '' }
  if (session.value?._id) {
    await remove()
  }
  loading.value = true
  try {
    const response = await $fetch('/api/user/login', {
      method: 'POST',
      body: {
        email,
        passwd,
      },
    })
    if (response.error) {
      errors.value.email = response.error
      setTimeout(() => {
        errors.value.email = null
      }, 3000)
      return
    }
    await overwrite(response)
    loading.value = false
    if (redirect) {
      navigateTo(redirect)
    } else {
      navigateTo(ROUTES.HOME)
    }
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

const runOnMount = () => {
  loading.value = false
}

onMounted(runOnMount)
</script>
