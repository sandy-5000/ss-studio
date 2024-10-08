'use client'

import Image from 'next/image'
import Logo from '@/assets/logo-red.png'
import Link from 'next/link'
import { AiFillAlert } from 'react-icons/ai'
import { PiShoppingCartDuotone } from 'react-icons/pi'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { IoLogInOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/utils/routes'

const navActiveStyle = {
  '--tw-ring-color': 'rgb(248 113 113 / 1)',
}

const NavBar = (props) => {
  const { user } = props
  const pathname = usePathname()

  return (
    <div className="z-[10] px-5 md:px-8 w-screen fixed h-[70px] border-b-2 shadow-md flex">
      <div className="a-center">
        <Link href={ROUTES.HOME}>
          <Image src={Logo} alt="Logo" height={50} />
        </Link>
      </div>
      <div className="h-full w-full flex justify-between px-5">
        <div className="pl-8 h-full flex gap-4 justify-center">
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
          <div className="h-full a-center">
            <Link href={ROUTES.CART}>
              <div
                style={pathname === ROUTES.CART ? navActiveStyle : {}}
                className="w-20 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 px-1 rounded-md a-center"
              >
                <PiShoppingCartDuotone />
                <span className="pl-1 uppercase text-xs font-semibold">
                  Cart
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full a-center">
          {user ? (
            <Link href={ROUTES.PROFILE}>
              <div
                style={pathname === ROUTES.PROFILE ? navActiveStyle : {}}
                className="px-3 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 rounded-md a-center"
              >
                <PiUserCircleDuotone />
                <span className="pl-1 uppercase text-xs font-semibold">
                  {user.name || 'User'}
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
