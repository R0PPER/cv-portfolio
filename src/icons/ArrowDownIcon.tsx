interface IconProps {
  size?: number;
}

export const ArrowDownIcon = ({ size = 20 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rotate to point down, then translate it down by 2 units */}
      <g transform="rotate(90 12 12) translate(3.3,2)">
        <path d="M5 12h14" />
        <path d="M13 18l6-6-6-6" />
      </g>
    </svg>
  );
};
