interface IconProps {
  size?: number;
}

export const ArrowRightIcon = ({ size = 21 }: IconProps) => {
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
      <g transform="translate(0,1)">
        <path d="M5 12h14" />
        <path d="M13 18l6-6-6-6" />
      </g>
    </svg>
  );
};
