import * as React from 'react';
import { Combobox, Text, Badge } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const grouping = () => {
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

  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const onChangeHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onChange={onChangeHandler}
      className="w-50"
    >
      {(contextProp) => {
        const filterList = providerList.filter((provider) =>
          provider.name.toLowerCase().includes(contextProp?.inputValue?.toLowerCase())
        );

        const medicalList = medicineList.filter((provider) =>
          provider.label.toLowerCase().includes(contextProp?.inputValue?.toLowerCase())
        );

        return (
          <div>
            <p>Group 1</p>
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

            <p>Group 2</p>

            <Combobox.List>
              {medicalList.map((item, key) => {
                return (
                  <Combobox.Option key={key} option={{ label: item.label, value: item }}>
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <Text>{item.label}</Text>
                        <Badge>{item.value}</Badge>
                      </div>
                      <Text size="small" appearance="subtle">
                        {item.label}
                      </Text>
                    </div>
                  </Combobox.Option>
                );
              })}
            </Combobox.List>
          </div>
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

  const onChangeHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onChange={onChangeHandler}
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
  title: 'Components/Combobox/Single Select/Grouping',
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
