export type Size = 'small' | 'large';
export type View = 'date' | 'month' | 'year';
export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export type DateFormat = 'mm/dd/yyyy' | 'dd/mm/yyyy' | 'yyyy/mm/dd' | 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd';
export type DateObject = {
  year: number;
  month: number;
  date: number;
};
export type DateType = number | Date | string;
export type Events = { [key: string]: boolean };
