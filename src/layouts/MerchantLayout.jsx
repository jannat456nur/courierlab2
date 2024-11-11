import { Outlet, useLocation } from 'react-router-dom'
// import Header from '../pages/Admin/AdminHeader'
import MerchantHeader from '../pages/Merchant/MerchantHeader'

export default function MerchantLayout() {
  const location = useLocation()

  // Define paths where you want the MerchantHeader to be shown
  const showMerchantHeaderPaths = [ '/merchant/registration'] // Add other paths as necessary

  return (
    <div className="min-h-screen bg-slate-100 text-primaryWhite">
      { !showMerchantHeaderPaths.includes(location.pathname) && (
        <MerchantHeader />
      )}
      <main className="p-2 min-h-[85vh] bg-inherit">
        <Outlet />
      </main>
      {/* <Footer/> */}
      {/* <Sidebar /> */}
    </div>
  )
}
