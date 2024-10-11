'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Cart from '@/components/Button/Cart'
import { useSession } from 'next-auth/react'

const MainLayout = (props) => {
  const { children } = props
  const { data: session, status } = useSession()
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <NavBar />
      <div className="grow layout-top-padding">{children}</div>
      {status !== 'loading' && session?.user?.email && <Cart />}
      <Footer />
    </div>
  )
}

export default MainLayout
