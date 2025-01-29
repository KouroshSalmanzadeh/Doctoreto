"use client";

import { useContext } from "react";

import styles from "./filter-badges.module.css";

import { FilterContext } from "../filter/filter-provider.component";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

export default function FilterBadgesComponent() {
  const { filters, dispatch } = useContext(FilterContext);

  if (!filters.service && !filters.expertise && !filters.query) {
    return null;
  }

  return (
    <div className={styles.filterbadges}>
      {filters.service ? (
        <span
          onClick={() => dispatch({ type: "set_service", payload: "" })}
          className={styles.badge}
        >
          {filters.service}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.expertise ? (
        <span
          onClick={() => dispatch({ type: "set_expertise", payload: "" })}
          className={styles.badge}
        >
          {filters.expertise}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.query ? (
        <span
          onClick={() => dispatch({ type: "set_query", payload: "" })}
          className={styles.badge}
        >
          {filters.query}
          <MingcuteCloseFill />
        </span>
      ) : null}
    </div>
  );
}
