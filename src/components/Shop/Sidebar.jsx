import BrandsFilter from "./BrandsFilter";
import CategoriesFilter from "./CategoriesFilter";

const Sidebar = () => {
  return (
    <div>
      <CategoriesFilter />
      <hr className="my-8" />
      <BrandsFilter />
    </div>
  );
};

export default Sidebar;
