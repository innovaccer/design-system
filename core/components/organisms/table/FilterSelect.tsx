import * as React from 'react';
import { Select, Button, Tooltip, Text } from '@/index';
import { OptionType } from '@/common.type';
import { ColumnSchema } from '../grid/Grid';

export interface FilterSelectProps {
  /**
   * Column name for filter identification
   */
  name: ColumnSchema['name'];
  /**
   * Display name for the filter
   */
  displayName: string;
  /**
   * Filter options array
   */
  filters: OptionType[];
  /**
   * Current filter list from state
   */
  filterList: Record<string, any[]>;
  /**
   * Callback when filter selection changes
   */
  onChange: (name: string, selected: any[]) => void;
  /**
   * Filter options configuration
   */
  filterOptions?: {
    selectionType?: 'singleSelect' | 'multiSelect';
    minWidth?: number | string;
    maxWidth?: number | string;
    maxVisibleSelection?: number;
  };
  /**
   * @deprecated Use filterOptions.selectionType instead
   * Backward compatibility for filterType
   */
  filterType?: 'singleSelect' | 'multiSelect';
  /**
   * Additional className
   */
  className?: string;
  /**
   * Custom trigger element (for Grid icon-only button)
   */
  customTrigger?: React.ReactElement;
}

export const FilterSelect: React.FC<FilterSelectProps> = (props) => {
  const {
    name,
    displayName,
    filters,
    filterList,
    onChange,
    filterOptions,
    filterType,
    className = 'my-0 mx-3',
    customTrigger,
  } = props;

  const isMultiSelect = filterOptions?.selectionType
    ? filterOptions.selectionType === 'multiSelect'
    : filterType
    ? filterType === 'multiSelect'
    : true;

  const [tempSelected, setTempSelected] = React.useState<OptionType[]>([]);
  const [appliedSelected, setAppliedSelected] = React.useState<OptionType[]>([]);
  const [checkedState, setCheckedState] = React.useState<'unchecked' | 'checked' | 'indeterminate'>('unchecked');
  const [hasChanges, setHasChanges] = React.useState<boolean>(false);
  const selectRef = React.useRef<any>(null);

  React.useEffect(() => {
    const selectedValues = filterList[name] || [];
    const selectedOptions = filters.filter((f) => selectedValues.includes(f.value));

    const formattedOptions = selectedOptions.map((option) => ({
      label: option.label,
      value: option.value,
      id: option.id || option.value,
    }));

    setAppliedSelected(formattedOptions);
    setTempSelected(formattedOptions);

    if (isMultiSelect) {
      if (formattedOptions.length === filters.length && filters.length > 0) {
        setCheckedState('checked');
      } else if (formattedOptions.length === 0) {
        setCheckedState('unchecked');
      } else {
        setCheckedState('indeterminate');
      }
    }
  }, [filterList, name, filters, isMultiSelect]);

  const selectOptions = React.useMemo(() => {
    return filters.map((option) => {
      const isSelected = tempSelected.some((selected) => selected.value === option.value);
      return {
        ...option,
        isSelectedOption: isSelected,
      };
    });
  }, [filters, tempSelected]);

  React.useEffect(() => {
    if (!isMultiSelect) return;

    const selectedCount = filters.filter((option) =>
      tempSelected.some((selected) => selected.value === option.value)
    ).length;

    if (selectedCount === filters.length && filters.length > 0) {
      setCheckedState('checked');
    } else if (selectedCount === 0) {
      setCheckedState('unchecked');
    } else {
      setCheckedState('indeterminate');
    }
  }, [tempSelected, filters, isMultiSelect]);

  React.useEffect(() => {
    if (!isMultiSelect) return;

    const hasSelectionChanged =
      tempSelected.length !== appliedSelected.length ||
      tempSelected.some((temp) => !appliedSelected.some((applied) => applied.value === temp.value)) ||
      appliedSelected.some((applied) => !tempSelected.some((temp) => temp.value === applied.value));

    setHasChanges(hasSelectionChanged);
  }, [tempSelected, appliedSelected, isMultiSelect]);

  const handleSelectAllClick = () => {
    if (!isMultiSelect) return;

    if (checkedState === 'checked') {
      setTempSelected([]);
    } else {
      setTempSelected([...filters]);
    }
  };

  const onSelectHandler = (selected?: OptionType | OptionType[]) => {
    if (!selected) {
      setTempSelected([]);
      if (!isMultiSelect) {
        onChange(name, []);
        setAppliedSelected([]);
      }
      return;
    }

    const selectedArray = Array.isArray(selected) ? selected : [selected];

    const filteredSelection = selectedArray.filter((option) => option.value !== 'SelectAll');

    setTempSelected(filteredSelection);

    if (!isMultiSelect) {
      const values = filteredSelection.map((item) => item.value);
      onChange(name, values);
      setAppliedSelected(filteredSelection);
      selectRef.current?.setOpen(false);
    }
  };

  const onApplyHandler = () => {
    const values = tempSelected.map((item) => item.value);
    onChange(name, values);
    setAppliedSelected(tempSelected);
    setHasChanges(false);
    selectRef.current?.setOpen(false);
  };

  const onCancelHandler = () => {
    setTempSelected(appliedSelected);
    setHasChanges(false);
    selectRef.current?.setOpen(false);
  };

  const onClearHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setTempSelected([]);
    setAppliedSelected([]);
    setCheckedState('unchecked');
    onChange(name, []);
  };

  const onToggleHandler = (open: boolean) => {
    if (!open) {
      if (isMultiSelect) {
        setTempSelected(appliedSelected);
        setHasChanges(false);
      }
    }
  };

  const selectValue = isMultiSelect ? tempSelected : appliedSelected[0] || { label: '', value: '' };

  const customSetLabel = isMultiSelect
    ? () => {
        const tempCount = tempSelected.length;
        if (tempCount === 0) return undefined;

        const maxVisible = filterOptions?.maxVisibleSelection || 2;

        if (maxVisible !== undefined && tempCount <= maxVisible) {
          return tempSelected.map((option) => option.label).join(', ');
        }

        return `${tempCount} selected`;
      }
    : undefined;

  const triggerOptions = {
    inlineLabel: displayName,
    icon: 'filter_list',
    placeholder: displayName,
    withClearButton: tempSelected.length > 0,
    onClear: onClearHandler,
    setLabel: customSetLabel,
    minWidth: filterOptions?.minWidth || '72px',
    maxWidth: filterOptions?.maxWidth || '256px',
  };

  const SelectItem: React.FC<{ option: OptionType; index: number }> = ({ option, index }) => {
    const elementRef = React.useRef<HTMLElement>(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
      <Tooltip showOnTruncation={true} tooltip={option.label} elementRef={elementRef} open={showTooltip}>
        <Select.Option key={`${option.value}-${index}`} option={option}>
          <Text
            ref={elementRef}
            className="ellipsis--noWrap d-block w-100"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {option.label}
          </Text>
        </Select.Option>
      </Tooltip>
    );
  };

  const minWidthValue = filterOptions?.minWidth
    ? typeof filterOptions.minWidth === 'string'
      ? parseFloat(filterOptions.minWidth.replace('px', ''))
      : filterOptions.minWidth
    : 176;
  const minWidth = minWidthValue < 176 ? 176 : minWidthValue;

  return (
    <div className={className} data-test="DesignSystem-FilterSelect">
      <Select
        ref={selectRef}
        multiSelect={isMultiSelect}
        onSelect={onSelectHandler}
        value={selectValue}
        width="auto"
        triggerOptions={customTrigger ? undefined : triggerOptions}
        trigger={customTrigger}
        onToggle={onToggleHandler}
        maxHeight={256}
        popoverWidth={'auto'}
      >
        <div style={{ minWidth, maxWidth: filterOptions?.maxWidth }}>
          <Select.List>
            {isMultiSelect && filters.length > 0 && (
              <Select.Option
                checkedState={checkedState}
                onClick={handleSelectAllClick}
                option={{ id: 'select-all', label: 'Select All', value: 'SelectAll' }}
              >
                Select All
              </Select.Option>
            )}
            {selectOptions.length > 0 ? (
              selectOptions.map((option, index) => (
                <SelectItem key={`${option.value}-${index}`} option={option} index={index} />
              ))
            ) : (
              <Select.EmptyTemplate />
            )}
          </Select.List>
        </div>
        {isMultiSelect && (
          <Select.Footer>
            <Button
              appearance="basic"
              size="tiny"
              onClick={onCancelHandler}
              data-test="DesignSystem-FilterSelect--CancelButton"
              className="mr-4"
            >
              Cancel
            </Button>
            <Button
              appearance="primary"
              size="tiny"
              onClick={onApplyHandler}
              data-test="DesignSystem-FilterSelect--ApplyButton"
              disabled={!hasChanges}
            >
              Apply
            </Button>
          </Select.Footer>
        )}
      </Select>
    </div>
  );
};

export default FilterSelect;
