import { EyeIcon, EyeOffIcon, ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import promise from '../../public/images/promise.png'
// import { axiosClient } from "../api/axiois";
import axios from 'axios'
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const [forgotPasswordStep, setForgotPasswordStep] = useState(0)
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [showSuccess] = useState(false)
  const [error] = useState('') // Correctly initialize setError state

  async function signIn(e) {
    e.preventDefault()
    // alert('Sign in clicked')
    const data = {
      identifier: email, // Ensure email and password are correctly set
      password: password,
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local',
        data, // No need to stringify
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const jwt = response.data.jwt
      // const user = response.data.user
      const type = response.data.user.type
      console.log('response:', response.data.user)
      console.log('typeof user:', type)

      localStorage.setItem('token', jwt)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // window.location.replace('/admin') // Redirect after success
      // Check the user's role and navigate accordingly
      const role = type // Adjust this based on your actual response structure
      // alert('Role:', user)
      // return
      if (role === 'admin') {
        window.location.replace('/admin')
      } else if (role === 'rider') {
        window.location.replace('/rider')
      } else if (role === 'merchant') {
        window.location.replace('/merchant')
      }
    } catch (error) {
      console.log('An error occurred:', error.response)
      alert(
        'An error occurred: ' +
          (error.response?.data?.error?.message || 'Something went wrong'),
      )
    }
  }
  // async function signIn(e) {
  //   e.preventDefault()
  //   alert('Sign in clicked')
  //   const data = {
  //     identifier: email,
  //     password: password,
  //   }

  //   try {
  //     const response = await axios.post(
  //       'http://localhost:1337/api/auth/local',
  //       data,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     )

  //     const jwt = response.data.jwt
  //     const user = response.data.user

  //     localStorage.setItem('token', jwt)
  //     localStorage.setItem('user', JSON.stringify(user))

  //     // Check the user's role and navigate accordingly
  //     const role = user.role.name // Adjust this based on your actual response structure
  //     if (role === 'admin') {
  //       window.location.replace('/admin/overview')
  //     } else if (role === 'rider') {
  //       window.location.replace('/rider')
  //     } else if (role === 'merchant') {
  //       window.location.replace('/merchant')
  //     } else {
  //       // Handle unexpected roles if necessary
  //       alert('Unknown role. Redirecting to default dashboard.')
  //       window.location.replace('/dashboard')
  //     }
  //   } catch (error) {
  //     console.log('An error occurred:', error.response)
  //     alert(
  //       'An error occurred: ' +
  //         (error.response?.data?.error?.message || 'Something went wrong'),
  //     )
  //   }
  // }

  // Forgot Password
  const handleMobileSubmit = (e) => {
    e.preventDefault()
    console.log('Mobile number submitted:', mobileNumber)
    setForgotPasswordStep(2)
    setMobileNumber('')
  }
  // OTP Submit
  const handleOtpSubmit = (e) => {
    e.preventDefault()
    console.log('OTP submitted:', otp)
    setOtp('')
    // Here you would typically handle the password reset process
    // For now, we'll just go back to the login screen
    setForgotPasswordStep(0)
  }
  // Render Forgot Password Form
  const renderForgotPasswordForm = () => {
    if (forgotPasswordStep === 1) {
      return (
        <form onSubmit={handleMobileSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className="mt-1">
              <input
                type="tel"
                id="mobile"
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full text-lg bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Send OTP
            </button>
          </div>
        </form>
      )
    } else if (forgotPasswordStep === 2) {
      return (
        <form onSubmit={handleOtpSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              Enter OTP
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="otp"
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full text-lg bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      )
    }
    return null
  }
  // Render Login Form
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side logo */}
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          src={promise}
          alt="Promise Delivery Limited Logo"
          width={500}
          height={150}
          className="max-w-full h-auto"
        />
      </div>
      {/* Right side login form */}
      <div className="bg-white flex-1 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-8">
          {showSuccess && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {' '}
                You have successfully logged in. Redirecting to dashboard...
              </span>
            </div>
          )}
          {error && ( // Show error message if there is one
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              {forgotPasswordStep > 0 ? 'Reset Password' : 'Sign in'}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {forgotPasswordStep > 0
                ? 'Enter your mobile number to reset your password'
                : 'Please Sign in to your account'}
            </p>
          </div>
          {forgotPasswordStep === 0 ? (
            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                {/* Email or Phone Number Input */}
                <div>
                  <label
                    type="email"
                    name="email"
                    htmlFor="email-phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Or Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="email-phone"
                      name="email-phone"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Email or phone number"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/* Keep Me Signed In Checkbox */}
              <div className="flex items-center">
                <input
                  id="keep-signed-in"
                  name="keep-signed-in"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={keepSignedIn}
                  onChange={() => setKeepSignedIn(!keepSignedIn)}
                />
                <label
                  htmlFor="keep-signed-in"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Keep Me Signed In
                </label>
              </div>
              {/* Sign In Button */}
              <div className="w-full">
                <button
                  onClick={signIn}
                  // type="submit"
                  className="w-full text-lg bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Sign In
                </button>
              </div>
            </form>
          ) : (
            renderForgotPasswordForm()
          )}
          {/* Sign Up and Forgot Password Links */}
          <div className="text-center text-sm">
            <p className="text-gray-600">
              DO NOT HAVE AN ACCOUNT?{' '}
              <a
                href="/roleselectionpage"
                className="font-medium text-gray-600 hover:text-indigo-500"
              >
                SIGN UP
              </a>
            </p>
          </div>
          <div className="text-center">
            {forgotPasswordStep === 0 ? (
              <button
                onClick={() => setForgotPasswordStep(1)}
                className="w-full text-lg font-medium text-indigo-600 hover:bg-yellow-500 hover:text-white border border-black-600 rounded-md px-10 py-3 inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Forget Password
              </button>
            ) : (
              <button
                onClick={() =>
                  setForgotPasswordStep(
                    forgotPasswordStep > 1 ? forgotPasswordStep - 1 : 0,
                  )
                }
                className="flex items-center text-blue-600 hover:text-blue-800 mx-auto focus:outline-none focus:underline"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
