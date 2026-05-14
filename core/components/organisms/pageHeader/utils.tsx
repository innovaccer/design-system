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

export const Action = (props: { actions: React.ReactNode; navigation: React.ReactNode; stepper: React.ReactNode }) => {
  const { actions } = props;

  return (
    <>
      {actions && (
        <div
          className={styles['PageHeader-group--actions']}
          data-group="actions"
          data-test="DesignSystem-PageHeader--Actions"
        >
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
          <Nav navigation={navigation} stepper={stepper} />
        </div>
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
