import BlogCard from "../../BlogCard";
import SectionTitle from "../../Common/SectionTitle";
import blog1 from "../../../assets/Blogs/blog1.jpg";
import blog2 from "../../../assets/Blogs/blog2.jpg";
import blog3 from "../../../assets/Blogs/blog3.jpg";
import blog4 from "../../../assets/Blogs/blog4.jpg";

const FromOurArticles = () => {
  return (
    <div>
      <SectionTitle title={"From Our Articles"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <BlogCard image={blog1} category={"Audio Electronics"} />
        <BlogCard image={blog2} category={"Audio Electronics"} />
        <BlogCard image={blog3} category={"Audio Electronics"} />
        <BlogCard image={blog4} category={"Audio Electronics"} />
      </div>
    </div>
  );
};

export default FromOurArticles;
