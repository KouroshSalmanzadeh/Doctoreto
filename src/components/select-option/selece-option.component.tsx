"use client";

import React, {
  ReactElement,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
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

const SeleceOptionComponent = React.memo(
  ({ name, id, options, label, ...props }: Props): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const { filters, dispatch } = useContext(FilterContext);

    // Memoized filtered options
    const filteredOptions = useMemo(() => {
      return options.filter((option) => option.value.includes(searchTerm));
    }, [options, searchTerm]);

    // Handle selection of an option
    const handleSelect = useCallback(
      (value: string) => {
        setIsOpen(false);
        setSearchTerm(value);
        if (id === "expertises") {
          dispatch({ type: "SET_EXPERTISE", payload: value });
        } else if (id === "services") {
          dispatch({ type: "SET_SERVICE", payload: value });
        }
      },
      [dispatch, id],
    );

    // Handle clearing the search term
    const handleClear = useCallback(() => {
      setSearchTerm("");
      if (id === "expertises") {
        dispatch({ type: "SET_EXPERTISE", payload: "" });
      } else if (id === "services") {
        dispatch({ type: "SET_SERVICE", payload: "" });
      }
    }, [dispatch, id]);

    // Clear expertises input when service input is filled
    useEffect(() => {
      if (id === "expertises" && filters.service) {
        dispatch({ type: "SET_EXPERTISE", payload: "" });
      }
    }, [filters.service, dispatch, id]);

    // Clear service input when expertises input is filled
    useEffect(() => {
      if (id === "services" && filters.expertise) {
        dispatch({ type: "SET_SERVICE", payload: "" });
      }
    }, [filters.expertise, dispatch, id]);

    // Clear search term when filters change
    useEffect(() => {
      if (id === "expertises" && filters.expertise !== searchTerm) {
        setSearchTerm("");
      } else if (id === "services" && filters.service !== searchTerm) {
        setSearchTerm("");
      }
    }, [filters.expertise, filters.service, searchTerm, id]);

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
        {searchTerm && <MingcuteCloseFill onClick={handleClear} />}
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
  },
);

SeleceOptionComponent.displayName = "SeleceOptionComponent"; // برای رفع ارور ESLint

export default SeleceOptionComponent;
