// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams, useHistory } from 'react-router-dom'

export default function EditMerchantForm() {
//   const { id } = useParams() // Get the merchant ID from the URL
//   const [merchant, setMerchant] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   })
//   const history = useHistory()

//   const jwt = localStorage.getItem('token')

//   // Fetch merchant data by ID
//   const fetchMerchantDataById = async (merchantId) => {
//     try {
//       const response = await axios.get(`http://localhost:1337/api/merchants/${merchantId}`, {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//           'Content-Type': 'application/json',
//         },
//       })
//       const merchantData = response.data.data
//       setMerchant({
//         name: merchantData.attributes.name || '',
//         email: merchantData.attributes.email || '',
//         phone: merchantData.attributes.phone || '',
//         address: merchantData.attributes.address || '',
//       })
//       console.log('Fetched Merchant Data:', merchantData)
//     } catch (error) {
//       console.error('Error fetching merchant data:', error)
//     }
//   }

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setMerchant((prevMerchant) => ({
//       ...prevMerchant,
//       [name]: value,
//     }))
//   }

//   // Handle form submission for updating merchant
//   const handleFormSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await axios.put(
//         `http://localhost:1337/api/merchants/${id}`,
//         {
//           data: merchant, // Data needs to be wrapped in 'data' object for Strapi
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       console.log('Merchant updated successfully')
//       // Redirect to the merchant list or show a success message
//       history.push('/merchants')
//     } catch (error) {
//       console.error('Error updating merchant:', error)
//     }
//   }

//   // Fetch merchant data when the component mounts
//   useEffect(() => {
//     if (id) {
//       fetchMerchantDataById(id)
//     }
//   }, [id])

  return (
    <div className="w-full min-h-screen mx-auto px-6 sm:px-6 lg:px-1 py-8 bg-slate-100">
      <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6">Edit Merchant</h2>

        <form >
          {/* Merchant Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
            //   value={merchant.name}
            //   onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Merchant Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={merchant.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Merchant Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={merchant.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Merchant Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={merchant.address}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
