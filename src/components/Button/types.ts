import { ReactNode } from "react";
export type Props = {
  onClick: () => void;
  type?: "list" | "details";
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
};
