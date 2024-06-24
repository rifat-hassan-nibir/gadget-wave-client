import AllDepartments from "./AllDepartments";
import Menu from "./Menu";
import Others from "./Others";

const Navigation = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="bg-accent py-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-12">
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
