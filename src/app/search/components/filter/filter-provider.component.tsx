"use client";

import React, { createContext, ReactNode, useEffect, useReducer } from "react";

import { Filters } from "@/app/search/types/filterTypes";

import {
  Action,
  filtersReducer,
  initialState,
} from "@/reducers/filter-reducer";

type Props = {
  children: ReactNode;
  searchParams: {
    query?: string;
  };
};

type FilterContextType = {
  filters: Filters;
  dispatch: React.Dispatch<Action>;
};

export const FilterContext = createContext<FilterContextType>({
  filters: initialState,
  dispatch: () => {},
});

export default function FilterComponent({ children, searchParams }: Props) {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    if (searchParams?.query) {
      dispatch({
        type: "update_filter",
        key: "query",
        payload: searchParams.query,
      });
    }
  }, [searchParams]);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
