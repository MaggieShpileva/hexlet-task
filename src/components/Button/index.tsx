import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
  type: "primary" | "secondary" | "header";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: FC<Props> = ({ children, type, onClick, className }) => {
  return (
    <button
      className={[styles[`button_${type}`], className].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
