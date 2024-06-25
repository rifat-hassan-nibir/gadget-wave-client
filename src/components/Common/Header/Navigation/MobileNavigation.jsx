import { LuMenu } from "react-icons/lu";
import AllDepartments from "./AllDepartments";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <>
      {" "}
      {/* Navigation Toggle */}
      <button type="button" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
        <LuMenu className="size-5" />
      </button>
      {/* End Navigation Toggle // Sidebar */}
      <div
        id="docs-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-72 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="px-6">
          <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">
            Click Shop
          </a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <AllDepartments />
            </li>

            {Navlinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default MobileNavigation;
