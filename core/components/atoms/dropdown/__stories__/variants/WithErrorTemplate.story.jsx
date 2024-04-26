import * as React from 'react';
import { Dropdown, Icon, Text } from '@/index';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const withErrorTemplate = () => {
  const fetchOptions = (searchTerm) => {
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: [],
          count: 0,
        });
      }, 1000);
    });
  };

  const errorTemplate = () => {
    return (
      <div className="my-3 px-7 d-flex vh-25">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Icon name="error" appearance="alert" />
          <Text className="mb-3" weight="strong">
            Failed to fetch data
          </Text>
          <Text className="text-align-center" weight="medium" size="small" appearance="subtle">
            We couldn't load the data, try reloading.
          </Text>
        </div>
      </div>
    );
  };

  return <Dropdown fetchOptions={fetchOptions} className="w-25" placeholder="Select" errorTemplate={errorTemplate} />;
};

const customCode = `() => {
  const fetchOptions = (searchTerm) => {
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: [],
          count: 0,
        });
      }, 1000);
    });
  };
  
    const errorTemplate = (errorType) => {
      console.log(errorType);
      return (
        <div className="my-3 px-7 d-flex vh-25">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Icon name="error" appearance="alert" />
            <Text className="mb-3" weight="strong">
              Failed to fetch data
            </Text>
            <Text className="text-align-center" weight="medium" size="small" appearance="subtle">
              We couldn't load the data, try reloading.
            </Text>
          </div>
        </div>
      );
    };
  
    return <Dropdown fetchOptions={fetchOptions} className="w-25" placeholder="Select" errorTemplate={errorTemplate} />;
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/With Error Template',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
