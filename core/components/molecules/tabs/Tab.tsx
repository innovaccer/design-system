import * as React from 'react';

export interface TabProps {
  label: React.ReactNode;
}

export const Tab: React.FunctionComponent<TabProps> = props => {
  const {
    children,
  } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default Tab;
