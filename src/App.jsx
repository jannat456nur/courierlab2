import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { AuthProvider } from "./Auth/AuthContext";
import { ThemeProvider } from "./Auth/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
        {/* ... other components */}
      </div>
    </ThemeProvider>
  );
};

export default App;
