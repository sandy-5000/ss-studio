'use client'

import { signOut } from 'next-auth/react'
import { IoLogOutOutline } from 'react-icons/io5'

const Button = () => {
  return (
    <button onClick={() => signOut()}>
      <div className="w-20 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 px-1 rounded-md a-center">
        <IoLogOutOutline />
        <span className="pl-1 uppercase text-xs font-semibold">Logout</span>
      </div>
    </button>
  )
}

export default Button
