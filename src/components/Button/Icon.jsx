'use client'

const Button = ({ icon, disabled, onClick, style }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className="inline-flex items-center p-2
        rounded-md font-semibold text-xs uppercase
        tracking-widest shadow-sm
        transition ease-in-out duration-150
        text-slate-700 bg-white
        hover:scale-105 hover:text-[#111827]
        disabled:opacity-25"
      onClick={handleClick}
      style={style || {}}
      aria-disabled={disabled}
    >
      <div className="flex justify-center">
        {icon && <div className="a-center">{icon}</div>}
      </div>
    </button>
  )
}

export default Button
