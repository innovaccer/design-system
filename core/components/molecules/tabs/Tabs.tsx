import * as React from 'react';
import classNames from 'classnames';
import { ITabProps } from './Tab';

export interface ITabsProps {
  activeTab?: number;
  children: React.FunctionComponentElement<ITabProps>[];
  onTabChange?: (tabIndex: number) => void;
}

const Tabs: React.FunctionComponent<ITabsProps> = props => {
  const {
    children = [],
    onTabChange
  } = props;

  const [activeTab, setActiveTab] = React.useState(props.activeTab && props.activeTab < children.length
    ? props.activeTab
    : 0);

  React.useEffect(() => {
    setActiveTab(
      props.activeTab && props.activeTab < children.length
      ? props.activeTab
      : 0
    );
  }, [props.activeTab]);

  const wrapperClass = classNames({
    ['Tabs']: true,
  });

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const TabsHeader = (
    children.map((child, index) => {
      const tabHeaderClass = classNames({
        ['Tab']: true,
        ['Tab--active']: activeTab === index
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
      <div className="Tabs-header">
        {TabsHeader}
      </div>
      <div className="Tabs-content">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
