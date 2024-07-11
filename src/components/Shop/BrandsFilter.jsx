/* eslint-disable react/prop-types */
const brands = ["Amazon", "Microsoft", "Google", "Apple", "Fujifilm", "Sony", "Ring"];

const BrandsFilter = ({ setBrand, setCategory }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">All Brands</h2>
      {brands.map((brand, index) => (
        <div
          onClick={() => {
            setBrand(brand);
            setCategory("");
          }}
          className="form-control mt-3"
          key={index}
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="radio-1" className="size-4" />
            <span className="label-text">{brand}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandsFilter;
