import * as React from 'react';
import { Icon, Text } from '@/index';

// CSF format story
export const Appearance = () => {
  const appearances = [
    ['primary', 'primary_dark', 'primary_lighter'],
    ['alert', 'alert_dark', 'alert_lighter'],
    ['success', 'success_dark', 'success_lighter'],
    ['warning', 'warning_dark', 'warning_lighter'],
    ['accent1', 'accent1_dark', 'accent1_lighter'],
    ['accent2', 'accent2_dark', 'accent2_lighter'],
    ['accent3', 'accent3_dark', 'accent3_lighter'],
    ['accent4', 'accent4_dark', 'accent4_lighter'],
    ['inverse', 'subtle', 'disabled'],
  ];

  const name = 'events';
  return (
    <div>
      {appearances.map((appearance, ind) => {
        return (
          <>
            <div key={ind} className="d-flex mb-5">
              <div>
                <div className="mr-12">
                  <Icon appearance={appearance[0]} size={50} name={name} />
                </div>
                <br />
                <Text weight="strong">{appearance[0]}</Text>
              </div>
              <div>
                <div className="mr-12">
                  <Icon appearance={appearance[1]} size={50} name={name} />
                </div>
                <br />
                <Text weight="strong">{appearance[1]}</Text>
              </div>
              <div>
                <div className="mr-12">
                  <Icon appearance={appearance[2]} size={50} name={name} />
                </div>
                <br />
                <Text weight="strong">{appearance[2]}</Text>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <Icon appearance="white" size={50} name={name} className="bg-dark" />
      </div>
      <br />
      <Text weight="strong">white</Text>
      <div className="mt-5">
        <Icon appearance="destructive" size={50} name={name} />
      </div>
      <br />
      <Text weight="strong">destructive</Text>
    </div>
  );
};

export default {
  title: 'Components/Icon/Variants/Appearance',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon',
      },
    },
  },
};
