import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { TTabSize } from '@/common.type';
import styles from '@css/components/tabs.module.css';
import pageHeaderStyles from '@css/components/pageHeader.module.css';

let tabsWrapperIdCounter = 0;

export interface TabsWrapperProps extends BaseProps {
  /**
   * Index of desired selected `Tab`
   */
  active?: number;
  /**
   * `Tab` Component will be wrapped in `TabsWrapper` container
   */
  children: SingleOrArray<React.ReactElement>;
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
  /**
   * Defines size of `Tab` component
   */
  size?: TTabSize;
}

export const TabsWrapper = (props: TabsWrapperProps) => {
  const { children, onTabChange, className, size } = props;

  const baseProps = extractBaseProps(props);
  const tabs = Array.isArray(children) ? children : [children];
  const totalTabs = tabs.length;
  const tabRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const tabIdPrefix = React.useRef(`tabs-wrapper-${tabsWrapperIdCounter++}`);

  const [active, setActiveTab] = React.useState(props.active && props.active < totalTabs ? props.active : 0);

  React.useEffect(() => {
    setActiveTab(props.active && props.active < totalTabs ? props.active : 0);
  }, [props.active]);

  const wrapperClass = classNames(
    {
      [styles['TabsWrapper']]: true,
    },
    className
  );

  const headerClass = classNames({
    [styles['TabsWrapper-header']]: true,
    [pageHeaderStyles['TabsWrapper-header']]: true,
  });

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const tabKeyDownHandler = (event: React.KeyboardEvent, tabIndex: number, disabled?: boolean) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      tabClickHandler(tabIndex);
    }

    if (event.key === 'ArrowLeft' && tabIndex > 0) {
      tabRefs.current[tabIndex - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && tabIndex < totalTabs - 1) {
      tabRefs.current[tabIndex + 1]?.focus();
    }
  };

  const TabsHeader = tabs.map((child, index) => {
    const { label, disabled } = child.props;
    const tabId = `${tabIdPrefix.current}-tab-${index}`;
    const panelId = `${tabIdPrefix.current}-panel-${index}`;
    const isActive = !disabled && active === index;

    const tabHeaderClass = classNames({
      [styles['Tab']]: true,
      [styles['Tab--disabled']]: disabled,
      [styles['Tab--active']]: !disabled && active === index,
      [styles['Tab--regular']]: size === 'regular',
      [styles['Tab--small']]: size === 'small',
    });

    return (
      <div
        data-test="DesignSystem-Tabs--Header"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index, disabled)}
        ref={(element) => {
          tabRefs.current[index] = element;
        }}
        role="tab"
        id={tabId}
        aria-selected={isActive}
        aria-controls={panelId}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : isActive ? 0 : -1}
      >
        {label}
      </div>
    );
  });

  const activeTabId = `${tabIdPrefix.current}-tab-${active}`;
  const activePanelId = `${tabIdPrefix.current}-panel-${active}`;

  return (
    <div data-test="DesignSystem-TabsWrapper" {...baseProps} className={wrapperClass}>
      <div className={headerClass} role="tablist" aria-orientation="horizontal">
        {TabsHeader}
      </div>
      <div
        className={styles['TabsWrapper-content']}
        data-test="DesignSystem-Tabs--Content"
        role="tabpanel"
        id={activePanelId}
        aria-labelledby={activeTabId}
        tabIndex={0}
      >
        {tabs[active]}
      </div>
    </div>
  );
};

TabsWrapper.displayName = 'TabsWrapper';
TabsWrapper.defaultProps = {
  size: 'regular',
};

export default TabsWrapper;
