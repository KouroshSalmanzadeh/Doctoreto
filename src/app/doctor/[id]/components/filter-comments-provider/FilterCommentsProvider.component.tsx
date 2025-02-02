"use client";

import React, { createContext, ReactNode, useReducer } from "react";

import FilterCommentsReduceer, {
  Action,
  initialState,
} from "@/reducers/filter-comments-reduceer";

import { FilterComments } from "../../types/filter-comments";

type FilterCommentsContextType = {
  filterCommnets: FilterComments;
  dispatchComments: React.Dispatch<Action>;
};

type Props = {
  children: ReactNode;
};

export const FilterCommentsContext = createContext<FilterCommentsContextType>({
  filterCommnets: initialState,
  dispatchComments: () => {},
});

export default function FilterCommentsProviderComponent({ children }: Props) {
  const [filterCommnets, dispatchComments] = useReducer(
    FilterCommentsReduceer,
    initialState,
  );

  return (
    <FilterCommentsContext.Provider
      value={{ filterCommnets, dispatchComments }}
    >
      {children}
    </FilterCommentsContext.Provider>
  );
}
