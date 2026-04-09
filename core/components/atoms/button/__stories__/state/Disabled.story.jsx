import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

export const Disabled = () => {
  const tooltipText = 'Please fill all the required fields to submit this task';
  const appearances = ['primary', 'basic', 'alert', 'transparent'];

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="primary" disabled={true} aria-label="Primary Filled">
            Primary Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="primary"
            styleType="outlined"
            disabled={true}
            aria-label="Primary Outlined"
          >
            Primary Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="basic" disabled={true} aria-label="Basic Filled">
            Basic Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="basic"
            styleType="outlined"
            disabled={true}
            aria-label="Basic Outlined"
          >
            Basic Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="alert" disabled={true} aria-label="Alert Filled">
            Alert Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="alert"
            styleType="outlined"
            disabled={true}
            aria-label="Alert Outlined"
          >
            Alert Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="transparent" disabled={true} aria-label="Transparent">
            Transparent
          </Button>
        </div>
      </div>

      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {appearances.map((app) => (
          <React.Fragment key={app}>
            <div className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
              <Button disabled tooltip={tooltipText} appearance={app} aria-label={`${app} Text`}>
                Tooltip
              </Button>
              <Button
                disabled
                tooltip={tooltipText}
                icon="event"
                iconAlign="left"
                appearance={app}
                aria-label={`${app} Icon Left`}
              >
                Icon Left
              </Button>
              <Button
                disabled
                tooltip={tooltipText}
                icon="event"
                iconAlign="right"
                appearance={app}
                aria-label={`${app} Icon Right`}
              >
                Icon Right
              </Button>
              <Button disabled tooltip={tooltipText} icon="event" appearance={app} aria-label={`${app} Icon Button`} />
            </div>
            {app !== 'transparent' && (
              <div className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
                <Button
                  disabled
                  tooltip={tooltipText}
                  appearance={app}
                  styleType="outlined"
                  aria-label={`${app} Outlined Text`}
                >
                  Tooltip
                </Button>
                <Button
                  disabled
                  tooltip={tooltipText}
                  icon="event"
                  iconAlign="left"
                  appearance={app}
                  styleType="outlined"
                  aria-label={`${app} Outlined Icon Left`}
                >
                  Icon Left
                </Button>
                <Button
                  disabled
                  tooltip={tooltipText}
                  icon="event"
                  iconAlign="right"
                  appearance={app}
                  styleType="outlined"
                  aria-label={`${app} Outlined Icon Right`}
                >
                  Icon Right
                </Button>
                <Button
                  disabled
                  tooltip={tooltipText}
                  icon="event"
                  appearance={app}
                  styleType="outlined"
                  aria-label={`${app} Outlined Icon Button`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Disabled',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
      },
    },
  },
};
