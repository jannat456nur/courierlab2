const BulkDelivery = () => {
  return (
    <div className="min-h-screen p-20 pt-0 flex items-center justify-center bg-gray-100">
      <div className="container mx-auto  bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Merchant Bulk Parcel Import
        </h1>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Store and File Upload */}
          <div className="space-y-6">
            {/* Select Store */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Your Store
              </label>
              <select className="w-full p-3 border rounded">
                <option>Algostack-BD</option>
              </select>
            </div>

            {/* Upload File */}
            <div className="border rounded-lg p-6 bg-blue-100 text-center">
              <h3 className="font-semibold mb-2">
                Upload a .xlsx file to import parcels
              </h3>
              <input
                type="file"
                className="border border-gray-300 p-2 w-full rounded"
                accept=".xlsx"
              />
            </div>
          </div>

          {/* Right side - Pickup Address and Download Sample File */}
          <div className="space-y-6">
            {/* Pickup Address */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Pickup Address:
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded"
                placeholder="Enter your pickup address"
              />
            </div>

            {/* Download Sample */}
            <div className="border rounded-lg p-6 bg-blue-100 text-center">
              <h3 className="font-semibold mb-2">Download the sample file</h3>
              <a
                href=""
                className="bg-red-500 text-white px-6 py-2 rounded inline-block"
              >
                Merchant Bulk Import Format
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkDelivery;
