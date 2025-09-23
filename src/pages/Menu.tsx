import { Link } from "react-router-dom";
import { PageWrapper } from "../PageWrapper";

type MenuProps = {
  onClose: () => void;
};

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export const Menu = ({ onClose }: MenuProps) => {
  return (
    <div className="menu">
      <p className="menu-links">
        {links.map((link, i) => (
          <PageWrapper key={link.to} delay={i * 0.1} className="menu-link">
            <Link to={link.to} onClick={onClose}>
              {link.label}
            </Link>
          </PageWrapper>
        ))}
      </p>
    </div>
  );
};
