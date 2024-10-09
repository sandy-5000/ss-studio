'use client'

import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <button
      onClick={() => signIn('google', { redirectTo: '/home' })}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition"
    >
      Sign in with Google
    </button>
  )
}
