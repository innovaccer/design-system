import * as React from 'react';
import { Combobox, Label, Listbox, ListboxItem, Text } from '@/index';

// CSF format story
export const multiSelect = () => {
  const populationList = [
    { label: 'Anyone', value: 'Anyone' },
    { label: 'Person with disability', value: 'Person with disability' },
    { label: 'Retired person from armed forces', value: 'Retired person from armed forces' },
    { label: 'Adults', value: 'Adults' },
    { label: 'Childrens', value: 'Childrens' },
    { label: 'Doctors', value: 'Doctors' },
  ];

  const [inputValue, setInputValue] = React.useState([]);
  const [optionList, setOptionList] = React.useState(populationList);

  React.useEffect(() => {
    // const filterList = populationList.filter(
    //   (data) => inputValue.includes(data.label)
    //   // medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    // );
    // setOptionList(filterList);
  }, [inputValue]);

  const onClickHandler = (options) => {
    console.log('optionsss', options);
    const newList = [...inputValue, options.label];
    setInputValue(newList);
  };

  return (
    <div className="w-25">
      <Label>Population focus</Label>
      <Combobox
        multiSelect={true}
        chipInputValue={inputValue}
        chipInputOptions={{ placeholder: 'Enter population focus' }}
      >
        {optionList.length > 0 ? (
          <Listbox showDivider={false} size="compressed" className="Combobox-list">
            {optionList.map((options, key) => {
              return (
                <ListboxItem key={key} id={key} onClick={() => onClickHandler(options)}>
                  {options.label}
                </ListboxItem>
              );
            })}
          </Listbox>
        ) : (
          <Text>No Result Found</Text>
        )}
      </Combobox>
    </div>
  );
};

export default {
  title: 'Components/Combobox/Multi Select',
  component: Combobox,
};
