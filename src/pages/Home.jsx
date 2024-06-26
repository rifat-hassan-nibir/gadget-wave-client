import Hero from "../components/Home/Hero/Hero";
import NewArrivalProducts from "../components/Home/NewArrivalProducts/NewArrivalProducts";
import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import PopularProducts from "../components/Home/RecentlyLaunched/PopularProducts";
import Slider from "../components/Home/Slider/Slider";
import Gap from "../components/Utils/Gap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Gap />
      <div className="container mx-auto px-4 lg:px-0">
        <PopularCategories />
        <Gap big />
        <NewArrivalProducts />
        <Gap />
        <Slider />
        <Gap />
      </div>
      <PopularProducts />
      <Gap />
    </div>
  );
};

export default Home;
