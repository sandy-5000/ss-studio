'use client'

import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo-red.png'
import { ROUTES } from '@/utils/routes'
import { AiTwotoneHome } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'

const AuthLayout = (props) => {
  const { children } = props
  const { status } = useSession()

  const router = useRouter()
  if (status === 'loading') {
    return <Loading />
  }
  if (status === 'authenticated') {
    router.push(ROUTES.HOME)
    return <Loading />
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex justify-between z-[10] px-5 md:px-8 w-screen fixed h-[70px] border-b-2 shadow-md">
        <div className="h-full flex">
          <div className="py-3 a-center">
            <Link href={ROUTES.HOME}>
              <Image src={Logo} alt="Logo" height={50} />
            </Link>
          </div>
          <div className="v-center">
            <span
              style={{
                paddingLeft: 16,
                textTransform: 'uppercase',
                fontSize: 14,
                fontWeight: 600,
                color: '#dc2626',
              }}
            >
              Welcome User
            </span>
          </div>
        </div>
        <div className="h-[70px] a-center">
          <Link href={ROUTES.HOME}>
            <div className="px-3 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 rounded-md a-center">
              <AiTwotoneHome size={16} />
              <span className="pl-1 uppercase pt-[1px] text-[12px] font-semibold">
                Home
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="layout-top-padding">{children}</div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Footer />
      </div>
    </div>
  )
}

export default AuthLayout
