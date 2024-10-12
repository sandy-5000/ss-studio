import Image from 'next/image'
import NextImage from './icons/next.svg'
import { VscGithub } from 'react-icons/vsc'

export default function Home() {
  const developers = [
    { name: 'Sandeep', github: 'https://github.com/sandy-5000' },
    { name: 'Jayanth', github: 'https://github.com/jayanth-kovvuri' },
  ]

  return (
    <div className="h-screen w-screen a-center">
      <main className="w-[330px] font-[family-name:var(--font-geist-mono)]">
        <div className="flex md:block justify-center">
          <Image
            className="invert"
            src={NextImage}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <p className="my-4 text-sm text-center md:text-left">
          This web site is developed in{' '}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            NEXT.js
          </code>
          .
        </p>
        <div className="flex md:block justify-center">
          <div>
            <p className="pt-0 text-sm">Developers: {'[ '}</p>
            {developers.map((developer, index) => {
              return (
                <>
                  <div className="flex">
                    <button className="a-center ml-8 h-8 w-28 mt-2 border-b-2 border-[#ededed]">
                      <div className="pr-2">
                        <VscGithub className="text-xl" />
                      </div>
                      <div className="a-center">
                        <a
                          key={`developer_${index}`}
                          target="_blank"
                          href={developer.github}
                        >
                          <span className="text-sm font-[family-name:var(--font-geist-mono)]">
                            {developer.name}
                          </span>
                        </a>
                      </div>
                    </button>
                    <div className="ml-1 flex flex-col justify-end">
                      <span>
                        {index !== developers.length - 1 ? (
                          <span className="w-2 text-[#0a0a0a]">,</span>
                        ) : (
                          <span className="w-2 text-[#0a0a0a]">,</span>
                        )}
                      </span>
                    </div>
                  </div>
                </>
              )
            })}
            <p className="pt-2">{']'}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
