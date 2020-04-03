import * as React from 'react';
import Placeholder from '@/components/molecules/placeholder';
import { ISchema } from '../interfaces';
import PlaceholderParagraph, { Length } from '@/components/atoms/placeholderParagraph';

type IDivIntrinsicProps = JSX.IntrinsicElements['div'];

interface IProps extends IDivIntrinsicProps {
  schema: ISchema[];
  rowStyle: React.CSSProperties;
}

class PartialLoader extends React.PureComponent<IProps> {
  render() {
    const { rowStyle, schema, ...rest } = this.props;

    return (
      <div {...rest}>
        {[0, 1].map(i => (
          <div key={i} className="loader-row" style={rowStyle}>
            {schema.map(({ width }, j) => {
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
        ))}
      </div>
    );
  }
}

export default PartialLoader;
