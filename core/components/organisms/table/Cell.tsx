import * as React from 'react';

type IDivIntrinsicProps = JSX.IntrinsicElements['div'];

interface IProps extends IDivIntrinsicProps {
  template: React.ElementType;
  width: React.CSSProperties['width'];
  rowIndex: number;
}

class Cell extends React.PureComponent<IProps> {
  render() {
    const { template, rowIndex, width, ...rest } = this.props;
    const Template = template;

    return (
      <div className="cell" style={{ width }}>
        <Template rowIndex={rowIndex} {...rest} />
      </div>
    );
  }
}

export default Cell;
