import { Filters } from "@/app/search/types/filterTypes";

export type Action =
  | {
      type: "update_filter";
      key: keyof Filters;
      payload: string;
    }
  | {
      type: "remove_filter";
      key: keyof Filters;
    }
  | {
      type: "clear_all";
    };

export const initialState: Filters = {
  service: "",
  expertise: "",
  plural: "inPerson",
  query: "",
};

export function filtersReducer(state: Filters, action: Action): Filters {
  switch (action.type) {
    case "update_filter":
      return { ...state, [action.key]: action.payload };
    case "remove_filter":
      return { ...state, [action.key]: "" };
    case "clear_all":
      return { service: "", expertise: "", plural: "inPerson", query: "" };
    default:
      return state;
  }
}
