/* eslint-disable react/prop-types */
const categories = ["Smart Home", "Audio", "Camera & Drone", "Cell Phones", "Computers", "iPad & Tablets", "Portable Speakers"];

const CategoriesFilter = ({ setCategory, setBrand }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="font-semibold text-lg">Categories</h2>
      {categories.map((category, index) => (
        <div
          onClick={() => {
            setCategory(category);
            setBrand("");
          }}
          className="form-control mt-3"
          key={index}
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="radio-1" className="size-4" />
            <span className="label-text">{category}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoriesFilter;
