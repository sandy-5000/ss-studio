import { ROUTES } from '@/utils/routes'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-[60px] w-screen bg-red-100 py-1 px-3 shadow-inner flex justify-start">
      <div className="h-full v-center">
        <div className="flex">
          <span className="uppercase text-xs font-semibold v-center px-2 pt-[2px]">
            <Link href={ROUTES.ABOUT}>About</Link>
          </span>
          {' / '}
          <span className="uppercase text-xs font-semibold v-center px-2 pt-[2px]">
            <Link href={ROUTES.CONTACT_US}>Contact Us</Link>
          </span>
          {' / '}
          <span className="uppercase text-xs font-semibold v-center px-2 pt-[2px]">
            <a target="_blank" href="/z">
              Developed by
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
