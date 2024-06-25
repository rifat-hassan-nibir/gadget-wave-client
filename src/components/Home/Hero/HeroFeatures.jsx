import { BsHouse } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { GrCreditCard } from "react-icons/gr";
import { RiDiscountPercentFill } from "react-icons/ri";

const HeroFeatures = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <RiDiscountPercentFill className="size-6" />
          <p>
            Log in get <span className="font-bold text-primary">up to 50% discounts</span>
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <BsHouse className="size-6" />
          <p>Open new stores in your city</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <FiTruck className="size-6" />
          <p>Free fast express delivery with tracking</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Equipment loose and damage insurance</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <GrCreditCard className="size-6" />
          <p>Installment without overpayments</p>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatures;
