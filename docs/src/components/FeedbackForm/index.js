import React, { useState, useEffect } from 'react';
import { Divider, Text, Button } from '@innovaccer/design-system';
import ChoiceBox from './ChoiceBox';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [showChoiceBox, setShowChoiceBox] = useState(false);
  const [counter, setCounter] = useState(0);
  const isWindowDefined = typeof window !== 'undefined';
  const hostUrl = isWindowDefined && window?.location.href;

  useEffect(() => {
    setCounter(counter + 1);
  }, [feedbackType, showChoiceBox]);

  const onClickHandler = (option) => {
    setShowChoiceBox(true);
    setFeedbackType(option);
  };

  const isFormSubmitted = (keyName) => {
    if (isWindowDefined) {
      const feedbackUrlList = JSON.parse(localStorage.getItem(keyName)) || [];
      return feedbackUrlList.includes(hostUrl);
    }

    return false;
  };

  return (
    <div>
      <Divider className="mt-9 mb-7" />
      <div className="d-flex align-items-center">
        <Text size="large" weight="strong" className="mr-7">
          Was this page helpful?
        </Text>
        <Button
          icon="thumb_up"
          className="mr-4"
          onClick={() => onClickHandler('Yes')}
          selected={isFormSubmitted('positiveFeedback')}
        >
          Yes
        </Button>
        <Button icon="thumb_down" onClick={() => onClickHandler('No')} selected={isFormSubmitted('negativeFeedback')}>
          No
        </Button>
      </div>

      {isWindowDefined && (
        <ChoiceBox
          showChoiceBox={showChoiceBox}
          feedbackType={feedbackType}
          onCloseHandler={() => setShowChoiceBox(false)}
          key={counter}
        />
      )}
    </div>
  );
};

export default FeedbackForm;
