import { InputProps } from "../../../index.type";
export declare const placeholders: {
    [key: string]: InputProps['placeholder'];
};
export declare const isPlaceholderPresent: (placeholderChar: string, time?: string | undefined) => boolean | "" | undefined;
export declare const isFormat12hour: (format: string) => boolean;
export declare const translateToTime: (format: string, time?: string | number | undefined) => string;
export declare const getTimeObjFromStr: (format: string, time: string) => {
    hours: number;
    minutes: number;
    am_pm: string;
};
export declare const getOutputTimeString: (inputFormat: string, outputFormat: string, time: string) => string;
