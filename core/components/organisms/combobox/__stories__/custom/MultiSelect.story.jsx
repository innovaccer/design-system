import * as React from 'react';
import { ChipInput, Popover, Combobox, Listbox, ListboxItem, Text, Label } from '@/index';

const ComboboxTrigger = ({ inputValue, onChange }) => {
  return <ChipInput placeholder="Select Medicine Name" value={inputValue} onChange={(e) => onChange(e.target.value)} />;
};

export const multiSelect = () => {
  const populationList = [
    { label: 'Anyone', value: 'Anyone' },
    { label: 'Person with disability', value: 'Person with disability' },
    { label: 'Retired person from armed forces', value: 'Retired person from armed forces' },
    { label: 'Adults', value: 'Adults' },
    { label: 'Children', value: 'Children' },
    { label: 'Doctors', value: 'Doctors' },
  ];

  const triggerRef = React.createRef();
  const [popoverStyle, setPopoverStyle] = React.useState();
  const [inputValue, setInputValue] = React.useState(['Anyone', 'Person with disability']);
  const [optionList, setOptionList] = React.useState(populationList);

  React.useEffect(() => {
    const filterList = populationList.filter((population) =>
      population.label.toLowerCase().includes(inputValue[0]?.toLowerCase())
    );
    setOptionList(filterList);
  }, [inputValue]);

  React.useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  const onClickHandler = (options) => {
    // console.log('optionsss', options);
    const newList = [...inputValue, options.label];
    setInputValue(newList);
  };

  return (
    <div className="w-25">
      <Label>Population focus</Label>
      <div ref={triggerRef} className="w-100 position-relative">
        <Popover
          on="click"
          triggerClass="w-100"
          customStyle={popoverStyle}
          className="Combobox-wrapper"
          trigger={<ComboboxTrigger inputValue={inputValue} onChange={setInputValue} />}
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
        </Popover>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Combobox/Custom/Multi Select',
  component: Combobox,
};
