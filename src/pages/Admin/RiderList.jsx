// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { EditIcon, EyeIcon, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'

const RiderList = () => {
  const [Riders, setRiders] = useState([])
  const [filteredRiders, setFilteredRiders] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [RidersPerPage] = useState(10)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const [selectedRider, setSelectedRider] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [districts, setDistricts] = useState([])

  // jwt token
  const jwt = localStorage.getItem('token')

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

  // Fetch the data
  const fetchRiderData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/riders', {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      const RidersData = response.data.data
      setRiders(RidersData)
      setFilteredRiders(RidersData)
    } catch (error) {
      console.error('Error fetching rider data:', error)
    }
  }

  useEffect(() => {
    fetchRiderData()
  }, [])

  const handleEditClick = (rider) => {
    setSelectedRider(rider)
    setIsEditModalOpen(true)
  }

  const handlePreviewClick = (rider) => {
    setSelectedRider(rider)
    setIsPreviewModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsEditModalOpen(false)
    setIsPreviewModalOpen(false)
    setSelectedRider(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (selectedRider) {
      const updatedRider = {
        documentId: selectedRider.documentId,
        // companyname: event.target[0].value,
        name: event.target[0].value,
        district: event.target[1].value,
        area: event.target[2].value,
        address: event.target[3].value,
        email: event.target[4].value,
        // email: event.target[1].value,
        contact_number: event.target[5].value,
      }

      console.log('Updating rider with ID:', updatedRider.documentId) // Log the ID being used

      await updateRiderData(updatedRider)
    }

    handleCloseModal()
  }

  const handleAddRiderSubmit = async (event) => {
    event.preventDefault()
    const newRider = {
      // companyname: event.target[0].value,
      name: event.target[0].value,
      district: event.target[1].value,
      area: event.target[2].value,
      address: event.target[3].value,
      email: event.target[4].value,
      contact_number: event.target[5].value,
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/riders',
        { data: newRider },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(response.data) // Verify the response
      setIsAddModalOpen(false)
      fetchRiderData()
      alert('Rider added successfully!')
    } catch (error) {
      console.error(
        'Error adding new rider:',
        error.response?.data || error.message,
      )
      alert(
        `Failed to add rider: ${
          error.response?.data?.error?.message || error.message
        }`,
      )
    }
  }

  // update rider
  const updateRiderData = async (updatedRider) => {
    try {
      const response = await axios.put(
        `http://localhost:1337/api/riders/${updatedRider.documentId}`,
        {
          data: {
            name: updatedRider.name,
            area: updatedRider.area,
            district: updatedRider.district,
            address: updatedRider.address,
            email: updatedRider.email,
            contact_number: updatedRider.contact_number,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )

      // Check the response to see what is returned
      console.log('Response from update:', response.data)

      setRiders((prevRiders) =>
        prevRiders.map((rider) =>
          rider.documentId === updatedRider.documentId
            ? response.data.data
            : rider,
        ),
      )

      alert('Rider updated successfully!')
    } catch (error) {
      console.error(
        'Error updating rider data:',
        error.response ? error.response.data : error.message,
      )
      alert(
        'Update failed: ' + (error.response?.data?.message || error.message),
      )
    }
  }

  const deleteRiderData = async (documentId) => {
    try {
      await axios.delete(`http://localhost:1337/api/riders/${documentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      fetchRiderData()
    } catch (error) {
      console.error('Error deleting rider data:', error)
    }
  }

  const handleDeleteClick = (documentId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this rider?',
    )
    if (confirmDelete) {
      deleteRiderData(documentId)
    }
  }

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = Riders.filter(
      (rider) =>
        rider.name.toLowerCase().includes(query) ||
        rider.email.toLowerCase().includes(query) ||
        rider.contact_number.toLowerCase().includes(query),
    )
    setFilteredRiders(filtered)
  }

  const indexOfLastRider = currentPage * RidersPerPage
  const indexOfFirstRider = indexOfLastRider - RidersPerPage
  const currentRiders = filteredRiders.slice(
    indexOfFirstRider,
    indexOfLastRider,
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col flex-1 p-4 py-8 sm:p-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center mb-6 justify-between">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Riders
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A list of all the Riders in your account including their name,
              email, and contact number.
            </p>
          </div>
          <div className="flex items-center lg:w-1/3 w-full justify-end space-x-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 bg-gray-100 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 sm:text-sm"
                placeholder="Search..."
                aria-label="Search..."
                onChange={handleSearch}
              />
            </div>
            <button
              onClick={() => setIsAddModalOpen(true)} // Function to open modal
              className="inline-flex items-center px-10 text-nowrap py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Rider
            </button>
          </div>
        </div>

        <div className="overflow-hidden shadow sm:rounded-lg bg-white">
          {Riders.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-700">
                <tr>
                  {/* <th className="py-4 pl-8 pr-3 text-lg font-semibold text-white text-center tracking-wide sm:pl-0">
                    Company Name
                  </th> */}
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Name
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Area
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    District
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Address
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Email
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center tracking-wide">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRiders.map((rider) => (
                  <tr
                    key={rider.documentId}
                    className="hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    {' '}
                    {/* <td className="py-4 pl-8 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                      {rider.company_name}
                    </td> */}
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.district}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.address}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.area}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.contact_number}
                    </td>
                    {/* <td className="py-4 pl-8 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                      {rider.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {rider.contact_number}
                    </td> */}
                    <td className="py-4 pr-8 text-center text-sm font-medium sm:pr-0">
                      <div className="flex justify-center space-x-4">
                        <EditIcon
                          className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600"
                          onClick={() => handleEditClick(rider)}
                        />
                        <EyeIcon
                          className="h-5 w-5 text-green-500 cursor-pointer hover:text-green-600"
                          onClick={() => handlePreviewClick(rider)}
                        />
                        <Trash
                          onClick={() => handleDeleteClick(rider.documentId)}
                          className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-600"
                          size={24}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-6">
              No Riders available
            </p>
          )}

          <div className="flex justify-center mt-4">
            {Array.from(
              {
                length: Math.ceil(filteredRiders.length / RidersPerPage),
              },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {index + 1}
                </button>
              ),
            )}
          </div>
          {isAddModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add New Rider</h2>
                <form onSubmit={handleAddRiderSubmit}>
                  {' '}
                  {/* Function to handle the submission */}
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    placeholder="Name"
                    required
                  />
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
                      value={districts}
                      onChange={(e) => setDistricts(e.target.value)}
                    >
                      <option value="">Select District</option>
                      {districts.map((districtItem, index) => (
                        <option key={index} value={districtItem.name}>
                          {districtItem.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    placeholder="Area"
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    placeholder="Address"
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full mb-4 p-2 border rounded"
                    type="number"
                    placeholder="Contact Number"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-4 px-4 py-2 bg-gray-300 rounded"
                      onClick={() => setIsAddModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit Modal */}
          {isEditModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Rider</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    defaultValue={selectedRider?.name}
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    defaultValue={selectedRider?.district}
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    defaultValue={selectedRider?.area}
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    defaultValue={selectedRider?.address}
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="email"
                    defaultValue={selectedRider?.email}
                    required
                  />
                  <input
                    className="w-full mb-4 p-2 border rounded"
                    type="text"
                    defaultValue={selectedRider?.contact_number}
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-4 px-4 py-2 bg-gray-300 rounded"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Preview Modal */}
          {isPreviewModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Rider Details</h2>
                <p>
                  <strong>Name:</strong> {selectedRider?.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedRider?.email}
                </p>
                <p>
                  <strong>Contact Number:</strong>{' '}
                  {selectedRider?.contact_number}
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RiderList
