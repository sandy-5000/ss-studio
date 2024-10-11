'use client'

import Image from 'next/image'
import Logo from '@/assets/logo-red.png'
import Link from 'next/link'
import { AiFillAlert } from 'react-icons/ai'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { IoLogInOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/utils/routes'
import { useSession } from 'next-auth/react'

const navActiveStyle = {
  '--tw-ring-color': 'rgb(248 113 113 / 1)',
}

const NavBar = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  return (
    <div className="bg-white md:flex z-[10] px-5 md:px-8 w-screen fixed h-[120px] md:h-[70px] border-b-2 shadow-md">
      <div className="py-3 md:py-0 a-center">
        <Link href={ROUTES.HOME}>
          <Image src={Logo} alt="Logo" height={50} />
        </Link>
      </div>
      <div className="md:h-full w-full flex justify-between md:px-5 pb-3 md:pb-0">
        <div className="md:pl-8 h-full flex gap-4 justify-center">
          <div className="h-full a-center">
            <Link href={ROUTES.ABOUT}>
              <div
                style={pathname === ROUTES.ABOUT ? navActiveStyle : {}}
                className="w-20 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 px-1 rounded-md a-center"
              >
                <AiFillAlert />
                <span className="pl-1 uppercase text-xs font-semibold">
                  About
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full a-center">
          {status !== 'loading' && session?.user?.email ? (
            <Link href={ROUTES.PROFILE}>
              <div
                style={pathname === ROUTES.PROFILE ? navActiveStyle : {}}
                className="px-3 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 rounded-md a-center"
              >
                <PiUserCircleDuotone />
                <span className="pl-1 uppercase text-xs font-semibold">
                  {session?.user.name || 'User'}
                </span>
              </div>
            </Link>
          ) : (
            <Link href={ROUTES.LOGIN}>
              <div className="w-20 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 px-1 rounded-md a-center">
                <IoLogInOutline />
                <span className="pl-1 uppercase text-xs font-semibold">
                  Login
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
