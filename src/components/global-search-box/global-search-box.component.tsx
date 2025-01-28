"use client"

import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";

import styles from "./global-search-box.module.css";

import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import { useRouter } from "next/navigation";
import HandleSearchFunc from "@/utils/HandleSearchFunc";
import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

type Props = {
  className?: string;
}

export default function GlobalSearchBoxComponent({className}: Props): ReactElement {
  
  const { filters } = useContext(FilterContext);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [imputValue, setInputvalue] = useState<string | undefined>("");

  useEffect(()=>{
    setInputvalue(filters.query);
  },[filters.query])

  useEffect(() => {
    const handleSearch = (e: KeyboardEvent) => {
      if (e.code === "Enter" && inputRef.current?.value) {
        const query = inputRef.current.value.trim();

        if (query) {
          HandleSearchFunc(router, query);
        }
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keydown", handleSearch);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleSearch);
      }
    };
  }, [router]);

  return (
    <div className={`${styles["global-search-box"]} ${className ? className : ""}`}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={imputValue}
        onChange={(e)=>setInputvalue(e.currentTarget.value)}
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
