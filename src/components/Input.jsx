'use client'

import { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Input = ({
  placeholder,
  startIcon,
  error,
  type,
  name,
  value,
  onChange,
  disabled,
}) => {
  const [showPasswd, setShowPasswd] = useState(false)

  const handleShowPasswd = () => {
    setShowPasswd(!showPasswd)
  }

  const handleChange = (e) => {
    let value = e.target.value
    if (onChange) {
      onChange((p) => {
        return { ...p, [name]: value }
      })
    }
  }

  return (
    <div className="p-0 w-full">
      <div className="relative w-full md:w-[300px]">
        {startIcon && (
          <div className="absolute h-8 left-0 px-3 a-center">{startIcon}</div>
        )}
        <input
          type={showPasswd ? 'text' : type || 'text'}
          name={name}
          value={value}
          onChange={handleChange}
          className="h-8 w-full md:w-[300px] bg-transparent py-2 px-10 text-gray-800
                  rounded-sm ring-2 ring-red-400 focus:ring-2 focus:ring-red-300
                  tracking-wide text-sm"
          placeholder={placeholder}
          aria-disabled={!!disabled}
        />
        {type === 'password' && (
          <div className="absolute top-0 h-8 right-0 px-3 a-center">
            <button onClick={handleShowPasswd} type="button">
              {showPasswd ? (
                <VscEye className="text-slate-700" />
              ) : (
                <VscEyeClosed className="text-slate-700" />
              )}
            </button>
          </div>
        )}
      </div>
      {error && <span className="-mb-5 text-red-700 text-xs">{error}</span>}
    </div>
  )
}

export default Input
