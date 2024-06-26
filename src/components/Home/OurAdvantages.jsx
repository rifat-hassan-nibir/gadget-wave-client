import { BsHouse } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { RiDiscountPercentFill } from "react-icons/ri";
import SectionTitle from "../Common/SectionTitle";

const OurAdvantages = () => {
  return (
    <div>
      <SectionTitle title={"Our Advantages"} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <RiDiscountPercentFill className="size-6" />
          <p>Fee Free Installment</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <BsHouse className="size-6" />
          <p>Best Price Guarantee</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <FiTruck className="size-6" />
          <p>Bonus Program</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Pickup in 15 minutes</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Convenient Delivery</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Premium Service</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Express Delivery in 2 hours</p>
        </div>
        <div className="flex items-center gap-4 bg-lightGray p-4 rounded-lg">
          <GoShieldCheck className="size-6" />
          <p>Equipment Acceptence</p>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
