import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/collapsible.module.css';

export interface CollapsibleProps extends BaseProps {
  /**
   * Set expanded state of `Collapsible`
   */
  expanded: boolean;
  /**
   * Determines if `Collapsible Panel` expands on hover
   */
  hoverable: boolean;
  /**
   * Height of `Collapsible`
   */
  height: string | number;
  /**
   * Width of expanded `Collapsible`
   */
  expandedWidth: number;
  /**
   * Callback to be called on footer click
   */
  onToggle?: (expanded: boolean) => void;
  /**
   * Components to render inside `Collapsible`
   */
  children: React.ReactNode;
  /**
   * Determines whether to show trigger at bottom of `Collapsible`
   */
  withTrigger: boolean;
}

export const Collapsible = (props: CollapsibleProps) => {
  const { expanded, hoverable, expandedWidth, height, children, className, onToggle, withTrigger } = props;

  const [isClicked, setIsClicked] = React.useState(true);
  const [seperator, setSeperator] = React.useState(false);

  const ref = React.createRef<HTMLDivElement>();
  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (ref.current) {
      setSeperator(ref.current.scrollHeight > ref.current.clientHeight);
    }
  });

  const WrapperClass = classNames({
    [styles['Collapsible-wrapper']]: true,
    [styles['Collapsible-wrapper--overlay']]: !isClicked,
  });

  const BodyClass = classNames({
    [styles['Collapsible-body']]: true,
    ['overflow-hidden']: !expanded && hoverable,
  });

  const classes = classNames(
    {
      [styles.Collapsible]: true,
      [styles['Collapsible--overlay']]: !isClicked,
      [styles['Collapsible--shadow']]: !isClicked && expanded,
    },
    className
  );

  const FooterClass = classNames({
    [styles['Collapsible-footer']]: true,
    [styles['Collapsible-footer--seperator']]: seperator,
  });

  const onToggleHandler = (newExpanded: boolean, type: string) => () => {
    if (onToggle) {
      if (type === 'mouseenter' || type === 'mouseleave') {
        if ((isClicked && expanded) || !hoverable) return;
        setIsClicked(false);
      }

      if (type === 'click') {
        setIsClicked(true);
      }

      onToggle(newExpanded);
    }
  };

  const width = expanded ? expandedWidth : undefined;

  return (
    <div data-test="DesignSystem-CollapsibleWrapper" className={WrapperClass} style={{ height }}>
      <div data-test="DesignSystem-Collapsible" {...baseProps} data-layer={true} className={classes} style={{ width }}>
        <div
          className={BodyClass}
          data-test="DesignSystem-CollapsibleBody"
          onMouseEnter={onToggleHandler(true, 'mouseenter')}
          onMouseLeave={onToggleHandler(false, 'mouseleave')}
          ref={ref}
        >
          {children}
        </div>
        {withTrigger && (
          <div
            role="button"
            tabIndex={0}
            className={FooterClass}
            data-test="DesignSystem-Collapsible--Footer"
            onClick={onToggleHandler(!expanded, 'click')}
            onKeyDown={onToggleHandler(!expanded, 'click')}
          >
            <Icon
              name={expanded ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}
              data-test="DesignSystem-Collapsible--FooterIcon"
              className="px-6 py-4 my-2 cursor-pointer"
              size={16}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Collapsible.displayName = 'Collapsible';

Collapsible.defaultProps = {
  expanded: false,
  hoverable: true,
  height: '100%',
  expandedWidth: '240px',
  withTrigger: true,
};

export default Collapsible;
