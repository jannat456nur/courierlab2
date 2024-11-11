import { Outlet } from 'react-router-dom'
import HomeHeader from './../pages/HomeHeader'

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-primaryWhite">
      <HomeHeader />
      <main className="p-2 min-h-[85vh] bg-inherit">
        <Outlet />
      </main>
      {/* <Footer/> */}
      {/* <Sidebar /> */}
    </div>
  )
}

export default UserLayout

// import { Outlet } from 'react-router-dom'
// import Header from '../pages/Header' // Header for signed-in users
// import HomeHeader from '../pages/HomeHeader' // Header for non-signed-in users
// import { useAuth } from '../Auth/AuthContext' // Import the AuthContext
// import HomeHeader from './../pages/HomeHeader';

// const UserLayout = () => {
//   const { isAuthenticated } = useAuth() // Access the authentication status
//   console.log(isAuthenticated)

//   return (
//     <div className="min-h-screen bg-slate-100 text-primaryWhite">
//       {isAuthenticated ? <HomeHeader /> : <Header />} {/* Conditional Header */}
//       <main className="p-2 min-h-[85vh] bg-inherit">
//         <Outlet />
//       </main>
//       {/* <Footer/> */}
//       {/* <Sidebar /> */}
//     </div>
//   )
// }

// export default UserLayout
