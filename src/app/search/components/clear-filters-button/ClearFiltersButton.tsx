"use client";

import React, { useContext } from "react";

import { FilterContext } from "../filter/filter-provider.component";

import styles from "./clearFiltersButton.module.css";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

import { useRouter } from "next/navigation";

export default function ClearFiltersButton() {
  const router = useRouter();

  const { filters, dispatch } = useContext(FilterContext);

  const handleClick = () => {
    dispatch({ type: "clear_all" });
    router.push(`/search`);
  };

  if (
    !filters.service &&
    !filters.expertise &&
    filters.plural === "inPerson" &&
    !filters.query &&
    !filters.gender
  ) {
    return null;
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      حذف همه فیلتر ها
      <MingcuteCloseFill />
    </button>
  );
}
