const Store = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Shop List</h2>
          <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
            Create Store
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="px-4 py-2 border">SL</th>
                <th className="px-4 py-2 border">Shop Name</th>
                <th className="px-4 py-2 border">Shop Address</th>
                <th className="px-4 py-2 border">Contact Number</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Algostack-BD</td>
                <td className="px-4 py-2 border">Banani DOHS</td>
                <td className="px-4 py-2 border">01333333333</td>
                <td className="px-4 py-2 border">
                  <div className="flex space-x-2">
                    <button className="bg-white border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white">
                      Edit
                    </button>
                    <button className="bg-green-100 text-green-600 px-3 py-1 rounded border">
                      Active
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded border">
                      Default Pickup Store
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Store;
