'use client'

import Link from 'next/link'
import { PiShoppingCartDuotone } from 'react-icons/pi'
import { ROUTES } from '@/utils/routes'

const Button = () => {
  return (
    <div className="fixed right-5 bottom-6 z-[12]">
      <Link href={ROUTES.CART}>
        <div className="rounded-full hover:scale-105 p-3 ring-2 text-slate-800 bg-red-300 ring-red-400 a-center">
          <PiShoppingCartDuotone size={20} />
        </div>
      </Link>
    </div>
  )
}

export default Button
