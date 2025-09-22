import { Link, useNavigate } from "react-router-dom";

type MenuProps = {
  onClose: () => void;
};

export const Menu = ({ onClose }: MenuProps) => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault(); // stop Link’s default navigation
    onClose();
    setTimeout(() => navigate(path), 0);
  };

  return (
    <div className="menu">
      <p className="menu-links">
        <Link to="/" onClick={(e) => handleClick(e, "/")}>
          Home
        </Link>
        <Link to="/about" onClick={(e) => handleClick(e, "/about")}>
          About
        </Link>
        <Link to="/work" onClick={(e) => handleClick(e, "/work")}>
          Work
        </Link>
        <Link to="/contact" onClick={(e) => handleClick(e, "/contact")}>
          Contact
        </Link>
      </p>
    </div>
  );
};
