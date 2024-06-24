import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

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
