import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/utils/auth'

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  console.log(session)

  return (
    <div className="h-screen w-screen a-center">
      <p>Home!</p>
    </div>
  )
}

export default Page
