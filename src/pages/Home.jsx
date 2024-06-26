import FromOurArticles from "../components/Home/From Our Articles/FromOurArticles";
import Hero from "../components/Home/Hero/Hero";
import NewArrivalProducts from "../components/Home/New Arrival Products/NewArrivalProducts";
import OurAdvantages from "../components/Home/OurAdvantages";
import PopularCategories from "../components/Home/Popular Categories/PopularCategories";
import PopularProducts from "../components/Home/Recently Launched/PopularProducts";
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
        <OurAdvantages />
        <Gap />
      </div>
      <PopularProducts />
      <Gap />
      <div className="container mx-auto px-4 lg:px-0">
        <FromOurArticles />
      </div>
      <Gap big />
    </div>
  );
};

export default Home;
