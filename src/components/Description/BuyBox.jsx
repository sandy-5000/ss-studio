'use client'

const BuyBox = ({ cloth }) => {
  return (
    <div className="p-2 ">
      <div className="mb-2">
        <div className="h-50 rounded-xl bg-red-300 shadow-md p-6">
          <div className="font-semibold mb-1 text-lg">Today's Price</div>
          <div className="p-2 rounded-lg bg-red-400">
            <span className="text-5xl tracking-tight">₹ 1599</span>
          </div>
          <div>
            <div class="flex justify-center bg-white p-2 mt-2 shadow-lg shadow-slate-200 rounded-lg w-auto space-x-1 lg:space-x-2">
              <button>
                <svg
                  class="text-red-400 w-6 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
              </button>

              <button>
                <svg
                  class="text-red-400 w-6 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
              </button>

              <button>
                <svg
                  class="text-red-400 w-6 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
              </button>

              <button>
                <svg
                  class="text-red-400 w-6 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M119.4 44.1C164.1 36.51 211.3 51.37 243.1 83.99L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.09L119.4 44.1zM255.1 186.5V407.4L420.7 253.6C438.1 237.4 448 214.7 448 190.9V185.1C448 146.5 420.1 113.6 382 107.2C356.9 103 331.3 111.2 313.2 129.3L255.1 186.5z" />
                </svg>
              </button>

              <button>
                <svg
                  class="text-red-400 w-6 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                </svg>
              </button>
            </div>
          </div>
          <span className="mt-4 p-4">in stock *</span>
        </div>

        <div className="pt-2 flex justify-center gap-2">
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
                <span className="text-xs inline-flex">Buy Now</span>
              </div>
              <div className="a-center">
                {/* <PiUserCircleDuotone className="text-lg" /> */}
              </div>
            </div>
          </button>

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
                <span className="text-xs inline-flex">Add to Cart</span>
              </div>
              <div className="a-center">
                {/* <PiUserCircleDuotone className="text-lg" /> */}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BuyBox
