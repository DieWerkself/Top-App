import { ParagraphProps } from "./Tag.props";
import cn from "classnames";
import s from "./Tag.module.css";

export const Tag = ({
  size = "medium",
  color = "ghost",
  href,
  className,
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.small]: size == "small",
        [s.medium]: size == "medium",
        [s.ghost]: color == "ghost",
        [s.red]: color == "red",
        [s.gray]: color == "gray",
        [s.green]: color == "green",
        [s.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
