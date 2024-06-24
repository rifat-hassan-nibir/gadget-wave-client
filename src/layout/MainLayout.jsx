import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Header/Navbar";
import Footer from "../components/Common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
