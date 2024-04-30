import * as React from 'react';
import { Chip } from '@/index';

export const customLabel = () => {
  const customLabelData1 = [
    ['Age=', '60yrs', { selected: true }],
    ['Age:', '18yrs to 60yrs', { selected: false }],
    ['Age>=', '18yrs', { selected: false, disabled: true }],
  ];

  const customLabelData2 = [
    ['Provider City:', 'San Diego', { selected: true }],
    ['Provider City:', 'San Diego, Chicago', { selected: false }],
    ['Provider City:', '3 selected', { selected: false, disabled: true }],
  ];

  const customLabelData3 = [
    ['Creation Date>=', '01/01/2020', { selected: true }],
    ['Creation Date=', '01/01/2020', { icon: 'assessment', selected: false }],
    ['Creation Date:', 'last 6 months', { icon: 'assessment', selected: false, disabled: true }],
  ];

  const renderChips = (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData1.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData2.map((customLabel, index) => (
          <Chip
            icon={customLabel[2].icon}
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData3.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            icon={customLabel[2].icon}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
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
