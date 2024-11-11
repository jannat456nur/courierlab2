import { useState } from "react";

const invoices = [
  {
    date: "2024-10-06",
    paymentId: "12345",
    totalParcel: 10,
    amountToCollect: "৳ 5000",
    collected: "৳ 4500",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 4000",
    status: "Paid",
    actions: "Edit",
  },
  {
    date: "2024-10-05",
    paymentId: "67890",
    totalParcel: 15,
    amountToCollect: "৳ 7500",
    collected: "৳ 7000",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 6500",
    status: "Pending",
    actions: "Edit",
  },
  {
    date: "2024-10-04",
    paymentId: "11223",
    totalParcel: 8,
    amountToCollect: "৳ 3000",
    collected: "৳ 3000",
    totalCharge: "৳ 200",
    paymentAmount: "৳ 2800",
    status: "Paid",
    actions: "Edit",
  },
  {
    date: "2024-10-03",
    paymentId: "44556",
    totalParcel: 12,
    amountToCollect: "৳ 6000",
    collected: "৳ 5500",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 5000",
    status: "Partial Payment",
    actions: "Edit",
  },
  {
    date: "2024-10-02",
    paymentId: "77889",
    totalParcel: 20,
    amountToCollect: "৳ 10000",
    collected: "৳ 5000",
    totalCharge: "৳ 1000",
    paymentAmount: "৳ 8000",
    status: "Pending",
    actions: "Edit",
  },
  {
    date: "2024-10-01",
    paymentId: "99100",
    totalParcel: 5,
    amountToCollect: "৳ 2500",
    collected: "৳ 2500",
    totalCharge: "৳ 0",
    paymentAmount: "৳ 2500",
    status: "Paid",
    actions: "Edit",
  },
  {
    date: "2024-09-30",
    paymentId: "13579",
    totalParcel: 18,
    amountToCollect: "৳ 5000",
    collected: "৳ 8500",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 8000",
    status: "Partial Payment",
    actions: "Edit",
  },
  {
    date: "2024-09-29",
    paymentId: "24680",
    totalParcel: 25,
    amountToCollect: "৳ 12000",
    collected: "৳ 11500",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 11000",
    status: "Pending",
    actions: "Edit",
  },
  {
    date: "2024-09-28",
    paymentId: "11234",
    totalParcel: 30,
    amountToCollect: "৳ 15000",
    collected: "৳ 14000",
    totalCharge: "৳ 1000",
    paymentAmount: "৳ 13000",
    status: "Paid",
    actions: "Edit",
  },
  {
    date: "2024-09-27",
    paymentId: "56789",
    totalParcel: 6,
    amountToCollect: "৳ 3000",
    collected: "৳ 2500",
    totalCharge: "৳ 500",
    paymentAmount: "৳ 2000",
    status: "Pending",
    actions: "Edit",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter the data based on the search query
  const filteredInvoices = invoices.filter((invoice) =>
    Object.values(invoice).some((val) =>
      val.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

  // Get current invoices to display
  const currentInvoices = filteredInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8">
      {/* Real-Time Search Field with White Background */}
      <div className="bg-white px-10 py-6 shadow-sm rounded-md flex justify-between ">
        <h1 className="text-start items-center pt-6  font-semibold leading-6 text-gray-500 text-2xl">
          All Invoices
        </h1>
        <div className="mt-4 flex justify-center gap-8 w-1/2">
          <p className="text-gray-500 pb-2 items-center pt-2">Search</p>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 rounded-md border border-gray-300 px-3  py-2 text-center text-sm text-gray-500 shadow-sm"
          />
        </div>
      </div>

      <div className="mt-8 flow-root p-4">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 py-3.5 pl-4 pr-3 text-left text-xl font-semibold text-gray-500 sm:pl-6 lg:pl-8"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Payment Id
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Total Parcel
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Amount To Be Collected
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Collected
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Total Charge
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Payment Amount
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-3 py-3.5 text-left text-xl font-semibold text-gray-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 text-gray-500 py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentInvoices.map((invoice, invoiceIdx) => (
                  <tr key={invoice.paymentId} className="bg-white">
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {invoice.date}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.paymentId}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.totalParcel}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.amountToCollect}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.collected}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.totalCharge}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.paymentAmount}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {invoice.status}
                    </td>
                    <td
                      className={classNames(
                        invoiceIdx !== currentInvoices.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        {invoice.actions}
                        <span className="sr-only">, {invoice.paymentId}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4 px-4">
        {/* Left Side: Page Selection and Total */}
        <div className="flex items-center">
          <select
            value={itemsPerPage}
            onChange={(e) => setCurrentPage(1)} // Reset to page 1 when items per page changes
            className="border rounded-md p-2 text-gray-700"
          >
            <option value={5}>25 items per page</option>
            <option value={10}>50 items per page</option>
            <option value={15}>75 items per page</option>
          </select>
          <span className="ml-2 text-gray-700">
            Page {currentPage} of {totalPages} | Total: {filteredInvoices.length}
          </span>
        </div>

        {/* Right Side: Navigation */}
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-md bg-indigo-600 text-white px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded-md bg-indigo-600 text-white px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
