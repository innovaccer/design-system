import React, { useState, useEffect } from 'react';
import { Modal, ChoiceList, Button } from '@innovaccer/design-system';
import { getFeedbackOptions } from './utils';
import CommentBox from './CommentBox';

const ChoiceBox = ({ showChoiceBox, feedbackType, onCloseHandler }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [feedbackOptions, setFeedbackOptions] = useState({});
  const [selectedChoices, setSelectedChoices] = useState([]);

  useEffect(() => {
    const feedbackQues = getFeedbackOptions(feedbackType);
    setFeedbackOptions(feedbackQues);
  }, [feedbackType]);

  const onNextClick = () => {
    setShowCommentBox(true);
  };

  const onChangeHandler = (e, options) => {
    setSelectedChoices(options);
  };

  const isNextDisabled = () => {
    if (selectedChoices.length <= 0) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <Modal
        backdropClose={true}
        onClose={onCloseHandler}
        open={showChoiceBox && !showCommentBox}
        headerOptions={{
          heading: feedbackOptions?.heading,
        }}
        footer={
          <>
            <Button appearance="basic" onClick={onCloseHandler}>
              Cancel
            </Button>
            <Button appearance="primary" disabled={isNextDisabled()} className="ml-4" onClick={onNextClick}>
              Next
            </Button>
          </>
        }
      >
        <div className="mt-3">
          <ChoiceList
            allowMultiple={true}
            onChange={onChangeHandler}
            selected={showChoiceBox ? selectedChoices : []}
            choices={feedbackOptions?.choiceListOptions || []}
          />
        </div>
      </Modal>

      <CommentBox
        feedbackType={feedbackType}
        showCommentBox={showCommentBox}
        selectedChoices={selectedChoices}
        feedbackOptions={feedbackOptions}
        onParentCloseHandler={onCloseHandler}
        onCloseHandler={() => setShowCommentBox(false)}
      />
    </div>
  );
};

export default ChoiceBox;
