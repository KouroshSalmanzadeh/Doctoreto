"use client";

import React, { createContext, useReducer } from "react";

type Filters = {
  service: string;
  expertise: string;
  plural: string;
};

type Action =
  | { type: "SET_SERVICE"; payload: string }
  | { type: "SET_EXPERTISE"; payload: string }
  | { type: "SET_PLURAL"; payload: string };

type FilterContextType = {
  filters: Filters;
  dispatch: React.Dispatch<Action>;
};

const initialState: Filters = {
  service: "",
  expertise: "",
  plural: "inPerson",
};

export const FilterContext = createContext<FilterContextType>({
  filters: initialState,
  dispatch: () => {},
});

const filtersReducer = (state: Filters, action: Action): Filters => {
  switch (action.type) {
    case "SET_SERVICE":
      return { ...state, service: action.payload };
    case "SET_EXPERTISE":
      return { ...state, expertise: action.payload };
    case "SET_PLURAL":
      return { ...state, plural: action.payload };
    default:
      return state;
  }
};

export default function FilterComponent({ children }: React.PropsWithChildren) {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
