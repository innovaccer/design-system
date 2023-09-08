import * as React from 'react';
import { Text, Button } from '@/index';
import { ErrorType } from './utility';

interface ErrorTemplateProps {
  dropdownStyle: React.CSSProperties;
  errorType: ErrorType;
  // updateOptions: (init: boolean, async?: boolean) => void;
  // updateOptions?: (searchText: string) => void;
  updateOptions: () => void;
}

const errorTemplateTitle: Record<string, string> = {
  FAILED_TO_FETCH: 'Failed to fetch data',
  NO_RECORDS_FOUND: 'No results found',
  DEFAULT: 'No record available',
};

const errorTemplateDescription: Record<string, string> = {
  FAILED_TO_FETCH: "We couldn't load the data, try reloading.",
  NO_RECORDS_FOUND: 'Try modifying your search to find what you are looking for.',
  DEFAULT: 'We have nothing to show you at the moment.',
};

export const ErrorTemplate: React.FC<ErrorTemplateProps> = ({ dropdownStyle, errorType, updateOptions }) => {
  return (
    <div className="Dropdown-wrapper px-7 d-flex" style={dropdownStyle} data-test="DesignSystem-Dropdown--wrapper">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        data-test="DesignSystem-Dropdown--errorWrapper"
      >
        <Text className="mb-3" weight="strong">
          {errorTemplateTitle[errorType]}
        </Text>
        <Text className="text-align-center mb-6" weight="medium" size="small" appearance="subtle">
          {errorTemplateDescription[errorType]}
        </Text>
        {errorType === 'FAILED_TO_FETCH' && (
          <Button icon="refresh" iconAlign="left" onClick={() => updateOptions()}>
            Reload
          </Button>
        )}
      </div>
    </div>
  );
};
