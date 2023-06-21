import { OptionSchema as Option } from '@/components/atoms/dropdown/option';

export const _isEqual = (firstList: Option[], secondList: Option[]) => {
  return (
    firstList.every((option, index) => option.selected === secondList[index].selected) &&
    firstList.every((option, index) => option.value === secondList[index].value)
  );
};
