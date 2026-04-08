import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OverlayFooter } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { Row, Column, Backdrop, OutsideClick, Button, Tooltip } from '@/index';
import { ColumnProps } from '@/index.type';
import {
  getWrapperElement,
  getUpdatedZIndex,
  closeOnEscapeKeypress,
  handleFocusTrapKeyDown,
  restoreFocusToElementIfConnected,
} from '@/utils/overlayHelper';
import OverlayManager from '@/utils/OverlayManager';
import { FooterOptions } from '@/common.type';
import styles from '@css/components/modal.module.css';
import rowStyles from '@css/components/column.module.css';

export type ModalDimension = 'small' | 'medium' | 'large';

export interface ModalProps extends BaseProps {
  /**
   * Callback for `Modal` close event on backdrop click
   *
   * ** Callback will be deprecated soon. Will only support boolean value. **
   *
   * ** Use `boolean` value if you are using `headerOptions` and `onClose` **
   */
  backdropClose?: boolean | ((event?: Event, reason?: string) => void);
  /**
   * Dimension of `Modal`
   */
  dimension: ModalDimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * onClose callback to be called on `Modal` close
   */
  onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
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
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  headerOptions?: OverlayHeaderProps;
  /**
   * header component to be used as modal header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;
  /**
   * Custom `footer` component
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  footer?: React.ReactNode;
  /**
   * Footer options (doesn't work if `footer` prop is used).
   *
   * Use `footer` prop if custom footer is needed.
   *
   * <pre className="DocPage-codeBlock">
   *  OverlayFooterOptions {
   *    actions: ButtonProps[];
   *  }
   * ([ButtonProps](https://mds.innovaccer.com/?path=/docs/components-button-button-all--all))
   * </pre>
   */
  footerOptions?: FooterOptions;
  /**
   * Element to be rendered
   *
   * ** No need to write `ModalHeader`, `ModalBody` and `ModalFooter` anymore **
   * ** if you are using `headerOptions` and `footer` **
   * ** Just pass the content to be rendered in the `Modal` body. **
   *
   * ** Support for composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  children?: React.ReactNode;
  /**
   * Show dividers in the header and the footer.
   */
  seperator?: boolean;
  /**
   * ** Closes `Modal` when `Escape` key is pressed. **
   *
   * ** This prop is deprecated and has no effect. Escape always closes the modal when the focus trap is active (a11y requirement for WCAG 2.2.1). **
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Associates the dialog with a visible heading element.
   *
   * Pass the `id` of the element that labels this modal.
   */
  'aria-labelledby'?: string;
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

let modalInstanceCounter = 0;

/**
 * ** NOTE: Use `headerOptions`, `header`, `footerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 */
class Modal extends React.Component<ModalProps, ModalState> {
  modalRef = React.createRef<HTMLDivElement>();
  modalContentRef = React.createRef<HTMLDivElement>();
  previousActiveElement: HTMLElement | null = null;
  staticFocusTarget: HTMLElement | null = null;
  autoHeadingId: string;

  element: Element;

  static defaultProps = {
    dimension: 'medium',
    closeOnEscape: true,
  };

  constructor(props: ModalProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };
    modalInstanceCounter += 1;
    this.autoHeadingId = `modal-title-${modalInstanceCounter}`;

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  onCloseHandler = (event: KeyboardEvent) => {
    closeOnEscapeKeypress(event, true, this.onOutsideClickHandler);
  };

  onFocusTrapKeyDown = (event: KeyboardEvent) => {
    const container = this.modalContentRef.current;
    if (!container) return;
    handleFocusTrapKeyDown(event, container, this.staticFocusTarget);
  };

  activateFocusTrap = () => {
    if (!this.previousActiveElement || !this.modalRef.current?.contains(document.activeElement)) {
      this.previousActiveElement = document.activeElement as HTMLElement | null;
    }
    const container = this.modalContentRef.current;
    if (!container) return;

    window.requestAnimationFrame(() => {
      // Per WAI-ARIA APG: for dialogs with semantic content (heading + body + footer),
      // focus the element named by aria-labelledby (the heading) with tabindex="-1" so
      // VoiceOver announces the dialog title before the user tabs to interactive elements.
      // Fall back to the dialog container if no internal heading is found.
      const labelledById = container.getAttribute('aria-labelledby');
      const candidateEl = labelledById ? document.getElementById(labelledById) : null;
      const headingEl = candidateEl && container.contains(candidateEl) ? candidateEl : null;

      const target = headingEl ?? container;
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      this.staticFocusTarget = target;
    });

    document.addEventListener('keydown', this.onFocusTrapKeyDown, true);
    document.addEventListener('keydown', this.onCloseHandler);
  };

  deactivateFocusTrap = () => {
    document.removeEventListener('keydown', this.onFocusTrapKeyDown, true);

    document.removeEventListener('keydown', this.onCloseHandler);

    const container = this.modalContentRef.current;
    if (container) {
      container.removeAttribute('tabindex');
    }

    // Remove tabindex from whichever static element was focused on open (heading or container).
    if (this.staticFocusTarget && this.staticFocusTarget !== container) {
      this.staticFocusTarget.removeAttribute('tabindex');
    }
    this.staticFocusTarget = null;

    // Capture in variable so RAF callback has stable reference (previousActiveElement is cleared below)
    const elementToFocus = this.previousActiveElement;
    this.previousActiveElement = null;

    restoreFocusToElementIfConnected(elementToFocus, this.modalContentRef.current);
  };

  componentDidMount() {
    if (this.state.open) {
      OverlayManager.add(this.modalRef.current);
    }

    if (this.props.backdropClose && this.state.open) {
      OverlayManager.add(this.modalRef.current);
    }

    const zIndex = getUpdatedZIndex({
      element: this.element,
      containerClassName: '.Overlay-container',
      elementRef: this.modalRef,
    });
    this.setState({
      zIndex,
    });

    if (this.state.open) {
      this.activateFocusTrap();
    }
  }

  componentWillUnmount() {
    if (this.state.open) {
      this.deactivateFocusTrap();
      OverlayManager.remove(this.modalRef.current);
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Overlay-container--open',
          elementRef: this.modalRef,
        });

        this.setState({
          zIndex,
          open: true,
          animate: true,
        });

        OverlayManager.add(this.modalRef.current);

        this.activateFocusTrap();
      } else {
        this.deactivateFocusTrap();
        OverlayManager.remove(this.modalRef.current);

        this.setState(
          {
            animate: false,
          },
          () => {
            window.setTimeout(() => {
              this.setState({
                open: false,
              });
            }, 120);
          }
        );
      }
    }
  }

  onOutsideClickHandler(event: Event) {
    const { backdropClose, onClose } = this.props;
    const { open } = this.state;
    if (open && OverlayManager.isTopOverlay(this.modalRef.current)) {
      if (onClose) onClose(event, 'OutsideClick');
      else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const {
      className,
      backdropClose,
      dimension,
      children,
      headerOptions,
      header,
      footerOptions,
      seperator,
      footer,
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
        [styles.Modal]: true,
        [styles['Modal--open']]: open,
        [styles['Modal-animation--open']]: animate,
        [styles['Modal-animation--close']]: !animate,
      },
      className
    );

    const headerClass = classNames({
      [styles['Modal-header']]: true,
      [styles['Modal-header--withSeperator']]: seperator,
    });

    const footerClass = classNames({
      [styles['Modal-footer']]: true,
      [styles['Modal-footer--withSeperator']]: seperator,
    });

    const ContainerClass = classNames({
      [rowStyles['Row']]: true,
      ['Overlay-container']: true,
      ['Overlay-container--open']: open,
    });

    const isAPINew = headerOptions || footerOptions || footer || header;
    const bodyClass = classNames({
      [styles['Modal-body']]: true,
      [styles['Modal-body--withMargin']]: isAPINew ? !!footer : true,
      [styles['Modal-body--withPadding']]: isAPINew ? !footer : true,
    });

    const baseProps = extractBaseProps(this.props);
    const sizeMap: Record<ModalProps['dimension'], Partial<ColumnProps>> = {
      small: {
        size: '3',
        sizeL: '4',
        sizeM: '4',
        sizeXS: '10',
      },
      medium: {
        size: '4',
        sizeL: '6',
        sizeM: '6',
        sizeXS: '10',
      },
      large: {
        size: '6',
        sizeL: '8',
        sizeM: '8',
        sizeXS: '10',
      },
    };

    const ModalContainer = (
      <Row
        data-test="DesignSystem-ModalContainer"
        className={ContainerClass}
        data-layer={true}
        data-opened={open}
        style={{ zIndex: zIndex ? zIndex : 1001 }}
      >
        <Column
          data-test="DesignSystem-Modal"
          role="dialog"
          aria-modal={open}
          aria-labelledby={resolvedAriaLabelledBy}
          {...baseProps}
          className={classes}
          {...sizeMap[dimension]}
          ref={(el) => {
            (this.modalContentRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            if (!backdropClose) (this.modalRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
        >
          {(headerOptions || header) && (
            <div className={headerClass}>
              <Column>
                {!header && (
                  <OverlayHeader
                    data-test="DesignSystem-Modal--header"
                    {...headerOptions}
                    headingId={resolvedHeadingId}
                  />
                )}

                {!!header && header}
              </Column>
              <Column className="flex-grow-0">
                <Tooltip tooltip="Close" position="bottom">
                  <Button
                    icon="close"
                    appearance="transparent"
                    aria-label="Close"
                    data-test="DesignSystem-Modal--CloseButton"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      if (onClose) onClose(event, 'IconClick');
                    }}
                  />
                </Tooltip>
              </Column>
            </div>
          )}
          {open && children && (
            <>
              {headerOptions || footerOptions || footer || header ? (
                <OverlayBody className={bodyClass}>{this.props.children}</OverlayBody>
              ) : (
                children
              )}
            </>
          )}
          {(!!footer || !!footerOptions) && (
            <OverlayFooter
              data-test="DesignSystem-Modal--footer"
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

    const ModalWrapper = backdropClose ? (
      <OutsideClick
        ref={this.modalRef}
        data-test="DesignSystem-Modal--OutsideClick"
        onOutsideClick={this.onOutsideClickHandler}
      >
        {ModalContainer}
      </OutsideClick>
    ) : (
      ModalContainer
    );

    const WrapperElement = ReactDOM.createPortal(ModalWrapper, this.element);

    return (
      <>
        {WrapperElement}
        <Backdrop open={this.state.animate} zIndex={BackdropZIndex} />
      </>
    );
  }
}

export default Modal;
