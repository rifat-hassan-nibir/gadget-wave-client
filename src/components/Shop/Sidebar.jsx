/* eslint-disable react/prop-types */
import BrandsFilter from "./BrandsFilter";
import CategoriesFilter from "./CategoriesFilter";

const Sidebar = ({ setCategory, setBrand }) => {
  return (
    <div>
      <CategoriesFilter setCategory={setCategory} setBrand={setBrand} />
      <hr className="my-8" />
      <BrandsFilter setCategory={setCategory} setBrand={setBrand} />
    </div>
  );
};

export default Sidebar;
