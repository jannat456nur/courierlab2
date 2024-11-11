// import Header from "../pages/Merchant/Header";
import HomeHeader from "../pages/Merchant/HomeHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);
  return (
    <div className="min-h-screen bg-slate-100 text-primaryWhite">
      {/* {localStorage.getItem("isAuthenticated") == true ? (
        <HomeHeader />
      ) : (
        <Header />
      )} */}

      <HomeHeader />

      <main className="p-2 min-h-[85vh] bg-inherit">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
