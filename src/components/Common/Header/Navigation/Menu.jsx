import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary text-[15px] font-semibold" : "text-black text-[15px] font-semibold  hover:underline"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "text-primary text-[15px] font-semibold" : "text-black text-[15px] font-semibold  hover:underline"
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-primary text-[15px] font-semibold" : "text-black text-[15px] font-semibold  hover:underline"
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-primary text-[15px] font-semibold" : "text-black text-[15px] font-semibold  hover:underline"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Menu;
