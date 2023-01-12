import React, { useState } from 'react';
import { Label, Text, Modal, Button, Textarea, Message } from '@innovaccer/design-system';
import { submitFormToSatismeter } from './SatismeterAPI';
import SuccessTemplate from './SuccessTemplate';

const ErrorMessage = () => {
  return (
    <Message appearance="alert" className="mb-6" description="Oops! Failed to submit feedback. Please try again." />
  );
};

const CommentBox = ({
  feedbackType,
  onCloseHandler,
  showCommentBox,
  selectedChoices,
  feedbackOptions,
  onParentCloseHandler,
}) => {
  const [comment, setComment] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [responseType, setResponseType] = useState('');
  const hostUrl = typeof window !== 'undefined' && window?.location.href;

  const onCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const removeUrlFromList = () => {
    const toggleOption = feedbackType === 'Yes' ? 'negativeFeedback' : 'positiveFeedback';

    const toggleOptionList = JSON.parse(localStorage.getItem(toggleOption)) || [];

    if (toggleOptionList.includes(hostUrl)) {
      const updatedList = toggleOptionList.filter((url) => url !== hostUrl);
      localStorage.setItem(toggleOption, JSON.stringify([...updatedList]));
    }
  };

  const saveUrlToList = () => {
    const keyName = feedbackType === 'Yes' ? 'positiveFeedback' : 'negativeFeedback';

    const feedbackUrlList = JSON.parse(localStorage.getItem(keyName)) || [];

    if (!feedbackUrlList.includes(hostUrl)) {
      localStorage.setItem(keyName, JSON.stringify([...feedbackUrlList, hostUrl]));
    }
  };

  const saveDataToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      removeUrlFromList();
      saveUrlToList();
    }
  };

  const handleSuccessResponse = () => {
    onCloseHandler();
    setShowLoader(false);
    setResponseType('success');
    saveDataToLocalStorage();
  };

  const handleErrorResponse = () => {
    setShowLoader(false);
    setResponseType('error');
    setTimeout(() => {
      setResponseType('');
    }, 3000);
  };

  const onSubmitForm = () => {
    const { Feedback_Type_ID, Selected_Option_ID, Comment_Box_ID } = feedbackOptions;
    const responseList = [
      {
        id: Feedback_Type_ID,
        value: feedbackType,
      },
      {
        id: Selected_Option_ID,
        value: selectedChoices,
      },
      {
        id: Comment_Box_ID,
        value: comment,
      },
    ];

    setShowLoader(true);
    submitFormToSatismeter(responseList, hostUrl)
      .then((data) => {
        if (data) {
          handleSuccessResponse();
        } else {
          handleErrorResponse();
        }
      })
      .catch((error) => {
        handleErrorResponse();
      });
  };

  const onResponseCloseHandler = () => {
    setResponseType('');
    onParentCloseHandler();
  };

  return (
    <div>
      <Modal
        backdropClose={true}
        open={showCommentBox}
        onClose={onCloseHandler}
        headerOptions={{
          heading: feedbackOptions?.heading,
        }}
        footer={
          <>
            <Button appearance="basic" onClick={onCloseHandler}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-4" onClick={onSubmitForm} loading={showLoader}>
              Submit
            </Button>
          </>
        }
      >
        {responseType === 'error' && <ErrorMessage />}
        <div className="d-flex my-3 align-items-center ">
          <Label className="mr-3">Tell us more below</Label>
          <Text appearance="subtle">(optional)</Text>
        </div>
        <Textarea
          rows={4}
          name="feedback"
          className="mb-4"
          aria-labelledby="Feedback"
          onChange={onCommentHandler}
          placeholder="Share your feedback here"
        />
      </Modal>
      <SuccessTemplate open={responseType === 'success'} onCloseHandler={onResponseCloseHandler} />
    </div>
  );
};

export default CommentBox;
