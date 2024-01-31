import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { IconType } from '@/common.type';

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
   * Draggable  `Tab`
   */
  draggable?: boolean;

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
  const { children, withSeparator, draggable, onTabChange, className, headerClassName } = props;

  const baseProps = extractBaseProps(props);
  const tabRefs: HTMLDivElement[] = [];

  const tabsList = children ? filterTabs(children) : props.tabs;
  const [tabs, setTabs] = React.useState(tabsList);

  const inlineComponent = children ? filterInlineComponent(children) : <></>;
  const totalTabs = tabs.length;

  const [activeIndex, setActiveTab] = React.useState(
    props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0
  );

  const [isDragging, setIsDragging] = React.useState(false);
  const [isDragActiveIndex, setIsDragActiveIndex] = React.useState(-1);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const newchild = children && filterTabs(children);
    if (draggable) {
      const newchildLabel = newchild.map((item) => ('props' in item ? item.props.label : item.label));
      const newArray = tabs.filter((item) => item && newchildLabel?.includes(item.props.label));
      setTabs(newArray);
    }
  }, [children]);

  const detectLeftButton = (e) => {
    e = e || window.event;
    if ('buttons' in e) {
      return e.buttons === 1;
    }
    const button = e.which || e.button;
    return button === 1;
  };

  React.useEffect(() => {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
      if (!draggable) setTabs(tabsList);
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
    if (typeof props.activeIndex !== 'undefined' && props.activeIndex !== activeIndex) {
      setActiveTab(props.activeIndex);
    }
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
      if (index < activeIndex) {
        const item = activeIndex - 1;
        setActiveTab(item);
      }
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

  const dragStart = (e: any, index: any) => {
    if (!detectLeftButton(e)) return; //only use left mouse click

    setIsDragActiveIndex(index);

    const container = containerRef.current; // propery of the outer container
    const items = [...container.childNodes]; // items present in the container

    const activeItem = tabs[activeIndex];

    const dragItem = items[index]; // draggable item html

    const itemsBelowDragItem = items.slice(index + 1); // items below the draggable items [0, 1, 2, 3] index =1 then return [2,3]

    const notDragItems = items.filter((_, i) => i !== index); // all the items other than draggable item

    const dragData = tabs[index]; // data info of draggable component

    let newData = [...tabs]; // clone of the data

    // getBoundingClientRect of dragItem
    const dragBoundingRect = dragItem.getBoundingClientRect();

    //distance between two card
    const space = items[1].getBoundingClientRect().left - items[0].getBoundingClientRect().right;

    // set style for dragItem when mouse down
    dragItem.style.position = 'fixed';
    dragItem.style.zIndex = '5000';
    dragItem.style.backgroundColor = '#ffffff';
    dragItem.style.left = dragBoundingRect.left + 'px';
    dragItem.style.cursor = 'grabbing';
    dragItem.style.listStyleType = 'none';
    dragItem.style.boxSizing = 'border-box';
    dragItem.style.boxShadow = '0 4px 16px 0 rgba(0, 0, 0, 0.16)';

    // create alternate div element when dragItem position is fixed
    const div = document.createElement('div');
    div.id = 'div-temp';
    div.style.width = dragBoundingRect.width + 'px';
    div.style.height = dragBoundingRect.height + 'px';
    div.style.pointerEvents = 'none';
    container?.appendChild(div);

    //move the elements below dragitem
    // distance to be moved
    const distance = dragBoundingRect.width + space;

    itemsBelowDragItem.forEach((item) => {
      item.style.transform = `translateX(${distance}px)`;
    });
    // get the original coordinates of the mouse pointer

    const x = e.clientX;
    document.onpointermove = dragMove;

    function dragMove(e) {
      // calculate the distance the mouse pointer has traveled.
      // original coordinates minus current coordinates.
      setIsDragging(true); // store the index of draggable item
      const posX = e.clientX - x;

      //move item
      dragItem.style.transform = `translateX(${posX}px)`;

      //swap position and data
      notDragItems.forEach((item) => {
        //check two elements is overlapping
        const rect1 = dragItem.getBoundingClientRect();
        const rect2 = item.getBoundingClientRect();

        const isoverlapping = rect1.x < rect2.x + rect2.width / 2 && rect1.x + rect1.width / 2 > rect2.x;
        if (isoverlapping) {
          // swap postion card

          if (item.getAttribute('style')) {
            item.style.transform = '';
            index++;
          } else {
            item.style.transform = `translateX(${distance}px)`;
            index--;
          }

          // swap data
          newData = tabs.filter((item) => item !== dragData);
          newData.splice(index, 0, dragData);
        }
      });
    }

    // finish onPointerDown event
    document.onpointerup = dragEnd;

    function dragEnd() {
      document.onpointerup = null;
      document.onpointermove = null;
      dragItem.style = '';
      container?.removeChild(div);

      setTabs(newData);
      setIsDragging(false);

      const swapTab = newData.findIndex((x) => x === activeItem);
      setActiveTab(swapTab);

      items.forEach((item) => (item.style = null));

      const draggedItem = items[index];
      draggedItem.focus();
      setIsDragActiveIndex(-1);
    }
  };
  const [isHovered, setIsHovered] = React.useState(-1);

  const renderTabs = tabs.map((tab: Tab, index) => {
    const currentTabProp = children && 'props' in tab ? tab.props : tab;
    const { disabled } = currentTabProp;

    const tabHeaderClass = classNames({
      ['Tab']: true,
      ['Tab--disabled']: disabled,
      ['Tab--active']: !disabled && activeIndex === index,
      ['Tab-selected']: !disabled && activeIndex === index,
      ['align-items-center']: true,
      ['Tab-dragging']: isDragging,
      ['Tab-draggable']: draggable,
      ['Tab-drag']: isDragActiveIndex === index && !(activeIndex === index),
    });

    const draggableIconClass = classNames({
      ['draggable-icon']: true,
      ['draggable-active']: isHovered === index || isDragActiveIndex === index,
      ['DraggableTab-icon']: true,
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        onPointerDown={draggable && !disabled ? (e) => dragStart(e, index) : () => {}}
        ref={(element) => element && !disabled && tabRefs.push(element)}
        data-test="DesignSystem-Tabs--Tab"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index)}
        tabIndex={disabled ? -1 : 0}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(-1)}
      >
        {draggable && (
          <Icon
            className={draggableIconClass}
            name="drag_indicator"
            appearance={isDragActiveIndex === index ? 'primary' : 'subtle'}
          />
        )}
        {renderTab(currentTabProp, index)}
      </div>
    );
  });
  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={wrapperClass}>
      <div className={headerClass} data-test="DesignSystem-Tabs--Header" ref={containerRef}>
        {renderTabs}
        {inlineComponent}
      </div>
      {children && (
        <div className={tabContentClass} data-test="DesignSystem-Tabs--Content">
          {tabs[activeIndex]}
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
