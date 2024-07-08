import slide1 from "../../../assets/Slider/slide1.jpeg";
import Button from "../../Utils/Button";

const Slide1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${slide1})` }}
      className="flex flex-col justify-center h-[250px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
    >
      <div className="p-[30px] lg:p-[100px]">
        <h3 className="text-[22px] font-medium text-secondary">New Camera. New Design</h3>
        <h1 className="text-[36px] lg:text-[40px] font-bold text-white">iPhone 15 Pro Max</h1>
        <hr className="w-16 border-2 border-gray-500 my-4 hidden lg:block" />
        <p className="text-[20px] text-white hidden lg:block">Titanium So Strong. So Light. So Pro.</p>
        <div className="mt-4">
          <Button text={"Shop Now"} link={"/shop"} />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
