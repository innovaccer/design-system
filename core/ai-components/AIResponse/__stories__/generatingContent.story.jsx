import React from 'react';
import { AIResponse, Text, Menu, PlaceholderParagraph } from '@/index';
import './style.css';

const ChatMessage = (props) => {
  const { visibleSentences, setVisibleSentences, loading, setLoading } = props;

  const sentences = [
    'Value-based care (VBC) is a healthcare delivery model in which providers, including hospitals and physicians, are paid based on patient health outcomes.',
    'This contrasts with the traditional fee-for-service model, where providers are paid based on the amount of healthcare services they deliver.',
    'The primary goal of VBC is to improve the quality of care provided to patients while reducing costs.',
  ];

  React.useEffect(() => {
    if (loading) {
      const timer = this.window.setTimeout(() => {
        setLoading(false);
        let delay = 0;
        sentences.forEach((sentence) => {
          this.window.setTimeout(() => {
            setVisibleSentences((prev) => [...prev, sentence]);
          }, delay);
          delay += 240;
        });
      }, 1200);
      return () => this.window.clearTimeout(timer);
    }
  }, [loading]);

  const ShowLoaders = () => {
    return (
      <div>
        <PlaceholderParagraph length="large" />
        <PlaceholderParagraph length="medium" />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <ShowLoaders />
      ) : (
        <div>
          {visibleSentences.map((sentence, index) => (
            <Text key={index} className="AIResponse-text">
              {sentence}{' '}
            </Text>
          ))}
        </div>
      )}
    </>
  );
};

export const GeneratingContent = () => {
  /**
   *
   *  .AIResponse-menu-button {
   *    opacity: var(--opacity-12);
   *  }
   *
   *  .AIResponse-box:hover .AIResponse-menu-button {
   *    opacity: 1;
   *  }
   *
   *  .AIResponse-box .Menu-Trigger--active {
   *    opacity: 1;
   *  }
   *
   *  .AIResponse-text {
   *    animation: fadeIn var(--duration--moderate-02) var(--standard-productive-curve);
   *  }
   *
   */

  const [loading, setLoading] = React.useState(true);
  const [visibleSentences, setVisibleSentences] = React.useState([]);
  const [showActionBar, setShowActionBar] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  React.useEffect(() => {
    if (visibleSentences.length === 3 && !loading) {
      setShowActionBar(true);
    }
  }, [visibleSentences]);

  const handleRegenerate = () => {
    setLoading(true);
    setShowActionBar(false);
    setVisibleSentences([]);
  };

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse className="w-50" showAvatar={true} metaData={metaDataRenderer}>
      <AIResponse.Body>
        {
          <ChatMessage
            loading={loading}
            setVisibleSentences={setVisibleSentences}
            visibleSentences={visibleSentences}
            setLoading={setLoading}
          />
        }
      </AIResponse.Body>

      {showActionBar && (
        <AIResponse.ActionBar>
          <div className="d-flex">
            <AIResponse.Button
              icon="push_pin"
              className="mr-3"
              selected={selectedList.pin}
              onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
            >
              Pin
            </AIResponse.Button>
            <AIResponse.Button icon="content_copy" iconType="rounded">
              Copy
            </AIResponse.Button>
          </div>

          <div className="d-flex align-items-center">
            <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" onClick={handleRegenerate} />
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

            <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
              <Menu.List>
                <Menu.Item>Share</Menu.Item>
                <Menu.Item>View source</Menu.Item>
                <Menu.Item>Report a problem</Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </AIResponse.ActionBar>
      )}
    </AIResponse>
  );
};

const customCode = `() => {
  const ChatMessage = (props) => {
    const { visibleSentences, setVisibleSentences, loading, setLoading } = props;

    const sentences = [
      'Value-based care (VBC) is a healthcare delivery model in which providers, including hospitals and physicians, are paid based on patient health outcomes.',
      'This contrasts with the traditional fee-for-service model, where providers are paid based on the amount of healthcare services they deliver.',
      'The primary goal of VBC is to improve the quality of care provided to patients while reducing costs.',
    ];

    React.useEffect(() => {
      if (loading) {
        const timer = this.window.setTimeout(() => {
          setLoading(false);
          let delay = 0;
          sentences.forEach((sentence) => {
            this.window.setTimeout(() => {
              setVisibleSentences((prev) => [...prev, sentence]);
            }, delay);
            delay += 240;
          });
        }, 1200);
        return () => this.window.clearTimeout(timer);
      }
    }, [loading]);

    const ShowLoaders = () => {
      return (
        <div>
          <PlaceholderParagraph length="large" />
          <PlaceholderParagraph length="medium" />
        </div>
      );
    };

    return (
      <>
        {loading ? (
          <ShowLoaders />
        ) : (
          <div>
            {visibleSentences.map((sentence, index) => (
              <Text key={index} className="AIResponse-text">
                {sentence}{' '}
              </Text>
            ))}
          </div>
        )}
      </>
    );
  };

  const GenerateContent = () => {

    /**
     *
     *  .AIResponse-menu-button {
     *    opacity: var(--opacity-12);
     *  }
     *
     *  .AIResponse-box:hover .AIResponse-menu-button {
     *    opacity: 1;
     *  }
     *
     *  .AIResponse-box .Menu-Trigger--active {
     *    opacity: 1;
     *  }
     *
     *  .AIResponse-text {
     *    animation: fadeIn var(--duration--moderate-02) var(--standard-productive-curve);
     *  }
     *
     */

    const [loading, setLoading] = React.useState(true);
    const [visibleSentences, setVisibleSentences] = React.useState([]);
    const [selectedList, setSelectedList] = React.useState({
      pin: false,
      like: false,
      dislike: false,
    });

    const handleRegenerate = () => {
      setLoading(true);
      setVisibleSentences([]);
    };

    const metaDataRenderer = () => {
      return (
        <Text appearance="subtle" size="small" weight="medium">
          1:00 PM
        </Text>
      );
    };

    return (
      <AIResponse showAvatar={true} className="w-50" metaData={metaDataRenderer}>
        <AIResponse.Body>
          {
            <ChatMessage
              loading={loading}
              setVisibleSentences={setVisibleSentences}
              visibleSentences={visibleSentences}
              setLoading={setLoading}
            />
          }
        </AIResponse.Body>

        <AIResponse.ActionBar>
          <div className="d-flex">
            <AIResponse.Button
              icon="push_pin"
              className="mr-3"
              selected={selectedList.pin}
              onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
            >
              Pin
            </AIResponse.Button>
            <AIResponse.Button icon="content_copy" iconType="rounded">Copy</AIResponse.Button>
          </div>

          <div className="d-flex align-items-center">
            <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" onClick={handleRegenerate} />
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

            <Menu trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
              <Menu.List>
                <Menu.Item>Share</Menu.Item>
                <Menu.Item>View source</Menu.Item>
                <Menu.Item>Report a problem</Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </AIResponse.ActionBar>
      </AIResponse>
    );
  }

  return <GenerateContent />
}`;

export default {
  title: 'Components/AI/AI Response/Generating Content',
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
