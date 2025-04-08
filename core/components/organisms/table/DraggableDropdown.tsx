import * as React from 'react';
import { Button, Checkbox, Popover, Icon } from '@/index';
import { DropdownProps } from '@/index.type';
import { moveToIndex, getPluralSuffix } from '../grid/utility';
import dropdownStyles from '@css/components/dropdown.module.css';
import gridStyles from '@css/components/grid.module.css';

interface DraggableDropdownProps {
  options: DropdownProps['options'];
  onChange: (options: DropdownProps['options']) => void;
}

export const DraggableDropdown = (props: DraggableDropdownProps) => {
  const { options, onChange } = props;

  const [open, setOpen] = React.useState<boolean>(false);
  const [tempOptions, setTempOptions] = React.useState(options);
  const [triggerWidth, setTriggerWidth] = React.useState('var(--spacing-440)');

  React.useEffect(() => {
    setTempOptions(options);
  }, [open]);

  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempOptions(tempOptions.map((option) => ({ ...option, selected: e.target.checked })));
  };

  const handleChildChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOptions = [...tempOptions];
    newOptions[index] = {
      ...newOptions[index],
      selected: e.target.checked,
    };

    setTempOptions(newOptions);
  };

  const onToggleHandler = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onCancelHandler = () => {
    setOpen(false);
  };

  const onApplyHandler = () => {
    setOpen(false);

    if (onChange) onChange(tempOptions);
  };

  return (
    <div className={dropdownStyles['Dropdown']}>
      <Popover
        open={open}
        onToggle={onToggleHandler}
        trigger={
          <Button
            type="button"
            ref={(el) => {
              setTriggerWidth(`${el?.clientWidth}px`);
            }}
            size="tiny"
            appearance="transparent"
            icon="keyboard_arrow_down_filled"
            iconAlign="right"
          >
            {`Showing ${options.filter((option) => option.selected).length} of ${
              options.length
            } column${getPluralSuffix(options.length)}`}
          </Button>
        }
        triggerClass="w-100"
        customStyle={{
          width: triggerWidth,
        }}
        className={gridStyles['Header-draggableDropdown']}
      >
        <div className={gridStyles['Dropdown-wrapper']}>
          <div className="OptionWrapper">
            <Checkbox
              className={dropdownStyles['OptionCheckbox']}
              label="Select All"
              checked={tempOptions.every((option) => option.selected)}
              indeterminate={
                tempOptions.some((option) => option.selected) && tempOptions.some((option) => !option.selected)
              }
              onChange={handleParentChange}
            />
          </div>
          {tempOptions.map((option, index) => {
            return (
              <div
                data-test="DesignSystem-Table-Header--draggableDropdownOption"
                key={option.value}
                className="OptionWrapper d-flex flex-space-between align-items-center cursor-pointer"
                draggable={true}
                onDragStart={(e) => {
                  e.dataTransfer.setData('index', `${index}`);
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const from = +e.dataTransfer.getData('index');
                  const to = index;

                  if (from !== to) setTempOptions(moveToIndex(tempOptions, from, to));
                }}
              >
                <Checkbox
                  className={dropdownStyles['OptionCheckbox']}
                  name={option.value as string}
                  label={option.label}
                  checked={tempOptions[index].selected}
                  onChange={(e) => handleChildChange(e, index)}
                />
                <Icon name="drag_handle" className="mr-4" />
              </div>
            );
          })}
        </div>
        <div className={dropdownStyles['Dropdown-buttonWrapper']}>
          <Button type="button" className="mr-4" size="tiny" onClick={onCancelHandler}>
            Cancel
          </Button>
          <Button type="button" appearance="primary" size="tiny" onClick={onApplyHandler}>
            Apply
          </Button>
        </div>
      </Popover>
    </div>
  );
};
