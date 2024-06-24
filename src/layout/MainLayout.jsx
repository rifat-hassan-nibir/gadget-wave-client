import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
