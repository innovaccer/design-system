import * as React from 'react';

type DivIntrinsicProps = JSX.IntrinsicElements['div'];

interface Props extends DivIntrinsicProps {
  template: React.ElementType;
  width: React.CSSProperties['width'];
  rowIndex: number;
}

class Cell extends React.PureComponent<Props> {
  render() {
    const { template, rowIndex, width, ...rest } = this.props;
    const Template = template;

    return (
      <div className="TableGrid-cell" style={{ width }}>
        <Template rowIndex={rowIndex} {...rest} />
      </div>
    );
  }
}

export default Cell;
