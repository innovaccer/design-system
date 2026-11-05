export declare const getCurrentYear: () => number;
export declare const getCurrentMonth: () => number;
export declare const getCurrentWeek: () => {
    startDate: Date;
    endDate: Date;
};
export declare const getPreviousWeek: () => {
    startDate: Date;
    endDate: Date;
};
export declare const getPreviousMonth: () => {
    endDate: Date;
    startDate: Date;
};
export declare const getPrevious90Days: () => {
    startDate: Date;
    endDate: Date;
};
export declare const getCustomDates: () => {
    startDate: string;
    endDate: string;
};
