import { Mask } from '@/utils/types';
import { DatePickerProps } from "@/index.type";

type DateFormat = DatePickerProps['inputFormat'];
export const date: Record<DateFormat, Mask> = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /\[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/],
};
