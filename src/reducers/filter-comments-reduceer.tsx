import { FilterComments } from "@/app/doctor/[id]/types/filter-comments";

export type Action =
  | {
      type: "update_filter";
      key: keyof FilterComments;
      payload: string;
    }
  | {
      type: "remove_filter";
      key: keyof FilterComments;
    };

export const initialState: FilterComments = {
  sortBy: "",
  query: "",
};

export default function FilterCommentsReduceer(
  state: FilterComments,
  action: Action,
): FilterComments {
  switch (action.type) {
    case "update_filter":
      return { ...state, [action.key]: action.payload };
    case "remove_filter":
      return { ...state, [action.key]: "" };
    default:
      return state;
  }
}
