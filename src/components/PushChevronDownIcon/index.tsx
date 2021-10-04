import "./styles.scss";

type Props = {
  className?: string;
};

export function PushChevronDownIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="chevron"
        d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z"
        fill="currentColor"
      />
      <path
        id="bar"
        d="M19 16.3432H5V18.3432H19V16.3432Z"
        fill="currentColor"
      />
    </svg>
  );
}
