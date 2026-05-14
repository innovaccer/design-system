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

      // Strip stacked classes before measuring so we read natural layout widths.
      // Also temporarily restore the grid (withCenter) if not in full mode —
      // grid is only applied in full mode now (center-wrapped uses flex), but we
      // need it for the max-content column trick to work accurately.
      const withCenterClass = styles['PageHeader-row--withCenter'];
      const asClass = styles['PageHeader-row--allStacked'];
      const ghostClass = styles['PageHeader-group--center--ghost'];
      const hadAS = row.classList.contains(asClass);
      const hadWithCenter = row.classList.contains(withCenterClass);
      const hadGhost = centerEl?.classList.contains(ghostClass) ?? false;

      row.classList.remove(asClass);
      if (!hadWithCenter && hasCenterNav) row.classList.add(withCenterClass);
      if (hadGhost && centerEl) centerEl.classList.remove(ghostClass);

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
        if (hadGhost && centerEl) centerEl.classList.add(ghostClass);
        if (!hadWithCenter) row.classList.remove(withCenterClass);
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
        // title row. Temporarily reshape the row into a max-content grid so each
        // element reports its natural width. Flex won't do here: flex-grow stretches
        // the title past content, and once title+actions exceed rowWidth flex-wrap
        // fires mid-measurement (title takes full row, actions onto next line),
        // inflating offsetWidth so the sum spuriously exceeds rowWidth → false stack.
        // The grid trick mirrors the hasCenterNav branch above.
        const prevDisplay = row.style.display;
        const prevCols = row.style.gridTemplateColumns;
        row.style.display = 'grid';
        row.style.gridTemplateColumns = actionsEl ? 'max-content max-content' : 'max-content';

        const titleDesired = Math.min(titleEl.offsetWidth, TITLE_CAP);
        const actionsDesired = actionsEl?.offsetWidth ?? 0;

        row.style.display = prevDisplay;
        row.style.gridTemplateColumns = prevCols;
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
    // Grid only in full mode — center-wrapped uses flex so title/actions share naturally
    [styles['PageHeader-row--withCenter']]: hasCenterNav && stackedMode === 'full',
    [styles['PageHeader-row--allStacked']]: stackedMode === 'all-stacked',
  });

  // When center nav is auto-moved to bottom, keep it ghost in the row for measurement
  // (position:absolute, visibility:hidden) so recovery detection still works.
  const centerNavGhost = hasCenterNav && stackedMode !== 'full';
  const centerNavProps = { navigationPosition, navigation, stepper, ghost: centerNavGhost };

  // Nav renders in PageHeader-bottom if: consumer set bottom, or collision moved it there
  const showNavInBottom = !!(navigation || stepper) && (navigationPosition === 'bottom' || centerNavGhost);

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

        {(tabs || showNavInBottom) && (
          <div className={classNames('pl-3', styles['PageHeader-bottom'])}>
            {showNavInBottom && <Nav navigation={navigation} stepper={stepper} />}
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
