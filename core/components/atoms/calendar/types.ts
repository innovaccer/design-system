export type View = 'date' | 'month' | 'year';
export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export type DateType = number | Date;
export type State = {
  year?: number,
  month?: number,
  date?: number
};