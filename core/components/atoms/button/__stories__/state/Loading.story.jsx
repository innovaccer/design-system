import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

export const Loading = () => {
  const tooltipText = 'Please wait for the action to complete';
  const appearances = ['primary', 'basic', 'alert', 'transparent'];

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="primary" loading={true} aria-label="Loading Primary">
            Primary Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="primary"
            styleType="outlined"
            loading={true}
            aria-label="Loading Primary Outlined"
          >
            Primary Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="basic" loading={true} aria-label="Loading Basic">
            Basic Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="basic"
            styleType="outlined"
            loading={true}
            aria-label="Loading Basic Outlined"
          >
            Basic Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button onClick={action('button-clicked')} appearance="alert" loading={true} aria-label="Loading Alert">
            Alert Filled
          </Button>
          <Button
            onClick={action('button-clicked')}
            appearance="alert"
            styleType="outlined"
            loading={true}
            aria-label="Loading Alert Outlined"
          >
            Alert Outlined
          </Button>
        </div>
        <div className="d-flex" style={{ gap: '16px' }}>
          <Button
            onClick={action('button-clicked')}
            appearance="transparent"
            loading={true}
            aria-label="Loading Transparent"
          >
            Transparent
          </Button>
        </div>
      </div>

      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {appearances.map((app) => (
          <React.Fragment key={app}>
            <div className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
              <Button loading tooltip={tooltipText} appearance={app} aria-label={`${app} Text`}>
                Tooltip
              </Button>
              <Button
                loading
                tooltip={tooltipText}
                icon="event"
                iconAlign="left"
                appearance={app}
                aria-label={`${app} Icon Left`}
              >
                Icon Left
              </Button>
              <Button
                loading
                tooltip={tooltipText}
                icon="event"
                iconAlign="right"
                appearance={app}
                aria-label={`${app} Icon Right`}
              >
                Icon Right
              </Button>
              <Button loading tooltip={tooltipText} icon="event" appearance={app} aria-label={`${app} Icon Button`} />
            </div>
            {app !== 'transparent' && (
              <div className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
                <Button
                  loading
                  tooltip={tooltipText}
                  appearance={app}
                  styleType="outlined"
                  aria-label={`${app} Outlined Text`}
                >
                  Tooltip
                </Button>
                <Button
                  loading
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
                  loading
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
                  loading
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
  title: 'Components/Button/Button/State/Loading',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
      },
    },
  },
};
