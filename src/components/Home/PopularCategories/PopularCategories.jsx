import SectionTitle from "../../Common/SectionTitle";
import CategoriesCard from "./CategoriesCard";
import audio from "../../../assets/Categories/Audio.jpeg";
import cameraAndDrone from "../../../assets/Categories/Camera & Drone.jpeg";
import cellPhones from "../../../assets/Categories/Cell Phones.jpeg";
import computers from "../../../assets/Categories/Computers.jpeg";
import dailyDeals from "../../../assets/Categories/Daily Deals.jpeg";
import ipadAndTablets from "../../../assets/Categories/ipad & tablets.jpeg";

const PopularCategories = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Popular Categories"} />

      <div className="flex justify-between gap-8">
        <CategoriesCard categoryImage={audio} title={"Audio"} productNumber={8} />
        <CategoriesCard categoryImage={cameraAndDrone} title={"Camera & Drone"} productNumber={9} />
        <CategoriesCard categoryImage={cellPhones} title={"Cellphones"} productNumber={7} />
        <CategoriesCard categoryImage={computers} title={"Computers"} productNumber={6} />
        <CategoriesCard categoryImage={dailyDeals} title={"Daily Deals"} productNumber={12} />
        <CategoriesCard categoryImage={ipadAndTablets} title={"ipads & Tablets"} productNumber={5} />
      </div>
    </div>
  );
};

export default PopularCategories;
