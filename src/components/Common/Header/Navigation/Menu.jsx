import { NavLink } from "react-router-dom";

const Navlinks = [
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

const Menu = () => {
  return (
    <div className="flex gap-8">
      {Navlinks.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            isActive ? "text-primary text-[15px] font-semibold" : "text-black text-[15px] font-semibold  hover:underline"
          }
          key={link.id}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
