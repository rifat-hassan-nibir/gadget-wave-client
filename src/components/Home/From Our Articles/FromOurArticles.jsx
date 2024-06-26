import BlogCard from "../../BlogCard";
import SectionTitle from "../../Common/SectionTitle";

const FromOurArticles = () => {
  return (
    <div>
      <SectionTitle title={"From Our Articles"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default FromOurArticles;
