import axios from 'axios'
import { useEffect, useState } from 'react'

const Districts = () => {
  const [districts, setDistricts] = useState([])
  const [filteredDistricts, setFilteredDistricts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Adjust items per page as needed

  useEffect(() => {
    const fetchDistricts = async () => {
      const jwt = localStorage.getItem('token') // Retrieve token from localStorage

      try {
        const response = await axios.get(
          'http://localhost:1337/api/districts',
          {
            headers: {
              Authorization: `Bearer ${jwt}`, // Add Bearer token here
              'Content-Type': 'application/json', // Optional, but good practice
            },
          }
        )
        setDistricts(response.data.data) // Set districts from the API response
        setFilteredDistricts(response.data.data) // Initialize filtered list
      } catch (error) {
        console.error('Error fetching districts:', error)
      }
    }

    fetchDistricts()
  }, [])

  // Search and filter functionality
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)
    const filtered = districts.filter((district) =>
      district.name.toLowerCase().includes(query)
    )
    setFilteredDistricts(filtered)
    setCurrentPage(1) // Reset to first page when searching
  }

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredDistricts.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredDistricts.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className=" w-full flex flex-col p-4 py-8 sm:p-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold leading-6 text-gray-900">
          Districts
        </h1>
        <div className="flex justify-end my-4">
          <input
            type="text"
            className="block w-full max-w-sm rounded-md border border-gray-300 bg-gray-100 py-1.5 px-4 text-gray-900 placeholder:text-gray-400"
            placeholder="Search by district name..."
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>

        <div className="overflow-hidden shadow sm:rounded-lg bg-white">
          {currentItems.length > 0 ? (
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-600">
                <tr>
                  <th className="py-4 pl-8 pr-3 text-lg font-semibold text-white text-center">
                    District Name
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center">
                    Bangla Name
                  </th>
                  <th className="px-6 py-4 text-lg font-semibold text-white text-center">
                    Code
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((district) => (
                  <tr
                    key={district.id}
                    className="hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {district.name}
                    </td>
                    <td className="py-4 pl-8 text-sm font-medium text-gray-900 text-center">
                      {district.bn_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {district.zone_id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-6">No districts found</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white'}`}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Districts
