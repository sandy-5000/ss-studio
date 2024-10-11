'use client'

import Logout from '@/components/Button/Logout'
import { useSession } from 'next-auth/react'
import Input from '@/components/Input'
import { MdAlternateEmail } from 'react-icons/md'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { LuShieldCheck } from 'react-icons/lu'
import { FaShieldAlt } from 'react-icons/fa'

const Page = () => {
  const { data: session } = useSession()

  return (
    <div className="h-screen w-screen p-4 md:px-8 lg:p-8 lg:px-16">
      <div className="pb-4">
        <p className="text-2xl">
          Welcome back,{' '}
          <span className="text-red-400 capitalize">
            {session?.user?.name || 'User'}
          </span>
        </p>
      </div>
      <form>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            Your Name
          </p>
          <Input
            placeholder="Your Name"
            name="name"
            type="text"
            value={session?.user?.name}
            startIcon={<PiUserCircleDuotone className="text-slate-500" />}
          />
        </div>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            Email Address
          </p>
          <Input
            placeholder="Your Email"
            name="usermail"
            type="email"
            value={session?.user?.email}
            startIcon={<MdAlternateEmail className="text-slate-500" />}
          />
        </div>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            Phone Number
          </p>
          <Input
            placeholder="Your Phone No."
            name="phone_no"
            type="number"
            value={session?.user?.phone_no}
            startIcon={<HiMiniDevicePhoneMobile className="text-slate-500" />}
          />
        </div>
        <div className="pt-3 pb-2">
          <hr className="bg-red-300" />
        </div>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            New Password
          </p>
          <Input
            placeholder={'Enter New Password'}
            name="npasswd"
            type="password"
            value=""
            startIcon={<LuShieldCheck className="text-slate-500" />}
          />
        </div>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            Confirm Password
          </p>
          <Input
            placeholder={'Confirm Password'}
            name="cpasswd"
            type="password"
            value=""
            startIcon={<FaShieldAlt className="text-slate-500" />}
          />
        </div>
        <div className="pt-3 pb-2">
          <hr className="bg-red-300" />
        </div>
        <div className="pb-2">
          <p className="text-slate-800 text-sm capitalize font-semibold pb-1">
            Enter Password
          </p>
          <Input
            placeholder={'Enter Password'}
            name="passwd"
            type="password"
            startIcon={<LuShieldCheck className="text-slate-500" />}
          />
          <div className="pt-2 w-full flex justify-end">
            <button
              className="inline-flex items-center px-4 py-2
                      rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm
                      transition ease-in-out duration-150
                      text-slate-700 bg-red-400
                      hover:bg-red-300 hover:text-[#111827]
                      disabled:opacity-25"
              aria-disabled
            >
              <div className="flex justify-center">
                <div className="a-center mr-1">
                  <span className="text-xs inline-flex">Update</span>
                </div>
                <div className="a-center">
                  <PiUserCircleDuotone className="text-lg" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </form>
      <div className="pt-3 pb-2">
        <hr className="bg-red-300" />
      </div>
      <div className="pt-4">
        <Logout />
      </div>
    </div>
  )
}

export default Page
