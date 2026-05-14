import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Divider } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { BackButton, Title, CenterNav, Nav, Action, Status } from './utils';
import styles from '@css/components/pageHeader.module.css';

export type navigationPositionType = 'center' | 'bottom';

export interface PageHeaderProps extends BaseProps {
  /**
   * Page title
   */
  title: string;
  /**
   * `Navigation` component
   */
  navigation?: React.ReactNode;
  /**
   * `Stepper` component
   */
  stepper?: React.ReactNode;
  /**
   * Actions composed of `Button` and meta data
   */
  actions?: React.ReactNode;
  /**
   * `Tab` component
   */
  tabs?: React.ReactNode;
  /**
   * `Breadcrumbs` component
   */
  breadcrumbs?: React.ReactNode;
  /**
   * `Badge` component
   */
  badge?: React.ReactNode;
  /**
   * `Status` component
   */
  status?: React.ReactNode;
  /**
   * Meta data composed of `Text`
   */
  meta?: React.ReactNode;
  /**
   * `Button` component
   *  <br/>
   *  To be used on left side of title as a back button
   */
  button?: React.ReactNode;
  /**
   * Page header layout type
   */
  navigationPosition: navigationPositionType;
  /**
   * provides a border at bottom
   */
  separator: boolean;
  /**
   * Accessible label for the page header region
   */
  'aria-label'?: string;
}

type StackedMode = 'full' | 'center-wrapped' | 'all-stacked';

export const PageHeader = (props: PageHeaderProps) => {
  const {
    title,
    navigation,
    stepper,
    actions,
    tabs,
    breadcrumbs,
    badge,
    separator,
    status,
    meta,
    navigationPosition,
    className,
    button,
    'aria-label': ariaLabel,
  } = props;
  const baseProps = extractBaseProps(props);

  const isLevel1 = !!(breadcrumbs || button);

  const wrapperClasses = classNames(
    {
      [styles['PageHeader-wrapper']]: true,
      [styles['PageHeader-wrapper--withTabs']]: tabs,
      [styles['PageHeader-wrapper--level1']]: isLevel1,
      [styles['PageHeader-wrapper--withActions']]: !!actions,
    },
    className
  );

  const hasCenterNav = !!(navigation || stepper) && navigationPosition === 'center';

  const classes = classNames(styles.PageHeader);

  const rowRef = useRef<HTMLDivElement>(null);
  const [stackedMode, setStackedMode] = useState<StackedMode>('full');

  // Title is capped at 320px — beyond this it truncates with ellipsis so extra
  // width doesn't buy anything meaningful for layout decisions.
  const TITLE_CAP = 320;

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !window.ResizeObserver) return;

    const measure = () => {
      const titleEl = row.querySelector<HTMLElement>('[data-group="title"]');
      const centerEl = row.querySelector<HTMLElement>('[data-group="center"]');
      const actionsEl = row.querySelector<HTMLElement>('[data-group="actions"]');
      if (!titleEl) return;

      // Strip stacked/wrapped classes to restore base layout before measuring —
      // center-wrapped switches to flex (gridTemplateColumns becomes a no-op),
      // all-stacked sets title to 100% width (offsetWidth would return rowWidth).
      const cwClass = styles['PageHeader-row--centerWrapped'];
      const asClass = styles['PageHeader-row--allStacked'];
      const hadCW = row.classList.contains(cwClass);
      const hadAS = row.classList.contains(asClass);
      row.classList.remove(cwClass, asClass);

      const rowWidth = row.offsetWidth;

      if (hasCenterNav) {
        // Grid layout — switch all columns to max-content so each element reports
        // its natural unconstrained width (1fr columns otherwise clamp offsetWidth).
        const prevCols = row.style.gridTemplateColumns;
        row.style.gridTemplateColumns = 'max-content max-content max-content';

        const titleDesired = Math.min(titleEl.offsetWidth, TITLE_CAP);
        const centerDesired = centerEl?.offsetWidth ?? 0;
        const actionsDesired = actionsEl?.offsetWidth ?? 0;

        row.style.gridTemplateColumns = prevCols;
        if (hadCW) row.classList.add(cwClass);
        if (hadAS) row.classList.add(asClass);

        // Grid gives equal 1fr to title and actions columns. Check each half
        // independently: title must fit the left half, actions the right half.
        const halfWidth = rowWidth / 2;
        const leftOverflows = titleDesired + centerDesired / 2 > halfWidth;
        const rightOverflows = actionsDesired + centerDesired / 2 > halfWidth;
        const actionsWrap = titleDesired + actionsDesired > rowWidth;

        if (actionsWrap) {
          setStackedMode('all-stacked');
        } else if (leftOverflows || rightOverflows) {
          setStackedMode('center-wrapped');
        } else {
          setStackedMode('full');
        }
      } else {
        // Bottom nav (consumer-set) or no nav — only check if actions fit on the
        // title row. Row is flex here, so use width:max-content on each element.
        const prevTitleW = titleEl.style.width;
        const prevActionsW = actionsEl ? actionsEl.style.width : '';
        titleEl.style.width = 'max-content';
        if (actionsEl) actionsEl.style.width = 'max-content';

        const titleDesired = Math.min(titleEl.offsetWidth, TITLE_CAP);
        const actionsDesired = actionsEl?.offsetWidth ?? 0;

        titleEl.style.width = prevTitleW;
        if (actionsEl) actionsEl.style.width = prevActionsW;
        if (hadAS) row.classList.add(asClass);

        if (actionsEl && titleDesired + actionsDesired > rowWidth) {
          setStackedMode('all-stacked');
        } else {
          setStackedMode('full');
        }
      }
    };

    const observer = new window.ResizeObserver(measure);
    observer.observe(row);
    measure();

    return () => observer.disconnect();
  }, [hasCenterNav, navigation, stepper, actions]);

  const rowClasses = classNames(styles['PageHeader-row'], {
    [styles['PageHeader-row--withCenter']]: hasCenterNav,
    [styles['PageHeader-row--centerWrapped']]: hasCenterNav && stackedMode === 'center-wrapped',
    [styles['PageHeader-row--allStacked']]: stackedMode === 'all-stacked',
  });

  const centerNavProps = { navigationPosition, navigation, stepper };

  return (
    <div data-test="DesignSystem-PageHeader">
      <div {...baseProps} className={wrapperClasses} aria-label={ariaLabel}>
        {breadcrumbs && (
          <div className="pl-6" data-test="DesignSystem-PageHeader--Breadcrumbs">
            {breadcrumbs}
          </div>
        )}
        <div className="d-flex pl-6">
          <BackButton button={button} />
          <div className={classes}>
            <div className={rowClasses} ref={rowRef}>
              <div className={styles['PageHeader-group--title']} data-group="title">
                <Title badge={badge} title={title} />
                <Status status={status} meta={meta} />
              </div>
              <CenterNav {...centerNavProps} />
              <Action actions={actions} navigation={navigation} stepper={stepper} />
            </div>
          </div>
        </div>

        {(tabs || (navigationPosition === 'bottom' && (navigation || stepper))) && (
          <div className={classNames('pl-3', styles['PageHeader-bottom'])}>
            {navigationPosition === 'bottom' && <Nav navigation={navigation} stepper={stepper} />}
            {tabs && <div data-test="DesignSystem-PageHeader--Tabs">{tabs}</div>}
          </div>
        )}
      </div>
      {separator && <Divider appearance="header" />}
    </div>
  );
};

PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true,
};

export default PageHeader;
