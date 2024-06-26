import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-250px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
