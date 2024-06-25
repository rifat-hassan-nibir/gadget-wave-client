import Hero from "../components/Home/Hero/Hero";
import NewArrivalProducts from "../components/Home/NewArrivalProducts/NewArrivalProducts";
import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import Gap from "../components/Utils/Gap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Gap />
      <div className="container mx-auto px-4">
        <PopularCategories />
        <Gap big />
        <NewArrivalProducts />
      </div>
    </div>
  );
};

export default Home;
