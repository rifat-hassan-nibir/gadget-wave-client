import SectionTitle from "../../Common/SectionTitle";
import ProductCard from "../../ProductCard";
import Gap from "../../Utils/Gap";
import AlexaHome from "../../../assets/Popular Products/Alexa Home 3.jpg";
import CrosoftXboxElite from "../../../assets/Popular Products/Crosoft xbos Elite.jpg";
import FujiFilm from "../../../assets/Popular Products/Fijufilm Instax Wide.jpg";
import MacbookM2 from "../../../assets/Popular Products/Apple Macbook M2.jpg";
import GoogleNestAudio from "../../../assets/Popular Products/Google Nest Audio.jpg";
import HomePod from "../../../assets/Popular Products/Home Pod.jpg";
import ipad from "../../../assets/Popular Products/ipad 10th Generation.jpg";
import GoogleNestMini from "../../../assets/Popular Products/Google Nest Mini.jpg";
import iphone14 from "../../../assets/Popular Products/iphone 14.jpg";
import doorCamera from "../../../assets/New Arrival Products/Door Camere.jpg";
import headPhones from "../../../assets/New Arrival Products/Headphone.jpg";
import wifiRouter from "../../../assets/New Arrival Products/Ring wifi router.jpg";

const PopularProducts = () => {
  return (
    <div className="bg-[#F7F7F8]">
      <Gap />
      <div className="container mx-auto px-4 lg:px-0">
        <SectionTitle title={"Popular Products"} />
        <div className="grid grid-cols-2 lg:grid-cols-6">
          <ProductCard productImage={AlexaHome} productName={"Alexa Home 3"} price={435} whiteBg={true} border={true} />
          <ProductCard productImage={CrosoftXboxElite} productName={"Crosoft xbox Elite"} price={60} whiteBg={true} border={true} />
          <ProductCard productImage={headPhones} productName={"Sony Headphones"} price={500} whiteBg={true} border={true} />
          <ProductCard productImage={FujiFilm} productName={"Fujifilm Instax Wide"} price={300} whiteBg={true} border={true} />
          <ProductCard productImage={MacbookM2} productName={"Apple Macbook M2"} price={1200} whiteBg={true} border={true} />
          <ProductCard productImage={GoogleNestAudio} productName={"Google Nest Audio"} price={255} whiteBg={true} border={true} />
          <ProductCard productImage={HomePod} productName={"Home Pod"} price={300} whiteBg={true} border={true} />
          <ProductCard productImage={doorCamera} productName={"Door Camera"} price={400} whiteBg={true} border={true} />
          <ProductCard productImage={ipad} productName={"ipad 10th Generation"} price={900} whiteBg={true} border={true} />
          <ProductCard productImage={GoogleNestMini} productName={"Google Nest Mini"} price={225} whiteBg={true} border={true} />
          <ProductCard productImage={iphone14} productName={"iphone 14"} price={100} whiteBg={true} border={true} />
          <ProductCard productImage={wifiRouter} productName={"Ring Wifi Router"} price={100} whiteBg={true} border={true} />
        </div>
      </div>
      <Gap />
    </div>
  );
};

export default PopularProducts;
