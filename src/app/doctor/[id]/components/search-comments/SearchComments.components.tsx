"use client";

import React, { useContext, useState } from "react";

import styles from "./SearchComments.module.css";

import MingcuteCloseFill from "@/icons/MingcuteCloseFill";

import { FilterCommentsContext } from "../filter-comments-provider/FilterCommentsProvider.component";

type Props = {
  id: string;
  label: string;
  placeholder: string;
};

export default function SearchCommentsComponents({
  id,
  label,
  placeholder,
}: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatchComments } = useContext(FilterCommentsContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatchComments({ type: "update_filter", key: "query", payload: value });
  };

  const handleClear = () => {
    setSearchTerm("");
    dispatchComments({ type: "update_filter", key: "query", payload: "" });
  };

  return (
    <div className={styles.search}>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type="text"
        id={id}
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && <MingcuteCloseFill onClick={handleClear} />}
    </div>
  );
}
