import { Link } from "react-router-dom";

type MenuProps = {
  onClose: () => void;
};

export const Menu = ({ onClose }: MenuProps) => {
  return (
    <div className="menu">
      <p className="menu-links">
        <Link onClick={onClose} to="/">
          Home
        </Link>
        <Link onClick={onClose} to="/about">
          About
        </Link>
        <Link onClick={onClose} to="/work">
          Work
        </Link>
        <Link onClick={onClose} to="/contact">
          Contact
        </Link>
      </p>
    </div>
  );
};
