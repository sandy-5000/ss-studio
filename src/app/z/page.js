import Image from 'next/image'
import NextImage from './icons/next.svg'

export default function Home() {
  const developers = [
    { name: 'Sandeep', github: 'https://github.com/sandy-5000' },
    { name: 'Jayanth', github: 'https://github.com/Jayanth-Kovvuri' },
  ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={NextImage}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            This web site is developed in{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              NEXT.js
            </code>
            .
          </li>
          <li>
            Developers:
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {'[ '}
              {developers.map((developer, index) => {
                return (
                  <>
                    {index !== 0 && <span>, </span>}
                    <a
                      key={`developer_${index}`}
                      target="_blank"
                      href={developer.github}
                    >
                      {developer.name}
                    </a>
                  </>
                )
              })}
              {' ]'}
            </code>
          </li>
        </ol>
      </main>
    </div>
  )
}
