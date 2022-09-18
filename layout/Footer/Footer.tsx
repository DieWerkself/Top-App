import { FooterProps } from "./Footer.props";
import cn from "classnames";
import s from "./Footer.module.css";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
