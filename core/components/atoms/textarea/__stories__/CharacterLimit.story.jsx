import * as React from 'react';
import { Textarea, Label, Text } from '@/index';

export const characterLimit = () => {
  const [charLimit, setCharLimit] = React.useState(0);
  const [error, showError] = React.useState(false);
  const maxCharLimit = 10;

  const onChangeHandler = (e) => {
    const inputLength = e.target.value.length;
    setCharLimit(inputLength);

    if (inputLength > maxCharLimit) {
      showError(true);
    } else {
      showError(false);
    }
  };

  return (
    <div className="w-50">
      <Label withInput={true} htmlFor="comments" className="d-block">
        <div className="d-flex justify-content-between">
          <Text>Comments</Text>
          <Text size="small" weight="medium" color={error ? 'alert' : 'inverse-lighter'}>
            {charLimit}/{maxCharLimit}
          </Text>
        </div>
      </Label>
      <Textarea
        name="comments"
        id="comments"
        aria-labelledby="Comments"
        placeholder="Enter your comments here"
        maxCharLimit={maxCharLimit}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const customCode = `() => {
  const [charLimit, setCharLimit] = React.useState(0);
  const [error, showError] = React.useState(false);
  const maxCharLimit = 10;

  const onChangeHandler = (e) => {
    const inputLength = e.target.value.length;
    setCharLimit(inputLength);

    if (inputLength > maxCharLimit) {
      showError(true);
    } else {
      showError(false);
    }
  };

  return (
    <div className="w-50">
      <Label withInput={true} htmlFor="comments" className="d-block">
        <div className="d-flex justify-content-between">
          <Text>Comments</Text>
          <Text size="small" weight="medium" color={error ? 'alert' : 'inverse-lighter'}>
            {charLimit}/{maxCharLimit}
          </Text>
        </div>
      </Label>
      <Textarea
        name="comments"
        id="comments"
        aria-labelledby="Comments"
        placeholder="Enter your comments here"
        maxCharLimit={maxCharLimit}
        onChange={onChangeHandler}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Textarea/Character Limit',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Textarea',
      },
    },
  },
};
