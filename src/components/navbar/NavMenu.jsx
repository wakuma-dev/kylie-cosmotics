import { memo } from "react";
import { NavLink } from "react-router-dom";
import navItems from "../../data/navItems";

const NavMenu = memo(function NavMenu({ openMenu }) {
  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center gap-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className="p-2.5 rounded-md bg-transparent hover:bg-[#f8f1f4] text-[#4b4a5a] transition-all duration-150"
              onMouseEnter={() => {
                if (item.name.toLowerCase() === "fragrance") {
                  openMenu("fragrance");
                }

                if (item.name.toLowerCase() === "skin") {
                  openMenu("skin");
                }
                if (item.name.toLowerCase() === "discover") {
                  openMenu("discover")
                }
              }}
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
