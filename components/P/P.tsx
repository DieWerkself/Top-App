import { ParagraphProps } from "./P.props";
import cn from "classnames";
import s from "./P.module.css";

export const P = ({
  size = "medium",
  className,
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(s.p, className, {
        [s.small]: size == "small",
        [s.medium]: size == "medium",
        [s.large]: size == "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
