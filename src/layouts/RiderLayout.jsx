import { Outlet, useLocation } from 'react-router-dom'
// import Header from '../pages/Admin/AdminHeader'
import RiderHeader from '../pages/Rider/RiderHeader'

export default function RiderLayout() {
  const location = useLocation()

  // Define paths where you want the RiderHeader to be shown
  const showRiderHeaderPaths = ['/rider/registration'] // Add other paths as necessary

  return (
    <div className="min-h-screen bg-slate-100 text-primaryWhite">
      {!showRiderHeaderPaths.includes(location.pathname) && <RiderHeader />}
      <main className="p-2 min-h-[85vh] bg-inherit">
        <Outlet />
      </main>
      {/* <Footer/> */}
      {/* <Sidebar /> */}
    </div>
  )
}
