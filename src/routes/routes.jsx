import { createBrowserRouter } from 'react-router-dom'
// import DashboardBody from '../pages/Merchant/MerchantDashboardBody'
import ErrorPage from '../pages/Merchant/ErrorPage'
import Login from '../../src/Auth/Login'
import Registration from '../../src/Auth/Registration'

// Merchant Pages
import Invoices from '../pages/Merchant/Invoices'
import Deliveries from '../pages/Merchant/Deliveries'
import All from '../pages/Merchant/All'
import Active from '../pages/Merchant/Active'
import Delivered from '../pages/Merchant/Delivered'
import Return from '../pages/Merchant/Return'
import NewOrder from '../pages/Merchant/NewOrder'
import BulkDelivery from '../pages/Merchant/BulkDelivery'
import Store from '../pages/Merchant/Store'
import MerchantLayout from '../layouts/MerchantLayout'

// Rider Pages

import RiderLayout from '../layouts/RiderLayout'

// Admin Pages

// import AdminLayout from './../layouts/AdminLayout'
// import AdminPanel from '../pages/Admin/AdminPanel'
import RoleSelectionPage from '../Auth/RoleSelectionPage'
// import Home from '../pages/Home'
// import MerchantHeader from '../pages/Merchant/MerchantHeader'
// import RiderHeader from '../pages/Rider/RiderHeader'
import RiderDashboardBody from '../pages/Rider/RiderDashboardBody'
// import AdminHeader from '../pages/Admin/AdminHeader'
// import AdminDashboardBody from '../pages/Admin/AdminDashboardBody'
import MerchantDashboardBody from '../pages/Merchant/MerchantDashboardBody'
// import EditMerchantForm from '../pages/Merchant/EditMerchantForm'
import Overview from '../pages/Admin/Overview'
import AdminLayout from '../layouts/AdminLayout'
import MerchantList from '../pages/Admin/MerchantList'
import RiderList from '../pages/Admin/RiderList'
import UserLayout from '../layouts/UserLayout'
import HomePage from '../pages/HomePage'
import MerchantDetails from '../pages/Admin/MerchantDetails'
import Setting from '../pages/Admin/Setting'
import Districts from '../pages/Admin/Districts'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ], // Main login page for all
  },
  // {
  //   path: '/login',
  //   element: <Login />, // Main login page for all
  // },
  {
    path: '/roleselectionpage',
    element: <RoleSelectionPage />, // Main login page for all
  },
  // {
  //   path: '/dashboard',
  //   element: <DashboardBody />, // Main login page for all
  // },
  {
    path: '/merchant',
    element: <MerchantLayout />, // Layout for merchant panel
    children: [
      // {
      //   path: '/merchant',
      //   element: <MerchantHeader />,
      // },

      {
        path: '/merchant',
        element: <MerchantDashboardBody />,
      },
      {
        path: 'invoices',
        element: <Invoices />,
      },
      {
        path: 'deliveries',
        element: <Deliveries />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'all',
        element: <All />,
      },
      {
        path: 'active',
        element: <Active />,
      },
      {
        path: 'delivered',
        element: <Delivered />,
      },
      {
        path: 'return',
        element: <Return />,
      },
      {
        path: 'neworder',
        element: <NewOrder />,
      },
      {
        path: 'bulk-delivery',
        element: <BulkDelivery />,
      },

      {
        path: 'registration',
        element: <Registration />, // Shared registration for all roles
      },
    ],
  },
  {
    path: '/rider',
    element: <RiderLayout />, // Layout for rider panel
    children: [
      // {
      //   path: '/rider',
      //   element: <RiderHeader />,
      // },
      {
        path: '/rider',
        element: <RiderDashboardBody />,
      },
      {
        path: 'invoices',
        element: <Invoices />,
      },
      {
        path: 'deliveries',
        element: <Deliveries />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'all',
        element: <All />,
      },
      {
        path: 'active',
        element: <Active />,
      },
      {
        path: 'delivered',
        element: <Delivered />,
      },
      {
        path: 'return',
        element: <Return />,
      },
      {
        path: 'neworder',
        element: <NewOrder />,
      },
      {
        path: 'bulk-delivery',
        element: <BulkDelivery />,
      },
      {
        path: 'registration',
        element: <Registration />, // Shared registration for all roles
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />, // Layout for admin panel
    children: [
      {
        path: '/admin',
        element: <Overview />,
      },
      {
        path: 'merchants',
        element: <MerchantList />,
      },
      {
        path: 'riders',
        element: <RiderList />,
      },
      {
        path: 'districts',
        element: <Districts />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
      // {
      //   path: 'dashboard',
      //   element: <AdminDashboardBody />,
      // },
      // {
      //   path: 'dashboard',
      //   element: <AdminPanel />,
      // },
      // {
      //   path: 'invoices',
      //   element: <Invoices />,
      // },
      // {
      //   path: 'deliveries',
      //   element: <Deliveries />,
      // },
      // {
      //   path: 'store',
      //   element: <Store />,
      // },
      // {
      //   path: 'all',
      //   element: <All />,
      // },
      // {
      //   path: 'active',
      //   element: <Active />,
      // },
      // {
      //   path: 'delivered',
      //   element: <Delivered />,
      // },
      // {
      //   path: 'return',
      //   element: <Return />,
      // },
      // {
      //   path: 'neworder',
      //   element: <NewOrder />,
      // },
      // {
      //   path: 'bulk-delivery',
      //   element: <BulkDelivery />,
      // },
      {
        path: 'merchantdetails/:id', // Updated to include ':id'
        element: <MerchantDetails />,
      },
      {
        path: 'overview',
        element: <Overview />, // Shared registration for all roles
      },
      {
        path: 'registration',
        element: <Registration />, // Shared registration for all roles
      },
    ],
  },

  {
    path: '*',
    element: <ErrorPage />, // Error page for undefined routes
  },
])
