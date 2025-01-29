import { Filters } from "@/app/search/types/filterTypes";

export type Action =
    | { type: "set_service"; payload: string }
    | { type: "set_expertise"; payload: string }
    | { type: "set_plural"; payload: string }
    | { type: "set_query"; payload: string }
    | { type: "clear_all" };

export const initialState: Filters = {
    service: "",
    expertise: "",
    plural: "inPerson",
    query: "",
};

export function filtersReducer(state: Filters, action: Action): Filters {
    switch (action.type) {
        case "set_service":
            return { ...state, service: action.payload };
        case "set_expertise":
            return { ...state, expertise: action.payload };
        case "set_plural":
            return { ...state, plural: action.payload };
        case "set_query":
            return { ...state, query: action.payload };
        case "clear_all":
            return { plural: "inPerson", service: "", expertise: "", query: "" };
        default:
            return state;
    }
};