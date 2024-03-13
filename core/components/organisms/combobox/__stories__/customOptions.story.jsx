import * as React from 'react';
import { Combobox, Label, Text, Badge } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const customOptions = () => {
  const providerList = [
    {
      name: 'Terry Wilson',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144309823',
    },
    {
      name: 'Ted Warren',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144379172',
    },
    {
      name: 'Tate Miles',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144335826',
    },
  ];

  const [filterList, setFilterList] = React.useState(providerList);

  const onChangeHandler = (inputValue) => {
    action('inputValue', inputValue)();
    const updatedList = providerList.filter((provider) =>
      provider.name.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Provider Name</Label>
      <Combobox onChange={onChangeHandler} className="w-50" icon="search" placeholder="Enter provider name">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.name, value: item }}>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Text>{item.name}</Text>
                      <Badge>{item.id}</Badge>
                    </div>
                    <Text size="small" appearance="subtle">
                      {item.position}
                    </Text>
                  </div>
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
  const providerList = [
    {
      name: 'Terry Wilson',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144309823',
    },
    {
      name: 'Ted Warren',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144379172',
    },
    {
      name: 'Tate Miles',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144335826',
    },
  ];

  const [filterList, setFilterList] = React.useState(providerList);

  const onChangeHandler = (inputValue) => {
    console.log('inputValue', inputValue);
    const updatedList = providerList.filter((provider) =>
      provider.name.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Provider Name</Label>
      <Combobox onChange={onChangeHandler} className="w-50" icon="search" placeholder='Enter provider name'>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.name, value: item }}>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Text>{item.name}</Text>
                      <Badge>{item.id}</Badge>
                    </div>
                    <Text size="small" appearance="subtle">
                      {item.position}
                    </Text>
                  </div>
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
  title: 'Components/Combobox/Custom Options',
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
