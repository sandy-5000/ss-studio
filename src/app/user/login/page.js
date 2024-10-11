'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo-red.png'
import { ROUTES } from '@/utils/routes'
import Input from '@/components/Input'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { LuShieldCheck } from 'react-icons/lu'
import { useState } from 'react'
import backend from '@/utils/backend'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const handleSubmit = ({ form, setLoading, setLoginError, router }) => {
  const body = form
  setLoading(true)
  backend
    .post('/api/user/login', body)
    .then(({ data }) => {
      if (data.error) {
        setLoginError(data.error)
        return
      }
      router.push('/home')
    })
    .catch((error) => {
      setLoginError('Something went wrong')
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
}

const handleAnotherSubmit = async ({
  form,
  setLoading,
  setLoginError,
  router,
}) => {
  setLoading(true)
  const response = await signIn('credentials', {
    handler: form.handler,
    passwd: form.passwd,
    redirect: false,
  })
  setLoading(false)
  if (response.ok) {
    router.push(ROUTES.HOME)
    return
  }
  if (response.error) {
    setLoginError(response.error)
  }
}

const initialState = {
  handler: '',
  passwd: '',
}

const Page = () => {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialState)
  const router = useRouter()

  const setLoginError = (error) => {
    setError(error)
    console.log(error)
    setTimeout(() => {
      setError(undefined)
    }, 3000)
  }

  return (
    <div className="h-screen w-screen a-center px-2">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAnotherSubmit({ form, setLoading, setLoginError, router })
        }}
      >
        <div className="signup-form w-full md:w-[360px] md:glass glass-hard v-center">
          <div className="flex justify-center pb-5 pt-3">
            <div>
              <Link href={ROUTES.HOME}>
                <Image src={Logo} alt="Logo" height={80} />
              </Link>
            </div>
          </div>
          <div className="p-5 pt-0">
            <Input
              placeholder="Enter Email or Phone No."
              name="handler"
              type="text"
              value={form.handler}
              onChange={setForm}
              startIcon={
                <PiUserCircleDuotone className="text-slate-500 -mb-[2px]" />
              }
            />
          </div>
          <div className="p-5 pt-0">
            <Input
              placeholder={'Enter Password'}
              name="passwd"
              type="password"
              value={form.passwd}
              onChange={setForm}
              startIcon={<LuShieldCheck className="text-slate-500 -mb-[2px]" />}
            />
          </div>
          {error && (
            <span className="px-4 py-1 text-red-700 text-xs">{error}</span>
          )}
          <div className="flex justify-between pb-3 px-4">
            <div className="v-center">
              <Link href={ROUTES.SIGNUP}>
                <p className="text-slate-800 text-[12px]">
                  Didn&#39;t have an account?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2
                      rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm
                      transition ease-in-out duration-150
                      text-slate-700 bg-red-400
                      hover:bg-red-300 hover:text-[#111827]
                      disabled:opacity-25"
              aria-disabled={loading}
            >
              <div className="flex justify-center">
                <div className="a-center mr-1">
                  <span className="text-xs inline-flex">Login</span>
                </div>
                <div className="a-center">
                  <PiUserCircleDuotone className="text-lg" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page
