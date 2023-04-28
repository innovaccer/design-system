import * as React from 'react';
import { Description, ArgsTable } from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { html as beautifyHTML } from 'js-beautify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@';
import { Button, Card, Heading, CardHeader, Row, Column, Tooltip } from '@/index';
import vsDark from 'prism-react-renderer/themes/vsDark';
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

const beautifyJSXOptions = {
  ...beautifyHTMLOptions,
  e4x: true,
};

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

const getStory = () => {
  const { storyId } = __STORYBOOK_STORY_STORE__.getSelection();
  const story = __STORYBOOK_STORY_STORE__.fromId(storyId);
  return { storyId, story };
};

const getRawPreviewCode = (customCode: string, comp: React.ReactNode) => {
  if (customCode) {
    return `${generateImports(customCode, componentLib, '@innovaccer/design-system')}
${customCode}
    `;
  }
  const jsx = `${beautifyHTML(reactElementToJSXString(comp, JSXtoStringOptions), beautifyJSXOptions)}`;
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
}) => {
  const { customCode, noHtml, noSandbox } = props;
  const { story } = getStory();
  // const comp = sp.storySource.source;
  const comp = story.originalStoryFn();
  const html = !noHtml ? beautifyHTML(renderToStaticMarkup(comp), beautifyHTMLOptions) : '';

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
          const htmlValue = beautifyHTML(renderToStaticMarkup(<Element />), beautifyHTMLOptions);
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

  const onChangeCode = React.useCallback((updatedCode) => {
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

            <div className="px-7 pb-8" style={{ overflow: 'auto', zoom: zoom, width: '100%' }}>
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
                      <LiveEditor theme={vsDark} onChange={onChangeCode} />
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

export const docPage = () => {
  const { story, storyId } = getStory();
  const sp = story.parameters;
  const isEmbed = window.location.search.includes('embed=min');
  const isEmbedWithProp = window.location.search.includes('embed=prop');
  const isEmbedOnlyProp = window.location.search.includes('embed=prop-table');

  const {
    title,
    description,
    props: propsAttr,
    customCode,
    noHtml,
    noStory,
    noProps = isEmbed,
    noSandbox,
    imports,
    a11yProps,
  } = sp.docs.docPage || {};
  const { component: { displayName = '' } = {} } = story;
  const pageClassnames = classNames({
    DocPage: true,
    'pt-8 pb-8': !(isEmbed || isEmbedWithProp),
  });
  const docPageTitle: string = title || displayName;

  return (
    <div className={pageClassnames}>
      {!isEmbed && !isEmbedWithProp && (
        <>
          <Heading size="xl" className="mb-5">
            {docPageTitle}
          </Heading>
          <Description>{description}</Description>
        </>
      )}

      {!noStory && !isEmbedOnlyProp && (
        <StoryComp
          key={storyId}
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
          <Description>{a11yProps}</Description>
        </>
      )}

      {!noProps && (
        <>
          <br />
          <br />
          <Heading appearance="subtle">Prop table</Heading>
          <ArgsTable {...propsAttr} />
        </>
      )}
    </div>
  );
};

export default docPage;
