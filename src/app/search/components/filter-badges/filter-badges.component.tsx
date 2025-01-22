"use client";

import { useContext } from "react";
import styles from "./filter-badges.module.css";
import { FilterContext } from "../filter/filter-provider.component";
import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

export default function FilterBadgesComponent() {
  const { filters, dispatch } = useContext(FilterContext);

  return (
    <div className={styles.filterbadges}>
      {filters.service.length ? (
        <span
          onClick={() => dispatch({ type: "SET_SERVICE", payload: "" })}
          className={styles.badge}
        >
          {filters.service}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.expertise.length ? (
        <span
          onClick={() => dispatch({ type: "SET_EXPERTISE", payload: "" })}
          className={styles.badge}
        >
          {filters.expertise}
          <MingcuteCloseFill />
        </span>
      ) : null}
    </div>
  );
}
