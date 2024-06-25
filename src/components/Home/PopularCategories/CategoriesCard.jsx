/* eslint-disable react/prop-types */
const CategoriesCard = ({ categoryImage, title, productNumber }) => {
  return (
    <div className="text-center space-y-4">
      <div className="bg-[#F5F5F7]">
        <img src={categoryImage} className="w-full hover:scale-110 hover:cursor-pointer transition-all duration-300" />
      </div>
      <div>
        <h2 className="text-[16px] font-medium">{title}</h2>
        <p className="text-[14px] text-gray-600">{productNumber} products</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
