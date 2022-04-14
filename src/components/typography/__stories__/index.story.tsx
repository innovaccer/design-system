import * as React from 'react';
import { Typography } from '@/index';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      docPage: {
        description: 'Typography is used to design and present content as efficiently as possible',
      },
    },
  },
};

export const Basic = () => <Typography>Basic Typography</Typography>;

export const LargeText = () => (
  <Typography type="text" size="large">
    Large Text
  </Typography>
);

export const StrongText = () => (
  <Typography type="text" weight="strong">
    Strong text
  </Typography>
);

export const Heading = () => <Typography type="heading">Heading</Typography>;

export const HeadingSubtle = () => (
  <Typography type="heading" appearance="subtle">
    Subtle Heading
  </Typography>
);

export const HeadingExtraLarge = () => (
  <Typography type="heading" size="xl">
    Extra Large Heading
  </Typography>
);

export const SubHeading = () => <Typography type="subheading">Sub Heading</Typography>;

export const SubHeadingSubtle = () => (
  <Typography type="subheading" appearance="subtle">
    Sub Heading subtle
  </Typography>
);

export const Paragraph = () => <Typography type="paragraph">Paragraph</Typography>;

export const TypographyBold = () => (
  <Typography type="text" emphasis="b">
    Bold
  </Typography>
);

export const TypographyItalics = () => (
  <Typography type="text" emphasis="i">
    Italics
  </Typography>
);

export const TypographyUnderlined = () => (
  <Typography type="text" emphasis="u">
    Underlined
  </Typography>
);
