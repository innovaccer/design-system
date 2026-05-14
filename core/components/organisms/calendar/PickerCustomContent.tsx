import * as React from 'react';
import classNames from 'classnames';
import Select from '@/components/organisms/select';
import Button from '@/components/atoms/button';
import { OptionType } from '@/common.type';
import styles from '@css/components/pickerContent.module.css';

let pickerCustomContentId = 0;

export const hasRenderableChildren = (children: React.ReactNode): boolean => {
  const childArray = React.Children.toArray(children);

  return childArray.some((child) => {
    if (child === null || child === undefined || typeof child === 'boolean') return false;
    if (typeof child === 'string') return child.trim().length > 0;
    if (typeof child === 'number') return true;

    if (React.isValidElement(child) && child.type === React.Fragment) {
      return hasRenderableChildren(child.props.children);
    }

    return true;
  });
};

export interface PickerCustomContentProps {
  children: React.ReactNode;
  triggerLabel?: string;
}

interface PresetChipProps {
  disabled?: boolean;
  label?: React.ReactNode;
  labelPrefix?: string;
  name?: unknown;
  onClick?: (name?: unknown) => void;
  selected?: boolean;
}

interface PresetOption {
  disabled?: boolean;
  id: string;
  onClick?: () => void;
  option: OptionType;
  selected?: boolean;
}

interface SplitContentResult {
  content: React.ReactNode;
  hasContent: boolean;
}

const getNodeText = (node: React.ReactNode): string => {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(' ');
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }

  return '';
};

const isChipElement = (child: React.ReactElement): child is React.ReactElement<PresetChipProps> => {
  const elementType = child.type as { displayName?: string; name?: string };
  return elementType.displayName === 'Chip' || elementType.name === 'Chip';
};

const hasChildrenProp = (element: React.ReactElement<{ children?: React.ReactNode }>): boolean => {
  return element.props.children !== undefined;
};

const shouldKeepEmptyElement = (element: React.ReactElement) => {
  if (typeof element.type !== 'string') return !hasChildrenProp(element);

  const elementType = element.type;
  const props = element.props as Record<string, unknown>;
  const selfRenderingElements = ['button', 'input', 'select', 'textarea', 'img', 'svg'];

  return (
    selfRenderingElements.includes(elementType) ||
    Boolean(props.onClick || props.onKeyDown || props.role || props['aria-label'] || props.href)
  );
};

const removePresetChips = (children: React.ReactNode): SplitContentResult => {
  const splitNode = (node: React.ReactNode): SplitContentResult => {
    if (node === null || node === undefined || typeof node === 'boolean') {
      return { content: null, hasContent: false };
    }

    if (typeof node === 'string') {
      return { content: node, hasContent: node.trim().length > 0 };
    }

    if (typeof node === 'number') {
      return { content: node, hasContent: true };
    }

    if (!React.isValidElement(node)) {
      return { content: node, hasContent: true };
    }

    if (isChipElement(node)) {
      return { content: null, hasContent: false };
    }

    if (hasChildrenProp(node)) {
      const splitChildren = removePresetChips(node.props.children);

      if (!splitChildren.hasContent) {
        if (node.type === React.Fragment || !shouldKeepEmptyElement(node)) {
          return { content: null, hasContent: false };
        }

        return { content: node, hasContent: true };
      }

      return {
        content: React.cloneElement(node, undefined, splitChildren.content),
        hasContent: true,
      };
    }

    return { content: node, hasContent: true };
  };

  const content: React.ReactNode[] = [];
  let hasContent = false;

  React.Children.forEach(children, (child) => {
    const splitChild = splitNode(child);

    if (splitChild.hasContent) {
      content.push(splitChild.content);
      hasContent = true;
    }
  });

  return {
    content: content.length === 1 ? content[0] : content,
    hasContent,
  };
};

const getPresetOptions = (children: React.ReactNode): PresetOption[] => {
  const options: PresetOption[] = [];
  let optionIndex = 0;

  const walk = (node: React.ReactNode) => {
    React.Children.forEach(node, (child) => {
      if (!React.isValidElement(child)) return;

      if (isChipElement(child)) {
        const { disabled, label, labelPrefix, name, onClick, selected } = child.props;
        const labelText = [labelPrefix, getNodeText(label)].filter(Boolean).join(' ').trim();

        if (!labelText) return;

        const value = `${typeof name === 'string' || typeof name === 'number' ? name : labelText}-${optionIndex}`;
        const option = { label: labelText, value };

        options.push({
          disabled,
          id: `preset-option-${optionIndex}`,
          onClick: onClick ? () => onClick(name) : undefined,
          option,
          selected,
        });
        optionIndex += 1;
        return;
      }

      if (hasChildrenProp(child)) {
        walk(child.props.children);
      }
    });
  };

  walk(children);
  return options;
};

export const PickerCustomContent = (props: PickerCustomContentProps) => {
  const { children, triggerLabel = 'Presets' } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState('');
  const rootRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelIdRef = React.useRef('');
  const presetOptions = React.useMemo(() => getPresetOptions(children), [children]);
  const selectedPreset = presetOptions.find((option) => option.selected);
  const hasPresetOptions = presetOptions.length > 0;
  const mobileCustomContent = React.useMemo(() => removePresetChips(children), [children]);

  if (!panelIdRef.current) {
    pickerCustomContentId += 1;
    panelIdRef.current = `DesignSystem-PickerCustomContent-${pickerCustomContentId}`;
  }

  React.useEffect(() => {
    if (!open) return undefined;

    const onMouseDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    window.requestAnimationFrame(() => {
      const panel = document.getElementById(panelIdRef.current);
      const focusable = panel?.querySelector<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [role="button"]:not([aria-disabled="true"]), [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus({ preventScroll: true });
    });
  }, [open]);

  const getInteractiveLabel = (target: HTMLElement) => {
    const interactiveElement = target.closest<HTMLElement>(
      '[data-test="DesignSystem-GenericChip--Wrapper"], button, [role="button"], [role="option"], [role="menuitem"]'
    );

    if (!interactiveElement || !rootRef.current?.contains(interactiveElement)) return undefined;

    const label = interactiveElement.getAttribute('aria-label') || interactiveElement.textContent;
    return label?.replace(/\s+/g, ' ').trim();
  };

  const closeAfterSelection = (target: HTMLElement) => {
    window.setTimeout(() => {
      const label = getInteractiveLabel(target);
      if (!label) return;

      if (label) setSelectedLabel(label);
      setOpen(false);
      triggerRef.current?.focus();
    }, 0);
  };

  const onPanelClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!open) return;

    closeAfterSelection(event.target as HTMLElement);
  };

  const onPanelKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    if (event.key === 'Enter') {
      closeAfterSelection(event.target as HTMLElement);
    }
  };

  const onPresetSelect = (option?: OptionType | OptionType[]) => {
    if (!option || Array.isArray(option)) return;

    const selectedOption = presetOptions.find((presetOption) => presetOption.option.value === option.value);
    selectedOption?.onClick?.();
  };

  const panelClass = classNames(styles['PickerCustomContent-panel'], {
    [styles['PickerCustomContent-panel--open']]: open,
  });
  const rootClass = classNames(styles['PickerCustomContent'], {
    [styles['PickerCustomContent--withPresetSelect']]: hasPresetOptions,
  });
  const fallbackTriggerText = selectedLabel ? `${triggerLabel}: ${selectedLabel}` : triggerLabel;

  return (
    <div className={rootClass} ref={rootRef}>
      {hasPresetOptions && (
        <div className={styles['PickerCustomContent-presetSelect']}>
          <Select
            key={selectedPreset ? String(selectedPreset.option.value) : 'empty'}
            width="100%"
            maxHeight={256}
            onSelect={onPresetSelect}
            value={selectedPreset?.option}
            triggerOptions={{
              icon: 'calendar_today',
              placeholder: triggerLabel,
              withClearButton: false,
              'aria-label': triggerLabel,
            }}
          >
            <Select.List aria-label={`${triggerLabel} options`} size="compressed">
              {presetOptions.map((presetOption) => (
                <Select.Option
                  key={presetOption.id}
                  option={presetOption.option}
                  disabled={presetOption.disabled}
                  data-test="DesignSystem-PickerCustomContent--PresetOption"
                >
                  {presetOption.option.label}
                </Select.Option>
              ))}
            </Select.List>
          </Select>
        </div>
      )}
      {hasPresetOptions && mobileCustomContent.hasContent && (
        <div
          className={styles['PickerCustomContent-mobileCustomContent']}
          role="group"
          aria-label={`${triggerLabel} custom content`}
          data-test="DesignSystem-PickerCustomContent--MobileCustomContent"
        >
          {mobileCustomContent.content}
        </div>
      )}
      {!hasPresetOptions && (
        <div className={styles['PickerCustomContent-trigger']}>
          <Button
            ref={triggerRef}
            expanded={true}
            icon={open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            iconAlign="right"
            className={styles['PickerCustomContent-triggerButton']}
            aria-expanded={open}
            aria-controls={panelIdRef.current}
            aria-haspopup="dialog"
            onClick={() => setOpen((currentOpen) => !currentOpen)}
            data-test="DesignSystem-PickerCustomContent--Trigger"
          >
            {fallbackTriggerText}
          </Button>
        </div>
      )}
      <div
        id={panelIdRef.current}
        className={panelClass}
        role="group"
        aria-label={triggerLabel}
        onClickCapture={onPanelClickCapture}
        onKeyDownCapture={onPanelKeyDownCapture}
        data-test="DesignSystem-PickerCustomContent--Panel"
      >
        {children}
      </div>
    </div>
  );
};

export default PickerCustomContent;
