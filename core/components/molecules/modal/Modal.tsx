import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OverlayFooter } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { Row, Column, Backdrop, OutsideClick, Button, Tooltip } from '@/index';
import { ColumnProps } from '@/index.type';
import { getWrapperElement, getUpdatedZIndex, closeOnEscapeKeypress } from '@/utils/overlayHelper';
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
   * Closes `Modal` when `Escape` key is pressed
   */
  closeOnEscape?: boolean;
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

/**
 * ** NOTE: Use `headerOptions`, `header`, `footerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 */
class Modal extends React.Component<ModalProps, ModalState> {
  modalRef = React.createRef<HTMLDivElement>();

  element: Element;

  static defaultProps = {
    dimension: 'medium',
  };

  constructor(props: ModalProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  onCloseHandler = (event: KeyboardEvent) => {
    const isTopOverlay = OverlayManager.isTopOverlay(this.modalRef.current);
    closeOnEscapeKeypress(event, isTopOverlay, this.onOutsideClickHandler);
  };

  componentDidMount() {
    if (this.props.closeOnEscape) {
      if (this.state.open) {
        OverlayManager.add(this.modalRef.current);
      }
      document.addEventListener('keydown', this.onCloseHandler);
    }

    if (this.props.backdropClose) {
      if (this.state.open) {
        OverlayManager.add(this.modalRef.current);
      }
    }

    const zIndex = getUpdatedZIndex({
      element: this.element,
      containerClassName: '.Overlay-container',
      elementRef: this.modalRef,
    });
    this.setState({
      zIndex,
    });
  }

  componentWillUnmount() {
    if (this.props.closeOnEscape) {
      document.removeEventListener('keydown', this.onCloseHandler);
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

        if (this.props.closeOnEscape || this.props.backdropClose) OverlayManager.add(this.modalRef.current);
      } else {
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

        if (this.props.closeOnEscape || this.props.backdropClose) OverlayManager.remove(this.modalRef.current);
      }
    }
  }

  onOutsideClickHandler(event: Event) {
    const { closeOnEscape, backdropClose, onClose } = this.props;
    const { open } = this.state;
    if (open && OverlayManager.isTopOverlay(this.modalRef.current)) {
      if (closeOnEscape || backdropClose) OverlayManager.remove(this.modalRef.current);

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
    } = this.props;

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
          {...baseProps}
          className={classes}
          {...sizeMap[dimension]}
          ref={this.modalRef}
        >
          {(headerOptions || header) && (
            <div className={headerClass}>
              <Column>
                {!header && <OverlayHeader data-test="DesignSystem-Modal--header" {...headerOptions} />}

                {!!header && header}
              </Column>
              <Column className="flex-grow-0">
                <Tooltip tooltip="Close" position="bottom">
                  <Button
                    icon="close"
                    appearance="transparent"
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
