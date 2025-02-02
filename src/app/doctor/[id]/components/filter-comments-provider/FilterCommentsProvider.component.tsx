"use client"

import React, { createContext, ReactNode, useReducer } from 'react'

import FilterCommentsReduceer, { Action, initialState } from '@/reducers/filter-comments-reduceer';

import { FilterComments } from '../../types/filter-comments';

type FilterCommentsContextType = {
  filterCommnets: FilterComments;
  dispatch: React.Dispatch<Action>;
}

type Props = {
  children: ReactNode;
};

export const FilterCommentsContext = createContext<FilterCommentsContextType>({
  filterCommnets: initialState,
  dispatch: () => { },
});


export default function FilterCommentsProviderComponent({ children }: Props) {
  const [filterCommnets, dispatch] = useReducer(FilterCommentsReduceer, initialState);

  return (
    <FilterCommentsContext.Provider value={{ filterCommnets, dispatch }}>
      {children}
    </FilterCommentsContext.Provider>
  );
}