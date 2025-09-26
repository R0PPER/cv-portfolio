import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

import { PortfolioIcon } from "../icons/PortfolioIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { DotMenu } from "../icons/DotMenu";
import { Menu } from "../pages/Menu";

import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo" onClick={closeMenu}>
          <PortfolioIcon />
        </Link>

        <nav className="nav">
          <button className="light-theme" onClick={toggleTheme}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <DotMenu isActive={isMenuOpen} setIsActive={setIsMenuOpen} />
        </nav>
      </header>

      {/* Always render Menu inside AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && <Menu onClose={closeMenu} key="menu" />}
      </AnimatePresence>
    </>
  );
};
