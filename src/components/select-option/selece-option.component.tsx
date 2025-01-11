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

  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  // ---------- clear specialties input when service input is filled ----------
  useEffect(() => {
    if (id === "specialties" && selectedFilters.service) {
      setSelectedFilters((prev) => ({ ...prev, specialtie: "" }));
    }
  }, [selectedFilters.service]);

  // ---------- clear service input when specialties input is filled ----------
  useEffect(() => {
    if (id === "services" && selectedFilters.specialtie) {
      setSelectedFilters((prev) => ({ ...prev, service: "" }));
    }
  }, [selectedFilters.specialtie]);

  // ---------- clear inputs when badges are closed ----------
  useEffect(() => {
    if (id === "specialties" && selectedFilters.specialtie !== searchTerm) {
      setSearchTerm("");
    } else if (id === "services" && selectedFilters.service !== searchTerm) {
      setSearchTerm("");
    }
  }, [selectedFilters.specialtie, selectedFilters.service]);

  const filteredOptions = options.filter((option) =>
    option.value.includes(searchTerm),
  );

  const handleSelect = (value: string) => {
    setIsOpen(false);
    setSearchTerm(value);
    if (id === "specialties") {
      setSelectedFilters((prev) => ({ ...prev, specialtie: value }));
    } else if (id === "services") {
      setSelectedFilters((prev) => ({ ...prev, service: value }));
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
              <li
                key={0}
                style={{
                  cursor: "default",
                  color: "#999",
                  textAlign: "center",
                }}
              >
                موردی یافت نشد!
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
