import * as React from 'react';
import { Combobox, Label, Tooltip, Text } from '@/index';
import { action } from '@/utils/action';
import './style.css';

// CSF format story
export const overflowBehavior = () => {
  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    {
      label: 'Lack of readiness to change with environment',
      value: 'Lack of readiness to change with environment',
    },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    action('inputValue', inputValue)();
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label?.toLowerCase())
    );

    setFilterList(updatedList);
  };

  const ComboboxItem = ({ item }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Combobox.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-inline-block w-100">
            {item.label}
          </Text>
        </Combobox.Option>
      </Tooltip>
    );
  };

  return (
    <div className="Combobox-outerWrapper">
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return <ComboboxItem item={item} key={key} />;
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
};

const customCode = `() => {

  /*
    .Combobox-outerWrapper {
      max-width: var(--spacing-640);
    }
  */

  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    {
      label: 'Lack of readiness to change with environment',
      value: 'Lack of readiness to change with environment',
    },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    console.log('inputValue', inputValue);
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  const ComboboxItem = ({ item }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Combobox.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-inline-block w-100">
            {item.label}
          </Text>
        </Combobox.Option>
      </Tooltip>
    );
  };

  return (
    <div className="Combobox-outerWrapper">
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return <ComboboxItem item={item} key={key} />;
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/Overflow Behavior',
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
