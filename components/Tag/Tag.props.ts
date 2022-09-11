import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "medium";
  color: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}
