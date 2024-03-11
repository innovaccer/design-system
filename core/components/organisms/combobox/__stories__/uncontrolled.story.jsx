import * as React from 'react';
import { Combobox, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const uncontrolled = () => {
  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    { label: 'Lack of readiness to change', value: 'Lack of readiness to change' },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    action(' inputValue', inputValue)();
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label?.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} className="w-50" placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
};

const customCode = `() => {
  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    { label: 'Lack of readiness to change', value: 'Lack of readiness to change' },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    console.log(' inputValue', inputValue);
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} className="w-50" placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/Uncontrolled',
  component: Combobox,
  subcomponents: { 'Combobox.List': Combobox.List, 'Combobox.Option': Combobox.Option },
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
