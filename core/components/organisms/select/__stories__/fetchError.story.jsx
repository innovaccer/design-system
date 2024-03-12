import * as React from 'react';
import { Select, Button } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const fetchErrorTemplate = () => {
  const medicineList = [];
  const [searchTerm, setSearchTerm] = React.useState('');

  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const onClearHandler = () => {
    setSearchTerm('');
  };

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {medicineList.length === 0 ? (
        <Select.EmptyTemplate description="We couldn't load the data, try reloading." title="Failed to fetch data">
          <Button onClick={function () {}} size="tiny" aria-label="Reload" icon="refresh" iconAlign="left">
            Reload
          </Button>
        </Select.EmptyTemplate>
      ) : (
        <Select.List>
          {medicineList.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      )}
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [];
  const [ searchTerm , setSearchTerm ] = React.useState('');

  const onChangeHandler = (value) => {
    setSearchTerm(value)
  }

  const onClearHandler = () => {
    setSearchTerm('')
  }
  
  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder='Search'
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {medicineList.length === 0 ? (
        <Select.EmptyTemplate
          description="We couldn't load the data, try reloading."
          title="Failed to fetch data">
        <Button onClick={function(){}} size="tiny" aria-label="Reload" icon="refresh" iconAlign="left">Reload</Button>
        </Select.EmptyTemplate>
      ) : (
      <Select.List>
          {medicineList.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
      </Select.List>
      )}
    </Select>
  );
}`;

export default {
  title: 'Components/Select/FetchErrorTemplate',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
    'Select.SearchInput': Select.SearchInput,
    'Select.EmptyTemplate': Select.EmptyTemplate,
    'Select.Footer': Select.Footer,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Select',
        customCode,
      },
    },
  },
};
