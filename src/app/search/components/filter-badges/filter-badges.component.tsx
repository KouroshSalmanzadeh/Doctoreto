"use client";

import { useContext } from "react";

import styles from "./filter-badges.module.css";

import { FilterContext } from "../filter/filter-provider.component";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

export default function FilterBadgesComponent() {
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  return (
    <div className={styles.filterbadges}>
      {selectedFilters.service.length ? (
        <span
          onClick={() =>
            setSelectedFilters((prev) => ({ ...prev, service: "" }))
          }
          className={styles.badge}
        >
          {selectedFilters.service}
          <MingcuteCloseFill />
        </span>
      ) : null}
      {selectedFilters.expertise.length ? (
        <span
          onClick={() =>
            setSelectedFilters((prev) => ({ ...prev, expertise: "" }))
          }
          className={styles.badge}
        >
          {selectedFilters.expertise}
          <MingcuteCloseFill />
        </span>
      ) : null}
    </div>
  );
}
