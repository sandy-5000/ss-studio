'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo-red.png'
import { ROUTES } from '@/utils/routes'
import Input from '@/components/Input'
import { MdAlternateEmail } from 'react-icons/md'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { LuShieldCheck } from 'react-icons/lu'
import { FaShieldAlt } from 'react-icons/fa'
import { useState } from 'react'
import backend from '@/utils/backend'
import { useRouter } from 'next/navigation'

const handleSubmit = ({ form, setLoading, setSignUpError, router }) => {
  const body = form
  setLoading(true)
  backend
    .post('/api/user/signup', body)
    .then(({ data }) => {
      if (data.error) {
        setSignUpError(data.error)
        return
      }
      router.push(ROUTES.LOGIN)
    })
    .catch((error) => {
      setSignUpError('Something went wrong')
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
}

const initialState = {
  name: '',
  usermail: '',
  phone_no: '',
  passwd: '',
  cpasswd: '',
}

const Page = () => {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialState)
  const router = useRouter()

  const setSignUpError = (error) => {
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
          handleSubmit({ form, setLoading, setSignUpError, router })
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
          <Input
            placeholder="Enter Name"
            name="name"
            type="text"
            value={form.name}
            onChange={setForm}
            startIcon={<PiUserCircleDuotone className="text-slate-500" />}
          />
          <Input
            placeholder="Enter Email"
            name="usermail"
            type="email"
            value={form.usermail}
            onChange={setForm}
            startIcon={<MdAlternateEmail className="text-slate-500" />}
          />
          <Input
            placeholder={'Enter Phone No.'}
            name="phone_no"
            type="number"
            value={form.phone_no}
            onChange={setForm}
            startIcon={<HiMiniDevicePhoneMobile className="text-slate-500" />}
          />
          <Input
            placeholder={'Enter Password'}
            name="passwd"
            type="password"
            value={form.passwd}
            onChange={setForm}
            startIcon={<LuShieldCheck className="text-slate-500" />}
          />
          <Input
            placeholder={'Confirm Password'}
            name="cpasswd"
            type="password"
            value={form.cpasswd}
            onChange={setForm}
            startIcon={<FaShieldAlt className="text-slate-500" />}
          />
          {error && (
            <span className="px-4 py-1 text-red-700 text-xs">{error}</span>
          )}
          <div className="flex justify-between pb-3 px-4">
            <div className="v-center">
              <Link href={ROUTES.LOGIN}>
                <p className="text-slate-800 text-[12px]">
                  Already have an account?
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
                  <span className="text-xs inline-flex">SignUp</span>
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
