import * as React from 'react';
import { Text, LinkButton } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];
  const children = 'Assign to me';

  return (
    <div className="d-flex w-25 justify-content-between">
      {sizes.map((buttonSize, ind) => {
        return (
          <div key={ind}>
            <LinkButton size={buttonSize} aria-label={`${buttonSize}`}>
              {children}
            </LinkButton>
            <br />
            <Text weight="strong">{buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Button/LinkButton/Size',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        title: 'LinkButton',
        a11yProps: ` **aria-label:** name accordingly which describe the action of button `,
      },
    },
  },
};
