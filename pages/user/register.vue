<template>
  <NuxtLayout :name="layout" title="register">
    <form @submit.prevent="registerSubmit">
      <!-- Name -->
      <div>
        <ui-input-label for="name" :value="__('Name')" />
        <ui-text-input
          :value="body.name"
          @update:value="(x) => changeValue('name', x)"
          id="name"
          className="block mt-1 w-full"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required
          autofocus
        />
        <ui-input-error :messages="null" className="mt-2" />
      </div>
      <!-- Email Address -->
      <div class="mt-2">
        <ui-input-label for="email" :value="__('Email')" />
        <ui-text-input
          :value="body.email"
          @update:value="(x) => changeValue('email', x)"
          id="email"
          className="block mt-1 w-full"
          type="email"
          placeholder="Enter Your Email Address"
          name="email"
          required
        />
        <ui-input-error :messages="null" className="mt-2" />
      </div>
      <!-- Phone No -->
      <div class="mt-2">
        <ui-input-label for="phone_no" :value="__('Mobile')" />
        <ui-text-input
          :value="body.phone_no"
          @update:value="(x) => changeValue('phone_no', x)"
          id="phone_no"
          className="block mt-1 w-full"
          type="number"
          name="phone_no"
          placeholder="Enter Mobile No."
          required
          autofocus
        />
        <ui-input-error :messages="errors.phone_no" className="mt-2" />
      </div>

      <div class="mt-2 flex space-x-2">
        <!-- Password -->
        <div>
          <ui-input-label for="password" :value="__('Password')" />
          <ui-text-input
            :value="body.passwd"
            @update:value="(x) => changeValue('passwd', x)"
            id="password"
            className="block mt-1 w-full"
            type="password"
            placeholder="Enter Strong Password"
            name="password"
            required
          />
          <ui-input-error :messages="errors.passwd" className="mt-2" />
        </div>
        <!-- Confirm Password -->
        <div>
          <ui-input-label
            for="password_confirmation"
            :value="__('Confirm Password')"
          />
          <ui-text-input
            :value="body.cpasswd"
            @update:value="(x) => changeValue('cpasswd', x)"
            id="password_confirmation"
            className="block mt-1 w-full"
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            required
          />
          <ui-input-error :messages="errors.cpasswd" className="mt-2" />
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <NuxtLink
          :to="ROUTES.USER.LOGIN"
          class="underline text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"
        >
          {{ __('Already registered?') }}
        </NuxtLink>
        <ui-button-primary v-if="!loading" type="submit" class="ms-4">
          Register
        </ui-button-primary>
        <ui-button-loading v-if="loading" class="ms-4">
          Creating...
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
    phone_no: '',
    name: '',
    email: '',
    passwd: '',
    cpasswd: '',
  }
})

const errors = useState('errors', () => {
  return {
    phone_no: null,
    name: null,
    email: null,
    passwd: null,
    cpasswd: null,
  }
})

const loading = useState('loading', () => false)

const changeValue = (key, value) => {
  body.value[key] = value
  validate()
}

const validate = () => {
  errors.value = {
    phone_no: null,
    name: null,
    email: null,
    passwd: null,
    cpasswd: null,
  }
  let flag = true
  if (body.value.phone_no && body.value.phone_no.length !== 10) {
    errors.value.phone_no = 'Mobile No. not valid'
    flag = false
  }
  if (body.value.passwd && body.value.passwd.length < 8) {
    errors.value.passwd = 'Password contains atleast 8 characters'
    flag = false
  }
  if (body.value.cpasswd && body.value.passwd !== body.value.cpasswd) {
    errors.value.cpasswd = "Password didn't Match"
    flag = false
  }
  return flag
}

const registerSubmit = async () => {
  if (!validate()) {
    return
  }
  const { phone_no, name, email, passwd } = body.value
  body.value = {
    phone_no: '',
    name: '',
    email: '',
    passwd: '',
    cpasswd: '',
  }
  if (session.value?._id) {
    await remove()
  }
  loading.value = true
  try {
    const response = await $fetch('/api/user/register', {
      method: 'POST',
      body: {
        phone_no,
        name,
        passwd,
        email,
      },
    })
    if (response.error) {
      errors.value.email = response.error
      setTimeout(() => {
        errors.value.email = null
      }, 3000)
      return
    }
    loading.value = false
    await overwrite(response)
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
