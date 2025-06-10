import { Select, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const preFilledValue = () => {
  const areaCode = [
    { label: 'Alabama (205)', value: 'Alabama (205)' },
    { label: 'Alabama (251)', value: 'Alabama (251)' },
    { label: 'Alabama (256)', value: 'Alabama (256)' },
    { label: 'Alabama (334)', value: 'Alabama (334)' },
    { label: 'Alabama (938)', value: 'Alabama (938)' },
    { label: 'Arizona (520)', value: 'Arizona (520)' },
    { label: 'California (209)', value: 'California (209)' },
    { label: 'California (408)', value: 'California (408)' },
    { label: 'Colorado (719)', value: 'Colorado (719)' },
    { label: 'Connecticut (860)', value: 'Connecticut (860)' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  return (
    <div className="w-25">
      <Label withInput={true}>Area code</Label>
      <Select
        width="var(--spacing-640)"
        onSelect={onSelectHandler}
        value={{ label: 'Alabama (205)', value: 'Alabama (205)' }}
      >
        <Select.List>
          {areaCode.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
    </div>
  );
};

const customCode = `() => {
  const areaCode = [
    { label: 'Alabama (205)', value: 'Alabama (205)' },
    { label: 'Alabama (251)', value: 'Alabama (251)' },
    { label: 'Alabama (256)', value: 'Alabama (256)' },
    { label: 'Alabama (334)', value: 'Alabama (334)' },
    { label: 'Alabama (938)', value: 'Alabama (938)' },
    { label: 'Arizona (520)', value: 'Arizona (520)' },
    { label: 'California (209)', value: 'California (209)' },
    { label: 'California (408)', value: 'California (408)' },
    { label: 'Colorado (719)', value: 'Colorado (719)' },
    { label: 'Connecticut (860)', value: 'Connecticut (860)' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <div className="w-25">
      <Label withInput={true}>Area code</Label>
      <Select 
        width="var(--spacing-640)" 
        onSelect={onSelectHandler} 
        value={{ label: 'Alabama (205)', value: 'Alabama (205)' }}
      >
        <Select.List>
          {areaCode.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
    </div>
  );
}`;

export default {
  title: 'Components/Select/PreFilledValue',
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
