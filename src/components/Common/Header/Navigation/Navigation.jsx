import AllDepartments from "./AllDepartments";
import Menu from "./Menu";
import Others from "./Others";

const Navigation = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="bg-secondary py-2 hidden lg:block">
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
          <div className="flex items-center lg:gap-12">
            <AllDepartments />
            <Menu />
          </div>
          <Others />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
