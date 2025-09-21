import { useState } from "react";
import { Link } from "react-router-dom";

import { PortfolioIcon } from "../icons/PortfolioIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { DotMenu } from "../icons/DotMenu";
import { Menu } from "../pages/Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo" onClick={closeMenu}>
          <PortfolioIcon />
        </Link>

        <nav className="nav">
          <Link to="/light" className="light-theme">
            <MoonIcon />
          </Link>

          {/* No need for an extra button around DotMenu */}
          <DotMenu isActive={isMenuOpen} setIsActive={setIsMenuOpen} />
        </nav>
      </header>

      {/* When Menu renders, we pass down onClose */}
      {isMenuOpen && <Menu onClose={closeMenu} />}
    </>
  );
};
