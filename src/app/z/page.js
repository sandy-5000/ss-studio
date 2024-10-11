import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
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
              <a target="_blank" href="https://github.com/sandy-5000">
                Sandeep
              </a>
              {' / '}
              <a target="_blank" href="https://github.com/Jayanth-Kovvuri">
                Jayanth
              </a>
            </code>
          </li>
        </ol>
      </main>
    </div>
  )
}
