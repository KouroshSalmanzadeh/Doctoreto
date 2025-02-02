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

import { FilterCommentsContext } from "@/app/doctor/[id]/components/filter-comments-provider/FilterCommentsProvider.component";
import { FilterComments } from "@/app/doctor/[id]/types/filter-comments";

type Props = {
  name: string;
  id: string;
  options: {
    id: string | number;
    value: string;
  }[];
  contextType: 'main' | 'comments';
  label?: string;
} & React.ComponentPropsWithoutRef<"input">;

const SelectOptionComponent = React.memo(
  ({ name, id, options, label, contextType, ...props }: Props): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const { filters, dispatch } = useContext(FilterContext);
    const { dispatchComments } = useContext(FilterCommentsContext);

    const filteredOptions = useMemo(() => {
      return options.filter((option) => option.value.includes(searchTerm));
    }, [options, searchTerm]);

    const handleSelect = useCallback(
      (item: { id: string | number; value: string }) => {
        setIsOpen(false);
        setSearchTerm(item.value);
        if (contextType === "main") {
          if (id === "expertises") {
            dispatch({ type: "update_filter", key: "expertise", payload: item.value });
          } else if (id === "services") {
            dispatch({ type: "update_filter", key: "service", payload: item.value });
          }
        } else {
          dispatchComments({ type: "update_filter", key: "sortBy", payload: item.id as  FilterComments["sortBy"]});
        }
      },
      [dispatch, dispatchComments, id],
    );

    // Handle clearing the search term
    const handleClear = useCallback(() => {
      setSearchTerm("");
      if (contextType === "main") {
        if (id === "expertises") {
          dispatch({ type: "remove_filter", key: "expertise" });
        } else if (id === "services") {
          dispatch({ type: "remove_filter", key: "service" });
        }
      } else {
        dispatchComments({ type: "remove_filter", key: "sortBy" });
      }
    }, [dispatch, dispatchComments, id]);

    // Clear expertises input when service input is filled
    useEffect(() => {
      if (id === "expertises" && filters.service) {
        dispatch({ type: "remove_filter", key: "expertise" });
      }
    }, [filters.service, dispatch, id]);

    // Clear service input when expertises input is filled
    useEffect(() => {
      if (id === "services" && filters.expertise) {
        dispatch({ type: "remove_filter", key: "service" });
      }
    }, [filters.expertise, dispatch, id]);

    // Clear search term when filters change
    useEffect(() => {
      if (id === "expertises" && filters.expertise !== searchTerm) {
        setSearchTerm("");
      } else if (id === "services" && filters.service !== searchTerm) {
        setSearchTerm("");
      }
    }, [filters.expertise, filters.service, id]);

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
                    onMouseDown={() => handleSelect(item)}
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

SelectOptionComponent.displayName = "SelectOptionComponent";

export default SelectOptionComponent;
