import { Link, NavLink, Outlet } from 'react-router-dom'
import promiseLogo from '../../public/images/promise.png'

import { Bike, LayoutDashboard, UserIcon, Users, Settings } from 'lucide-react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [current] = useState(true)

  return (
    <div className="flex min-h-screen bg-slate-100 text-primaryWhite">
      {/* Sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                {/* Small Screen Sidebar */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4 ring-1 ring-gray-200/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          <Link
                            to="/admin/overview"
                            className={classNames(
                              current
                                ? 'bg-gray-200 text-gray-900 '
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                              'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                            )}
                          >
                            <LayoutDashboard
                              className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
                              aria-hidden="true"
                            />
                            <span className="bg-red-500 text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ease-in-out pl-8">
                              Overview
                            </span>
                          </Link>
                          <Link
                            to="/admin/merchants"
                            className={classNames(
                              current
                                ? 'bg-gray-200 text-gray-900'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                              'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                            )}
                          >
                            <Users
                              className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-green-600 transition-colors duration-200 ease-in-out"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-200 ease-in-out">
                              Merchants
                            </span>
                          </Link>
                          {/* <Link
                            to="/admin/merchants"
                            className={classNames(
                              current
                                ? 'bg-gray-200 text-gray-900'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                              'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                            )}
                          >
                            <Users
                              className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-green-600 transition-colors duration-200 ease-in-out"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-200 ease-in-out">
                              Riders
                            </span>
                          </Link> */}
                        </ul>
                      </li>
                      <li className="-mx-6 mt-auto">
                        <a
                          href="#"
                          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                        >
                          <img
                            className="h-8 w-8 rounded-full bg-gray-200"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <span className="sr-only">Your profile</span>
                          <span aria-hidden="true">Dilaur Hos</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* For large screens */}
      <div className="hidden lg:flex lg:flex-col lg:w-[18%] lg:bg-white border-r border-gray-200">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto pl-10"
            src={promiseLogo}
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className=" ">
                <NavLink
                  to="/admin/overview" // Correct path as per the routes
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-200 text-gray-900 '
                        : '  text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                      'group flex items-center gap-x-3 rounded-md p-2 pl-10 text-sm font-semibold',
                    )
                  }
                >
                  <LayoutDashboard
                    className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    Overview
                  </span>
                </NavLink>

                <NavLink
                  to="/admin/merchants" // Correct path as per the routes
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                      'group flex items-center gap-x-3 rounded-md p-2 pl-10 text-sm font-semibold',
                    )
                  }
                >
                  <Users
                    className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-green-600 transition-colors duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-200 ease-in-out">
                    Merchants
                  </span>
                </NavLink>
                <NavLink
                  to="/admin/riders" // Correct path for riders
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                      'group flex items-center gap-x-3 rounded-md p-2 pl-10 text-sm font-semibold',
                    )
                  }
                >
                  <Bike // Bike icon representing riders
                    className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    Riders
                  </span>
                </NavLink>
                <NavLink
                  to="/admin/districts" // Correct path for riders
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                      'group flex items-center gap-x-3 rounded-md p-2 pl-10 text-sm font-semibold',
                    )
                  }
                >
                  <Settings // Settings icon representing settings
                    className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    Districts
                  </span>
                </NavLink>
                <NavLink
                  to="/admin/setting" // Correct path for riders
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 ease-in-out',
                      'group flex items-center gap-x-3 rounded-md p-2 pl-10 text-sm font-semibold',
                    )
                  }
                >
                  <Settings // Settings icon representing settings
                    className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    Setting
                  </span>
                </NavLink>
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className=" pl-12 flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
              >
                <UserIcon className="h-5 w-5 text-blue-500" />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Dilaur Hos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-1">
        <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
          </button>
        </div>

        {/* Outlet for rendering nested routes */}
        <main className="flex flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
