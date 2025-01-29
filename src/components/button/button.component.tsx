import React, { ComponentProps, PropsWithChildren } from "react";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  children: PropsWithChildren;
  isActive?: boolean;
  className?: string;
};

export default function ButtonComponent({ className, children, ...props }: Props) {
  return (
    <button
      className={`${className ? className : ""} ${styles.button}`}
      {...props}
    >
      {children}
    </button>
  );
}
