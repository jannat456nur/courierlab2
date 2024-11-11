import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Eye, Mail, Phone, MapPin } from 'lucide-react' // Importing Lucid Icons

const MerchantDetails = () => {
  const { id } = useParams() // Get the merchant ID from the URL
  const [merchant, setMerchant] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const jwt = localStorage.getItem('token')
  const navigate = useNavigate()

  const fetchMerchantDetails = async () => {
    console.log('Fetching merchant details for ID:', id) // Log the ID
    try {
      const response = await axios.get(
        `http://localhost:1337/api/merchants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.data && response.data.data) {
        setMerchant(response.data.data) // Set the merchant data
      } else {
        throw new Error('Merchant data not found') // Throw an error if no data
      }
      setLoading(false)
    } catch (err) {
      console.error('Error fetching merchant details:', err)
      setError('Failed to load merchant details')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      // Check if ID is valid before fetching
      fetchMerchantDetails()
    } else {
      setError('Invalid Merchant ID')
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div> {/* Loading state */}
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>{error}</div> {/* Error state */}
      </div>
    )
  }

  return (
    <div className=" w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Merchant Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl h-96">
        <div className="flex items-center mb-4 ">
          <Eye className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-xl font-semibold">Name:{merchant.business_name}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-blue-500 mr-2" />
            <span>
              <strong>Email:</strong> {merchant.email}
            </span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-orange-500 mr-2" />
            <span>
              <strong>Phone:</strong> {merchant.contact_number}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-red-500 mr-2" />
            <span>
              <strong>Address:</strong> {merchant.area}, {merchant.district}
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <strong>Document ID:</strong> {merchant.documentId}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong>Created At:</strong>{' '}
            {new Date(merchant.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{' '}
            {new Date(merchant.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Go Back
      </button>
    </div>
  )
}

export default MerchantDetails
