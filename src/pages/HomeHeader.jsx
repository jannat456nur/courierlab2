import { NavLink, useNavigate } from 'react-router-dom'
import promise from '../../public/images/promise.png' // Adjust the logo path

const HomeHeader = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={promise} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Middle Section: Navigation Menu */}
      <nav className="flex space-x-6">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'text-gray-900 font-semibold border-b-2 border-red-500 pb-2'
              : 'text-gray-500 hover:text-gray-900'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-gray-900 font-semibold border-b-2 border-red-500 pb-2'
              : 'text-gray-500 hover:text-gray-900'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? 'text-gray-900 font-semibold border-b-2 border-red-500 pb-2'
              : 'text-gray-500 hover:text-gray-900'
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-gray-900 font-semibold border-b-2 border-red-500 pb-2'
              : 'text-gray-500 hover:text-gray-900'
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Right Section: Sign Up / Sign In Buttons */}
      <div className="flex space-x-4">
        <NavLink
          to="/registration"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Sign Up
        </NavLink>
        <button
          onClick={() => {
            navigate('/login')
          }}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition cursor-pointer"
        >
          Sign In
        </button>
        {/* <a href="/login">Sign In</a> */}
      </div>
    </header>
  )
}

export default HomeHeader
