'use client'

import { IoHeart, IoHeartHalfSharp, IoHeartOutline } from 'react-icons/io5'
import Button from '@/components/Button'

const BuyBox = ({ cloth }) => {
  return (
    <div className="p-2 ">
      <div className="mb-2">
        <div className="h-50 rounded-xl bg-red-300 shadow-md p-6">
          <div className="font-semibold mb-1 text-lg">Today&#39;s Price</div>
          <div className="p-2 rounded-lg bg-red-400">
            <span className="text-3xl tracking-tight">
              ₹ {cloth.price.slice(0, 4)}
            </span>
          </div>
          <div>
            <div class="flex justify-center bg-white p-2 mt-2 shadow-lg shadow-slate-200 rounded-lg w-auto space-x-1 lg:space-x-2">
              <button>
                <IoHeart className="text-2xl text-red-400" />
              </button>
              <button>
                <IoHeart className="text-2xl text-red-400" />
              </button>
              <button>
                <IoHeart className="text-2xl text-red-400" />
              </button>
              <button>
                <IoHeartHalfSharp className="text-2xl text-red-400" />
              </button>
              <button>
                <IoHeartOutline className="text-2xl text-red-400" />
              </button>
            </div>
          </div>
          <span className="mt-8 p-4 text-sm font-normal">in stock *</span>
        </div>

        <div className="pt-2 flex justify-center gap-2">
          <Button label={'Buy Now'} />
          <Button label={'Add to Cart'} style={{ background: '#f87171' }} />
        </div>
      </div>
    </div>
  )
}

export default BuyBox
