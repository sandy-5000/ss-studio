import MainLayout from '@/layouts/MainLayout'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/auth'

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return <MainLayout user={session?.user}>{children}</MainLayout>
}
