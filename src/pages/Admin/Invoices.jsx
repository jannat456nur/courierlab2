import Table from "./Table";

const Invoices = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 p-4">
        <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-500 text-lg font-semibold">Total Collected</h2>
          <p className="text-2xl font-bold mt-2">৳</p>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-500 text-lg font-semibold">Total Receivable</h2>
          <p className="text-2xl font-bold mt-2">৳ 0</p>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-500 text-lg font-semibold">Total Receivable</h2>
          <p className="text-2xl font-bold mt-2">৳ 0</p>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-500 text-lg font-semibold">Total Charge</h2>
          <p className="text-2xl font-bold mt-2">৳</p>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Invoices;
