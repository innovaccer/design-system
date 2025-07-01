import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab, Tooltip } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { IconType, TTabSize } from '@/common.type';
import styles from '@css/components/tabs.module.css';
import pageHeaderStyles from '@css/components/pageHeader.module.css';

type Tab = React.ReactElement | TabConfig;
type noop = (tabInfo: TabInfo) => void;

interface TabInfo {
  label: string;
  activeIndex: number;
  currentTabIndex: number;
}
export interface TabConfig {
  label: string;
  count?: number;
  icon?: string;
  disabled?: boolean;
  className?: string;
  isDismissible?: boolean;
  onDismiss?: (tabInfo: TabInfo) => void;
  iconType?: IconType;
}
export interface TabsProps extends BaseProps {
  /**
   * Index of desired selected `Tab`
   */
  activeIndex?: number;
  /**
   * Shows border at bottom of  `Tabs`
   */
  withSeparator?: boolean;
  /**
   * List of tabs
   * <pre className="DocPage-codeBlock">
   *  Tab {
   *    label: React.ReactText;
   *    count?: number;
   *    icon?: string;
   *    disabled?: boolean;
   *    className?: string;
   *    isDismissible?: boolean;
   *    onDismiss?: (tabInfo: object) => void;
   *    iconType?: 'rounded' | 'outlined'
   *  }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Label of Tab |  |
   * | count | Count of Tab | |
   * | icon | Icon to be rendered inside Tab | |
   * | disabled | Determines if tab is disabled | |
   * | className | Class on tab content | |
   * | isDismissible | Determines if tab is dismissible | |
   * | onDismiss | Called with tab info when a tab is being removed | |
   * | iconType | Set type of Icon | |
   */
  tabs: TabConfig[];
  /**
   * `Tab` Component will be wrapped in `Tabs` container
   */
  children?: SingleOrArray<React.ReactElement>;
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
  /**
   * Adds custom class to Tab header
   */
  headerClassName?: string;
  /**
   * Defines size of `Tab` component
   */
  size?: TTabSize;
  /**
   * Adds maxWidth to the `Tab` component
   */
  maxWidth?: string | number;
}

const getChildrenArray = (children: SingleOrArray<React.ReactElement>) => {
  return Array.isArray(children) ? children : [children];
};

const filterTabs = (children: SingleOrArray<React.ReactElement>) => {
  const childrenArray = getChildrenArray(children);

  const tabs = childrenArray.filter(
    (element: React.ReactElement) => typeof element.type === 'function' && element.type.name === Tab.name
  );

  return tabs;
};

const filterInlineComponent = (children: SingleOrArray<React.ReactElement>) => {
  const childrenArray = getChildrenArray(children);

  const inlineComponent = childrenArray.filter(
    (element: React.ReactElement) => !(typeof element.type === 'function' && element.type.name === Tab.name)
  );

  return inlineComponent;
};

export const Tabs = (props: TabsProps) => {
  const { children, withSeparator, onTabChange, className, headerClassName, size, maxWidth } = props;

  const baseProps = extractBaseProps(props);
  const tabRefs: HTMLDivElement[] = [];

  const tabs: Tab[] = children ? filterTabs(children) : props.tabs;
  const inlineComponent = children ? filterInlineComponent(children) : <></>;
  const totalTabs = tabs.length;

  const [activeIndex, setActiveTab] = React.useState(
    props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0
  );

  React.useEffect(() => {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
    }
  }, [props.activeIndex]);

  const wrapperClass = classNames(
    {
      [styles['TabsWrapper']]: true,
    },
    className
  );

  const headerClass = classNames(
    {
      [styles['TabsWrapper-header']]: true,
      [pageHeaderStyles['TabsWrapper-header']]: true,
      [styles['TabsWrapper-header--withSeparator']]: withSeparator,
    },
    className,
    headerClassName
  );

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      [styles['Tab-pills']]: true,
      [styles['Tab-pills--disabled']]: disabled,
    });

  const getActiveTabClass = () => {
    let activeTab;
    let activeTabClass;

    if (tabs && tabs.length && tabs[activeIndex] && 'props' in tabs[activeIndex]) {
      activeTab = tabs[activeIndex] as React.ReactElement;
      activeTabClass = (activeTab.props as any)?.className;
    } else {
      activeTab = tabs[activeIndex] as TabConfig;
      activeTabClass = activeTab && activeTab.className;
    }

    return activeTabClass;
  };

  const activeTabClass = getActiveTabClass();

  const tabContentClass = classNames({
    [styles['TabsWrapper-content']]: true,
    [`${activeTabClass}`]: activeTabClass,
  });

  const tabClickHandler = (tabIndex: number, isKeyboard?: boolean) => {
    if (props.activeIndex === undefined) {
      setActiveTab(tabIndex);
      if (!isKeyboard) tabRefs[tabIndex]?.blur();
    }
    if (onTabChange) onTabChange(tabIndex);
  };

  const tabKeyDownHandler = (event: React.KeyboardEvent, tabIndex: number) => {
    if (event.key === 'Enter') {
      tabClickHandler(tabIndex, true);
    }
    if (event.key === 'ArrowLeft' && tabIndex > 0) {
      const prevElement = tabRefs[tabIndex - 1];
      prevElement?.focus();
    }
    if (event.key === 'ArrowRight' && tabIndex < tabs.length) {
      const nextElement = tabRefs[tabIndex + 1];
      nextElement?.focus();
    }
  };

  const renderInfo = (tab: Tab, index: number) => {
    const { count, icon, disabled, iconType } = tab as TabConfig;

    if (count !== undefined) {
      return (
        <Pills
          data-test="DesignSystem-Tabs--Pills"
          className={getPillsClass(disabled)}
          appearance={activeIndex === index ? 'primary' : 'secondary'}
        >
          {count}
        </Pills>
      );
    }

    const iconClass = classNames({
      [styles['Tab-selected']]: !disabled && activeIndex === index,
    });

    if (icon) {
      const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return (
        <Icon
          data-test="DesignSystem-Tabs--Icon"
          className={`mr-4 ${iconClass}`}
          name={icon}
          type={iconType}
          appearance={iconAppearance}
        />
      );
    }
    return null;
  };

  const renderDismissIcon = (tab: Tab, index: number, onDismiss: noop) => {
    const { disabled, label } = tab as TabConfig;
    const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';

    const dismissIconClass = (disabled?: boolean) =>
      classNames({
        [styles[`DismissibleTab-icon--right`]]: true,
        [styles['DismissibleTab-icon--default']]: !disabled && activeIndex !== index,
        [styles[`DismissibleTab-icon--selected`]]: !disabled && activeIndex === index,
        ['cursor-pointer']: !disabled,
        [styles['Tab-selected']]: !disabled && activeIndex === index,
      });

    const tabInfo = { label: label, activeIndex: activeIndex, currentTabIndex: index };
    const onCloseHandler = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onDismiss) onDismiss(tabInfo);
    };
    return (
      <Icon
        data-test="DesignSystem-DismissibleTabs--Icon"
        name="clear"
        appearance={iconAppearance}
        className={dismissIconClass(disabled)}
        onClick={!disabled ? onCloseHandler : undefined}
        tabIndex={disabled ? -1 : 0}
      />
    );
  };

  const renderTab = (tab: Tab, index: number) => {
    const elementRef = React.createRef<HTMLElement>();

    const { label = '', disabled, isDismissible, onDismiss = () => {} } = tab as TabConfig;
    if (typeof label !== 'string') {
      return label;
    }
    const textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';

    const tabTextClass = classNames({
      ['ellipsis--noWrap']: true,
      [styles['Tab-selected']]: !disabled && activeIndex === index,
    });

    const tabClass = classNames({
      [styles['Tab--regular']]: size === 'regular',
      [styles['Tab--small']]: size === 'small',
      [styles['Tab--overflow']]: true,
    });

    return (
      <Tooltip
        showOnTruncation={true}
        tooltip={label}
        elementRef={elementRef}
        triggerClass="ellipsis--noWrap flex-grow-0"
      >
        <span className={tabClass} data-test="DesignSystem-Tabs--TextWrapper" style={{ maxWidth }}>
          {renderInfo(tab, index)}
          <Text
            data-test="DesignSystem-Tabs--Text"
            appearance={textAppearance}
            className={tabTextClass}
            ref={elementRef}
          >
            {label}
          </Text>
          {isDismissible && renderDismissIcon(tab, index, onDismiss)}
        </span>
      </Tooltip>
    );
  };

  const renderTabs = tabs.map((tab: Tab, index) => {
    const currentTabProp = children && 'props' in tab ? tab.props : tab;
    const { disabled, label } = currentTabProp as TabConfig;

    const tabHeaderClass = classNames({
      [styles['Tab']]: true,
      [styles['Tab--disabled']]: disabled,
      [styles['Tab--active']]: !disabled && activeIndex === index,
      [styles['Tab-selected']]: !disabled && activeIndex === index,
      ['align-items-center']: true,
      [styles['Tab--regular']]: size === 'regular' && typeof label !== 'string',
      [styles['Tab--small']]: size === 'small' && typeof label !== 'string',
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        ref={(element) => {
          if (element && !disabled) {
            tabRefs.push(element);
          }
        }}
        data-test="DesignSystem-Tabs--Tab"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index)}
        tabIndex={disabled ? -1 : 0}
      >
        {renderTab(currentTabProp as Tab, index)}
      </div>
    );
  });

  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={wrapperClass}>
      <div className={headerClass} data-test="DesignSystem-Tabs--Header">
        {renderTabs}
        {inlineComponent}
      </div>
      {children && (
        <div className={tabContentClass} data-test="DesignSystem-Tabs--Content">
          {React.isValidElement(tabs[activeIndex]) ? tabs[activeIndex] : null}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  withSeparator: true,
  tabs: [],
  size: 'regular',
  maxWidth: 'var(--spacing-640)',
};

export default Tabs;
