"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./type-search.module.css";
import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

export default function TypeSearchComponent() {
  const [resize, setResize] = useState<number>(0);

  const { setSelectedFilters } = useContext(FilterContext);

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const offsetLeft = (left: number) => {
    document.documentElement.style.setProperty(
      "--offset-left-active-type-search",
      left + "px",
    );
  };

  const offsetWidth = (width: number) => {
    document.documentElement.style.setProperty(
      "--offset-width-active-type-search",
      width + "px",
    );
  };

  useEffect(() => {
    const prevItem = document.querySelector(
      `span.${styles.active}`,
    ) as HTMLElement;

    offsetLeft(prevItem?.offsetLeft);
    offsetWidth(prevItem?.offsetWidth);

    return () => {
      offsetLeft(prevItem?.offsetLeft);
      offsetWidth(prevItem?.offsetWidth);
    };
  }, [resize]);

  const changeActiveType = (e: React.MouseEvent<HTMLElement>): void => {
    const prevItem = document.querySelector(`span.${styles.active}`);
    const currentItem = e.target as HTMLElement;

    prevItem?.classList.remove(styles.active);
    currentItem?.classList.add(styles.active);

    offsetLeft(currentItem?.offsetLeft);
    offsetWidth(currentItem?.offsetWidth);

    setSelectedFilters((prev) => ({ ...prev, serviceType: currentItem.id }));
  };

  return (
    <div className={styles.type_search}>
      <span onClick={changeActiveType} className={styles.active} id="in_person">
        حضوری
      </span>
      <span onClick={changeActiveType} id="online">
        چت آنلاین
      </span>
      <span onClick={changeActiveType} id="tell">
        تلفنی
      </span>
    </div>
  );
}
