import AlexaHome from "../../assets/Popular Products/Alexa Home 3.jpg";
import CrosoftXboxElite from "../../assets/Popular Products/Crosoft xbos Elite.jpg";
import FujiFilm from "../../assets/Popular Products/Fijufilm Instax Wide.jpg";
import MacbookM2 from "../../assets/Popular Products/Apple Macbook M2.jpg";
import GoogleNestAudio from "../../assets/Popular Products/Google Nest Audio.jpg";
import HomePod from "../../assets/Popular Products/Home Pod.jpg";
import ipad from "../../assets/Popular Products/ipad 10th Generation.jpg";
import GoogleNestMini from "../../assets/Popular Products/Google Nest Mini.jpg";
import iphone14 from "../../assets/Popular Products/iphone 14.jpg";
import doorCamera from "../../assets/New Arrival Products/Door Camere.jpg";
import headPhones from "../../assets/New Arrival Products/Headphone.jpg";
import wifiRouter from "../../assets/New Arrival Products/Ring wifi router.jpg";
import ProductCard from "../../components/ProductCard";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

const products = [
  { image: AlexaHome, name: "Alexa Home 3", price: "$435" },
  { image: CrosoftXboxElite, name: "Crosoft Xbox Elite", price: "$60" },
  { image: FujiFilm, name: "Fujifilm Instax Wide", price: "$300" },
  { image: MacbookM2, name: "Apple Macbook M2", price: "$1200" },
  { image: GoogleNestAudio, name: "Google Nest Audio", price: "$255" },
  { image: HomePod, name: "HomePod", price: "$300" },
  { image: doorCamera, name: "Door Camera", price: "$400" },
  { image: ipad, name: "iPad 10th Generation", price: "$900" },
  { image: GoogleNestMini, name: "Google Nest Mini", price: "$225" },
  { image: iphone14, name: "iPhone 14", price: "$100" },
  { image: headPhones, name: "Sony Headphones", price: "$500" },
  { image: wifiRouter, name: "Ring Wifi Router", price: "$100" },
];

const ProductGrid = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <BsGrid3X3Gap className="size-5" />
          <CiBoxList className="size-5" />
        </div>
        <div className="flex gap-4">
          <select className="select select-bordered rounded-lg select-sm w-full max-w-xs">
            <option>Sort by latest</option>
            <option>Sort by price: high to low</option>
            <option>Sort by price: low to high</option>
          </select>
        </div>
      </div>

      <hr className="mt-3 mb-6" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} productImage={product.image} productName={product.name} price={product.price} border={true} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
