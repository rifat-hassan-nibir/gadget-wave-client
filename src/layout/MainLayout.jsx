import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Header/Navbar";
import Footer from "../components/Common/Footer";
import Topbar from "../components/Common/Header/Topbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Topbar />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
