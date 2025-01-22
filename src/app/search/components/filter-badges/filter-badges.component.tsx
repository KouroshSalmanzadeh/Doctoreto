"use client";

import { useContext } from "react";

import styles from "./filter-badges.module.css";

import { FilterContext } from "../filter/filter-provider.component";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

export default function FilterBadgesComponent() {
  const { filters, Setfilters } = useContext(FilterContext);

  return (
    <div className={styles.filterbadges}>
      {filters.service.length ? (
        <span
          onClick={() => Setfilters((prev) => ({ ...prev, service: "" }))}
          className={styles.badge}
        >
          {filters.service}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {filters.expertise.length ? (
        <span
          onClick={() => Setfilters((prev) => ({ ...prev, expertise: "" }))}
          className={styles.badge}
        >
          {filters.expertise}
          <MingcuteCloseFill />
        </span>
      ) : null}
    </div>
  );
}
