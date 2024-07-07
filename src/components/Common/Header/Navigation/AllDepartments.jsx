import { MdOutlineAudiotrack, MdOutlineDiscount } from "react-icons/md";
import SingleDepartment from "./SingleDepartment";
import { CiCamera } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Audio Electronics", icon: MdOutlineAudiotrack, link: "/shop" },
  { name: "Camera & Drones", icon: CiCamera, link: "/shop" },
  { name: "Cellphones", icon: GiSmartphone, link: "/shop" },
  { name: "Computers", icon: IoIosLaptop, link: "/shop" },
  { name: "Daily Deals", icon: MdOutlineDiscount, link: "/shop" },
  { name: "iPads & Tablets", icon: GiSmartphone, link: "/shop" },
  { name: "Portable Speakers", icon: MdOutlineAudiotrack, link: "/shop" },
];

const AllDepartments = () => {
  return (
    <div className="flex items-center justify-between">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-2.5 px-6 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[open]:bg-white data-[focus]:outline-1 data-[focus]:outline-white">
          All Departments
          <ChevronDownIcon className="size-4 ml-5 fill-black" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-[250px] mt-2 origin-top-right shadow-lg shadow-gray-100 rounded-xl border border-white/5 bg-white p-2 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <Link
                to={item.link}
                className="group flex w-full items-center gap-2 rounded-lg py-2.5 px-3 data-[focus]:bg-secondary transition-all duration-200"
              >
                <SingleDepartment IconName={item.icon} departmentName={item.name} />
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default AllDepartments;

{
  /* <SingleDepartment IconName={MdOutlineAudiotrack} departmentName={"Audio & Electronics"} />
<SingleDepartment IconName={CiCamera} departmentName={"Camera & Drone"} />
<SingleDepartment IconName={GiSmartphone} departmentName={"Cellphones"} />
<SingleDepartment IconName={IoIosLaptop} departmentName={"Computers"} />
<SingleDepartment IconName={MdOutlineDiscount} departmentName={"Daily Deals"} /> */
}
