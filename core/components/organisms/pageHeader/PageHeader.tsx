import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';

export interface PageHeaderProps {
  title: string;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  tabs?: React.ReactNode;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, navigation, actions, tabs } = props;

  const wrapperClasses = classNames({
    'PageHeader-wrapper': true,
    ['PageHeader-wrapper--withTabs']: tabs
  });

  const classes = classNames({
    PageHeader: true
  });

  return (
    <div className={wrapperClasses}>
      <div className={classes}>
        <Heading size="m">{title}</Heading>
        {navigation}
        {actions}
      </div>
      <div>
        {tabs}
      </div>
    </div>
  );
};

PageHeader.defaultProps = {
  title: '',
  navigation: null,
  actions: null,
  tabs: null
};

export default PageHeader;
