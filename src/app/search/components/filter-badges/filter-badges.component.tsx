"use client";

import { useContext } from "react";

import styles from "./filter-badges.module.css";

import { FilterContext } from "../filter/filter-provider.component";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

export default function FilterBadgesComponent() {
  const { filters, dispatch } = useContext(FilterContext);

  if (
    !filters.service &&
    !filters.expertise &&
    !filters.query &&
    !filters.gender
  ) {
    return null;
  }

  return (
    <div className={styles.filterbadges}>
      {filters.service ? (
        <span
          onClick={() => dispatch({ type: "remove_filter", key: "service" })}
          className={styles.badge}
        >
          {filters.service}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.expertise ? (
        <span
          onClick={() => dispatch({ type: "remove_filter", key: "expertise" })}
          className={styles.badge}
        >
          {filters.expertise}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.query ? (
        <span
          onClick={() => dispatch({ type: "remove_filter", key: "query" })}
          className={styles.badge}
        >
          {filters.query}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.gender ? (
        <span
          onClick={() => dispatch({ type: "remove_filter", key: "gender" })}
          className={styles.badge}
        >
          {filters.gender === "male" ? "آقا" : "خانم"}
          <MingcuteCloseFill />
        </span>
      ) : null}
    </div>
  );
}
