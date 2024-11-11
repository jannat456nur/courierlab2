import { AlertOctagon } from 'lucide-react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-gray-50 dark:bg-primaryBlack text-center">
            <AlertOctagon className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                Oops! An error occurred
            </h1>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                We are sorry, but something went wrong on our end.
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-primaryWhite rounded hover:bg-blue-700 transition-colors"
            >
                Go back home
            </Link>
        </div>
    )
}

export default ErrorPage