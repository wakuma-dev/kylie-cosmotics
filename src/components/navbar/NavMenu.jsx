import { memo } from "react";
import { NavLink } from "react-router-dom";
import navItems from "../../data/NavItems";

const NavMenu = memo(function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center gap-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className="p-2.5 rounded-md bg-transparent hover:bg-[#f8f1f4] text-[#4b4a5a] transition-all duration-150"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default NavMenu;
