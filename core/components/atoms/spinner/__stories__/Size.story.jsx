import * as React from 'react';
import { Spinner, Text, Divider, ProgressRing } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['xsmall', 'small', 'medium', 'large'];
  const progressRingSizes = ['small', 'regular', 'large'];

  return (
    <div className="d-flex">
      <div>
        <Text>Progress Ring Stroke (8, 8, 8)</Text>
        <div className="mt-11">
          {progressRingSizes.map((RingSize, ind) => {
            return (
              <div key={ind} className="mb-8 mt-8">
                <div className="">
                  <ProgressRing size={RingSize} value={50} originalStroke={true} />
                </div>
                <Text weight="strong">{RingSize.charAt(0).toUpperCase() + RingSize.slice(1)}</Text>
              </div>
            );
          })}
        </div>
      </div>

      <Divider vertical={true} className="mx-6" />

      <div>
        <Text>Progress Ring Stroke (6, 4, 4)</Text>
        <div className="mt-11">
          {progressRingSizes.map((RingSize, ind) => {
            return (
              <div key={ind} className="mb-8 mt-8">
                <div className="">
                  <ProgressRing size={RingSize} value={50} />
                </div>
                <Text weight="strong">{RingSize.charAt(0).toUpperCase() + RingSize.slice(1)}</Text>
              </div>
            );
          })}
        </div>
      </div>

      <Divider vertical={true} className="mx-6" />

      <div>
        <Text>Stroke Mapping (8, 6, 4, 4)</Text>
        {sizes.map((SpinnerSize, ind) => {
          return (
            <div key={ind} className="mb-8 mt-8">
              <div className="h-75">
                <Spinner size={SpinnerSize} />
              </div>
              <Text weight="strong">{SpinnerSize.charAt(0).toUpperCase() + SpinnerSize.slice(1)}</Text>
            </div>
          );
        })}
      </div>

      <Divider vertical={true} className="mx-6" />

      <div>
        <Text>stroke width=0.1×size</Text>
        {sizes.map((SpinnerSize, ind) => {
          return (
            <div key={ind} className="m-8">
              <div className="h-75">
                <Spinner size={SpinnerSize} strokeWidthMultiplier={0.1} />
              </div>
              <Text weight="strong">{SpinnerSize.charAt(0).toUpperCase() + SpinnerSize.slice(1)}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/Spinner/Size',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner',
      },
    },
  },
};
