const categories = ["Audio", "Camera & Drone", "Cell Phones", "Computers", "iPad & Tablets", "Portable Speakers", "Smart Home"];

const CategoriesFilter = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="font-semibold text-lg">All Categories</h2>
      {categories.map((category, index) => (
        <div className="form-control mt-3" key={index}>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs bg-white rounded-none" />
            <span className="label-text">{category}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoriesFilter;
