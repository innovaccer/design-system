import * as React from 'react';
import { LinkButton } from '@/index';

export const disabled = () => {
  const sizes = ['regular', 'tiny'];
  const subtleValues = [false, true];
  const tooltipText = 'This link is currently unavailable';

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      {/* Standard Disabled States */}
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {sizes.map((size) => (
          <div key={`standard-${size}`} className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
            <LinkButton size={size} disabled={true} aria-label={`Default ${size} disabled`}>
              Default {size}
            </LinkButton>
            <LinkButton size={size} subtle={true} disabled={true} aria-label={`Subtle ${size} disabled`}>
              Subtle {size}
            </LinkButton>
          </div>
        ))}
      </div>

      {/* Disabled with Tooltip States */}
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {sizes.map((size) => (
          <React.Fragment key={`tooltip-${size}`}>
            {subtleValues.map((subtle) => {
              const appLabel = subtle ? 'Subtle' : 'Default';
              return (
                <div key={`tooltip-${size}-${subtle}`} className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
                  <LinkButton
                    size={size}
                    subtle={subtle}
                    disabled={true}
                    tooltip={tooltipText}
                    aria-label={`${appLabel} ${size} with tooltip`}
                  >
                    {appLabel} {size} Tooltip
                  </LinkButton>
                  <LinkButton
                    size={size}
                    subtle={subtle}
                    disabled={true}
                    tooltip={tooltipText}
                    icon="keyboard_arrow_down_round"
                    iconAlign="right"
                    aria-label={`${appLabel} ${size} right icon with tooltip`}
                  >
                    {appLabel} {size} Icon Right
                  </LinkButton>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/LinkButton/Disabled',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` **aria-label:** Add \`aria-label\` to describe the action of button `,
      },
    },
  },
};
