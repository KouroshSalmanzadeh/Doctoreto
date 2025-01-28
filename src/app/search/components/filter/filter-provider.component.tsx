"use client";

import React, { createContext, ReactNode, useEffect, useReducer } from "react";

type Props = {
  children: ReactNode;
  searchParams: {
    query?: string;
  };
}

type Filters = {
  service: string;
  expertise: string;
  plural: string;
  query: string | "";
};

type Action =
  | { type: "SET_SERVICE"; payload: string }
  | { type: "SET_EXPERTISE"; payload: string }
  | { type: "SET_PLURAL"; payload: string }
  | { type: "SET_QUERY"; payload: string }
  | { type: "CLEAR_ALL"; };

type FilterContextType = {
  filters: Filters;
  dispatch: React.Dispatch<Action>;
};

const initialState: Filters = {
  service: "",
  expertise: "",
  plural: "inPerson",
  query: "",
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
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "CLEAR_ALL":
      return { plural: "inPerson", service: "" , expertise:"" , query: ""};
    default:
      return state;
  }
};

export default function FilterComponent({ children, searchParams }: Props) {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(()=> {
  if (searchParams?.query) {
      dispatch({type: "SET_QUERY", payload: searchParams.query})
    }
  },[searchParams]);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
