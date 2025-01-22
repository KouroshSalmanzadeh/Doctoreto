"use client";

import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { createContext, useState } from "react";

type SelectedFilters = {
  service: string;
  expertise: string;
  plural: string;
};

type FilterContextType = {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
};

export const FilterContext = createContext<FilterContextType>({
  selectedFilters: {
    service: "",
    expertise: "",
    plural: "inPerson",
  },
  setSelectedFilters: () => {},
});

export default function FilterComponent({ children }: PropsWithChildren) {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    service: "",
    expertise: "",
    plural: "inPerson",
  });

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
