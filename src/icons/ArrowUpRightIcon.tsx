interface IconProps {
  size?: number;
}

export const ArrowUpRightIcon = ({ size = 22 }: IconProps) => {
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
      <g transform="rotate(-45 12 12) translate(-5,4)">
        <path d="M5 12h14" />
        <path d="M13 18l6-6-6-6" />
      </g>
    </svg>
  );
};
