import * as React from 'react';

export interface TabProps {
  /**
   * Label of the Tab
   */
  label: React.ReactNode;
  /**
   * To be rendered in `Tab` component
   */
  children: React.ReactNode;
}

export const Tab = (props: TabProps) => {
  const {
    children,
  } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

Tab.displayName = 'Tab';

export default Tab;
