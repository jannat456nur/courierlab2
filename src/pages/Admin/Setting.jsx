import { useState } from 'react';

const Setting = () => {
  const [settings, setSettings] = useState({
    companyName: '',
    companyTitle: '',
    initialCode: '',
    companyAddress: '',
    district: '',
    phoneNumber: '',
    email: '',
    website: '',
    faviconIcon: null,
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className=" w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={settings.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter company name"
            />
          </div>
          
          {/* Company Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Company Title</label>
            <input
              type="text"
              name="companyTitle"
              value={settings.companyTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter company title"
            />
          </div>

          {/* Initial Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Initial Code</label>
            <input
              type="text"
              name="initialCode"
              value={settings.initialCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter initial code"
            />
          </div>

          {/* Company Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Company Address</label>
            <input
              type="text"
              name="companyAddress"
              value={settings.companyAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter company address"
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">District</label>
            <input
              type="text"
              name="district"
              value={settings.district}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter district"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={settings.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter email address"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Website</label>
            <input
              type="url"
              name="website"
              value={settings.website}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter website URL"
            />
          </div>

          {/* Favicon Icon */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Favicon Icon</label>
            <input
              type="file"
              name="faviconIcon"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Logo */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Logo</label>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
