
import { Link } from 'react-router-dom'; // Using Link for navigation

const RoleSelectionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Select Your Role</h1>

      <div className="flex flex-col space-y-4">
        <Link to="/merchant/registration">
          <button className="w-64 py-3 px-6 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
            Want to be a Merchant
          </button>
        </Link>

        <Link to="/rider/registration">
          <button className="w-64 py-3 px-6 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
            Want to be a Rider
          </button>
        </Link>
      </div>

      <div className="flex flex-col space-y-4 mt-8">
        <Link to="/login">
          <button className="w-64 py-3 px-6 text-lg font-medium text-blue-600 bg-white border border-blue-500 rounded-lg hover:bg-blue-100 transition-all">
            Already have an account? Login
          </button>
        </Link>
{/* 
        <Link to="/registration">
          <button className="w-64 py-3 px-6 text-lg font-medium text-blue-600 bg-white border border-blue-500 rounded-lg hover:bg-blue-100 transition-all">
            Don't have an account? Register
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default RoleSelectionPage;
