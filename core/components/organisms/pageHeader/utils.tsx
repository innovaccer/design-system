import * as React from 'react';
import classNames from 'classnames';
import { navigationPositionType } from './PageHeader';
import { Heading, Column } from '@/index';
import styles from '@css/components/pageHeader.module.css';

export const Status = (props: {
  status: React.ReactNode;
  meta: React.ReactNode;
  navigationPosition: navigationPositionType;
  navigation: React.ReactNode;
  tabs: React.ReactNode;
}) => {
  const { status, meta, navigationPosition, navigation, tabs } = props;

  const statusClasses = classNames({
    [styles['PageHeader-statusWrapper']]: true,
    'mb-3': (navigationPosition === 'bottom' && navigation) || tabs,
  });

  return (
    <>
      {(status || meta) && (
        <div className={statusClasses} data-test="DesignSystem-PageHeader--Status">
          {status}
          {meta}
        </div>
      )}
    </>
  );
};

export const Action = (props: { actions: React.ReactNode; navigation: React.ReactNode; stepper: React.ReactNode }) => {
  const { actions, navigation, stepper } = props;

  return (
    <>
      {actions ? (
        <Column size="4" sizeXL="4" sizeM="4" data-test="DesignSystem-PageHeader--Actions">
          <div className={styles['PageHeader-actionsWrapper']}>{actions}</div>
        </Column>
      ) : (
        (navigation || stepper) && (
          <Column size="4" sizeXL="4" sizeM="4" data-test="DesignSystem-PageHeader--Actions">
            <div className={styles['PageHeader-actionsWrapper']}></div>
          </Column>
        )
      )}
    </>
  );
};

export const Nav = (props: { navigation: React.ReactNode; stepper: React.ReactNode }) => {
  const { navigation, stepper } = props;

  if (!navigation && !stepper) {
    return null;
  }
  return (
    <div className={styles['PageHeader-navigationWrapper']} data-test="DesignSystem-PageHeader--Nav">
      {navigation || stepper}
    </div>
  );
};

export const CenterNav = (props: {
  colSize: string;
  breadcrumbs: React.ReactNode;
  navigationPosition: navigationPositionType;
  navigation: React.ReactNode;
  stepper: React.ReactNode;
}) => {
  const { colSize, breadcrumbs, navigationPosition } = props;
  return (
    <>
      {(!breadcrumbs || navigationPosition === 'center') && colSize === '4' && (
        <Column size="4" sizeXL="4" sizeM="4" data-test="DesignSystem-PageHeader--CenterNav">
          <Nav {...props} />
        </Column>
      )}
    </>
  );
};

export const BackButton = (props: { button: React.ReactNode }) => {
  const { button } = props;
  return (
    <>
      {button && (
        <div className="mr-5 my-3" data-test="DesignSystem-PageHeader--Button">
          {button}
        </div>
      )}
    </>
  );
};

export const Title = (props: { badge: React.ReactNode; title: string }) => {
  const { badge, title } = props;
  return (
    <div className={styles['PageHeader-titleWrapper']} data-test="DesignSystem-PageHeader--Title">
      <Heading className={styles['PageHeader-title']}>{title}</Heading>
      {badge}
    </div>
  );
};
