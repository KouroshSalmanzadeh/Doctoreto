import React, { ComponentProps } from "react";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  text: string;
  isActive?: boolean;
  className?: string;
};

export default function ButtonComponent({ className, text, ...props }: Props) {
  return (
    <button
      className={`${className ? className : ""} ${styles.button}`}
      {...props}
    >
      {text}
    </button>
  );
}
