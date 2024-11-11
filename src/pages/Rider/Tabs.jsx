import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FileSpreadsheet, FileText, Search } from "lucide-react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const tabs = [
  { name: "All", href: "/all" },
  { name: "Active", href: "/active" },
  { name: "Delivered", href: "/delivered" },
  { name: "Return", href: "/return" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [store, setStore] = useState("Select...");
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", searchQuery);
  };

  // Dummy data - replace this with your actual data
  const dummyData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more dummy data as needed
  ];

  const handleExcelDownload = () => {
    const ws = XLSX.utils.json_to_sheet(dummyData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["ID", "Name", "Email"]],
      body: dummyData.map((item) => [item.id, item.name, item.email]),
    });
    doc.save("data.pdf");
  };

  return (
    <div>
      {/* Tabs Section */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={
            tabs.find((tab) => tab.href === location.pathname)?.name
          }
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value);
            if (selectedTab) {
              window.location.href = selectedTab.href;
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "border-red-500 text-red-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold"
                  )
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Fields Section */}
      <div className="mt-8 p-4 bg-white rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-end">
          <div className="flex space-x-4 items-end">
            {/* Store Select */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="store"
                className="block text-sm font-medium text-gray-700"
              >
                Store
              </label>
              <select
                id="store"
                name="store"
                className="block w-48 rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={store}
                onChange={(e) => setStore(e.target.value)}
              >
                <option>Select...</option>
                <option>Store 1</option>
                <option>Store 2</option>
                <option>Store 3</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="block w-40 rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="2024-07-09"
                />
                <span>to</span>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="block w-40 rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="2024-10-06"
                />
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleExcelDownload}
                className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 border border-green-600"
              >
                <FileSpreadsheet className="mr-2" size={20} />
                Excel
              </button>
              <button
                type="button"
                onClick={handlePDFDownload}
                className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 border border-red-600"
              >
                <FileText className="mr-2" size={20} />
                PDF
              </button>
            </div>
          </div>

          {/* Search Field */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Search</span>
            <div className="relative">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                className="block w-64 rounded-md border-2 border-gray-300 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={searchQuery}
                onChange={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
