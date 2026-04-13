import * as React from 'react';
import { Link } from '@/index';

export const disabled = () => {
  const sizes = ['regular', 'tiny'];
  const appearances = ['default', 'subtle'];
  const tooltipText = 'You must save changes before proceeding';

  return (
    <div className="d-flex flex-column" style={{ gap: '32px' }}>
      {/* Standard Disabled States */}
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {sizes.map((size) => (
          <div key={`standard-${size}`} className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
            <Link
              href="http://innovaccer.com"
              size={size}
              appearance="default"
              disabled={true}
              aria-label={`Default ${size} disabled`}
            >
              Default {size}
            </Link>
            <Link
              href="http://innovaccer.com"
              size={size}
              appearance="subtle"
              disabled={true}
              aria-label={`Subtle ${size} disabled`}
            >
              Subtle {size}
            </Link>
          </div>
        ))}
      </div>

      {/* Disabled with Tooltip States */}
      <div className="d-flex flex-column" style={{ gap: '16px' }}>
        {sizes.map((size) => (
          <React.Fragment key={`tooltip-${size}`}>
            {appearances.map((app) => (
              <div key={`tooltip-${size}-${app}`} className="d-flex" style={{ gap: '16px', alignItems: 'center' }}>
                <Link
                  href="http://innovaccer.com"
                  size={size}
                  appearance={app}
                  disabled={true}
                  tooltip={tooltipText}
                  aria-label={`${app} ${size} disabled with tooltip`}
                >
                  {app.charAt(0).toUpperCase() + app.slice(1)} {size} Tooltip
                </Link>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Link/Disabled',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
        props: {
          exclude: ['key'],
        },
      },
    },
  },
};
