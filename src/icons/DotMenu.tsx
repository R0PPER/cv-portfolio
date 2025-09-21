import { useState } from "react";

type DotMenuProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
};

export const DotMenu = ({
  isActive,
  setIsActive,
  size = 50,
  strokeColor = "#4f566d",
  strokeWidth = 2.4,
}: DotMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsActive(!isActive)}
      style={{
        cursor: "pointer",
        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <defs>
        <style>
          {`
            .dot {
              fill: ${strokeColor};
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .cross-line {
              fill: none;
              stroke: ${strokeColor};
              stroke-width: ${strokeWidth};
              opacity: 0;
              stroke-linecap: round;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* Hide middle row and column dots on hover */
            .menu-hovered .dot:nth-child(2),
            .menu-hovered .dot:nth-child(4),
            .menu-hovered .dot:nth-child(5),
            .menu-hovered .dot:nth-child(6),
            .menu-hovered .dot:nth-child(8) {
              opacity: 0;
              transform: scale(0);
            }
            
            /* Keep corner dots visible on hover */
            .menu-hovered .dot:nth-child(1),
            .menu-hovered .dot:nth-child(3),
            .menu-hovered .dot:nth-child(7),
            .menu-hovered .dot:nth-child(9) {
              opacity: 1;
            }
            
            /* Show cross lines on hover */
            .menu-hovered .cross-line {
              opacity: 1;
            }
            
            /* When active (clicked), hide ALL dots */
            .menu-active .dot {
              opacity: 0;
              transform: scale(0);
            }
            
            /* Keep cross lines visible when active */
            .menu-active .cross-line {
              opacity: 1;
            }
          `}
        </style>
      </defs>

      <g
        className={`${isHovered ? "menu-hovered" : ""} ${
          isActive ? "menu-active" : ""
        }`}
      >
        {/* 3x3 grid of dots */}
        <circle className="dot" cx="18" cy="18" r="4" />
        <circle className="dot" cx="36" cy="18" r="4" />
        <circle className="dot" cx="54" cy="18" r="4" />
        <circle className="dot" cx="18" cy="36" r="4" />
        <circle className="dot" cx="36" cy="36" r="4" />
        <circle className="dot" cx="54" cy="36" r="4" />
        <circle className="dot" cx="18" cy="54" r="4" />
        <circle className="dot" cx="36" cy="54" r="4" />
        <circle className="dot" cx="54" cy="54" r="4" />

        {/* Horizontal double lines */}
        <line className="cross-line" x1="10" y1="32" x2="62" y2="32" />
        <line className="cross-line" x1="10" y1="40" x2="62" y2="40" />

        {/* Vertical double lines */}
        <line className="cross-line" x1="32" y1="10" x2="32" y2="62" />
        <line className="cross-line" x1="40" y1="10" x2="40" y2="62" />

        {/* Half circles connecting the lines */}
        {/* Top-left */}
        <path
          className="cross-line"
          d="M 32 10 A 4 4 0 0 1 40 10"
          fill="none"
        />

        {/* Top-right */}
        <path
          className="cross-line"
          d="M 62 32 A 4 4 0 0 1 62 40"
          fill="none"
        />

        {/* Bottom-right */}
        <path
          className="cross-line"
          d="M 40 62 A 4 4 0 0 1 32 62"
          fill="none"
        />

        {/* Bottom-left */}
        <path
          className="cross-line"
          d="M 10 40 A 4 4 0 0 1 10 32"
          fill="none"
        />
      </g>
    </svg>
  );
};
