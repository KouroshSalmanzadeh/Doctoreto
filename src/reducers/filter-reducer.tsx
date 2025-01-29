import { Filters } from "@/app/search/types/filterTypes";

export type Action = {
    type: "set_service" | "set_expertise" | "set_plural" | "set_query" | "clear_all";
    payload: string;
}


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