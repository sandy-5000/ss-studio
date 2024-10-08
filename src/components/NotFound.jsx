import Link from 'next/link'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { ROUTES } from '@/utils/routes'

export default function NotFound() {
  return (
    <div className="z-[11] h-screen w-screen fixed top-0 left-0 a-center">
      <div>
        <div className="mt-5">
          <svg
            style={{ width: 100, height: 100 }}
            id="L1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
          >
            <circle
              fill="none"
              stroke="#444"
              strokeWidth="6"
              strokeMiterlimit="15"
              strokeDasharray="14.2472,14.2472"
              cx="50"
              cy="50"
              r="47"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              fill="none"
              stroke="#444"
              strokeWidth="1"
              strokeMiterlimit="10"
              strokeDasharray="10,10"
              cx="50"
              cy="50"
              r="39"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <g fill="#444">
              <rect x="30" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </rect>
              <rect x="40" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </rect>
              <rect x="50" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </rect>
              <rect x="60" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.4"
                />
              </rect>
              <rect x="70" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.5"
                />
              </rect>
            </g>
          </svg>
        </div>
        <div className="mt-4 a-center">
          <div>
            <p className="font-semibold text-xs text-center">Page Not Found</p>
            <div className="a-center mt-3">
              <Link href={ROUTES.HOME}>
                <div className="px-3 py-2 ring-2 ring-red-200 text-slate-800 bg-red-200 hover:ring-red-400 rounded-md a-center">
                  <span className="pr-1 uppercase text-[11px] font-semibold">
                    Home
                  </span>
                  <RiArrowGoBackFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
