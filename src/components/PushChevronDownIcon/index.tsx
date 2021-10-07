import "./styles.scss";

type Props = {
  className?: string;
};

export function PushChevronDownIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24.228"
      height="18.367"
      viewBox="0 0 24.228 18.367"
    >
      <g
        id="Group_414"
        data-name="Group 414"
        transform="translate(1969.835 1431.006)"
      >
        <line
          id="Line_18"
          data-name="Line 18"
          x2="24.228"
          transform="translate(-1969.835 -1413.639)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          id="chevron"
          data-name="Path 650"
          d="M-1948.187-1427.3l-10.115,10.115-10.115-10.115"
          transform="translate(0.581 -3)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
