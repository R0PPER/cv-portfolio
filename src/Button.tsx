import { Link } from "react-router-dom";

type ButtonProps = {
  children: string;
  to: string;
  arrowIcon?: React.ReactNode; // optional arrow
  external?: boolean;
  clssName?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  children,
  to,
  arrowIcon,
  external,
  className = "",
  ...props
}: ButtonProps) => {
  if (external)
    return (
      <a
        className={`button ${className}`}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {arrowIcon && <span>{arrowIcon}</span>}
        {children}
      </a>
    );

  return (
    <Link className={`button ${className}`} to={to} {...props}>
      {arrowIcon && <span>{arrowIcon}</span>}
      {children}
    </Link>
  );
};
