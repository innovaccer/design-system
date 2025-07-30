import React, { useState, useRef } from 'react';
import '@innovaccer/design-system/css';
import { renderToStaticMarkup } from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import openSandbox from './sandbox.tsx';
import { themes } from 'prism-react-renderer';
import generateImports from './generateImports';
import * as DS from '@innovaccer/design-system';
import './card.css';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Card, CardHeader, CardBody, Button, Icon, Tooltip } from '@innovaccer/design-system';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import './prism.css';
import { copyMessage, copyMessageSuccess } from '../../util/constants';
import { useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

const getRawPreviewCode = (customCode, dataProvider) => {
  if (dataProvider) {
    return `// Import components from design system
import { Spinner } from '@innovaccer/design-system';

export default function LoadingComponent() {
  return <div><Spinner /></div>;
}`;
  }

  if (customCode) {
    return customCode;
  }
};

const TabsWrap = withLive(({ live, onUpdate }) => {
  useEffect(() => {
    const { element: Element } = live;
    if (live.element) {
      try {
        const htmlValue = renderToStaticMarkup(<Element />);
        onUpdate(htmlValue);
      } catch (e) {
        console.log(e);
      }
    }
  }, [live.element]);
  return null;
});

const StoryComp = ({ componentData, dataProvider }) => {
  const testRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [htmlCode, setHtmlCode] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeButton, setActiveButton] = useState('React');
  const [jsxCode, setJsxCode] = React.useState(getRawPreviewCode(componentData, dataProvider));
  const [isTooltipActive, setTooltipActive] = useState(false);
  const [tooltipName, setTooltipName] = useState(copyMessage);

  React.useEffect(() => {
    if (dataProvider) {
      dataProvider()
        .then((data) => {
          setJsxCode(getRawPreviewCode(data));
        })
        .catch((err) => {
          setJsxCode(
            `<Message data-test="Docs-error-message" className="my-7" appearance="alert" title="${err}" description="We are working to get it up for you to interact with." />`
          );
        });
    }
  }, []);

  const updateHtml = (htmlValue) => {
    setHtmlCode(htmlValue);
  };

  const renderCodeBlock = (val) => (
    <div>
      <style>
        {`pre {
        margin: 0;
        text-align: left;

      }`}
      </style>
      <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={true}>
        {val}
      </SyntaxHighlighter>
    </div>
  );

  const copyToClipboard = (reactCode, htmlCode) => {
    if (activeButton === 'React') {
      navigator.clipboard.writeText(reactCode);
    } else {
      navigator.clipboard.writeText(htmlCode);
    }
    setTooltipName(copyMessageSuccess);
    setTooltipActive(true);
  };

  const CopyCode = (props) => {
    const { onClick } = props;
    return (
      <div className="ml-auto d-flex">
        {activeButton === 'React' && (
          <Tooltip tooltip="Open in CodeSandbox" position="bottom" on="hover">
            <img
              src="/icons/4691539_codesandbox_icon.svg"
              className="codesandBox-icon cursor-pointer mr-6 align-self-center"
              onClick={(e) => {
                e.preventDefault();
                openSandbox(jsxCode);
              }}
            />
          </Tooltip>
        )}
        <div
          className="align-self-end"
          onMouseLeave={() => {
            setTooltipActive(false);
            setTooltipName(copyMessage);
          }}
        >
          <Tooltip open={isTooltipActive} tooltip={tooltipName} position="bottom">
            <Icon
              name="content_copy"
              size={20}
              appearance="white"
              onClick={onClick}
              className="align-self-center cursor-pointer"
            />
          </Tooltip>
        </div>
      </div>
    );
  };

  const handleZoomIn = () => {
    setZoom(zoom + 0.5);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.5);
  };

  const showLiveEditorContent = () => {
    if (activeButton === 'React') {
      return (
        <div className="px-4" id="react-tab">
          <LiveEditor theme={themes.vsDark} />
        </div>
      );
    } else {
      return renderCodeBlock(htmlCode);
    }
  };

  const imports = React.useMemo(() => ({ ...DS }), []);

  return (
    <>
      <div className="pb-8 pt-4 d-flex w-100 m-auto flex-column align-items-center">
        <ErrorBoundary>
          <LiveProvider code={jsxCode ? jsxCode.replaceAll('action(', '() => console.log(') : ''} scope={imports}>
            <Card shadow="none" className="w-100 overflow-hidden">
              <CardHeader>
                <div className="d-flex justify-content-end">
                  <Button
                    appearance="transparent"
                    aria-label="Zoom In"
                    onClick={() => handleZoomIn()}
                    icon="zoom_in"
                    largeIcon
                  />
                  <Button
                    onClick={() => handleZoomOut()}
                    icon="zoom_out"
                    appearance="transparent"
                    aria-label="Zoom Out"
                    largeIcon
                  ></Button>
                </div>
              </CardHeader>
              <CardBody className="d-flex flex-column align-items-center">
                <div className="w-100 overflow-scroll" ref={testRef}>
                  <LivePreview
                    data-test="Docs-liveProvider"
                    className="p-8 mh-100 d-block live-provider mb-3"
                    style={{ zoom: zoom }}
                  />
                  <LiveError />
                </div>
                <div className="d-flex justify-content-end w-100 mb-6">
                  <Button appearance="basic" onClick={() => setIsExpanded(!isExpanded)} size="tiny">
                    {isExpanded ? 'Hide code' : 'Show code'}
                  </Button>
                </div>
              </CardBody>
            </Card>
            <TabsWrap onUpdate={updateHtml} />
            {isExpanded && (
              <Card shadow="none" className="w-100 overflow-hidden mt-4 live-editor-card">
                <div className="d-flex px-5 pt-5 pb-4">
                  <Button
                    appearance="basic"
                    onClick={() => setActiveButton('React')}
                    selected={activeButton === 'React' ? true : false}
                    className="mr-3"
                  >
                    React
                  </Button>
                  <Button
                    appearance="basic"
                    onClick={() => setActiveButton('HTML')}
                    selected={activeButton === 'HTML' ? true : false}
                  >
                    HTML
                  </Button>
                  <CopyCode
                    onClick={() => {
                      copyToClipboard(jsxCode, htmlCode);
                    }}
                  />
                </div>

                {showLiveEditorContent()}
              </Card>
            )}
          </LiveProvider>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default StoryComp;
