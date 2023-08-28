import * as React from 'react';
import { Dropdown, Icon, Text } from '@/index';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const withErrorTemplate = () => {
  const options = [];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const errorTemplate = (
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

  return <Dropdown fetchOptions={fetchOptions} className="w-25" placeholder="Select" errorTemplate={errorTemplate} />;
};

const customCode = `() => {
    const options = [];

    const getSearchedOptions = (options, searchTerm) => {
      const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
      return result;
    };
  
    const fetchOptions = (searchTerm) => {
      const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
      return new Promise((resolve) => {
        this.window.setTimeout(() => {
          resolve({
            searchTerm,
            options: searchedOptions,
            count: searchedOptions.length,
          });
        }, 1000);
      });
    };
  
    const errorTemplate = (
      <div className="my-3 px-7 d-flex vh-25">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <Icon name="error" appearance="alert"/>
          <Text className="mb-3" weight="strong">
            Failed to fetch data
          </Text>
          <Text className="text-align-center" weight="medium" size="small" appearance="subtle">
            We couldn't load the data, try reloading.
          </Text>
        </div>
      </div>
    );
  
    return <Dropdown fetchOptions={fetchOptions} className="w-25" placeholder="Select" errorTemplate={errorTemplate} />;
}`;

export default {
  title: 'Inputs/Dropdown/Variants/With Error Template',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
