import * as React from 'react';
import { SelectionCard, Row, Column, Icon, Text } from '@/index';

// CSF format story

export const state = () => {
  const cardConfigs = [
    { label: 'Default:', props: {} },
    { label: 'Disabled:', props: { disabled: true } },
    { label: 'Selected:', props: { selected: true } },
    { label: 'Selected and disabled:', props: { disabled: true, selected: true } },
  ];

  return (
    <Row>
      {cardConfigs.map((config, index) => (
        <Column key={index} size={6}>
          <Text weight="strong">{config.label}</Text>
          <SelectionCard className="p-6 d-flex mt-6 mb-8 mr-6" {...config.props}>
            <Icon size={20} name="adjust" />
            <div className="ml-5">
              <Text weight="strong">Manual drop on SFTP disk</Text>
              <br />
              <Text className="pt-2" appearance="subtle">
                Give access to a separate SFTP disk image
              </Text>
            </div>
          </SelectionCard>
        </Column>
      ))}
    </Row>
  );
};

const customCode = `() => {
  const cardConfigs = [
    { label: 'Default:', props: {} },
    { label: 'Disabled:', props: { disabled: true } },
    { label: 'Selected:', props: { selected: true } },
    { label: 'Selected and disabled:', props: { disabled: true, selected: true } },
  ];

  return (
    <Row>
      {cardConfigs.map((config, index) => (
        <Column key={index} size={6}>
          <Text weight="strong">{config.label}</Text>
          <SelectionCard className="p-6 d-flex mt-6 mb-8 mr-6" {...config.props}>
            <Icon size={20} name="adjust" />
            <div className="ml-5">
              <Text weight="strong">Manual drop on SFTP disk</Text>
              <br />
              <Text className="pt-2" appearance="subtle">
                Give access to a separate SFTP disk image
              </Text>
            </div>
          </SelectionCard>
        </Column>
      ))}
    </Row>
  );
}`;

export default {
  title: 'Components/Interactive Card/Selection Card/State',
  component: SelectionCard,
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
        propDescription: `Note: All the valid properties of HTML DIV elements are acceptable as a prop`,
        customCode,
      },
    },
  },
};
