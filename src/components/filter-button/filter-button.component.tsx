import React, { ComponentProps } from "react";

import styles from "./filter-button.module.css";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};

export default function filterButtonComponent({
  className,
  children,
  ...props
}: Props) {
  return (
    <button className={className + styles["filter-button"]} {...props}>
      {children}
    </button>
  );
}
