import * as React from 'react';
import classNames from 'classnames';

export type Length = 'small' | 'medium' | 'large';

export interface PlaceholderParagraphProps {
  /**
   * Size of `Placeholder`
   * @default "medium"
   */
  length?: Length;
}

export const PlaceholderParagraph: React.FunctionComponent<PlaceholderParagraphProps> = props => {
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
