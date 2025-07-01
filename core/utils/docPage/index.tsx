import * as React from 'react';
import { Controls, Unstyled, useOf } from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@';
import { Button, Card, Heading, CardHeader, Row, Column, Tooltip, Text, Badge } from '@/index';
import { themes } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import openSandbox from './sandbox';
import generateImports from './generateImports';
import * as componentLib from '@/index';
import classNames from 'classnames';

export interface Example {
  title: string;
  description?: string;
  imports: string[];
  component: React.ReactNode;
}

const JSXtoStringOptions = {
  filterProps: (val: any) => {
    if (!val) return false;
    if (val && val.name === 'actionHandler') return false;
    // if(val && typeof val === 'function') return false;
    return true;
  },
  showFunctions: true,
  functionValue: () => () => {
    return;
  },
  // maxInlineAttributesLineLength: 10,
  showDefaultProps: false,
  useBooleanShorthandSyntax: false,
};

const copyCode = (val: string) => navigator.clipboard.writeText(val);

type OnClickType = (e: React.MouseEvent) => void;

const CopyComp = (props: { onClick: OnClickType }) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: '16px',
        top: '10px',
        zIndex: 10,
      }}
    >
      <Tooltip tooltip="Copy code">
        <Button size="tiny" appearance="basic" onClick={onClick}>
          Copy
        </Button>
      </Tooltip>
    </div>
  );
};

const buttonStyles = {
  borderRadius: '0',
  borderBottomLeftRadius: '4px',
};

const ShowMoreLessButton = ({ onClick, text = 'More' }: { onClick: OnClickType; text: string }) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      width: '100%',
      bottom: '0',
      zIndex: 10,
    }}
  >
    <Button size="tiny" expanded={true} onClick={onClick} style={buttonStyles}>
      {`Show ${text}`}
    </Button>
  </div>
);

const getHeight = (shouldShowMore: boolean, showMoreHTML: boolean) => {
  if (shouldShowMore) {
    return showMoreHTML ? '100%' : '450px';
  }
  return '100%';
};

const renderCodeBlock = (val: string, shouldShowMore: boolean, showMoreHTML: boolean) => (
  <>
    <style>
      {`pre {
          margin: 0;
          overflow: auto;
          height: ${getHeight(shouldShowMore, showMoreHTML)};
        }`}
    </style>
    <CopyComp onClick={() => copyCode(val)} />
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={false}>
      {val}
    </SyntaxHighlighter>
  </>
);

const getRawPreviewCode = (customCode: string, comp: React.ReactNode) => {
  if (customCode) {
    return `${generateImports(customCode, componentLib, '@innovaccer/design-system')}
${customCode}
    `;
  }
  const jsx = reactElementToJSXString(comp, JSXtoStringOptions);
  const importString = generateImports(jsx, componentLib, '@innovaccer/design-system');

  const code = `
${importString}
() => {
  return(
${jsx
  .split('\n')
  .map((l) => `    ${l}`)
  .join('\n')}
  );
}
`;
  return code;
};

const StoryComp = (props: {
  noHtml: boolean;
  customCode: string;
  noSandbox: boolean;
  isEmbed: boolean;
  imports: string[];
  story: any;
}) => {
  const { customCode, noHtml, noSandbox, story } = props;
  // const { story } = getStory();
  // const comp = sp.storySource.source;
  const comp = story.originalStoryFn();
  const html = !noHtml ? renderToStaticMarkup(comp) : '';

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getRawPreviewCode(customCode, comp));
  const [htmlCode, setHtmlCode] = React.useState<string>(`${html}`);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [shouldShowMore, setShouldShowMore] = React.useState<boolean>(false);
  const [zoom, setZoom] = React.useState(1);
  const [editorClassNames, setEditorClassNames] = React.useState<string>('fade-out');

  const importScope = props.imports;

  const codePanel = React.useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom(zoom * 1.25);
  };

  const handleZoomOut = () => {
    setZoom(zoom * 0.8);
  };

  React.useEffect(() => {
    if (isExpanded) {
      setEditorClassNames('fade-in');
    } else {
      setEditorClassNames('');
    }
  }, [isExpanded]);

  const TabsWrap = withLive<{ live?: any; activeTab: number }>(({ live, activeTab }) => {
    const { error, element: Element } = live;

    React.useEffect(() => {
      if (!error && activeTab === 1) {
        try {
          const htmlValue = renderToStaticMarkup(<Element />);
          setHtmlCode(htmlValue);
        } catch (e) {
          return;
        }
      }
    }, [activeTab]);

    React.useEffect(() => {
      if (codePanel.current?.clientHeight && codePanel.current?.clientHeight > 450) {
        setShouldShowMore(true);
      }
    }, [codePanel]);

    return null;
  });

  const onChangeCode = React.useCallback((updatedCode: string) => {
    setJsxCode(updatedCode);
  }, []);

  const imports = React.useMemo(() => ({ ...DS, ...importScope }), []);

  const tabChangeHandler = (tab: number) => {
    setActiveTab(tab);
    setShouldShowMore(false);
  };

  return (
    <LiveProvider code={jsxCode} scope={imports}>
      <Row>
        <Column size={12}>
          <Card shadow="none" className="overflow-hidden">
            <CardHeader>
              <div className="d-flex justify-content-end">
                <Button appearance="transparent" aria-label="Zoom In" onClick={handleZoomIn} icon="zoom_in" largeIcon />
                <Button
                  onClick={handleZoomOut}
                  icon="zoom_out"
                  appearance="transparent"
                  aria-label="Zoom Out"
                  largeIcon
                ></Button>
                <Button
                  onClick={() => setZoom(1)}
                  icon="restart_alt"
                  appearance="transparent"
                  aria-label="Reset Zoom"
                  largeIcon
                ></Button>
              </div>
            </CardHeader>

            <div className="px-7 pb-8 pt-6" style={{ overflow: 'auto', zoom: zoom }}>
              <LivePreview />
              <LiveError className="m-0" />
            </div>
          </Card>
        </Column>
        <Column size={12} className="d-flex justify-content-end py-6">
          <Row>
            {isExpanded && (
              <Column size={6} className={`d-flex ${editorClassNames}`}>
                <Button selected={activeTab === 0} onClick={() => tabChangeHandler(0)} size="tiny">
                  React
                </Button>
                <Button selected={activeTab === 1} onClick={() => tabChangeHandler(1)} size="tiny" className="ml-4">
                  HTML
                </Button>
              </Column>
            )}
            <Column size={isExpanded ? 6 : 12} className="d-flex justify-content-end">
              <Button
                onClick={(ev: React.MouseEvent) => {
                  ev.preventDefault();
                  openSandbox(jsxCode);
                }}
                className="ml-4"
                size="tiny"
                aria-label="Open code sandbox"
                disabled={noSandbox}
              >
                Edit in sandbox
              </Button>
              <Button style={{ width: '86px' }} className="ml-4" size="tiny" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Hide code' : 'Show code'}
              </Button>
            </Column>
          </Row>
        </Column>
        {isExpanded && (
          <Column size={12} className={editorClassNames}>
            <Card shadow="none">
              <TabsWrap activeTab={activeTab} />
              <div
                ref={codePanel}
                style={{
                  position: 'relative',
                  // marginBottom: shouldShowMore ? '24px' : '',
                  overflow: 'none',
                }}
                className="DocPage-editorTabs"
              >
                <div>
                  {activeTab == 0 && (
                    <div
                      className="overflow-auto"
                      style={{ height: getHeight(shouldShowMore, showMore), background: 'rgb(30, 30, 30)' }}
                    >
                      <CopyComp
                        onClick={() => {
                          const editor = document.querySelector(
                            '.npm__react-simple-code-editor__textarea'
                          ) as HTMLTextAreaElement;
                          if (editor) copyCode(editor.value);
                        }}
                      />
                      <LiveEditor theme={themes.vsDark} onChange={onChangeCode} />
                    </div>
                  )}
                  {activeTab == 1 && !noHtml && renderCodeBlock(htmlCode, shouldShowMore, showMore)}
                </div>
              </div>
              {shouldShowMore && (
                <ShowMoreLessButton onClick={() => setShowMore(!showMore)} text={showMore ? 'Less' : 'More'} />
              )}
            </Card>
          </Column>
        )}
      </Row>
    </LiveProvider>
  );
};

export const docPage = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  let story;
  switch (resolvedOf.type) {
    case 'story': {
      console.log('resolvedOf.story', resolvedOf.story);
      story = resolvedOf.story;
      break;
    }
    case 'meta': {
      console.log('resolvedOf.meta', resolvedOf.preparedMeta);
      story = resolvedOf.preparedMeta;
      break;
    }
  }

  console.log('story', story);
  const sp = story.parameters;
  const isEmbed = window.location.search.includes('embed=min');
  const isEmbedWithProp = window.location.search.includes('embed=prop');
  const isEmbedOnlyProp = window.location.search.includes('embed=prop-table');

  const {
    title,
    description,
    customCode,
    noHtml,
    noStory,
    noProps = isEmbed,
    noSandbox,
    imports,
    a11yProps,
    propDescription,
    sandboxTitle,
    isDeprecated,
  } = sp.docs.docPage || {};
  const { component: { displayName = '' } = {} } = story;
  const pageClassnames = classNames({
    DocPage: true,
    'pt-8 pb-8': !(isEmbed || isEmbedWithProp),
  });
  const docPageTitle: string = title || displayName;

  return (
    <Unstyled>
      <div className={pageClassnames}>
        {!isEmbed && !isEmbedWithProp && (
          <>
            <div className="d-flex align-items-center mb-5">
              <Heading size="xl">{docPageTitle}</Heading>
              {isDeprecated && (
                <Badge appearance="alert" subtle={true} className="ml-4">
                  Deprecated
                </Badge>
              )}
            </div>
            <Text>{description}</Text>
          </>
        )}

        {!noStory && !isEmbedOnlyProp && (
          <StoryComp
            story={story}
            key={story.id}
            customCode={customCode}
            noHtml={noHtml}
            noSandbox={noSandbox}
            imports={imports}
            isEmbed={isEmbed || isEmbedWithProp}
          />
        )}

        {a11yProps && (
          <>
            <br />
            <br />
            <Heading appearance="subtle">Accessibility</Heading>
            <Text>{a11yProps}</Text>
          </>
        )}

        {!noProps && (
          <>
            <br />
            <br />
            <Heading appearance="subtle">Prop table</Heading>
            <Controls />
            {propDescription && <Text weight="strong">{propDescription}</Text>}
          </>
        )}

        {!!sandboxTitle && (
          <div className="border-right" style={{ borderRadius: '4px' }}>
            <iframe
              src={`https://codesandbox.io/embed/${sandboxTitle}?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview`}
              className="w-100 vh-100 overflow-hidden"
              style={{ border: '4px', borderRadius: '4px' }}
              title={sandboxTitle}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        )}
      </div>
    </Unstyled>
  );
};

export default docPage;
