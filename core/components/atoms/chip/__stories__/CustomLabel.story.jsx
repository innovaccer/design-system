import * as React from 'react';
import Chip from '../Chip';
import Text from '@/components/atoms/text';
import { action } from '@/utils/action';

export const customLabel = () => {
  const customLabelData1 = [
    ['Age=', '60yrs', { selected: true, type: 'selection', label1: 'primary', label2: 'primary' }],
    ['Age:', '18yrs to 60yrs', { selected: false, type: 'action', label1: '', label2: '' }],
    ['Age>=', '18yrs', { selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const customLabelData2 = [
    ['Provider City:', 'San Diego', { selected: true, type: 'selection', label1: 'primary', label2: 'primary' }],
    ['Provider City:', 'San Diego, Chicago', { selected: false, type: 'action', label1: '', label2: '' }],
    ['Provider City:', '3 selected', { selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const customLabelData3 = [
    ['Creation Date>=', '01/01/2020', { selected: true, type: 'selection', label1: 'primary', label2: 'primary' }],
    ['Creation Date=', '01/01/2020', { icon: 'assessment', selected: false, type: 'action', label1: '', label2: '' }],
    ['Creation Date:', 'last 6 months', { icon: 'assessment', selected: false, type: 'input', label1: '', label2: '' }],
  ];

  const renderChips = (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData1.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={
              <span>
                <Text color={customLabel[2].label1} weight="strong" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            onClick={(value) => {
              action(`on-click:`, value)();
            }}
            onClose={(value) => {
              action(`on-close: `, value)();
            }}
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
              <span>
                <Text color={customLabel[2].label1} weight="strong" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            onClick={(value) => {
              action(`on-click:`, value)();
            }}
            onClose={(value) => {
              action(`on-close: `, value)();
            }}
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
              <span>
                <Text color={customLabel[2].label1} weight="strong" className="mr-3">
                  {customLabel[0]}
                </Text>
                <Text color={customLabel[2].label2}>{customLabel[1]}</Text>
              </span>
            }
            clearButton={true}
            name={{ Custom: 'Label' }}
            onClick={(value) => {
              action(`on-click:`, value)();
            }}
            onClose={(value) => {
              action(`on-close: `, value)();
            }}
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
  title: 'Components/Chip/Chip/Custom Label',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
