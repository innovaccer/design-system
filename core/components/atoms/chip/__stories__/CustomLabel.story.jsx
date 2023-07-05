import * as React from 'react';
import { Chip, Text } from '@/index';

export const customLabel = () => {
  const customLabelData1 = [
    ['Age=', '60yrs', { selected: true, type: 'selection', label1: 'primary-dark', label2: 'primary-dark' }],
    ['Age:', '18yrs to 60yrs', { selected: false, type: 'action', label1: '', label2: '' }],
    ['Age>=', '18yrs', { selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const customLabelData2 = [
    [
      'Provider City:',
      'San Diego',
      { selected: true, type: 'selection', label1: 'primary-dark', label2: 'primary-dark' },
    ],
    ['Provider City:', 'San Diego, Chicago', { selected: false, type: 'action', label1: '', label2: '' }],
    ['Provider City:', '3 selected', { selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const customLabelData3 = [
    [
      'Creation Date>=',
      '01/01/2020',
      { selected: true, type: 'selection', label1: 'primary-dark', label2: 'primary-dark' },
    ],
    ['Creation Date=', '01/01/2020', { icon: 'assessment', selected: false, type: 'action', label1: '', label2: '' }],
    ['Creation Date:', 'last 6 months', { icon: 'assessment', selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const renderChips = (
    <>
      <div className="d-flex justify-content-around flex-wrap mb-8">
        <Text weight="strong" size="large">
          Selection Chip
        </Text>
        <Text weight="strong" size="large">
          Action Chip
        </Text>
        <Text weight="strong" size="large">
          Input Chip
        </Text>
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData1.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={
              <span className="mr-3">
                <Text color={customLabel[2].label1} weight="medium" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            type={customLabel[2].type}
            selected={customLabel[2].selected}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData2.map((customLabel, index) => (
          <Chip
            icon={customLabel[2].icon}
            className="mb-6"
            key={index}
            label={
              <span className="mr-3">
                <Text color={customLabel[2].label1} weight="medium" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            type={customLabel[2].type}
            selected={customLabel[2].selected}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData3.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={
              <span className="mr-3">
                <Text color={customLabel[2].label1} weight="medium" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            type={customLabel[2].type}
            selected={customLabel[2].selected}
          />
        ))}
      </div>
    </>
  );

  return <div>{renderChips}</div>;
};

export default {
  title: 'Selection/Chip/Custom Label',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
