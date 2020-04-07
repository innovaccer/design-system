import * as React from 'react';
import Placeholder from '@/components/molecules/placeholder';
import PlaceholderParagraph, { Length } from '@/components/atoms/placeholderParagraph';

interface Props {
  rows?: number;
  rowHeight?: number;
}

// export const Placeholder = ({
//   style,
//   shimmerWidth,
// }: {
//   /**
//    *  Column width is mandatory for proper rendering
//    */
//   style: React.CSSProperties;
//   shimmerWidth: React.CSSProperties['width'];
// }) => (
//   <div className="loader-column" style={style}>
//     <div className="shimmer" style={{ width: shimmerWidth }}></div>
//   </div>
// );

class Loader extends React.PureComponent<Props> {
  columns: string[] = [
    '4%',
    '4%',
    '14%',
    '13%',
    '11%',
    '7%',
    '9%',
    '14%',
    '11%',
    '13%',
  ];

  getLoaderRows = (rows: number, height: number) => {
    const list = Array(rows).fill(0);
    return list.map((_, i) => (
      <div className="loader-row" key={i} style={{ height }}>
        {this.columns.map((width, j) => {
          const len: Length[] = ['small', 'medium'];

          return (
            <Placeholder
              key={j}
              style={{ width }}
            >
              <PlaceholderParagraph length={len[i % len.length]} />
            </Placeholder>
          );
        })}
      </div>
    ));
  }

  render() {
    const { rows, rowHeight } = this.props;

    return (
      <div className="loader-wrapper">
        {this.getLoaderRows(rows!, rowHeight!)}
      </div>
    );
  }

  static defaultProps = {
    rowHeight: 40,
    rows: 20,
  };
}

export default Loader;
