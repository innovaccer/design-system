import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab, Tooltip, Button, Menu } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { IconType, TTabSize } from '@/common.type';

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
  const allTabRefs: HTMLDivElement[] = [];
  const tabsWrapperRef = React.useRef<HTMLDivElement>(null);
  const tabsHeaderRef = React.useRef<HTMLDivElement>(null);
  const moreButtonRef = React.useRef<HTMLButtonElement>(null);

  const tabs: Tab[] = children ? filterTabs(children) : props.tabs;
  const inlineComponent = children ? filterInlineComponent(children) : <></>;
  const totalTabs = tabs.length;
  const [showMore, setShowMore] = React.useState(false);
  const [displayTabs, setDisplayTabs] = React.useState(tabs);
  const [isTabDismiss, setIsTabDismiss] = React.useState(false);
  const [isTabAdded, setIsTabAdded] = React.useState(false);
  const [widthDifference, setWidthDifference] = React.useState(0);
  const [extraTabsList, setExtraTabsList] = React.useState<Tab[]>([]);
  const [isMenuExpanded, setIsMenuExpanded] = React.useState<boolean | undefined>(false);

  const [activeIndex, setActiveTab] = React.useState(
    props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0
  );

  React.useEffect(() => {
    if (showMore) {
      let remainingWidth = widthDifference;

      if (moreButtonRef.current) {
        remainingWidth = remainingWidth - moreButtonRef.current.clientWidth;
      }

      let index = tabs.length - 1;
      while (remainingWidth >= 0 && index >= 0) {
        remainingWidth = remainingWidth - allTabRefs[index]?.scrollWidth;
        index = index - 1;
      }

      const newList = [...tabs].slice(0, index + 1);
      const extraList = [...tabs].slice(index + 1, tabs.length);

      setExtraTabsList(extraList);
      setDisplayTabs(newList);
    }
  }, [showMore]);

  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (tabsWrapperRef.current && tabsHeaderRef.current) {
        const containerClientWidth = tabsHeaderRef.current?.clientWidth;
        const containerScrollWidth = tabsWrapperRef.current?.clientWidth;

        const isOverflow = containerScrollWidth > containerClientWidth;

        isOverflow && setShowMore(isOverflow);
        isOverflow && setWidthDifference(containerScrollWidth - containerClientWidth);
      }
    });

    if (tabsWrapperRef.current) {
      observer.observe(tabsWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const addMenuItemToTab = () => {
    if (tabsWrapperRef.current && tabsHeaderRef.current) {
      const containerClientWidth = tabsHeaderRef.current.clientWidth;
      const containerScrollWidth = tabsHeaderRef.current.scrollWidth;

      const isOverflow = containerScrollWidth > containerClientWidth;

      setIsTabAdded(false);
      isOverflow && setWidthDifference(containerScrollWidth - containerClientWidth);

      let remainingWidth = containerScrollWidth - containerClientWidth;

      if (isOverflow) {
        let index = displayTabs.length - 1;
        while (remainingWidth >= 0 && index > 0) {
          remainingWidth = remainingWidth - allTabRefs[index - 1]?.scrollWidth;
          index = index - 1;
        }

        const removeIndex = displayTabs.length - index;
        const newList = displayTabs.slice(0, removeIndex).concat(displayTabs.slice(-1));

        const extraList = [...tabs]
          .slice(index, tabs.length)
          .filter((item) => item !== displayTabs[displayTabs.length - 1]);

        setExtraTabsList(extraList);
        setDisplayTabs(newList);
        setActiveTab(newList.length - 1);
        if (onTabChange) onTabChange(newList.length - 1);
      }

      return isOverflow;
    }

    return;
  };

  const replaceTabWithMenuItem = () => {
    if (tabsWrapperRef.current && tabsHeaderRef.current) {
      const containerClientWidth = tabsHeaderRef.current.clientWidth;
      const containerScrollWidth = tabsHeaderRef.current.scrollWidth;

      const isOverflow = containerScrollWidth > containerClientWidth;

      setShowMore(isOverflow);
      setIsTabDismiss(false);
      isOverflow && setWidthDifference(containerScrollWidth - containerClientWidth);

      let remainingWidth = containerScrollWidth - containerClientWidth;

      if (moreButtonRef.current?.clientWidth) {
        remainingWidth = remainingWidth - moreButtonRef.current.clientWidth;
      }

      let index = tabs.length;
      while (remainingWidth >= 0 && index >= 0) {
        remainingWidth = remainingWidth - allTabRefs[index]?.scrollWidth;
        index = index - 1;
      }

      const newList = [...tabs].slice(0, index + 1);
      const extraList = [...tabs].slice(index + 1, tabs.length);
      setExtraTabsList(extraList);
      setDisplayTabs(newList);
    }
  };

  React.useEffect(() => {
    isTabDismiss && replaceTabWithMenuItem();
    if (isTabAdded) {
      const tabIndex = displayTabs.length - 1;
      const isOverflow = addMenuItemToTab();

      if (!isOverflow) {
        setActiveTab(tabIndex);
        if (onTabChange) onTabChange(tabIndex);
      }
    }
  }, [displayTabs]);

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
      ['Tab-selected']: !disabled && activeIndex === index,
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
      setDisplayTabs([...tabs]);
      setIsTabDismiss(true);
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
      ['Tab-selected']: !disabled && activeIndex === index,
    });

    const tabClass = classNames({
      ['Tab--regular']: size === 'regular',
      ['Tab--small']: size === 'small',
      ['Tab--overflow']: true,
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

  const renderTabs = displayTabs.map((tab: Tab, index) => {
    const currentTabProp = children && 'props' in tab ? tab.props : tab;
    const { disabled, label } = currentTabProp;

    const tabHeaderClass = classNames({
      ['Tab']: true,
      ['Tab--disabled']: disabled,
      ['Tab--active']: !disabled && activeIndex === index,
      ['Tab-selected']: !disabled && activeIndex === index,
      ['align-items-center']: true,
      ['Tab--regular']: size === 'regular' && typeof label !== 'string',
      ['Tab--small']: size === 'small' && typeof label !== 'string',
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        ref={(element) => {
          element && !disabled && tabRefs.push(element);
          element && allTabRefs.push(element);
        }}
        data-test="DesignSystem-Tabs--Tab"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index)}
        tabIndex={disabled ? -1 : 0}
      >
        {renderTab(currentTabProp, index)}
      </div>
    );
  });

  const onMenuItemClick = (tabInfo: Tab, tabIndex: number) => {
    const removedElement = displayTabs.pop();
    displayTabs.push(tabInfo);

    extraTabsList.splice(tabIndex, 1);
    removedElement && extraTabsList.unshift(removedElement);
    setDisplayTabs([...displayTabs]);
    setExtraTabsList([...extraTabsList]);
    setIsTabAdded(true);
  };

  const renderMoreTabs = () => {
    const buttonClassName = classNames({
      ['Tabs-Menu-Button--open']: isMenuExpanded,
      ['Tabs-Menu-Button--regular']: size === 'regular',
      ['Tabs-Menu-Button--small']: size === 'small',
    });

    return (
      <Menu
        width={176}
        onToggle={(open) => setIsMenuExpanded(open)}
        trigger={
          <Button
            ref={moreButtonRef}
            icon={isMenuExpanded ? 'expand_less' : 'expand_more'}
            iconAlign="right"
            appearance="transparent"
            className={buttonClassName}
            data-test="DesignSystem-Tabs-Menu--Trigger"
          >
            More
          </Button>
        }
      >
        <Menu.List>
          {extraTabsList.map((tabInfo, index) => {
            const currentTabProp = children && 'props' in tabInfo ? tabInfo.props : tabInfo;
            const { disabled, label } = currentTabProp;

            const elementRef = React.createRef<HTMLElement>();

            return (
              <Tooltip showOnTruncation={true} tooltip={label} elementRef={elementRef} key={index}>
                <Menu.Item onClick={() => onMenuItemClick(tabInfo, index)} disabled={disabled} key={index}>
                  <span
                    className={'Tab--overflow w-100'}
                    data-test="DesignSystem-Tabs-Menu--TextWrapper"
                    style={{ maxWidth: '160px' }}
                  >
                    {renderInfo(currentTabProp, -1)}
                    <Text data-test="DesignSystem-Tabs--Text" className={'ellipsis--noWrap'} ref={elementRef}>
                      {label}
                    </Text>
                  </span>
                </Menu.Item>
              </Tooltip>
            );
          })}
        </Menu.List>
      </Menu>
    );
  };

  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={wrapperClass}>
      <div className={headerClass} data-test="DesignSystem-Tabs--Header" ref={tabsHeaderRef}>
        <div className="d-flex" ref={tabsWrapperRef}>
          {renderTabs}
          {showMore && extraTabsList.length > 0 && renderMoreTabs()}
          {inlineComponent}
        </div>
      </div>
      {children && (
        <div className={tabContentClass} data-test="DesignSystem-Tabs--Content">
          {displayTabs[activeIndex]}
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
  maxWidth: 'var(--spacing-9)',
};

export default Tabs;
