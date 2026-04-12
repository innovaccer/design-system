import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { isSpaceKey } from '@/accessibility/utils';
import { useMultiSelect, useSingleSelect } from './hooks';
import styles from '@css/components/selectionCard.module.css';

type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;

export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  /**
   * Element to be render inside card
   */
  children: React.ReactNode;
  /**
   * Provide unique id to the card
   */
  id: string;
  /**
   * Provide value to the card
   */
  cardValue?: object;
  /**
   * Disable the Selection Card
   */
  disabled?: boolean;
  /**
   * Handler to be called when Selection card is clicked
   */
  onClick?: (event: ClickEventType, id?: string, cardValue?: object) => void;
  /**
   * Describe z-index for overlay
   */
  overlayZIndex?: number;
  /**
   * Defines if card is selected
   */
  selected?: boolean;
  /**
   * Selection mode for the card.
   * Use `"single"` (renders `role="radio"`) when cards are mutually exclusive —
   * wrap the group in a `role="radiogroup"` container for proper keyboard navigation.
   * Arrow keys move focus and selection between enabled cards in the group.
   * Use `"multiple"` (default, renders `role="checkbox"`) when multiple cards can be selected.
   * @default "multiple"
   */
  selectionMode?: 'single' | 'multiple';
}

/** Returns all enabled radio cards within the nearest radiogroup ancestor. */
const getGroupRadios = (el: HTMLElement): HTMLElement[] => {
  const group = el.closest<HTMLElement>('[role="radiogroup"]');
  if (!group) return [];
  return Array.from(group.querySelectorAll<HTMLElement>('[role="radio"]')).filter(
    (r) => !r.hasAttribute('data-disabled')
  );
};

export const SelectionCard = (props: SelectionCardProps) => {
  const {
    children,
    onClick,
    disabled,
    id,
    cardValue,
    overlayZIndex,
    selected,
    selectionMode = 'multiple',
    className,
    ...rest
  } = props;

  const cardRef = React.useRef<HTMLDivElement>(null);

  // For radio mode: ensure at least the first non-disabled card in the group is tabbable
  // when no card is currently selected, so the radiogroup is keyboard-reachable.
  React.useLayoutEffect(() => {
    if (selectionMode !== 'single' || disabled || selected) return;
    const el = cardRef.current;
    if (!el) return;
    const radios = getGroupRadios(el);
    // If no radio in the group is tabbable yet, make the first one tabbable.
    const anyTabbable = radios.some((r) => r.tabIndex === 0);
    if (!anyTabbable && radios[0] === el) {
      el.tabIndex = 0;
    }
  });

  const classes = classNames(
    {
      [styles['Selection-card']]: true,
      [styles['Selection-card--default']]: !disabled,
      [styles['Selection-card--selected']]: selected && !disabled,
      [styles['Selection-card--disabled']]: disabled,
      [styles['Selection-card--default-disabled']]: disabled && !selected,
      [styles['Selection-card--selected-disabled']]: disabled && selected,
    },
    className
  );

  const onClickHandler = (event: ClickEventType) => {
    if (!disabled && onClick) {
      onClick(event, id, cardValue);
    }
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    // Arrow key navigation for radio mode (WAI-ARIA radiogroup pattern).
    if (selectionMode === 'single' && !disabled) {
      const isNext = event.key === 'ArrowDown' || event.key === 'ArrowRight';
      const isPrev = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
      if (isNext || isPrev) {
        event.preventDefault();
        const el = cardRef.current;
        if (!el) return;
        const radios = getGroupRadios(el);
        if (radios.length < 2) return;
        const currentIdx = radios.indexOf(el);
        const nextIdx = isNext ? (currentIdx + 1) % radios.length : (currentIdx - 1 + radios.length) % radios.length;
        const nextEl = radios[nextIdx];
        nextEl.focus();
        nextEl.click();
        return;
      }
    }

    if (isSpaceKey(event) && !disabled) {
      event.preventDefault();
      if (event.repeat) return;
      onClickHandler(event);
    }
  };

  // Roving tabindex for radio mode: only the selected card (or the first when none selected)
  // should be reachable via Tab; Arrow keys handle intra-group navigation.
  const tabIndexValue = disabled ? -1 : selectionMode === 'single' ? (selected ? 0 : -1) : 0;

  return (
    <div
      ref={cardRef}
      role={selectionMode === 'single' ? 'radio' : 'checkbox'}
      aria-checked={selected}
      tabIndex={tabIndexValue}
      onKeyDown={onKeyDownHandler}
      onClick={(event) => onClickHandler(event)}
      className={classes}
      data-test="DesignSystem-SelectionCard"
      data-disabled={disabled || undefined}
      {...rest}
    >
      <div
        className={styles['Selection-card-overlay']}
        style={{ zIndex: overlayZIndex }}
        data-test="DesignSystem-SelectionCard-Overlay"
      />
      {children}
    </div>
  );
};

SelectionCard.defaultProps = {
  disabled: false,
  overlayZIndex: 2,
  selectionMode: 'multiple',
};

SelectionCard.useMultiSelect = useMultiSelect;

SelectionCard.useSingleSelect = useSingleSelect;

export default SelectionCard;
