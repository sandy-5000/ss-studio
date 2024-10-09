import AuthLayout from '@/layouts/AuthLayout'

export const metadata = {
  title: 'SS-Studio | Signup',
  description: 'Register to SS Studio website',
}

export default function RootLayout({ children }) {
  return <AuthLayout>{children}</AuthLayout>
}
