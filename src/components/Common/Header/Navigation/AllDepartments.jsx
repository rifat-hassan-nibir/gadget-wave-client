import { MdOutlineAudiotrack, MdOutlineDiscount } from "react-icons/md";
import SingleDepartment from "./SingleDepartment";
import { CiCamera } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";

const AllDepartments = () => {
  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-with-icons"
        type="button"
        className="hs-dropdown-toggle py-3 px-6 inline-flex items-center gap-x-8 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        All Departments
        <svg
          className="hs-dropdown-open:rotate-180 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200"
        aria-labelledby="hs-dropdown-with-icons"
      >
        <SingleDepartment IconName={MdOutlineAudiotrack} departmentName={"Audio & Electronics"} />
        <SingleDepartment IconName={CiCamera} departmentName={"Camera & Drone"} />
        <SingleDepartment IconName={GiSmartphone} departmentName={"Cellphones"} />
        <SingleDepartment IconName={IoIosLaptop} departmentName={"Computers"} />
        <SingleDepartment IconName={MdOutlineDiscount} departmentName={"Daily Deals"} />
      </div>
    </div>
  );
};

export default AllDepartments;
