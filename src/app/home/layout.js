import MainLayout from '@/layouts/MainLayout'

export const metadata = {
  title: 'SS-Studio | Home',
  description: 'Welcome to SS Studio',
}

export default async function RootLayout({ children }) {
  return <MainLayout>{children}</MainLayout>
}
