import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Column, Backdrop, OutsideClick, Button, Tooltip } from '@/index';
import { ColumnProps } from '@/index.type';
import { OverlayFooter } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { BaseProps, extractBaseProps } from '@/utils/types';
import {
  getWrapperElement,
  getUpdatedZIndex,
  closeOnEscapeKeypress,
  handleFocusTrapKeyDown,
  restoreFocusToElementIfConnected,
} from '@/utils/overlayHelper';
import OverlayManager from '@/utils/OverlayManager';
import { FooterOptions } from '@/common.type';
import styles from '@css/components/sidesheet.module.css';

export type SidesheetDimension = 'regular' | 'large';

export interface SidesheetProps extends BaseProps {
  /**
   * Header options (doesn't work if `header` prop is used)
   *
   * Use `header` prop if custom header is needed.
   *
   * <pre className="DocPage-codeBlock">
   * Header:
   * {
   *    heading: string;
   *    subHeading?: string;
   *    backIcon?: boolean;
   *    backIconCallback?: (e) => void;
   *    backButton?: boolean;
   *    backButtonCallback?: (e) => void;
   * }
   * </pre>
   *
   * **`backIcon` and `backIconCallback` will soon be deprecated**
   *
   * | Name | Description |
   * | --- | --- |
   * | heading | Heading of `Sidesheet` |
   * | subHeading | Subheading of `Sidesheet` |
   * | backButton | Determines if back button is visible |
   * | backButtonCallback | Callback called when back button is clicked |
   * | backIcon | Determines if back button is visible |
   * | backIconCallback | Callback called when back button is clicked |
   * | headingId | Optional id to attach to heading for aria-labelledby. |
   */
  headerOptions: Omit<OverlayHeaderProps, 'onClose'>;
  /**
   * header component to be used as sidesheet header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;
  /**
   * Dimension of `Sidesheet`
   *
   * Dimension: `large` | `regular`
   */
  dimension: SidesheetDimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Determines if footer is sticked at bottom
   */
  stickFooter?: boolean;
  /**
   * Show dividers in the header and the footer.
   */
  seperator?: boolean;
  /**
   * Element to be rendered
   */
  children?: React.ReactNode;
  /**
   * Footer component inside `Sidesheet`
   */
  footer?: React.ReactNode;
  /**
   * Footer options (doesn't work if `footer` prop is used).
   *
   * Use `footer` prop if custom footer is needed.
   * <pre className="DocPage-codeBlock">
   *  OverlayFooterOptions {
   *    actions: ButtonProps[];
   *  }
   * ([ButtonProps](https://mds.innovaccer.com/?path=/docs/components-button-button-all--all))
   * </pre>
   */
  footerOptions?: FooterOptions;
  /**
   * Determined close event on backdrop click
   */
  backdropClose?: boolean;
  /**
   * ** Closes `Sidesheet` when `Escape` key is pressed.
   *
   * ** This prop is deprecated and has no effect. Escape always closes the modal when the focus trap is active (a11y requirement for WCAG 2.2.1). **
   */
  closeOnEscape?: boolean;
  /**
   * Callback called `Sidesheet` is closed
   */
  onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  /**
   * Associates the dialog with a visible heading element.
   *
   * Pass the `id` of the element that labels this sidesheet.
   */
  'aria-labelledby'?: string;
}

interface SidesheetState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

const sidesheetWidth: Record<SidesheetDimension, ColumnProps['size']> = {
  regular: '6',
  large: '10',
};

const SIDESHEET_OPEN_ANIMATION = 'sidesheet-open';
let sidesheetInstanceCounter = 0;

class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
  sidesheetRef = React.createRef<HTMLDivElement>();
  sidesheetContentRef = React.createRef<HTMLDivElement>();
  previousActiveElement: HTMLElement | null = null;
  staticFocusTarget: HTMLElement | null = null;
  autofocusRAF: number | null = null;
  autoHeadingId: string;

  element: Element;

  static defaultProps = {
    dimension: 'regular',
    stickFooter: false,
    headerOptions: {},
    closeOnEscape: true,
  };

  constructor(props: SidesheetProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };
    sidesheetInstanceCounter += 1;
    this.autoHeadingId = `sidesheet-title-${sidesheetInstanceCounter}`;

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  onCloseHandler = (event: KeyboardEvent) => {
    closeOnEscapeKeypress(event, true, this.onOutsideClickHandler);
  };

  onFocusTrapKeyDown = (event: KeyboardEvent) => {
    const container = this.sidesheetContentRef.current;
    if (!container) return;
    handleFocusTrapKeyDown(event, container, this.staticFocusTarget);
  };

  focusOnOpen = () => {
    const container = this.sidesheetContentRef.current;
    if (!container || !this.props.open) return;

    // Per WAI-ARIA APG: focus the element named by aria-labelledby (the heading)
    // so VoiceOver announces the dialog title before the user tabs to interactive
    // elements. Fall back to the dialog container if no internal heading is found.
    const labelledById = container.getAttribute('aria-labelledby');
    const candidateEl = labelledById ? document.getElementById(labelledById) : null;
    const headingEl = candidateEl && container.contains(candidateEl) ? candidateEl : null;

    const target = headingEl ?? container;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    this.staticFocusTarget = target;
  };

  onOpenAnimationStart = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.animationName !== SIDESHEET_OPEN_ANIMATION) return;
    if (this.autofocusRAF !== null) {
      window.cancelAnimationFrame(this.autofocusRAF);
      this.autofocusRAF = null;
    }
    this.focusOnOpen();
  };

  activateFocusTrap = () => {
    this.previousActiveElement = document.activeElement as HTMLElement | null;
    const container = this.sidesheetContentRef.current;
    if (!container) return;

    this.autofocusRAF = window.requestAnimationFrame(() => {
      this.autofocusRAF = null;
      this.focusOnOpen();
    });

    document.addEventListener('keydown', this.onFocusTrapKeyDown, true);
    document.addEventListener('keydown', this.onCloseHandler);
  };

  deactivateFocusTrap = () => {
    if (this.autofocusRAF !== null) {
      window.cancelAnimationFrame(this.autofocusRAF);
      this.autofocusRAF = null;
    }
    document.removeEventListener('keydown', this.onFocusTrapKeyDown, true);

    document.removeEventListener('keydown', this.onCloseHandler);

    const container = this.sidesheetContentRef.current;
    if (container) {
      container.removeAttribute('tabindex');
    }

    if (this.staticFocusTarget && this.staticFocusTarget !== container) {
      this.staticFocusTarget.removeAttribute('tabindex');
    }
    this.staticFocusTarget = null;

    const elementToFocus = this.previousActiveElement;
    this.previousActiveElement = null;

    restoreFocusToElementIfConnected(elementToFocus, this.sidesheetContentRef.current);
  };

  componentDidMount() {
    if (this.state.open) {
      OverlayManager.add(this.sidesheetRef.current);
      this.activateFocusTrap();
    }
    if (this.props.backdropClose && this.state.open) {
      OverlayManager.add(this.sidesheetRef.current);
    }
    const zIndex = getUpdatedZIndex({
      element: this.element,
      containerClassName: '.Overlay-container',
      elementRef: this.sidesheetRef,
    });
    this.setState({
      zIndex,
    });
  }

  componentWillUnmount() {
    if (this.state.open) {
      this.deactivateFocusTrap();
      OverlayManager.remove(this.sidesheetRef.current);
    }
  }

  componentDidUpdate(prevProps: SidesheetProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Overlay-container--open',
          elementRef: this.sidesheetRef,
        });

        this.setState({
          zIndex,
          open: true,
          animate: true,
        });

        OverlayManager.add(this.sidesheetRef.current);
        this.activateFocusTrap();
      } else {
        this.deactivateFocusTrap();
        OverlayManager.remove(this.sidesheetRef.current);

        this.setState({
          animate: false,
        });
      }
    }
  }

  onOutsideClickHandler(event: Event) {
    const { onClose } = this.props;
    const { open } = this.state;

    if (open && OverlayManager.isTopOverlay(this.sidesheetRef.current)) {
      if (onClose) onClose(event, 'OutsideClick');
    }
  }

  handleAnimationEnd() {
    if (!this.state.animate) {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const {
      className,
      backdropClose,
      dimension,
      footer,
      seperator,
      stickFooter,
      headerOptions,
      footerOptions,
      header,
      onClose,
      'aria-labelledby': ariaLabelledBy,
    } = this.props;
    const shouldUseAutoHeadingId = !ariaLabelledBy && !header && Boolean(headerOptions?.heading);
    const resolvedHeadingId =
      headerOptions?.headingId ||
      (ariaLabelledBy && !ariaLabelledBy.includes(' ') && !header && Boolean(headerOptions?.heading)
        ? ariaLabelledBy
        : undefined) ||
      (shouldUseAutoHeadingId ? this.autoHeadingId : undefined);
    const resolvedAriaLabelledBy = ariaLabelledBy || resolvedHeadingId;

    const BackdropZIndex: number = zIndex ? zIndex - 1 : 1000;

    const classes = classNames(
      {
        [styles.Sidesheet]: true,
        [styles['Sidesheet--open']]: open,
        [styles['Sidesheet-animation--open']]: animate,
        [styles['Sidesheet-animation--close']]: !animate,
      },
      className
    );

    const ContainerClass = classNames({
      ['Overlay-container']: true,
      ['fade-in']: animate,
      ['Overlay-container--open']: animate,
      ['Overlay-container--close']: !animate,
    });

    const headerClass = classNames({
      [styles['Sidesheet-header']]: true,
      [styles['Sidesheet-header--withSeperator']]: seperator,
    });

    const footerClass = classNames({
      [styles['Sidesheet-footer']]: true,
      [styles['Sidesheet-footer--withSeperator']]: seperator,
      [styles['Sidesheet-footer--stickToBottom']]: stickFooter,
    });

    const bodyClass = classNames({
      [styles['Sidesheet-body']]: true,
      [styles['Sidesheet-body--withMargin']]: !!footer && stickFooter,
      [styles['Sidesheet-body--nextPage']]: headerOptions?.backButton || headerOptions?.backIcon,
      [styles['Sidesheet-body--firstPage']]: !headerOptions?.backButton && !headerOptions?.backIcon,
    });

    const headingClass = classNames({
      [styles['Sidesheet-header--shiftRight']]: headerOptions?.backButton || headerOptions?.backIcon,
      [styles['Sidesheet-header--shiftLeft']]: !headerOptions?.backButton && !headerOptions?.backIcon,
    });

    const baseProps = extractBaseProps(this.props);

    const SidesheetContainer = (
      <Row
        data-test="DesignSystem-SidesheetContainer"
        data-open={this.state.open}
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex: zIndex ? zIndex : 1001 }}
        ref={this.sidesheetRef}
        onAnimationEnd={() => this.handleAnimationEnd}
      >
        <Column
          ref={(el) => {
            (this.sidesheetContentRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
          data-test="DesignSystem-Sidesheet"
          role="dialog"
          aria-modal={open}
          aria-labelledby={resolvedAriaLabelledBy}
          onAnimationStart={this.onOpenAnimationStart}
          {...baseProps}
          className={classes}
          size={sidesheetWidth[dimension]}
        >
          <div className={headerClass}>
            <Column data-test="DesignSystem-Sidesheet--Header">
              {!header && (
                <OverlayHeader headingClass={headingClass} {...headerOptions} headingId={resolvedHeadingId} />
              )}

              {!!header && header}
            </Column>
            <Column className="flex-grow-0">
              <Tooltip tooltip="Close">
                <Button
                  icon="close"
                  appearance="transparent"
                  data-test="DesignSystem-Sidesheet--CloseButton"
                  aria-label="Close"
                  largeIcon={true}
                  onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    if (onClose) onClose(event, 'IconClick');
                  }}
                />
              </Tooltip>
            </Column>
          </div>
          <OverlayBody data-test="DesignSystem-Sidesheet--OverlayBody" className={bodyClass}>
            {this.props.children}
          </OverlayBody>
          {(!!footer || !!footerOptions) && (
            <OverlayFooter
              data-test="DesignSystem-Sidesheet--Footer"
              {...footerOptions}
              open={open}
              className={footerClass}
              skipFocusOnOpen
            >
              {footer}
            </OverlayFooter>
          )}
        </Column>
      </Row>
    );

    const SidesheetWrapper = backdropClose ? (
      <OutsideClick
        ref={this.sidesheetRef}
        data-test="DesignSystem-Sidesheet--OutsideClick"
        onOutsideClick={this.onOutsideClickHandler}
      >
        {SidesheetContainer}
      </OutsideClick>
    ) : (
      SidesheetContainer
    );

    const WrapperElement = ReactDOM.createPortal(SidesheetWrapper, this.element);

    return (
      <>
        {WrapperElement}
        <Backdrop open={this.state.animate} zIndex={BackdropZIndex} />
      </>
    );
  }
}

export default Sidesheet;
