import MainLayout from '@/layouts/MainLayout'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/utils/auth'
import { ROUTES } from '@/utils/routes'

export const metadata = {
  title: 'SS-Studio | Profile',
  description: 'Welcome to SS Studio',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect(ROUTES.LOGIN)
  }
  metadata.title = `${session?.user?.name} | Profile`
  return <MainLayout user={session?.user}>{children}</MainLayout>
}
