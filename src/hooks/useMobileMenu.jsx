import { useState, useCallback } from "react";

export default function useMobileMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuToggle = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  const closeToggle = useCallback(() => {
    setMobileMenu(false);
  }, []);

  return {
    mobileMenu,
    menuToggle,
    closeToggle,
  };
}
