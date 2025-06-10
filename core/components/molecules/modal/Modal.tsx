import { useEffect, useRef, useState } from 'react';
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

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    open,
    onClose,
    backdropClose,
    closeOnEscape,
    dimension = 'medium',
    header,
    headerOptions,
    footer,
    footerOptions,
    children,
    className,
  } = props;

  const [state, setState] = useState({
    open: open || false,
    animate: open || false,
    zIndex: 1001,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const element = useRef(getWrapperElement());

  useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener('keydown', onCloseHandler);
    }
    return () => {
      if (closeOnEscape) {
        document.removeEventListener('keydown', onCloseHandler);
      }
    };
  }, [closeOnEscape]);

  useEffect(() => {
    if (props.open !== state.open) {
      if (props.open) {
        const zIndex = getUpdatedZIndex({
          element: element.current,
          containerClassName: '.Overlay-container--open',
          elementRef: modalRef,
        });

        setState({
          zIndex,
          open: true,
          animate: true,
        });

        if (closeOnEscape || backdropClose) OverlayManager.add(modalRef.current);
      } else {
        setState(prev => ({
          ...prev,
          animate: false,
        }));

        setTimeout(() => {
          setState(prev => ({
            ...prev,
            open: false,
          }));
        }, 120);

        if (closeOnEscape || backdropClose) OverlayManager.remove(modalRef.current);
      }
    }
  }, [props.open, closeOnEscape, backdropClose]);

  const onCloseHandler = (event: KeyboardEvent) => {
    const isTopOverlay = OverlayManager.isTopOverlay(modalRef.current);
    closeOnEscapeKeypress(event, isTopOverlay, onOutsideClickHandler);
  };

  const onOutsideClickHandler = (event: Event) => {
    const { closeOnEscape, backdropClose, onClose } = props;
    const { open } = state;
    if (open && OverlayManager.isTopOverlay(modalRef.current)) {
      if (closeOnEscape || backdropClose) OverlayManager.remove(modalRef.current);

      if (onClose) onClose(event, 'OutsideClick');
      else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
    }
  };

  const { animate, open: stateOpen, zIndex } = state;

  const BackdropZIndex: number = zIndex ? zIndex - 1 : 1000;

  const classes = classNames(
    {
      [styles.Modal]: true,
      [styles['Modal--open']]: stateOpen,
      [styles['Modal-animation--open']]: animate,
      [styles['Modal-animation--close']]: !animate,
    },
    className
  );

  const headerClass = classNames({
    [styles['Modal-header']]: true,
    [styles['Modal-header--withSeperator']]: props.seperator,
  });

  const footerClass = classNames({
    [styles['Modal-footer']]: true,
    [styles['Modal-footer--withSeperator']]: props.seperator,
  });

  const ContainerClass = classNames({
    [rowStyles['Row']]: true,
    ['Overlay-container']: true,
    ['Overlay-container--open']: stateOpen,
  });

  const isAPINew = headerOptions || footerOptions || footer || header;
  const bodyClass = classNames({
    [styles['Modal-body']]: true,
    [styles['Modal-body--withMargin']]: isAPINew ? !!footer : true,
    [styles['Modal-body--withPadding']]: isAPINew ? !footer : true,
  });

  const baseProps = extractBaseProps(props);
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
      data-opened={stateOpen}
      style={{ zIndex: zIndex ? zIndex : 1001 }}
    >
      <Column
        data-test="DesignSystem-Modal"
        {...baseProps}
        className={classes}
        {...sizeMap[dimension]}
        ref={modalRef}
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
        {stateOpen && children && (
          <>
            {headerOptions || footerOptions || footer || header ? (
              <OverlayBody className={bodyClass}>{props.children}</OverlayBody>
            ) : (
              children
            )}
          </>
        )}
        {(!!footer || !!footerOptions) && (
          <OverlayFooter
            data-test="DesignSystem-Modal--footer"
            {...footerOptions}
            open={stateOpen}
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
      ref={modalRef}
      data-test="DesignSystem-Modal--OutsideClick"
      onOutsideClick={onOutsideClickHandler}
    >
      {ModalContainer}
    </OutsideClick>
  ) : (
    ModalContainer
  );

  const WrapperElement = ReactDOM.createPortal(ModalWrapper, element.current);

  return (
    <>
      {WrapperElement}
      <Backdrop open={animate} zIndex={BackdropZIndex} />
    </>
  );
};

export default Modal;
