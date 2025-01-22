"use client";

import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { createContext, useState } from "react";

type filters = {
  service: string;
  expertise: string;
  plural: string;
};

type FilterContextType = {
  filters: filters;
  Setfilters: Dispatch<SetStateAction<filters>>;
};

export const FilterContext = createContext<FilterContextType>({
  filters: {
    service: "",
    expertise: "",
    plural: "inPerson",
  },
  Setfilters: () => {},
});

export default function FilterComponent({ children }: PropsWithChildren) {
  const [filters, Setfilters] = useState<filters>({
    service: "",
    expertise: "",
    plural: "inPerson",
  });

  return (
    <FilterContext.Provider value={{ filters, Setfilters }}>
      {children}
    </FilterContext.Provider>
  );
}
