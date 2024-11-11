import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { EditIcon, EyeIcon, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MerchantList = () => {
  const navigate = useNavigate()

  const [merchants, setMerchants] = useState([])
  const [filteredMerchants, setFilteredMerchants] = useState([])
  const [ setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [merchantsPerPage] = useState(10)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMerchant, setSelectedMerchant] = useState(null)

  // jwt token
  const jwt = localStorage.getItem('token')

  // fetch the data
  const fetchMerchantData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/merchants', {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      const merchantsData = response.data.data
      setMerchants(merchantsData)
      setFilteredMerchants(merchantsData)
    } catch (error) {
      console.error('Error fetching merchant data:', error)
    }
  }

  useEffect(() => {
    fetchMerchantData()
  }, [])

  const handleEditClick = (merchant) => {
    setSelectedMerchant(merchant)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMerchant(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (selectedMerchant) {
      const updatedMerchant = {
        id: selectedMerchant.documentId,
        name: event.target[0].value,
        email: event.target[1].value,
        contact_number: event.target[2].value,
      }

      await updateMerchantData(updatedMerchant)
    }

    handleCloseModal()
  }

  const updateMerchantData = async (updatedMerchant) => {
    try {
      const response = await axios.put(
        `http://localhost:1337/api/merchants/${updatedMerchant.id}`,
        {
          data: {
            name: updatedMerchant.name,
            email: updatedMerchant.email,
            contact_number: updatedMerchant.contact_number,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )

      setMerchants((prevMerchants) =>
        prevMerchants.map((merchant) =>
          merchant.id === updatedMerchant.id ? response.data.data : merchant,
        ),
      )

      alert('Merchant updated successfully!')
    } catch (error) {
      console.error('Error updating merchant data:', error)
      alert('Update failed: ' + (error.response?.data?.message || error.message))
    }
  }

  const deleteMerchantData = async (documentId) => {
    try {
      await axios.delete(`http://localhost:1337/api/merchants/${documentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      fetchMerchantData()
    } catch (error) {
      console.error('Error deleting merchant data:', error)
    }
  }

  const handleDeleteClick = (documentId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this merchant?',
    )
    if (confirmDelete) {
      deleteMerchantData(documentId)
    }
  }

const handleSearch = (event) => {
  const query = event.target.value.toLowerCase();
  setSearchQuery(query);

  const filtered = merchants.filter(
    (merchant) =>
      merchant.name.toLowerCase().includes(query) ||
      merchant.email.toLowerCase().includes(query) ||
      merchant.contact_number.toLowerCase().includes(query)
  );
  setFilteredMerchants(filtered);
};


  const indexOfLastMerchant = currentPage * merchantsPerPage
  const indexOfFirstMerchant = indexOfLastMerchant - merchantsPerPage
  const currentMerchants = filteredMerchants.slice(
    indexOfFirstMerchant,
    indexOfLastMerchant,
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col flex-1 p-4 py-8 sm:p-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center mb-6 justify-between">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Merchants
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A list of all the merchants in your account including their name,
              email, and contact number.
            </p>
          </div>

          <div className="relative lg:w-1/5 w-full">
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
        </div>

        <div className="overflow-hidden shadow sm:rounded-lg bg-white">
          {merchants.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-700">
                <tr>
                  <th className="py-4 pl-8 pr-3 text-lg font-semibold text-white text-center tracking-wide sm:pl-0">
                    Name
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
                  {/* <th className="py-4 pr-8 sm:pr-0 text-center"></th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMerchants.map((merchant) => (
                  <tr
                    key={merchant.id}
                    className="hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <td className="py-4 pl-8 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                      {merchant.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {merchant.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {merchant.contact_number}
                    </td>
                    <td className="py-4 pr-8 text-center text-sm font-medium sm:pr-0">
                      <div className="flex justify-center space-x-4">
                        <EditIcon
                          className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-600"
                          onClick={() => handleEditClick(merchant)}
                        />
                        <EyeIcon
                          className="h-5 w-5 text-green-500 cursor-pointer hover:text-green-600"
                          onClick={() =>
                            navigate(
                              `/admin/merchantdetails/${merchant.documentId}`,
                            )
                          }
                        />
                        <Trash
                          onClick={() => handleDeleteClick(merchant.documentId)}
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
              No merchants available
            </p>
          )}

          <div className="flex justify-center mt-4">
            {Array.from(
              {
                length: Math.ceil(filteredMerchants.length / merchantsPerPage),
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

          {isModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Merchant</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="text"
                    defaultValue={selectedMerchant?.name}
                    required
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    type="email"
                    defaultValue={selectedMerchant?.email}
                    required
                  />
                  <input
                    className="w-full mb-4 p-2 border rounded"
                    type="text"
                    defaultValue={selectedMerchant?.contact_number}
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
        </div>
      </div>
    </div>
  )
}

export default MerchantList
