import { CSSProperties, ReactNode } from "react";

type Props = {
  bgImg: string;
  frontImg?: string;
  title: string;
  children: ReactNode;
};

const slideItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
} as CSSProperties;

const slideTextStyle = {
  color: "#040505",
  width: "854px",
  padding: "60px 180px 60px 60px",
} as CSSProperties;

const h3Style = {
  fontFamily: "Cairo, sans-serif",
  fontSize: "55px",
  lineHeight: "65px",
  fontWeight: 700,
} as CSSProperties;

const pStyle = {
  marginTop: "24px",
  fontFamily: "Raleway, sans-serif",
  fontSize: "20px",
  lineHeight: "22px",
  fontWeight: 400,
} as CSSProperties;

export function CustomSlide({ bgImg, frontImg, title, children }: Props) {
  return (
    <div style={slideItemStyle}>
      <img src={bgImg} alt="" />
      <div style={slideTextStyle}>
        <h3 style={h3Style}>{title}</h3>
        <p style={pStyle}>{children}</p>
      </div>
    </div>
  );
}
