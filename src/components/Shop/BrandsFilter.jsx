const categories = ["Audio", "Camera & Drone", "Cell Phones", "Computers", "iPad & Tablets", "Portable Speakers", "Smart Home"];

const BrandsFilter = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg">All Brands</h2>
      {categories.map((category, index) => (
        <div className="form-control mt-3" key={index}>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="radio-1" className="size-4" />
            <span className="label-text">{category}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandsFilter;
