import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const MainLayout = (props) => {
  const { children } = props
  const user = /* Get from sessions here */ {
    name: 'Sandy',
  }
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <NavBar user={user} />
      <div className="grow" style={{ paddingTop: 70 }}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
