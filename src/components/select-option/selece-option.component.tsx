"use client";

import { ReactElement, useContext, useEffect, useState } from "react";

import styles from "./select-option.module.css";
import MingcuteCloseFill from "@/icons/MingcuteCloseFill";
import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

type Props = {
  name: string;
  id: string;
  options: {
    id: number;
    value: string;
  }[];
  label?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function SeleceOptionComponent({
  name,
  id,
  options,
  label,
  ...props
}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { filters, Setfilters } = useContext(FilterContext);

  // ---------- clear expertises input when service input is filled ----------
  useEffect(() => {
    if (id === "expertises" && filters.service) {
      Setfilters((prev) => ({ ...prev, expertise: "" }));
    }
  }, [filters.service]);

  // ---------- clear service input when expertises input is filled ----------
  useEffect(() => {
    if (id === "services" && filters.expertise) {
      Setfilters((prev) => ({ ...prev, service: "" }));
    }
  }, [filters.expertise]);

  // ---------- clear inputs when badges are closed ----------
  useEffect(() => {
    if (id === "expertises" && filters.expertise !== searchTerm) {
      setSearchTerm("");
    } else if (id === "services" && filters.service !== searchTerm) {
      setSearchTerm("");
    }
  }, [filters.expertise, filters.service]);

  const filteredOptions = options.filter((option) =>
    option.value.includes(searchTerm),
  );

  const handleSelect = (value: string) => {
    setIsOpen(false);
    setSearchTerm(value);
    if (id === "expertises") {
      Setfilters((prev) => ({ ...prev, expertise: value }));
    } else if (id === "services") {
      Setfilters((prev) => ({ ...prev, service: value }));
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className={styles.select}
        name={name}
        id={id}
        {...props}
      />
      {searchTerm && <MingcuteCloseFill onClick={() => handleSelect("")} />}
      {isOpen && (
        <div className={styles["container-list"]}>
          <ul className={styles.list + " scroll"}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((item) => (
                <li
                  onMouseDown={() => handleSelect(item.value)}
                  className={styles.item}
                  key={item.id}
                  value={item.value}
                >
                  {item.value}
                </li>
              ))
            ) : (
              <li className={styles.not_found_text} key={0}>
                موردی یافت نشد!
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
