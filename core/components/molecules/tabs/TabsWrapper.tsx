import * as React from 'react';
import classNames from 'classnames';
import { TabProps } from './Tab';

export interface TabsWrapperProps {
  /**
   * Index of desired selected `Tab`
   */
  active?: number;
  /**
   * `Tab` Component will be wrapped in `TabsWrapper` container
   */
  children: React.FunctionComponentElement<TabProps>[];
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
}

export const TabsWrapper = (props: TabsWrapperProps) => {
  const {
    children = [],
    onTabChange
  } = props;

  const [active, setActiveTab] = React.useState(props.active && props.active < children.length
    ? props.active
    : 0);

  React.useEffect(() => {
    setActiveTab(
      props.active && props.active < children.length
      ? props.active
      : 0
    );
  }, [props.active]);

  const wrapperClass = classNames({
    ['TabsWrapper']: true,
  });

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const TabsHeader = (
    children.map((child, index) => {
      const tabHeaderClass = classNames({
        ['Tab']: true,
        ['Tab--active']: active === index
      });

      const { label } = child.props;
      return (
        <div key={index} className={tabHeaderClass} onClick={() => tabClickHandler(index)}>
          {label}
        </div>
      );
    })
  );

  return (
    <div className={wrapperClass}>
      <div className="TabsWrapper-header">
        {TabsHeader}
      </div>
      <div className="TabsWrapper-content">
        {children[active]}
      </div>
    </div>
  );
};

TabsWrapper.displayName = 'TabsWrapper';

export default TabsWrapper;
