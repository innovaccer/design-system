import * as React from 'react';
import { Combobox, Label, Listbox, ListboxItem, Text, Badge } from '@/index';

// CSF format story
export const autoComplete = () => {
  const providerList = [
    {
      name: 'James Wilson',
      data: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144335514',
    },
    {
      name: 'Jammy Nelson',
      data: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '8793792312',
    },
    {
      name: 'Jakob Locke',
      data: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '0908386282',
    },
  ];

  const [inputValue, setInputValue] = React.useState('');
  const [optionList, setOptionList] = React.useState(providerList);

  React.useEffect(() => {
    const filterList = providerList.filter((provider) =>
      provider.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptionList(filterList);
  }, [inputValue]);

  return (
    <div className="w-25">
      <Label>Provider name</Label>
      <Combobox
        inputValue={inputValue}
        inputOptions={{ placeholder: 'Enter Name' }}
        onInputChange={setInputValue}
        multiSelect={false}
      >
        <Listbox showDivider={false} size="compressed" className="Combobox-list">
          {optionList.map((options, key) => {
            return (
              <ListboxItem key={key} id={key} onClick={() => setInputValue(options.name)}>
                <div className="d-flex align-items-center w-100 justify-content-between mb-3">
                  <div className="d-flex justify-content-start">
                    <Text>{options.name}</Text>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Badge>{options.id}</Badge>
                  </div>
                </div>
                <Text appearance="subtle">{options.data}</Text>
              </ListboxItem>
            );
          })}
        </Listbox>
      </Combobox>
    </div>
  );
};

export default {
  title: 'Components/Combobox/Auto Complete',
  component: Combobox,
};
