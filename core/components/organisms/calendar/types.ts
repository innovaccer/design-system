export type View = 'date' | 'month' | 'year';
export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export type DateFormat = 'mm/dd/yy' | 'dd/mm/yy' | 'yy/mm/dd' | 'mm-dd-yy' | 'dd-mm-yy' | 'yy-mm-dd';
export type DateObject = {
  year: number,
  month: number,
  date: number
};
export type DateType = number | Date | string;
export type State = {
  year?: number,
  month?: number,
  date?: number
};