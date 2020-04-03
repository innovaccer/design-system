import * as React from 'react';
import * as ReactDOM from 'react-dom';

type IDivProps = JSX.IntrinsicElements['div'];

interface IProps extends IDivProps {
  /**
   * Trigger the function on outside click
   */
  onOutsideClick: (event: Event) => void;
  /**
   * Element to be rendered
   */
  children: React.ReactElement<any>;
}

/**
 * Handle click outside component
 * @class OutsideClick
 * @extends {React.Component<IProps, never>}
 */
class OutsideClick extends React.Component<IProps, never> {
  public container: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.container = React.createRef<HTMLDivElement>();
  }

  /**
   * Add event listener on mount
   * @memberof OutsideClick
   */
  public componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  /**
   * Remove event listener on unmount
   * @memberof OutsideClick
   */
  public componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  /**
   * Handle Outside click
   * @param {Event} event
   * @returns
   */
  public handleOutsideClick = (event: Event) => {
    const { onOutsideClick } = this.props;
    const element = this.container;

    if (!event.target || !element.current) {
      return;
    }

    if (
      !ReactDOM.findDOMNode(element.current)!.contains(
        event.target as HTMLElement,
      )
    ) {
      onOutsideClick(event);
    }
  }

  public render() {
    const { children } = this.props;
    return React.cloneElement(React.Children.only(children), {
      ref: this.container,
    });
  }
}

export { IProps, IDivProps };
export default OutsideClick;
