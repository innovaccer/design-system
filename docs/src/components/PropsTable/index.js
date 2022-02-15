import React, { useState, useRef } from 'react';
import '@innovaccer/design-system/css';
import { renderToStaticMarkup } from 'react-dom/server';
import { html as beautifyHTML } from 'js-beautify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import openSandbox from './sandbox.tsx';
import vsDark from 'prism-react-renderer/themes/vsDark';
import generateImports from './generateImports';
import * as DS from '@innovaccer/design-system';
import './card.css';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Icon,
  Toast
} from '@innovaccer/design-system';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  withLive
} from 'react-live';
import './prism.css';

const beautifyHTMLOptions = {
  indent_size: 2,
  wrap_line_length: 0,
  preserve_newlines: true,
  jslint_happy: true,
  end_with_newline: false,
  indent_inner_html: true,
  break_chained_methods: true,
  keep_array_indentation: true,
  good_stuff: true,
  indent_empty_lines: true,
};

const getRawPreviewCode = (customCode, comp) => {
  if (customCode) {
    return `${generateImports(
      customCode,
      DS,
      '@innovaccer/design-system'
    )}

${customCode}
    `;
  }
};

const StoryComp = ({
  componentData,
}) => {
  const testRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [htmlCode, setHtmlCode] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeButton, setActiveButton] = useState('React');
  const [showToast, setShowToast] = useState(false);
  const [jsxCode, setJsxCode] = React.useState(getRawPreviewCode(componentData));

  const TabsWrap = withLive(({ live }) => {
    const { element: Element } = live;
    try {
      const htmlValue = beautifyHTML(renderToStaticMarkup(<Element />), beautifyHTMLOptions);
      setHtmlCode(htmlValue);
    } catch (e) { }
    return null;
  });

  const renderCodeBlock = (val) => (
    <div>
      <style>
        {`pre {
        margin: 0;
        text-align: left;

      }`}
      </style>
      <SyntaxHighlighter
        language='javascript'
        style={vs2015}
        showLineNumbers={true}
      >
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
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  }

  const CopyCode = (props) => {
    const { onClick } = props;
    return (
      <div className='ml-auto d-flex'>
        {activeButton === 'React' &&
          <img
            src="/icons/4691539_codesandbox_icon.svg"
            className='codesandBox-icon cursor-pointer mr-6 align-self-center'
            onClick={(e) => {
              e.preventDefault();
              openSandbox(jsxCode);
            }}
          />
        }
        <Icon
          name='content_copy'
          size={20}
          appearance='white'
          onClick={onClick}
          className='align-self-center cursor-pointer'
        />
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
          <LiveEditor theme={vsDark} />
        </div>
      );
    } else {
      return renderCodeBlock(htmlCode);
    }
  };

  const imports = React.useMemo(() => ({ ...DS }), []);

  return (
    <>
      <div className='pb-8 pt-4 d-flex w-100 m-auto flex-column align-items-center'>
        <LiveProvider code={jsxCode} scope={imports}>
          <Card
            shadow='none'
            className='w-100 overflow-hidden'
          >
            <CardHeader>
              <div className='d-flex justify-content-end'>
                <Button
                  appearance="transparent"
                  aria-label="Zoom In"
                  onClick={() => handleZoomIn()}
                  icon='zoom_in'
                  largeIcon
                />
                <Button
                  onClick={() => handleZoomOut()}
                  icon='zoom_out'
                  appearance='transparent'
                  aria-label="Zoom Out"
                  largeIcon
                ></Button>
              </div>
            </CardHeader>
            <CardBody className='d-flex flex-column align-items-center'>
              <div className='w-100 overflow-x-scroll' ref={testRef}>
                <LivePreview
                  className='p-8 mw-100 mh-100 d-block'
                  style={{ zoom: zoom }}
                />
                <LiveError />
              </div>
              <div className='d-flex justify-content-end w-100 mb-6'>
                <Button
                  appearance='basic'
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Hide code' : 'Show code'}
                </Button>
              </div>
            </CardBody>
          </Card>
          <TabsWrap />
          {isExpanded && (
            <Card
              shadow='none'
              className='w-100 overflow-hidden mt-4 live-editor-card'
            >
              <div className='d-flex px-5 pt-5 pb-4'>
                <Button
                  appearance='basic'
                  onClick={() => setActiveButton('React')}
                  selected={
                    activeButton === 'React'
                      ? true
                      : false
                  }
                  className='mr-3'
                >
                  React
                </Button>
                <Button
                  appearance='basic'
                  onClick={() => setActiveButton('HTML')}
                  selected={
                    activeButton === 'HTML' ? true : false
                  }
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
        {
          showToast &&
          <Toast
            appearance="success"
            title="Copied to clipboard"
            className="position-fixed ml-5 toast"
            onClose={() => setShowToast(false)}
          />
        }
      </div>
    </>
  );
};

export default StoryComp;
