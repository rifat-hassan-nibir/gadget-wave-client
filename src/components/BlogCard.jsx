import banner4 from "../assets/Banner/Banner-4.jpeg";

const BlogCard = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner4} className="h-[215px] w-full rounded-lg" />
        <p className="absolute bottom-3 left-3 text-xs bg-primary px-2 py-1 rounded text-white">Audio Electronics</p>
        <div className="absolute top-3 left-3 bg-white w-14 h-14 flex items-center justify-center rounded-full">
          <p className="text-center leading-[14px] mt-2">
            <span className="font-semibold text-[22px]">02</span> <br />
            <span className="text-xs">JAN</span>
          </p>
        </div>
      </div>
      <h3 className="text-[17px] font-medium mt-4">Announcing the new Fitbits Charge</h3>
      <p className="text-[14px] text-gray-500 mt-1">
        Recentley I was invited by Nintendo of Canada to attend a very special Nintendo Holiday Showcase
      </p>
    </div>
  );
};

export default BlogCard;
