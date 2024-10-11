'use client'

const Button = ({ leftIcon, rightIcon, disabled, label, onClick, style }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className="inline-flex items-center px-4 py-2
        rounded-md font-semibold text-xs uppercase
        tracking-widest shadow-sm
        transition ease-in-out duration-150
        text-slate-700 bg-red-300
        hover:bg-red-200 hover:text-[#111827]
        disabled:opacity-25"
      onClick={handleClick}
      style={style || {}}
      aria-disabled={disabled}
    >
      <div className="flex justify-center">
        {leftIcon && <div className="a-center">{leftIcon}</div>}
        {label && (
          <div className="a-center mx-1">
            <span className="uppercase font-semibold text-xs inline-flex">
              {label}
            </span>
          </div>
        )}
        {rightIcon && <div className="a-center">{rightIcon}</div>}
      </div>
    </button>
  )
}

export default Button
