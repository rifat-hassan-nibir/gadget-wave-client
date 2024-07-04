import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/shop",
    name: "Shop",
  },
  {
    id: 3,
    path: "/blogs",
    name: "Blogs",
  },
  {
    id: 4,
    path: "/contact",
    name: "Contact",
  },
];

const MobileNavigation = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button p-0 m-0">
          <LuMenu className="text-[24px]" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            {links.map((link) => (
              <NavLink to={link.path} key={link.id}>
                {link.name}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
