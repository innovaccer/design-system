// @ts-nocheck

import * as React from 'react';
import { Title, Subtitle, Subheading, Description, Canvas, PropsProps, ArgsTable } from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { html as beautifyHTML } from 'js-beautify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark, a11yDark, githubGist, dracula, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@/';
import { Button, Card, TabsWrapper, Tab, Heading } from '@/index';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { resetComponents, Story as PureStory } from '@storybook/components';
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

interface DocPageProps {
  title?: string;
  description?: React.ReactNode;
  props?: PropsProps;
  customCode?: string;
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
  filterProps: (val: any, key: string) => {
    if (!val) return false;
    if (val && val.name === 'actionHandler') return false;
    // if(val && typeof val === 'function') return false;
    return true;
  },
  showFunctions: true,
  functionValue: (_fn) => (_) => {},
  // maxInlineAttributesLineLength: 10,
  showDefaultProps: false,
  useBooleanShorthandSyntax: false,
};

const copyCode = (val: string) => navigator.clipboard.writeText(val);

const CopyComp = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        zIndex: 10,
      }}
    >
      <Button
        size="tiny"
        style={{ borderRadius: '0', borderBottomLeftRadius: '4px' }}
        appearance="basic"
        onClick={onClick}
      >
        Copy
      </Button>
    </div>
  );
};

const buttonStyles = {
  borderRadius: '0',
  borderBottomLeftRadius: '4px',
  width: '100%',
  background: 'white',
};

const ShowMoreLessButton = ({ onClick, text = 'More' }) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      position: 'absolute',
      width: '100%',
      bottom: '0',
      zIndex: 10,
    }}
  >
    <Button size="tiny" style={buttonStyles} appearance="basic" onClick={onClick}>
      {`Show ${text}`}
    </Button>
  </div>
);

const getHeight = (shouldShowMore: boolean, showMoreHTML: boolean) => {
  if (shouldShowMore) {
    return showMoreHTML ? '100%' : '250px';
  }
  return '100%';
};

const renderCodeBlock = (val: string) => (
  <>
    <style>
      {`pre {
          margin: 0;
        }`}
    </style>
    <CopyComp onClick={() => copyCode(val)} />
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={true}>
      {val}
    </SyntaxHighlighter>
  </>
);

const getStory = () => {
  const { storyId } = __STORYBOOK_STORY_STORE__.getSelection();
  const story = __STORYBOOK_STORY_STORE__.fromId(storyId);
  return { storyId, story };
};

const getRawPreviewCode = (customCode, comp) => {
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

const StoryComp = (props) => {
  const { customCode, noHtml, noStory, noSandbox, isEmbed } = props;
  const { story, storyId } = getStory();
  const sp = story.parameters;
  // const comp = sp.storySource.source;
  const comp = story.getOriginal()();
  const html = !noHtml ? beautifyHTML(renderToStaticMarkup(comp), beautifyHTMLOptions) : '';

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getRawPreviewCode(customCode, comp));
  const [htmlCode, setHtmlCode] = React.useState<string>(`${html}`);
  const [isExpanded, setIsExpanded] = React.useState(isEmbed);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [shouldShowMore, setShouldShowMore] = React.useState<boolean>(false);
  const codePanel = React.useRef(null);

  const importScope = props.imports;

  const renderHTMLTab = () => {
    if (!noHtml) {
      return <Tab label={'HTML'}>{renderCodeBlock(htmlCode)}</Tab>;
    }
    return <></>;
  };

  const TabsWrap = withLive(({ live, currentTab }) => {
    const { error, element: Element } = live;

    React.useEffect(() => {
      if (!error && currentTab === 1) {
        try {
          const htmlValue = beautifyHTML(renderToStaticMarkup(<Element />), beautifyHTMLOptions);
          setHtmlCode(htmlValue);
        } catch (e) {}
      }
    }, [currentTab]);

    React.useEffect(() => {
      if (codePanel.current?.clientHeight > '250') {
        setShouldShowMore(true);
      }
    }, [codePanel]);

    return null;
  });

  const onChangeCode = React.useCallback((updatedCode) => {
    setJsxCode(updatedCode);
  }, []);

  const actions = [
    {
      title: 'Edit in sandbox',
      onClick: (ev) => {
        ev.preventDefault();
        openSandbox(jsxCode);
      },
      disabled: noSandbox,
    },
  ];

  if (!isEmbed) {
    actions.push({
      title: `${!isExpanded ? 'Show' : 'Hide'} code`,
      onClick: (ev) => {
        setIsExpanded(!isExpanded);
      },
    });
  }

  const imports = React.useMemo(() => ({ ...DS, ...importScope }), []);

  const tabChangeHandler = (tab) => {
    setActiveTab(tab);
    setShouldShowMore(false);
  };

  return (
    <Card shadow={isEmbed ? 'none' : 'light'} className="overflow-hidden">
      <LiveProvider code={jsxCode} scope={imports}>
        <Canvas
          className="my-0"
          withSource="none"
          withToolbar={true}
          isExpanded={isExpanded}
          additionalActions={actions}
        >
          <LivePreview />
        </Canvas>

        <LiveError className="px-7" />

        {isExpanded && (
          <>
            <TabsWrap activeTab={activeTab} />
            <div
              ref={codePanel}
              style={{
                position: 'relative',
                marginBottom: shouldShowMore ? '24px' : '',
                height: getHeight(shouldShowMore, showMore),
              }}
              className="DocPage-editorTabs"
            >
              <TabsWrapper activeTab={activeTab} onTabChange={tabChangeHandler}>
                <Tab label={'React'}>
                  <CopyComp
                    onClick={() => {
                      const editor = document.querySelector('.npm__react-simple-code-editor__textarea');
                      if (editor) copyCode(editor.value);
                    }}
                  />
                  <LiveEditor theme={vsDark} onChange={onChangeCode} />
                </Tab>
                {renderHTMLTab()}
              </TabsWrapper>
            </div>
            {shouldShowMore && (
              <ShowMoreLessButton onClick={() => setShowMore(!showMore)} text={showMore ? 'Less' : 'More'} />
            )}
          </>
        )}
      </LiveProvider>
    </Card>
  );
};

export const docPage = () => {
  const { story, storyId } = getStory();
  const sp = story.parameters;
  const isEmbed = window.location.search.includes('embed=min');
  const isEmbedWithProp = window.location.search.includes('embed=prop');

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
  } = sp.docs.docPage || {};
  const { component: { displayName } = {} } = sp;
  const pageClassnames = classNames({
    DocPage: true,
    'pt-8 pb-8': !(isEmbed || isEmbedWithProp),
  });

  return (
    <div className={pageClassnames}>
      {!isEmbed && !isEmbedWithProp && (
        <>
          <Title> {title || displayName} </Title>
          <Description>{description}</Description>
        </>
      )}

      {!noStory && (
        <StoryComp
          key={storyId}
          customCode={customCode}
          noHtml={noHtml}
          noSandbox={noSandbox}
          imports={imports}
          isEmbed={isEmbed || isEmbedWithProp}
        />
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
