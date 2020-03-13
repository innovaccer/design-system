import * as React from 'react';
import Checkbox from '@/components/atoms/checkbox';

export type Size = 'regular' | 'tiny';

export interface ICheckboxProps {
  size?: Size;
  checked?: boolean;
  label: string;
  value: any;
  onChange?: (checked: boolean) => void;
}

export interface IListCheckboxProps {
  label?: string;
  checked?: boolean;
  list: ICheckboxProps[];
  onChange?: (childArray: boolean[]) => void;
}

const ListCheckbox = React.forwardRef<HTMLInputElement, IListCheckboxProps>((props, ref) => {
  const {
    list,
    onChange,
    label,
  } = props;

  const childArray = props.checked ? Array(list.length).fill(props.checked) : [];

  if (!props.checked) {
    list.map(item => {
      const { checked: childChecked = false } = item;
      childArray.push(childChecked);
    });
  }

  const calcParentStatus = (listArray: boolean[]) => {
    const totalCount = list.length;
    const countT = listArray.filter(Boolean).length;
    const status = countT < totalCount;
    const obj = (countT > 0) ? { checked: !status, intermediate: status } : { checked: !status, intermediate: false };
    return obj;
  };

  const getValuesArray = () => {
    const values: any[] = [];
    list.map(item => {
      const { value } = item;
      values.push(value);
    });

    return values;
  };

  const getSelectedValues = (checkedValues: boolean[]) => {
    const selectedValues = getValuesArray();
    const values: any[] = [];
    checkedValues.map((value, ind) => {
      if (value) values.push(selectedValues[ind]);
    });

    return values;
  };

  const childStatus = childArray.every(value => {
    return (value === false);
  });

  const parent = { checked: props.checked ? props.checked : false, intermediate: false };
  const parentObj = (childStatus) ? parent : calcParentStatus(childArray);
  const [parentStatus, setParentStatus] = React.useState(parentObj);
  const [checked, setChecked] = React.useState(childArray);
  const [selectedArray, setSelectedArray] = React.useState(getSelectedValues(checked));

  React.useEffect(() => {
    setParentStatus({ ...parentStatus, checked: props.checked! });
  }, [props.checked]);

  const handleChildChange = (checkedValue: boolean, index: number) => {
    const updateCheck = [...checked];
    updateCheck[index] = checkedValue;
    const obj = calcParentStatus(updateCheck);
    setChecked(updateCheck);
    setParentStatus(obj);
    if (onChange) {
      const { value } = list[index];
      if (!checkedValue) {
        const ind = selectedArray.indexOf(value);
        selectedArray.splice(ind, 1);
      }
      const selectedValues = checkedValue ? selectedArray.concat(value) : selectedArray;
      setSelectedArray(selectedValues);
      onChange(selectedValues);
    }
  };

  const handleParentChange = (checkedValue: boolean) => {
    const updatedArray = [...childArray].fill(checkedValue);
    setChecked(updatedArray);
    if (checkedValue) {
      setParentStatus({ checked: checkedValue, intermediate: !checkedValue });
    }
    if (onChange) {
      const selectedValues = checkedValue ? getValuesArray() : [];
      setSelectedArray(selectedValues);
      onChange(selectedValues);
    }
  };

  return (
    <div>
      <Checkbox
        ref={ref}
        label={label}
        onChange={handleParentChange}
        checked={parentStatus.checked}
        intermediate={parentStatus.intermediate}
      />
      {
        list.map((item, ind) => {
          const { label: childLabel, size, onChange: childOnChange } = item;
          return (
            <Checkbox
              key={`checkbox-${ind}`}
              label={childLabel}
              checked={checked[ind]}
              size={size}
              onChange={c => {
                handleChildChange(c, ind);
                if (childOnChange) childOnChange(checked[ind]);
              }}
            />
          );
        })
      }
    </div>
  );
});

export default ListCheckbox;
