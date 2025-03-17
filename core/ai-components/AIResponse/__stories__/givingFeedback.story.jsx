import React from 'react';
import {
  AIResponse,
  Card,
  CardHeader,
  CardBody,
  Button,
  SaraSparkle,
  Divider,
  Text,
  Menu,
  LinkButton,
  ChipGroup,
  Textarea,
  Icon,
} from '@/index';
import './style.css';
import classNames from 'classnames';

export const GivingFeedback = () => {
  const [showComment, setShowComment] = React.useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [selectedChipList, setSelectedChipList] = React.useState([]);
  const [showClosingAnimation, setShowClosingAnimation] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState({
    like: false,
    dislike: false,
  });

  const positiveChipOptions = [
    { label: 'Accurate', name: '1', type: 'selection', selected: selectedChipList.includes('1') },
    { label: 'Appropriate', name: '2', type: 'selection', selected: selectedChipList.includes('2') },
    { label: 'Easy to understand', name: '3', type: 'selection', selected: selectedChipList.includes('3') },
  ];

  const negativeChipOptions = [
    { label: 'Inaccurate', name: '4', type: 'selection', selected: selectedChipList.includes('4') },
    { label: 'Inappropriate', name: '5', type: 'selection', selected: selectedChipList.includes('5') },
    { label: 'Offensive', name: '6', type: 'selection', selected: selectedChipList.includes('6') },
  ];

  React.useEffect(() => {
    if (!selectedList.like && !selectedList.dislike) {
      setShowComment(false);
    }
  }, [selectedList]);

  const handleChipSelection = (selectedChip) => {
    const name = selectedChip.name;
    if (selectedChipList.includes(name)) {
      const newList = selectedChipList.filter((chipName) => chipName !== name);
      setSelectedChipList(newList);
    } else {
      setSelectedChipList([...selectedChipList, name]);
    }
  };

  const onSubmitClick = () => {
    setIsFormSubmitted(true);
    setShowClosingAnimation(true);
  };

  const cardClassNames = classNames({
    ['mt-5 py-4 px-5']: true,
    ['feedback-form-animate--open']: showComment && !showClosingAnimation,
    ['feedback-form-animate--close']: showComment && showClosingAnimation,
  });

  const contentClassNames = classNames({
    ['feedback-content-animate--open']: showComment && !showClosingAnimation,
    ['feedback-content-animate--close']: showComment && showClosingAnimation,
  });

  const onAnimationEnd = () => {
    if (showClosingAnimation) {
      setShowComment(false);
      setShowClosingAnimation(false);
    }
  };

  return (
    <Card shadow="none" className="w-50 vh-100">
      <CardHeader className="d-flex justify-content-between align-items-center">
        <Text weight="strong" size="regular">
          Smart assist
        </Text>
        <Button appearance="transparent" aria-label="Close" icon="close" />
      </CardHeader>
      <Divider />
      <CardBody className="mt-6">
        <div className="d-flex">
          <SaraSparkle />
          <div className="ml-4">
            <Text weight="strong">Suggest available slots for follow-up appointment with the PCP</Text>

            <AIResponse className="mt-5">
              <AIResponse.Body>
                <Text>It looks like Dr.Smith is available next month on 5th November at 10am, 11am and 2pm EST.</Text>
              </AIResponse.Body>

              <AIResponse.ActionBar className="justify-content-end">
                <div className="d-flex align-items-center">
                  <AIResponse.Button
                    icon="sync"
                    className="mr-3"
                    tooltip="Regenerate"
                    onClick={() => {
                      setSelectedList({ ...selectedList, like: false, dislike: false });
                      setShowComment(false);
                      setIsFormSubmitted(false);
                    }}
                  />
                  <AIResponse.Button
                    icon="thumb_up"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Good Response"
                    selected={selectedList.like && !selectedList.dislike}
                    onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
                  />
                  <AIResponse.Button
                    icon="thumb_down"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Bad Response"
                    selected={selectedList.dislike && !selectedList.like}
                    onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
                  />

                  <Menu
                    trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}
                  >
                    <Menu.List>
                      <Menu.Item>Share</Menu.Item>
                      <Menu.Item>View source</Menu.Item>
                      <Menu.Item>Report a problem</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </AIResponse.ActionBar>
            </AIResponse>

            {(selectedList.like || selectedList.dislike) && !showComment && (
              <Card shadow="none" className="mt-5">
                <div className="d-flex justify-content-between py-4 px-5 align-items-center feedback-card-animate">
                  <Text weight="medium">Thanks for sharing your feedback</Text>
                  <div className="d-flex align-items-center">
                    {isFormSubmitted ? (
                      <Icon name="check_circle" size={16} appearance="success" />
                    ) : (
                      <LinkButton onClick={() => setShowComment(true)}>Tell us more</LinkButton>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {showComment && (selectedList.like || selectedList.dislike) && (
              <Card shadow="none" className={cardClassNames} onAnimationEnd={onAnimationEnd}>
                <div className={contentClassNames}>
                  <Text weight="medium">Tell us more</Text>
                  <div className="mt-7">
                    <ChipGroup
                      list={selectedList.like ? positiveChipOptions : negativeChipOptions}
                      onClick={handleChipSelection}
                    />

                    <Textarea
                      aria-labelledby="Textarea"
                      name="Textarea"
                      placeholder="Additional comments"
                      resize={false}
                      rows={3}
                      className="mt-5"
                    />

                    <div className="d-flex justify-content-end mt-6">
                      <Button className="mr-4" size="tiny" onClick={() => setShowClosingAnimation(true)}>
                        Skip
                      </Button>
                      <Button
                        appearance="primary"
                        size="tiny"
                        onClick={onSubmitClick}
                        disabled={selectedChipList.length <= 0}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const customCode = `() => {

/**
  *  // Define animation classes in style.css file

@keyframes expandForm {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 216px;
    opacity: 1;
  }
}

@keyframes collapseForm {
  from {
    height: 216px;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

.feedback-card-animate {
  animation: fadeIn var(--duration--moderate-02) var(--entrance-productive-curve);
  animation-fill-mode: forwards;
}

.feedback-form-animate--open {
  animation: expandForm var(--duration--moderate-02) var(--entrance-productive-curve);
  animation-fill-mode: forwards;
}

.feedback-form-animate--close {
  animation: collapseForm var(--duration--moderate-02) var(--exit-productive-curve);
  animation-fill-mode: forwards;
}

.feedback-content-animate--open {
  animation: fadeIn var(--duration--moderate-02) var(--entrance-productive-curve);
  animation-fill-mode: forwards;
  animation-delay: var(--duration--moderate-02);
  opacity: 0;
}

.feedback-content-animate--close {
  animation: fadeOut var(--duration--moderate-02) var(--exit-productive-curve);
  animation-fill-mode: forwards;
  opacity: 0;
}

*/

  const [showComment, setShowComment] = React.useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [selectedChipList, setSelectedChipList] = React.useState([]);
  const [showClosingAnimation, setShowClosingAnimation] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState({
    like: false,
    dislike: false,
  });

  const positiveChipOptions = [
    { label: 'Accurate', name: '1', type: 'selection', selected: selectedChipList.includes('1') },
    { label: 'Appropriate', name: '2', type: 'selection', selected: selectedChipList.includes('2') },
    { label: 'Easy to understand', name: '3', type: 'selection', selected: selectedChipList.includes('3') },
  ];

  const negativeChipOptions = [
    { label: 'Inaccurate', name: '4', type: 'selection', selected: selectedChipList.includes('4') },
    { label: 'Inappropriate', name: '5', type: 'selection', selected: selectedChipList.includes('5') },
    { label: 'Offensive', name: '6', type: 'selection', selected: selectedChipList.includes('6') },
  ];

  React.useEffect(() => {
    if(!selectedList.like && !selectedList.dislike) {
      setShowComment(false);
    }
  }, [selectedList]);

  const handleChipSelection = (selectedChip) => {
    const name = selectedChip.name;
    if (selectedChipList.includes(name)) {
      const newList = selectedChipList.filter((chipName) => chipName !== name);
      setSelectedChipList(newList);
    } else {
      setSelectedChipList([...selectedChipList, name]);
    }
  };

  const onSubmitClick = () => {
    setIsFormSubmitted(true);
    setShowClosingAnimation(true);
  };

  const cardClassNames = showClosingAnimation ? 'feedback-form-animate--close mt-5 py-4 px-5' : 'feedback-form-animate--open mt-5 py-4 px-5';
  const contentClassNames = showClosingAnimation ? 'feedback-content-animate--close' : 'feedback-content-animate--open';

  const onAnimationEnd = () => {
    if (showClosingAnimation) {
      setShowComment(false);
      setShowClosingAnimation(false);
    }
  };

  return (
    <Card shadow="none" className="w-50 vh-100">
      <CardHeader className="d-flex justify-content-between align-items-center">
        <Text weight="strong" size="regular">
          Smart assist
        </Text>
        <Button appearance="transparent" aria-label="Close" icon="close" />
      </CardHeader>
      <Divider />
      <CardBody className="mt-6">
        <div className="d-flex">
          <SaraSparkle />
          <div className="ml-4">
            <Text weight="strong">Suggest available slots for follow-up appointment with the PCP</Text>

            <AIResponse className="mt-5">
              <AIResponse.Body>
                <Text>It looks like Dr.Smith is available next month on 5th November at 10am, 11am and 2pm EST.</Text>
              </AIResponse.Body>

              <AIResponse.ActionBar className="justify-content-end">
                <div className="d-flex align-items-center">
                  <AIResponse.Button
                    icon="sync"
                    className="mr-3"
                    tooltip="Regenerate"
                    onClick={() => {
                      setSelectedList({ ...selectedList, like: false, dislike: false });
                      setShowComment(false);
                      setIsFormSubmitted(false);
                    }}
                  />
                  <AIResponse.Button
                    icon="thumb_up"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Good Response"
                    selected={selectedList.like && !selectedList.dislike}
                    onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
                  />
                  <AIResponse.Button
                    icon="thumb_down"
                    iconType="outlined"
                    className="mr-3"
                    tooltip="Bad Response"
                    selected={selectedList.dislike && !selectedList.like}
                    onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
                  />

                  <Menu
                    trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}
                  >
                    <Menu.List>
                      <Menu.Item>Share</Menu.Item>
                      <Menu.Item>View source</Menu.Item>
                      <Menu.Item>Report a problem</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </AIResponse.ActionBar>
            </AIResponse>

            {(selectedList.like || selectedList.dislike) && !showComment && (
              <Card shadow="none" className="mt-5">
                <div className="d-flex justify-content-between py-4 px-5 align-items-center feedback-card-animate">
                  <Text weight="medium">Thanks for sharing your feedback</Text>
                  <div className="d-flex align-items-center">
                    {isFormSubmitted ? (
                      <Icon name="check_circle" size={16} appearance="success" />
                    ) : (
                      <LinkButton onClick={() => setShowComment(true)}>Tell us more</LinkButton>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {showComment && (selectedList.like || selectedList.dislike) &&  (
              <Card
                shadow="none"
                className={cardClassNames}
                onAnimationEnd={onAnimationEnd}
              >
                <div className={contentClassNames}>
                  <Text weight="medium">Tell us more</Text>
                  <div className="mt-7">
                    <ChipGroup
                      list={selectedList.like ? positiveChipOptions : negativeChipOptions}
                      onClick={handleChipSelection}
                    />

                    <Textarea
                      aria-labelledby="Textarea"
                      name="Textarea"
                      placeholder="Additional comments"
                      resize={false}
                      rows={3}
                      className="mt-5"
                    />

                    <div className="d-flex justify-content-end mt-6">
                      <Button className="mr-4" size="tiny" onClick={() => setShowClosingAnimation(true)}>
                        Skip
                      </Button>
                      <Button
                        appearance="primary"
                        size="tiny"
                        onClick={onSubmitClick}
                        disabled={selectedChipList.length <= 0}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}`;

export default {
  title: 'Components/AI/AI Response/Giving Feedback',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'AIResponse',
        customCode,
      },
    },
  },
};
