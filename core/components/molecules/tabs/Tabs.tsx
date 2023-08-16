import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { moveToIndex } from '@/utils/commonUtility';

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
   * To make the tabs reorderable.
   * Applicable only for dismissible tabs.
   */
  isReorderable?: boolean;
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
  const { children, withSeparator, onTabChange, className, headerClassName, isReorderable } = props;

  const baseProps = extractBaseProps(props);
  const tabRefs: HTMLDivElement[] = [];

  const tabs: Tab[] = children ? filterTabs(children) : props.tabs;
  const inlineComponent = children ? filterInlineComponent(children) : <></>;
  const totalTabs = tabs.length;

  const [tabOptions, setTabOptions] = React.useState(tabs);
  const [activeIndex, setActiveTab] = React.useState(
    props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0
  );
  const [dragActiveIndex, setDragActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    const tabLabel = tabs.map((item) => ('props' in item ? item.props.label : item.label));
    setTabOptions((prev) => prev.filter((item) => tabLabel.includes('props' in item ? item.props.label : item.label)));
  }, [children, props.tabs]);

  React.useEffect(() => {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
    }
  }, [props.activeIndex]);

  const wrapperClass = classNames(
    {
      ['TabsWrapper']: true,
    },
    className
  );

  const headerClass = classNames(
    {
      ['TabsWrapper-header']: true,
      ['TabsWrapper-header--withSeparator']: withSeparator,
    },
    className,
    headerClassName
  );

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      ['Tab-pills']: true,
      ['Tab-pills--disabled']: disabled,
    });

  const getActiveTabClass = () => {
    let activeTab;
    let activeTabClass;

    if (tabs && tabs.length && tabs[activeIndex] && 'props' in tabs[activeIndex]) {
      activeTab = tabs[activeIndex] as React.ReactElement;
      activeTabClass = activeTab.props?.className;
    } else {
      activeTab = tabs[activeIndex] as TabConfig;
      activeTabClass = activeTab && activeTab.className;
    }

    return activeTabClass;
  };

  const activeTabClass = getActiveTabClass();

  const tabContentClass = classNames({
    ['TabsWrapper-content']: true,
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
    const { count, icon, disabled } = tab as TabConfig;

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
      ['Tab-selected']: !disabled && activeIndex === index,
    });

    if (icon) {
      const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return (
        <Icon
          data-test="DesignSystem-Tabs--Icon"
          className={`mr-4 ${iconClass}`}
          name={icon}
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
        [`DismissibleTab-icon--right`]: true,
        ['DismissibleTab-icon--default']: !disabled && activeIndex !== index,
        [`DismissibleTab-icon--selected`]: !disabled && activeIndex === index,
        ['cursor-pointer']: !disabled,
        ['Tab-selected']: !disabled && activeIndex === index,
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
    const { label = '', disabled, isDismissible, onDismiss = () => {} } = tab as TabConfig;
    if (typeof label !== 'string') {
      return label;
    }
    const textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';
    const tabTextClass = classNames({
      ['Tab-selected']: !disabled && activeIndex === index,
    });
    return (
      <>
        {renderInfo(tab, index)}
        <Text data-test="DesignSystem-Tabs--Text" appearance={textAppearance} className={tabTextClass}>
          {label}
        </Text>
        {isDismissible && renderDismissIcon(tab, index, onDismiss)}
      </>
    );
  };

  const renderTabs = tabOptions.map((tab: Tab, index) => {
    const currentTabProp = children && 'props' in tab ? tab.props : tab;
    const { disabled, isDismissible } = currentTabProp;
    const draggable = isDismissible && isReorderable;
    const isDragActive = dragActiveIndex === index;

    const tabHeaderClass = classNames({
      ['Tab']: true,
      ['Tab--disabled']: disabled,
      ['Tab--active']: !disabled && activeIndex === index,
      ['Tab-selected']: !disabled && activeIndex === index,
      ['align-items-center']: true,
      ['Tab--draggable pl-0 pr-4']: draggable,
      ['Tab--dragged']: isDragActive,
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        ref={(element) => element && !disabled && tabRefs.push(element)}
        data-test="DesignSystem-Tabs--Tab"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index)}
        tabIndex={disabled ? -1 : 0}
        draggable={draggable}
        onDragStart={(e) => {
          e.dataTransfer.setData('index', `${index}`);
          setDragActiveIndex(index);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActiveIndex(-1);
        }}
        onDrop={(e) => {
          const from = +e.dataTransfer.getData('index');
          const to = index;

          if (from !== to) {
            setTabOptions(moveToIndex(tabOptions, from, to));
            if (activeIndex === from) {
              setActiveTab(to);
            } else if (activeIndex === to) {
              from < to ? setActiveTab(to - 1) : setActiveTab(to + 1);
            } else {
              from < activeIndex && activeIndex < to
                ? setActiveTab((prev) => prev - 1)
                : to < activeIndex && activeIndex < from
                ? setActiveTab((prev) => prev + 1)
                : null;
            }
          }

          e.currentTarget.focus();
        }}
      >
        {draggable && (
          <Icon className="DraggableTab-icon" name="drag_indicator" appearance={isDragActive ? 'primary' : 'subtle'} />
        )}
        {renderTab(currentTabProp, index)}
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
          {tabOptions[activeIndex]}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  withSeparator: true,
  tabs: [],
};

export default Tabs;
