import * as React from 'react';
import { Icon, Text } from '@/index';

// CSF format story
export const Appearance = () => {
  const appearances = [
    ['primary', 'primary_dark', 'primary_darker', 'primary_lighter'],
    ['alert', 'alert_dark', 'alert_darker', 'alert_lighter'],
    ['success', 'success_dark', 'success_darker', 'success_lighter'],
    ['warning', 'warning_dark', 'warning_darker', 'warning_lighter'],
    ['accent1', 'accent1_dark', 'accent1_darker', 'accent1_lighter'],
    ['accent2', 'accent2_dark', 'accent2_darker', 'accent2_lighter'],
    ['accent3', 'accent3_dark', 'accent3_darker', 'accent3_lighter'],
    ['accent4', 'accent4_dark', 'accent4_darker', 'accent4_lighter'],
    ['inverse', 'subtle', 'disabled'],
  ];

  const name = 'event';
  return (
    <div>
      {appearances.map((appearance, ind) => {
        return (
          <div key={ind} className="d-flex mb-8">
            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[0]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[0]}</Text>
            </div>

            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[1]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[1]}</Text>
            </div>

            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[2]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[2]}</Text>
            </div>

            {appearance[3] && (
              <div>
                <Icon className="mb-4" appearance={appearance[3]} size={48} name={name} />
                <br />
                <Text weight="strong">{appearance[3]}</Text>
              </div>
            )}
          </div>
        );
      })}
      <div>
        <Icon appearance="white" size={48} name={name} className="bg-dark" />
      </div>
      <br />
      <Text weight="strong">white</Text>
      <div className="mt-5">
        <Icon appearance="destructive" size={48} name={name} />
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
