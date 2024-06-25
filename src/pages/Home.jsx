import Hero from "../components/Home/Hero/Hero";
import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import Gap from "../components/Utils/Gap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Gap />
      <PopularCategories />
    </div>
  );
};

export default Home;
