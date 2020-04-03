import * as React from 'react';
import { ISchema } from '.';

interface IProps {
  leftSchema: ISchema[];
  centerSchema: ISchema[];
  leftWidth: number;
  centerWidth: number;
  getRef: (ref: React.RefObject<HTMLDivElement>) => void;
  headerHeight: number;
  syncHorizontalScroll: (event: any) => void;
}

// TODO: Stop header rendering on every render without causing any side effect
class Header extends React.Component<IProps> {
  centerHeaderRef: React.RefObject<HTMLDivElement> = React.createRef();

  getHeader = (schema: ISchema[]) => {
    const { headerHeight } = this.props;
    return (
      <div
        data-row="header"
        style={{
          height: headerHeight,
        }}
        className="row header"
      >
        {schema.map(({ width, header: HeaderComp }, j) => {
          return (
            <div className="cell" key={j} style={{ width }}>
              <HeaderComp />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.props.getRef(this.centerHeaderRef);
  }

  render() {
    const {
      leftSchema,
      centerSchema,
      leftWidth,
      centerWidth,
      syncHorizontalScroll,
      headerHeight,
    } = this.props;
    return (
      <div
        className="grid-header hide-scroll-bar"
        style={{ height: headerHeight }}
      >
        {leftWidth > 0 && (
          <div
            className="grid-header-left hide-scroll-bar"
            style={{ width: leftWidth }}
          >
            {this.getHeader(leftSchema)}
          </div>
        )}
        {centerWidth > 0 && (
          <div
            ref={this.centerHeaderRef}
            onScroll={syncHorizontalScroll}
            className="grid-header-center hide-scroll-bar"
            style={{ width: `calc(100% - ${leftWidth}px)` }}
          >
            <div style={{ width: centerWidth }}>
              {this.getHeader(centerSchema)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
