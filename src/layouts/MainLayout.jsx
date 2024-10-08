import NavBar from '@/components/NavBar'

const MainLayout = (props) => {
  const { children } = props
  const user = /* Get from sessions here */ {
    name: 'Sandy',
  }
  return (
    <div className="min-h-screen w-screen">
      <NavBar user={user} />
      <div style={{ paddingTop: 70 }}>{children}</div>
    </div>
  )
}

export default MainLayout
