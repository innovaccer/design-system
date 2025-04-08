import * as React from 'react';
import { Select, Button, AIIconButton, Text } from '@/index';
import { action } from '@/utils/action';
import './style.css';

// CSF format story
export const customTrigger = () => {
  /**
   *
   *  .Button-primary--active  {
   *     background-color: var(--primary-darker);
   *  }
   *
   *  .AIButton-secondary--active {
   *    background-color: var(--secondary-dark);
   *    color: var(--secondary-dark)  !important;
   *  }
   *
   *  .Button-secondary--active {
   *     background-color: var(--secondary-dark);
   *  }
   */

  const [isStatusSelectOpen, setStatusSelectOpen] = React.useState(false);
  const [isRecordSelectOpen, setRecordSelectOpen] = React.useState(false);
  const [isOverviewSelectOpen, setOverviewSelectOpen] = React.useState(false);
  const [selectedDevelopmentStatus, setSelectedDevelopmentStatus] = React.useState({
    label: 'Development',
    value: 'Development',
  });

  const statusOptions = [
    { label: 'Published', value: 'Published' },
    { label: 'Finalized for publishing', value: 'Finalized for publishing' },
    { label: 'Signed', value: 'Signed' },
  ];

  const recordOptions = [
    { label: 'L1.xyz_table.sample_record', value: 'L1.sample_record', subInfo: 'Probability Score: 88%' },
    { label: 'L1.xyz_table.last_name', value: 'L1.last_name', subInfo: 'Probability Score: 61%' },
  ];

  const overviewOptions = [
    { label: 'Development', value: 'Development' },
    { label: 'Finalized', value: 'Finalized' },
  ];

  const onStatusSelect = (selectedOption) => {
    action('selectedOption', selectedOption);
    setStatusSelectOpen(false);
  };

  const onRecordSelect = (selectedOption) => {
    action('selectedOption', selectedOption);
    setRecordSelectOpen(false);
  };

  const onOverviewSelect = (selectedOption) => {
    action('selectedOption', selectedOption);
    setOverviewSelectOpen(false);
    setSelectedDevelopmentStatus(selectedOption);
  };

  const onToggleStatusSelect = (isOpen) => {
    setStatusSelectOpen(isOpen);
  };

  const onToggleRecordSelect = (isOpen) => {
    setRecordSelectOpen(isOpen);
  };

  const onToggleOverviewSelect = (isOpen) => {
    setOverviewSelectOpen(isOpen);
  };

  const getStatusLabel = () => {
    return selectedDevelopmentStatus ? selectedDevelopmentStatus.label : 'Select';
  };

  return (
    <div className="d-flex justify-content-around">
      <Select
        onSelect={onStatusSelect}
        onToggle={onToggleStatusSelect}
        trigger={
          <Button
            appearance="primary"
            className={isStatusSelectOpen ? 'Button-primary--active' : ''}
            icon={isStatusSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            Updated status for P1
          </Button>
        }
      >
        <Select.List>
          {statusOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        popoverWidth="var(--spacing-640)"
        onSelect={onRecordSelect}
        onToggle={onToggleRecordSelect}
        trigger={
          <AIIconButton
            className={isRecordSelectOpen ? 'AIButton-secondary--active' : ''}
            icon="import_contacts"
            type="button"
          />
        }
      >
        <Select.List>
          <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
            Mapping suggestions
          </Text>
          {recordOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex flex-column">
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                  {item.subInfo}
                </Text>
              </div>
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        onSelect={onOverviewSelect}
        onToggle={onToggleOverviewSelect}
        value={selectedDevelopmentStatus}
        trigger={
          <Button
            appearance="transparent"
            className={isOverviewSelectOpen ? 'Button-secondary--active' : ''}
            icon={isOverviewSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            {getStatusLabel()}
          </Button>
        }
      >
        <Select.List>
          {overviewOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
    </div>
  );
};

const customCode = `() => {
    /**
   *
   *  .Button-primary--active  {
   *     background-color: var(--primary-darker);
   *  }
   *
   *  .AIButton-secondary--active {
   *    background-color: var(--secondary-dark);
   *    color: var(--secondary-dark)  !important;
   *  }
   *
   *  .Button-secondary--active {
   *     background-color: var(--secondary-dark);
   *  }
   */

  const [isStatusSelectOpen, setStatusSelectOpen] = React.useState(false);
  const [isRecordSelectOpen, setRecordSelectOpen] = React.useState(false);
  const [isOverviewSelectOpen, setOverviewSelectOpen] = React.useState(false);
  const [selectedDevelopmentStatus, setSelectedDevelopmentStatus] = React.useState({
    label: 'Development',
    value: 'Development',
  });

  const statusOptions = [
    { label: 'Published', value: 'Published' },
    { label: 'Finalized for publishing', value: 'Finalized for publishing' },
    { label: 'Signed', value: 'Signed' },
  ];

  const recordOptions = [
    { label: 'L1.xyz_table.sample_record', value: 'L1.sample_record', subInfo: 'Probability Score: 88%' },
    { label: 'L1.xyz_table.last_name', value: 'L1.last_name', subInfo: 'Probability Score: 61%' },
  ];

  const overviewOptions = [
    { label: 'Development', value: 'Development' },
    { label: 'Finalized', value: 'Finalized' },
  ];

  const onStatusSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setStatusSelectOpen(false);
  };

  const onRecordSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setRecordSelectOpen(false);
  };

  const onOverviewSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setOverviewSelectOpen(false);
    setSelectedDevelopmentStatus(selectedOption);
  };

  const onToggleStatusSelect = (isOpen) => {
    setStatusSelectOpen(isOpen);
  };

  const onToggleRecordSelect = (isOpen) => {
    setRecordSelectOpen(isOpen);
  };

  const onToggleOverviewSelect = (isOpen) => {
    setOverviewSelectOpen(isOpen);
  };

  const getStatusLabel = () => {
    return selectedDevelopmentStatus ? selectedDevelopmentStatus.label : 'Select';
  };

  return (
    <div className="d-flex justify-content-around">
      <Select
        onSelect={onStatusSelect}
        onToggle={onToggleStatusSelect}
        trigger={
          <Button
            appearance="primary"
            className={isStatusSelectOpen ? 'Button-primary--active' : ''}
            icon={isStatusSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            Updated status for P1
          </Button>
        }
      >
        <Select.List>
          {statusOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        popoverWidth="var(--spacing-640)"
        onSelect={onRecordSelect}
        onToggle={onToggleRecordSelect}
        trigger={
          <AIIconButton
            className={isRecordSelectOpen ? 'AIButton-secondary--active' : ''}
            icon="import_contacts"
            type="button"
          />
        }
      >
        <Select.List>
          <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
            Mapping suggestions
          </Text>
          {recordOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex flex-column">
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                  {item.subInfo}
                </Text>
              </div>
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        onSelect={onOverviewSelect}
        onToggle={onToggleOverviewSelect}
        value={selectedDevelopmentStatus}
        trigger={
          <Button
            appearance="transparent"
            className={isOverviewSelectOpen ? 'Button-secondary--active' : ''}
            icon={isOverviewSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            {getStatusLabel()}
          </Button>
        }
      >
        <Select.List>
          {overviewOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
    </div>
  );
}`;

export default {
  title: 'Components/Select/Custom Trigger',
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
