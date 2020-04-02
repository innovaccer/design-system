import * as React from 'react';
import classNames from 'classnames';

export type Sizes = 'small' | 'medium' | 'large';

export interface IPlaceholderParagraphProps {
  /**
   * @default "medium"
   */
  length?: Sizes;
}

const PlaceholderParagraph: React.FunctionComponent<IPlaceholderParagraphProps> = props => {
  const { length = 'medium' } = props;

  const classes = classNames({
    'Placeholder-paragraph': true,
    'Placeholder--animation': true,
    [`Placeholder-paragraph--${length}`]: length,
  });

  return (
    <div className={classes} />
  );
};

export default PlaceholderParagraph;
