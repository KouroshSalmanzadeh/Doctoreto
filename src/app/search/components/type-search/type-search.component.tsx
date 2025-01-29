"use client";

import { useContext, useEffect, useState, useCallback, useMemo } from "react";

import styles from "./type-search.module.css";

import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

import MingcuteChat1Line from "@/icons/MingcuteChat1Line";
import MingcuteHospitalLine from "@/icons/MingcuteHospitalLine";
import MingcutePhoneCallLine from "@/icons/MingcutePhoneCallLine";

export default function TypeSearchComponent() {
  const { filters, dispatch } = useContext(FilterContext);

  const [resize, setResize] = useState<number>(0);
  const [type, setType] = useState<string>("inPerson");

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateOffset = useCallback((element: HTMLElement | null) => {
    if (element) {
      document.documentElement.style.setProperty(
        "--selected-type-left",
        `${element.offsetLeft}px`,
      );
      document.documentElement.style.setProperty(
        "--selected-type-width",
        `${element.offsetWidth}px`,
      );
    }
  }, []);

  useEffect(() => {
    const activeElement = document.querySelector(
      `span.${styles.active}`,
    ) as HTMLElement;
    updateOffset(activeElement);
  }, [resize, type, updateOffset]);

  useEffect(() => {
    setType(filters.plural);
  }, [filters.plural]);

  const changeActiveType = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      const currentItem = e.currentTarget as HTMLElement;

      updateOffset(currentItem);

      dispatch({ type: "update_filter", key: "plural", payload: currentItem.id });
      setType(currentItem.id);
    },
    [dispatch, updateOffset],
  );

  const types = useMemo(
    () => [
      { id: "inPerson", label: "حضوری" },
      { id: "online", label: "چت آنلاین" },
      { id: "tell", label: "تلفنی" },
    ],
    [],
  );

  return (
    <div className={styles.type_search}>
      {types.map(({ id, label }) => (
        <span
          key={id}
          onClick={changeActiveType}
          className={`${type === id && styles.active}`}
          id={id}
        >
          {id === "inPerson" && <MingcuteHospitalLine />}
          {id === "online" && <MingcuteChat1Line />}
          {id === "tell" && <MingcutePhoneCallLine />}
          {label}
        </span>
      ))}
    </div>
  );
}
