import { useEffect, useState } from 'react'
import promiseLogo from '../../public/images/promise.png'
// import { axiosClient } from '../api/axiois'
import { Eye, EyeOff } from 'lucide-react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

// District and area data
// const districtsAndAddress = {
//   Dhaka: ['Gulshan', 'Banani', 'Mirpur', 'Dhanmondi', 'Uttara', 'Motijheel'],
//   Chittagong: ['Pahartali', 'Agrabad', 'Panchlaish', 'Halishahar', 'Karnafuli'],
//   Sylhet: ['Zindabazar', 'Kumarpara', 'Ambarkhana', 'Shahjalal Uposhohor'],
//   Barisal: ['Nathullabad', 'Bazar Road', 'Port Road', 'Rupatali'],
//   Rajshahi: ['Uposhohor', 'Shaheb Bazar', 'Kazihata', 'New Market'],
//   Khulna: ['Boyra', 'Sonadanga', 'Khalishpur', 'Daulatpur'],
//   Rangpur: [
//     'Jahaj Company Mor',
//     'Mahiganj',
//     'Carmichael College Area',
//     'Sadar',
//   ],
//   Mymensingh: ['Ganginarpar', 'Charpara', 'Krishtapur', 'Sadar'],
//   Narayanganj: ['Shiddhirganj', 'Narayangonj Sadar', 'Bandar', 'Sonargaon'],
//   Netrakona: ['Netrakona Sadar', 'Khaliajuri', 'Barhatta', 'Durgapur'],
//   Noakhali: ['Noakhali Sadar', 'Companiganj', 'Chatkhil', 'Hatiya'],
//   Jamalpur: ['Jamalpur Sadar', 'Sarishabari', 'Islampur', 'Bakshiganj'],
//   Brahmanbaria: ['Brahmanbaria Sadar', 'Ashuganj', 'Kasba', 'Nabinagar'],
//   Chandpur: ['Chandpur Sadar', 'Faridganj', 'Shahrasti', 'Kachua'],
//   CoxsBazar: ["Cox's Bazar Sadar", 'Teknaf', 'Ramu', 'Maheshkhali'],
//   Cumilla: ['Cumilla Sadar', 'Debidwar', 'Daudkandi', 'Muradnagar'],
//   Dinajpur: ['Dinajpur Sadar', 'Birampur', 'Kahalu', 'Chirirbandar'],
//   Faridpur: ['Faridpur Sadar', 'Boalmari', 'Madhukhali', 'Saltha'],
//   Feni: ['Feni Sadar', 'Daganbhuiyan', 'Fulgazi', 'Parshuram'],
//   Gaibandha: ['Gaibandha Sadar', 'Sundarganj', 'Gobindaganj', 'Palashbari'],
//   Gopalganj: ['Gopalganj Sadar', 'Kashiani', 'Tungipara', 'Sadar'],
//   Jamalkandi: ['Jamalkandi Sadar', 'Kotalipara', 'Madhupur', 'Gopalganj'],
//   Jhalokati: ['Jhalokati Sadar', 'Rajapur', 'Kupta', 'Kalapara'],
//   Jhenaidah: ['Jhenaidah Sadar', 'Shailkupa', 'Kaliganj', 'Kotchandpur'],
//   Khagrachari: [
//     'Khagrachari Sadar',
//     'Dighinala',
//     'Lakshmichhari',
//     'Manikchhari',
//   ],
//   Kishoreganj: ['Kishoreganj Sadar', 'Bajitpur', 'Karimganj', 'Katiadi'],
//   Lakshmipur: ['Lakshmipur Sadar', 'Raipur', 'Ramganj', 'Ramgati'],
//   Lalmonirhat: ['Lalmonirhat Sadar', 'Aditmari', 'Kaliganj', 'Hatibandha'],
//   Magura: ['Magura Sadar', 'Sreepur', 'Mohammadpur', 'Shalikha'],
//   Manikganj: ['Manikganj Sadar', 'Saturia', 'Singair', 'Shibalaya'],
//   Meherpur: ['Meherpur Sadar', 'Mukshudpur', 'Gangni', 'Mujibnagar'],
//   Moulvibazar: ['Moulvibazar Sadar', 'Kamalganj', 'Sreemangal', 'Rajnagar'],
//   Nawabganj: ['Nawabganj Sadar', 'Bholahat', 'Shibganj', 'Gomastapur'],
//   Netrokona: ['Netrokona Sadar', 'Atpara', 'Khaliajuri', 'Durgapur'],
//   Pabna: ['Pabna Sadar', 'Ishwardi', 'Bera', 'Santhia'],
//   Panchagarh: ['Panchagarh Sadar', 'Tetulia', 'Boda', 'Debiganj'],
//   Patuakhali: ['Patuakhali Sadar', 'Galachipa', 'Mirzaganj', 'Bauphal'],
//   Pirojpur: ['Pirojpur Sadar', 'Bhandaria', 'Mathbaria', 'Nesarabad'],
//   Rajbari: ['Rajbari Sadar', 'Kalukhali', 'Goalundo', 'Pangsha'],
//   Rangamati: ['Rangamati Sadar', 'Baghaichhari', 'Belaichhari', 'Kaptai'],
//   Satkhira: ['Satkhira Sadar', 'Kaliganj', 'Shyamnagar', 'Assasuni'],
//   Shariatpur: ['Shariatpur Sadar', 'Naria', 'Jajira', 'Goshairhat'],
//   Sherpur: ['Sherpur Sadar', 'Nokla', 'Jhenaigati', 'Nalitabari'],
//   Sirajganj: ['Sirajganj Sadar', 'Kamarkhand', 'Kawshiknagar', 'Belkuchi'],
//   Sunamganj: ['Sunamganj Sadar', 'Bishwambharpur', 'Derai', 'Jamalmoti'],
//   Tangail: ['Tangail Sadar', 'Madhupur', 'Gopalpur', 'Nagarpur'],

//   // Add other districts and their Address here...
// }

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')
  const [area, setArea] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [district, setDistrict] = useState('');
  const [districts, setDistricts] = useState([])

  // Fetch districts from Strapi API
  useEffect(() => {
    const fetchDistricts = async () => {
      // e.preventDefault()
      try {
        const response = await axios.get('http://localhost:1337/api/districts') // Replace with your Strapi URL
        setDistricts(response.data.data) // Set districts from the API response
        // console.log('Districts:', response.data.data)
      } catch (error) {
        console.error('Error fetching districts:', error)
      }
    }
    // alert('Districts found')

    fetchDistricts()
  }, [])
  console.log('Districts:', districts)

  const location = useLocation() // Get the current path
  const navigate = useNavigate() // For redirection

  //   async function signUp(event) {
  //     event.preventDefault() // Prevent default form submission behavior

  //     // Form validation logic
  //     if (password !== confirmPassword) {
  //       alert('Passwords do not match!')
  //       return
  //     }

  //     let role = 'rider' // Default role

  //     // Check the current path to assign roles dynamically
  //     if (location.pathname.includes('/merchant')) {
  //       role = 'merchant'
  //     } else if (location.pathname.includes('/rider')) {
  //       role = 'rider'
  //     } else if (location.pathname.includes('/admin')) {
  //       role = 'admin'
  //     }

  //     const data = {
  //       username: email,
  //       email: email,
  //       password: password,
  //       type: role, // Set the role dynamically based on the path
  //     }

  //     try {
  //       // Make the register API call
  //       const response = await axios.post(
  //         'http://localhost:1337/api/auth/local/register',
  //         data,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         },
  //       )

  //       alert('User registered successfully!')

  //       // Store JWT only after successful registration
  //       const jwt = response.data.jwt // Ensure JWT is retrieved here
  //       const documentId = response.data.user.documentId

  //       localStorage.setItem('token', jwt) // Store the JWT token
  //       localStorage.setItem('user', JSON.stringify(response.data.user))

  //       // Proceed to create the merchant or user-related data if needed
  //       const userData = {
  //         data: {
  //           name: name,
  //           email: email,
  //           address: address,
  //           contact_number: contactNumber,
  //           user: {
  //             connect: [documentId],
  //           },
  //         },
  //       }

  //       // Make the appropriate API call depending on the role
  //       let apiUrl = ''
  //       if (role === 'merchant') {
  //         apiUrl = 'http://localhost:1337/api/merchants'
  //       } else if (role === 'rider') {
  //         apiUrl = 'http://localhost:1337/api/riders'
  //       } else if (role === 'admin') {
  //         apiUrl = 'http://localhost:1337/api/admins'
  //       }
  // console.log(`Creating ${role} with data:`, userData);
  //       // Now you can use the JWT in the API call headers
  //       const newResponse = await axios.post(apiUrl, userData, {
  //         headers: {
  //           Authorization: `Bearer ${jwt}`, // Use JWT here
  //           'Content-Type': 'application/json',
  //         },
  //       })

  //       const entityId = newResponse.data.data.id
  //       console.log(`${role} created with ID:`, entityId)

  //       // Redirect to the correct dashboard based on role
  //       if (role === 'merchant') {
  //         navigate('/merchant/dashboard')
  //       } else if (role === 'rider') {
  //         navigate('/rider/dashboard')
  //       } else if (role === 'admin') {
  //         navigate('/admin/dashboard')
  //       }
  //     } catch (error) {
  //       console.log('An error occurred:', error.response)
  //     }
  //   }

  async function signUp(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    let role = 'rider' // Default role based on the path

    // Check the current path to assign roles dynamically
    if (location.pathname.includes('/merchant')) {
      role = 'merchant'
    } else if (location.pathname.includes('/rider')) {
      role = 'rider'
    } else if (location.pathname.includes('/admin')) {
      role = 'admin'
    }

    const data = {
      username: email,
      email: email,
      password: password,
      type: role, // Custom field for user role
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      alert('User registered successfully!')
      const jwt = response.data.jwt
      const documentId = response.data.user.documentId

      localStorage.setItem('token', jwt)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // Proceed to create the merchant or rider-related data
      const userData = {
        data: {
          name: name,
          email: email,
          address: address,
          contact_number: contactNumber,
          user: {
            connect: [documentId],
          },
        },
      }
      console.log(userData)

      let apiUrl = ''
      if (role === 'merchant') {
        apiUrl = 'http://localhost:1337/api/merchants'
      } else if (role === 'rider') {
        apiUrl = 'http://localhost:1337/api/riders'
      } else if (role === 'admin') {
        apiUrl = 'http://localhost:1337/api/admins'
      }

      const newResponse = await axios.post(apiUrl, userData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })

      const entityId = newResponse.data.data.documentId
      console.log(`${role} created with ID:`, entityId)

      // Redirect to the correct dashboard based on role
      if (role === 'merchant') {
        navigate('/merchant')
      } 
      
      // else if (role === 'rider') {
      //   navigate('/rider')
      // }
      
      else if (role === 'admin') {
        navigate('/admin')
      }
    } catch (error) {
      console.log(
        'An error occurred:',
        error.response?.data?.error || error.message,
      )
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side Logo */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-10">
        <img
          src={promiseLogo}
          alt="Promise Delivery Limited Logo"
          width={400}
          height={200}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-10">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Business Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value)
                }}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your company name"
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Address and District in One Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {districts.map((districtItem, index) => (
                    <option key={index} value={districtItem.name}>
                      {districtItem.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area
                </label>
                <input
                  id="area"
                  name="area"
                  required
                  type="text"
                  placeholder="Enter your area" // Added a placeholder for guidance
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value)
                  }}
                />
              </div>
            </div>

            {/* Select Area */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder=" address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="text"
                required
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value)
                }}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'} // Toggle password visibility
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2"
                >
                  {showPassword ? <EyeOff /> : <Eye />} {/* Icon toggle */}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'} // Toggle confirm password visibility
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password again"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2"
                >
                  {showPassword ? <EyeOff /> : <Eye />} {/* Icon toggle */}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                // type="submit"
                onClick={signUp}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
