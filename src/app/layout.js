import '@/app/globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/auth'
import UserSession from '@/components/UserSession'

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <UserSession session={session}>{children}</UserSession>
      </body>
    </html>
  )
}
