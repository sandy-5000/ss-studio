<template>
  <NuxtLayout :name="layout" title="Profile">
    <div class="py-12 mx-2 md:mx-0">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-site-light shadow rounded-lg">
          <div class="max-w-xl">
            <section>
              <header>
                <h2 class="text-lg font-medium">
                  {{ __('Profile Information') }}
                </h2>
                <p class="mt-1 text-sm text-gray-800">
                  {{
                    __(
                      "Update your account's profile information and email address."
                    )
                  }}
                </p>
              </header>
              <form
                @submit.prevent="handleProfileUpdate"
                class="mt-6 space-y-6"
              >
                <div>
                  <ui-input-label for="name" :value="__('Name')" />
                  <ui-text-input
                    id="name"
                    :value="info.profile.name"
                    @update:value="(x) => (info.profile.name = x)"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                  />
                  <ui-input-error class="mt-2" :messages="null" />
                </div>

                <div>
                  <ui-input-label for="email" :value="__('Email')" />
                  <ui-text-input
                    id="email"
                    :value="info.profile.email"
                    @update:value="(x) => (info.profile.email = x)"
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="email"
                    class="mt-1 block w-full"
                    required
                  />
                  <ui-input-error class="mt-2" :messages="null" />

                  <div v-if="true">
                    <p class="text-sm mt-2 text-site">
                      {{ __('Your email address is unverified.') }}

                      <button
                        form="send-verification"
                        class="underline text-sm text-site hover:text-app rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
                      >
                        {{
                          __('Click here to re-send the verification email.')
                        }}
                      </button>
                    </p>
                    <p
                      v-if="true"
                      class="mt-2 font-medium text-sm text-green-500"
                    >
                      {{
                        __(
                          'A new verification link has been sent to your email address.'
                        )
                      }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <ui-button-primary type="submit" v-if="!loading.profileUpdate"
                    >Save</ui-button-primary
                  >
                  <ui-button-loading v-if="loading.profileUpdate"
                    >Updating...</ui-button-loading
                  >
                  <p v-if="show.profileUpdated" class="text-sm text-gray-400">
                    {{ show.profileUpdated }}
                  </p>
                </div>
              </form>
            </section>
          </div>
        </div>

        <div class="p-4 sm:p-8 bg-site-light shadow rounded-lg">
          <div class="max-w-xl">
            <section>
              <header>
                <h2 class="text-lg font-medium">
                  {{ __('Update Password') }}
                </h2>

                <p class="mt-1 text-sm text-site">
                  {{
                    __(
                      'Ensure your account is using a long, random password to stay secure.'
                    )
                  }}
                </p>
              </header>

              <form
                @submit.prevent="handlePasswordUpdate"
                class="mt-6 space-y-6"
              >
                <div>
                  <ui-input-label
                    for="current_password"
                    :value="__('Current Password')"
                  />
                  <ui-text-input
                    id="current_password"
                    :value="info.passwd.current"
                    @update:value="(x) => (info.passwd.current = x)"
                    name="current_password"
                    placeholder="Enter Your Current Password"
                    type="password"
                    class="mt-1 block w-full"
                  />
                  <ui-input-error :messages="null" class="mt-2" />
                </div>

                <div>
                  <ui-input-label for="password" :value="__('New Password')" />
                  <ui-text-input
                    id="password"
                    :value="info.passwd.updated"
                    @update:value="(x) => (info.passwd.updated = x)"
                    name="password"
                    placeholder="Enter Strong Password"
                    type="password"
                    class="mt-1 block w-full"
                  />
                  <ui-input-error :messages="null" class="mt-2" />
                </div>

                <div>
                  <ui-input-label
                    for="password_confirmation"
                    :value="__('Confirm Password')"
                  />
                  <ui-text-input
                    id="password_confirmation"
                    :value="info.passwd.confirm"
                    @update:value="(x) => (info.passwd.confirm = x)"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    type="password"
                    class="mt-1 block w-full"
                  />
                  <ui-input-error :messages="null" class="mt-2" />
                </div>

                <div class="flex items-center gap-4">
                  <ui-button-primary
                    type="submit"
                    v-if="!loading.passwordUpdate"
                    >Save</ui-button-primary
                  >
                  <ui-button-loading v-if="loading.passwordUpdate"
                    >Updating...</ui-button-loading
                  >
                  <p v-if="show.passwordUpdated" class="text-sm text-gray-400">
                    {{ show.passwordUpdated }}
                  </p>
                </div>
              </form>
            </section>
          </div>
        </div>

        <div class="p-4 sm:p-8 bg-site-light shadow rounded-lg">
          <div class="max-w-xl">
            <section class="space-y-6">
              <header>
                <h2 class="text-lg font-medium">
                  {{ __('Delete Account') }}
                </h2>
                <p class="mt-1 text-sm text-site-light">
                  Once your account is deleted, all of its resources and data
                  will be permanently deleted. Before deleting your account,
                  please download any data or information that you wish to
                  retain.
                </p>
              </header>
              <ui-button-danger>{{ __('Delete Account') }}</ui-button-danger>
            </section>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = 'main-layout'
const { session, update } = await useSession()
const route = useRoute()
if (!session.value || !session.value._id) {
  navigateTo(`/login?redirect=${route.path}`)
}

const defaultInfo = useState('defaultInfo', () => {
  return {
    name: session.value.name,
    email: session.value.email,
  }
})

const info = useState('info', () => {
  return {
    profile: {
      name: session.value.name,
      email: session.value.email,
    },
    passwd: {
      current: '',
      updated: '',
      confirm: '',
    },
  }
})

const show = useState('show', () => {
  return {
    profileUpdated: '',
    passwordUpdated: '',
  }
})

const profileUpdated = (message) => {
  show.value.profileUpdated = message || 'Profile updated.'
  setTimeout(() => {
    show.value.profileUpdated = ''
  }, 5000)
}

const passwordUpdated = (message) => {
  show.value.passwordUpdated = message || 'Password updated.'
  setTimeout(() => {
    show.value.passwordUpdated = ''
  }, 5000)
}

const loading = useState('loading', () => {
  return {
    profileUpdate: false,
    passwordUpdate: false,
  }
})

const handleProfileUpdate = async () => {
  const { name, email } = info.value.profile
  info.value.profile = { name: '', email: '' }
  if (!session.value || !session.value._id) {
    navigateTo(`/login?redirect=${route.path}`)
    return
  }
  loading.value.profileUpdate = true
  try {
    const response = await $fetch('/api/user/profile', {
      method: 'PATCH',
      body: {
        update: 'profile',
        _id: session.value._id,
        name,
        email,
      },
    })
    if (!response.error) {
      await update({
        name: name || defaultInfo.value.name,
        email: email || defaultInfo.value.email,
      })
      defaultInfo.value = {
        name: session.value.name,
        email: session.value.email,
      }
    }
    info.value.profile = {
      name: defaultInfo.value.name,
      email: defaultInfo.value.email,
    }
    profileUpdated(response.error || response.status)
  } catch (e) {
    profileUpdated('Update Failed')
  } finally {
    loading.value.profileUpdate = false
  }
}

const handlePasswordUpdate = async () => {
  const { current, updated, confirm } = info.value.passwd
  info.value.passwd = { current: '', updated: '', confirm: '' }
  if (!session.value || !session.value._id) {
    navigateTo(`/login?redirect=${route.path}`)
    return
  }
  if (updated !== confirm) {
    passwordUpdated("Password did't match")
    return
  }
  loading.value.passwordUpdate = true
  try {
    const response = await $fetch('/api/user/profile', {
      method: 'PATCH',
      body: {
        update: 'passwd',
        _id: session.value._id,
        passwd: current,
        npasswd: updated,
      },
    })
    passwordUpdated(response.error || response.status)
  } catch (e) {
    passwordUpdated('Update Failed')
  } finally {
    loading.value.passwordUpdate = false
  }
}
</script>
