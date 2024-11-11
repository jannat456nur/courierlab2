import { useNavigate } from "react-router-dom";

const NewOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8">
      {/* Two-column layout with 70% for the form and 30% for the list */}
      <div className="grid grid-cols-1 md:grid-cols-[70%,30%] gap-8">
        {/* Left Side - Form Section (70% width) */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-6">Add Parcel</h2>
            <button
              className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded"
              onClick={() => navigate("/bulk-delivery")}
            >
              Bulk Delivery
            </button>
          </div>

          {/* Merchant Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Merchant Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="store"
                >
                  Select Your Store
                </label>
                <select id="store" className="w-full p-2 border rounded">
                  <option>Algostack-BD</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="order-id"
                >
                  Merchant Order ID
                </label>
                <input
                  type="text"
                  id="order-id"
                  className="w-full p-2 border rounded"
                  placeholder="Merchant Order ID"
                />
              </div>
            </div>
          </div>

          {/* Customer Information and Parcel Information Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Customer Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Customer Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="contact-number"
                  >
                    Customer Contact Number
                  </label>
                  <input
                    type="text"
                    id="contact-number"
                    className="w-full p-2 border rounded"
                    placeholder="Customer Contact Number"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="customer-name"
                  >
                    Customer Name
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    className="w-full p-2 border rounded"
                    placeholder="Customer Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="customer-address"
                  >
                    Customer Address
                  </label>
                  <input
                    type="text"
                    id="customer-address"
                    className="w-full p-2 border rounded"
                    placeholder="Customer Address"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="district"
                  >
                    Select Your District
                  </label>
                  <select id="district" className="w-full p-2 border rounded">
                    <option>Select...</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Barisal</option>
                    <option>Sylhet</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parcel Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Parcel Information</h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Service Type and Item Type in one row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="service-type"
                    >
                      Service Type
                    </label>
                    <select
                      id="service-type"
                      className="w-full p-2 border rounded"
                    >
                      <option>Select...</option>
                      <option>Standard Delivery</option>
                      <option>Express Delivery</option>
                      <option>Next Day Delivery</option>
                      <option>Same Day Delivery</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="item-type"
                    >
                      Item Type
                    </label>
                    <select
                      id="item-type"
                      className="w-full p-2 border rounded"
                    >
                      <option>Select...</option>
                      <option>Documents</option>
                      <option>Electronics</option>
                      <option>Clothing</option>
                      <option>Furniture</option>
                      <option>Food</option>
                    </select>
                  </div>
                </div>
                {/* Weight Package and Total Collection Amount in one row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="weight-package"
                    >
                      Select Weight Package
                    </label>
                    <select
                      id="weight-package"
                      className="w-full p-2 border rounded"
                    >
                      <option>Select...</option>
                      <option>0-1 kg</option>
                      <option>1-5 kg</option>
                      <option>5-10 kg</option>
                      <option>10-20 kg</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="total-collection"
                    >
                      Total Collection Amount
                    </label>
                    <input
                      type="text"
                      id="total-collection"
                      className="w-full p-2 border rounded"
                      placeholder="Total Collection Amount"
                    />
                  </div>
                </div>
                {/* Product Value in a separate row */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="product-value"
                  >
                    Product Value
                  </label>
                  <input
                    type="text"
                    id="product-value"
                    className="w-full p-2 border rounded"
                    placeholder="Product Value"
                  />
                </div>
                {/* Product Details in a separate row */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="product-details"
                  >
                    Product Details
                  </label>
                  <input
                    type="text"
                    id="product-details"
                    className="w-full p-2 border rounded"
                    placeholder="Product Details"
                  />
                </div>
                {/* Remarks field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="remarks"
                  >
                    Remarks
                  </label>
                  <textarea
                    id="remarks"
                    className="w-full p-2 border rounded h-24"
                    placeholder="Add any remarks here"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons at the bottom-right */}
          <div className="flex justify-end space-x-4 mt-6">
            <button className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              Add Parcel
            </button>
          </div>
        </div>

        {/* Right Side - Parcel Charge Section (30% width) */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Parcel Charge</h3>
          <ul className="space-y-4 text-lg">
            {" "}
            {/* Added gap and bigger font */}
            <li className="flex justify-between">
              <span>Weight Package</span> <span>Not Confirm</span>
            </li>
            <li className="flex justify-between">
              <span>Service Type</span> <span>Not Confirm</span>
            </li>
            <li className="flex justify-between">
              <span>Item Type</span> <span>Not Confirm</span>
            </li>
            <li className="flex justify-between">
              <span>Collection Amount</span> <span>0.00</span>
            </li>
            <li className="flex justify-between">
              <span>COD Percent</span> <span>0%</span>
            </li>
            <li className="flex justify-between">
              <span>Weight Charge</span> <span>0.00</span>
            </li>
            <li className="flex justify-between">
              <span>COD Charge</span> <span>0.00</span>
            </li>
            <li className="flex justify-between">
              <span>Delivery Charge</span> <span>0.00</span>
            </li>
            <hr className="border-t border-gray-300 mt-2" /> {/* Underline */}
            <li className="flex justify-between font-bold">
              <span>Total Charge</span> <span>0.00</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Developed by text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Developed by creative software</p>
      </div>
    </div>
  );
};

export default NewOrder;
