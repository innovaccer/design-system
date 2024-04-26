import * as React from 'react';

import { Card, Column, Heading, Table, Text, Paragraph, Row } from '@/index';
import { getSchema } from './Schema';
import { textColors, fontSize, fontWeight, fontHeight } from './Data';
import { giveBgColor } from './Utilities';

export const typography = () => {
  React.useEffect(() => {
    const collection = document.getElementsByClassName('setBgColor');
    giveBgColor(collection);
  });

  const textColorsSchema = getSchema('color', 'aA bB cC');
  const fontSizeSchema = getSchema('fontSize', 'aA bB cC');
  const fontWeightSchema = getSchema('fontWeight', 'aA bB cC');
  const fontHeightSchema = getSchema('lineHeight', 'aA bB cC', '', { backgroundColor: 'var(--secondary-light)' });

  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Typography</Heading>
      <Text appearance="default" size="regular" weight="strong">
        The design system has many built in tokens to easily solve most common use cases surrounding text and its
        formatting.
      </Text>
      <br />
      <br />
      <Heading size="m">Text Colors</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={textColors} schema={textColorsSchema} />
      </Card>
      <br />
      <Heading size="m">Font Family</Heading>
      <Paragraph appearance="default">
        The <Text weight="strong">--font-family</Text> token provides with Nunito sans font family which is used
        throughout the design system.
      </Paragraph>
      <br />
      <Card className="w-25 p-4">
        <Row>
          <Column size="6" sizeS="12" sizeXS="12">
            <div style={{ fontFamily: 'Times New Roman, Times, serif' }}>Normal Text</div>
          </Column>
          <Column size="6" sizeS="12" sizeXS="12">
            <div style={{ fontFamily: 'var(--font-family)' }}>Nunito Sans</div>
          </Column>
        </Row>
      </Card>
      <br />
      <Heading size="m">Font Size</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={fontSize} schema={fontSizeSchema} />
      </Card>
      <br />
      <Heading size="m">Font Weight</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={fontWeight} schema={fontWeightSchema} />
      </Card>
      <br />
      <Heading size="m">Font Height</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={fontHeight} schema={fontHeightSchema} />
      </Card>
      <br />
      <Heading size="m">Letter Spacing</Heading>
      <Paragraph appearance="default">
        The <Text weight="strong">--letter-spacing</Text> token provides with <Text weight="strong">0.5px </Text>
        of spacing between letters.
      </Paragraph>
      <br />
      <Card className="w-25 p-4">
        <Row>
          <Column size="12">
            <div>
              Text <strong>without</strong> letter spacing
            </div>
          </Column>
          <Column size="12">
            <div style={{ letterSpacing: 'var(--letter-spacing)' }}>
              Text <strong>with</strong> letter spacing
            </div>
          </Column>
        </Row>
      </Card>
      <br />
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Typography',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
