import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';
import { navigationPositionType } from './PageHeader';
import styles from '@css/components/pageHeader.module.css';

export const Status = (props: { status: React.ReactNode; meta: React.ReactNode }) => {
  const { status, meta } = props;

  return (
    <>
      {(status || meta) && (
        <div className={styles['PageHeader-statusWrapper']} data-test="DesignSystem-PageHeader--Status">
          {status}
          {meta}
        </div>
      )}
    </>
  );
};

export const Action = (props: {
  actions: React.ReactNode;
  navigation: React.ReactNode;
  stepper: React.ReactNode;
  stacked?: boolean;
  level1Responsive?: boolean;
}) => {
  const { actions, stacked, level1Responsive } = props;

  const classes = classNames(styles['PageHeader-group--actions'], {
    [styles['PageHeader-group--actions--stacked']]: stacked,
    [styles['PageHeader-group--actions--level1Responsive']]: level1Responsive,
  });

  return (
    <>
      {actions && (
        <div className={classes} data-group="actions" data-test="DesignSystem-PageHeader--Actions">
          {actions}
        </div>
      )}
    </>
  );
};

export const CenterNav = (props: {
  navigationPosition: navigationPositionType;
  navigation: React.ReactNode;
  stepper: React.ReactNode;
  ghost?: boolean;
}) => {
  const { navigationPosition, navigation, stepper, ghost } = props;
  const showCenterNav = (navigation || stepper) && navigationPosition === 'center';
  return (
    <>
      {showCenterNav && (
        <div
          className={classNames(styles['PageHeader-group--center'], {
            [styles['PageHeader-group--center--ghost']]: ghost,
          })}
          data-group="center"
          data-test={ghost ? undefined : 'DesignSystem-PageHeader--CenterNav'}
          aria-hidden={ghost || undefined}
        >
          <Nav navigation={navigation} stepper={stepper} noMargin />
        </div>
      )}
    </>
  );
};

export const Nav = (props: {
  navigation: React.ReactNode;
  stepper: React.ReactNode;
  noMargin?: boolean;
  responsiveNoMargin?: boolean;
}) => {
  const { navigation, stepper, noMargin, responsiveNoMargin } = props;

  if (!navigation && !stepper) {
    return null;
  }

  const classes = classNames(styles['PageHeader-navigationWrapper'], {
    [styles['PageHeader-navigationWrapper--noMargin']]: noMargin,
    [styles['PageHeader-navigationWrapper--noMarginSm']]: responsiveNoMargin,
  });

  return (
    <div className={classes} data-test="DesignSystem-PageHeader--Nav">
      {navigation || stepper}
    </div>
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
      <Heading className={styles['PageHeader-title']} as="h1">
        {title}
      </Heading>
      {badge}
    </div>
  );
};
