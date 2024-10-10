import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const MainLayout = (props) => {
  const { user, children } = props
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <NavBar user={user} />
      <div className="grow layout-top-padding">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
