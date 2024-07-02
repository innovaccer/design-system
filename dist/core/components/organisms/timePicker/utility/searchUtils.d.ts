import { OptionSchema } from "../../../atoms/dropdown/option";
export declare const formatSearchTerm: (optionList: string[], searchTerm: string) => {
    hour: string;
    min: string;
};
export declare const getSearchIndex: (optionList: string[], searchTerm: string) => number;
export declare const getScrollIndex: (dropdownOptionList: OptionSchema[], searchTerm: string) => number;
