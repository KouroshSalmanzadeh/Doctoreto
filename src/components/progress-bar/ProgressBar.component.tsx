"use client";

import React from "react";

import styles from "./progressBar.module.css";
import MingcuteStarFill from "@/icons/MingcuteStarFill";

type Props = {
  label: string;
  rate: number;
};

export default function ProgressBarComponent({ label, rate }: Props) {
  return (
    <div className={styles["progressbar-container"]}>
      <label htmlFor="">{label}</label>
      <div className={styles.progressbar}>
        <div className={styles.progressline}>
          <span style={{ width: `${rate * 2 * 10}%` }}></span>
        </div>
        <span className={styles.text}>
          {rate}
          <MingcuteStarFill />
        </span>
      </div>
    </div>
  );
}
