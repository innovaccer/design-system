import * as React from 'react';
import { Combobox, Text, Badge } from '@/index';
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

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  const onChangeHandler = (value) => {
    action('input value', value)();
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      className="w-50"
    >
      {(contextProp) => {
        const filterList = providerList.filter((provider) =>
          provider.name.toLowerCase().includes(contextProp?.inputValue?.toLowerCase())
        );

        return (
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
        );
      }}
    </Combobox>
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

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const onChangeHandler = (value) => {
    console.log('input value', value);
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      className="w-50"
    >
      {(contextProp) => {
        const filterList = providerList.filter((provider) =>
          provider.name.toLowerCase().includes(contextProp.inputValue.toLowerCase())
        );

        return (
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
        );
      }}
    </Combobox>
  );
}`;

export default {
  title: 'Components/Combobox/Single Select/Custom Options',
  component: Combobox,
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
